const { test, expect } =
  require('@playwright/test');
  require('dotenv').config();

test('WIOA Out of Shool Youth', async ({ page }) => {
  test.setTimeout(15 * 60 * 1000); // long scenario loops + slowMo exceed the default 30s test timeout

  await page.goto(process.env.WYO_OLDDEV_LOGIN); // DEV
  //await page.goto(process.env.WYO_PPP_LOGIN);    // PPP
  /////////// Login for Admin///////////
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_WYO_EMAIL); 
  await page.getByRole('textbox', { name: 'Password' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OLD_DEV_PASS); // DEV and New DEV
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);  // PPP
  
  await page.getByRole('button', { name: 'Login' }).click();
  //login//
  
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  //await page.pause(); // temporarily disabled for automated verification run
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).click(); 
  await page.getByRole('tab', { name: 'Programs Overview' }).click();
  await page.waitForLoadState('networkidle').catch(() => {}); // let the program-cards fetch (can be a long list for this individual) actually finish before checking for a draft

  // "Application actions" only appears on a program card in "Application Draft" status - a wizard
  // session that was saved mid-way (e.g. an interrupted/failed test run's "Save & Close"). Cards in
  // "Application Never Enrolled" status (the normal end state after closing a draft, or after the
  // initial "Initiate an Application" step) have no such control and this button never appears for
  // them - so only act when a draft is actually present, instead of hanging waiting for a button
  // that may not exist.
  // This individual can accumulate a long list of past WIOA program cards (one per prior test run),
  // so the "Programs Overview" tab can take noticeably longer than a few seconds to fetch and render
  // all of them. locator.isVisible() does NOT poll/wait despite accepting a `timeout` option - it
  // only checks the current DOM state once and returns immediately - so passing a bigger timeout to
  // it never actually helped here; it kept reporting a false "no draft" negative while the card list
  // was still loading, silently leaving a real draft in place to block the next run. waitFor() is the
  // auto-retrying equivalent, matching the pattern already used above for the individual's cell.
  const applicationActionsButton = page.getByRole('button', { name: 'Application actions' });
  const hasDraft = await applicationActionsButton.first()
    .waitFor({ state: 'visible', timeout: 20000 })
    .then(() => true)
    .catch(() => false);

  if (hasDraft) {
    await applicationActionsButton.first().click();
    await page.getByRole('menuitem', { name: 'Closed - Never Enrolled' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();
  } else {
    console.log('No draft WIOA application found for WP Check - nothing to close.');
  }
  //await page.pause(); // temporarily disabled for automated verification run
});


  
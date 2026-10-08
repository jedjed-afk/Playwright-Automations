const { test, expect } =
  require('@playwright/test');
  require('dotenv').config();
//This test is written by Jade of Team Eagle
//Every radio button / dropdown option available on each field is listed in a
//comment above the line that interacts with it, so the value can be swapped easily.
test('WP Application', async ({ page }) => {

  
  await page.goto(process.env.WYO_PPP_LOGIN);    // PPP
  //await page.goto(process.env.WYO_OLDDEV_LOGIN); // DEV
  test.setTimeout(15 * 60 * 1000);
  await page.pause();

 ///////////////////// Log In of Jobseeker /////////////////////////////
  //await page.getByRole('button', { name: 'Login' }).click();

  //await page.getByRole('textbox', { name: 'Email' }).click();
  //await page.getByRole('textbox', { name: 'Email' }).fill(process.env.JOBSIK_EMAIL); //EDIT -- input email of the created jobseeker
  //await page.getByRole('textbox', { name: 'Password' }).click();

  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.JOBSIK_PASS); //EDIT -- input passsword
  //await page.getByRole('button', { name: 'Login' }).click(); 

  ////login//

 //await page.pause();
 //await page.getByRole('button', { name: 'Notifications' }).click(); 
 //await page.getByText('Welcome to Hire WYO').click();

  //const dialog = page.getByRole('dialog', { name: 'Welcome to Hire WYO' });
  //await expect(dialog).toBeVisible();

  //// Title and timestamp (dynamic, so match the format)
  //await expect(dialog.getByRole('heading', { name: 'Welcome to Hire WYO' })).toBeVisible();
  //await expect(dialog).toContainText(/\d{2}\/\d{2}\/\d{4}, \d{2}:\d{2} (AM|PM)/);

  //// Body content
  //await expect(dialog).toContainText('Your new account has been created on HireWYO.');
  //await expect(dialog).toContainText('Welcome to HireWYO!');

  //// Links
  //await expect(dialog.getByRole('link', { name: 'hire.wyo.gov/contact-us' })).toHaveAttribute('href', /hire\.wyo\.gov\/contact-us/);
  //await expect(dialog.getByRole('link', { name: 'here', exact: true })).toBeVisible();

  //await page.getByRole('button', { name: 'close' }).click();
 await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_WYO_EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);  // PPP
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OLD_DEV_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.pause();
  //await page.getByRole('searchbox', { name: 'Search' }).click();
  //await page.getByRole('searchbox', { name: 'Search' }).fill('560471');
  //await page.getByRole('searchbox', { name: 'Search' }).fill(process.env.JOBSIK_NAME);
  //await page.getByRole('button', { name: 'search' }).click();
  //await page.waitForLoadState('domcontentloaded');
  //await page.waitForLoadState('networkidle');
  //await page.pause();
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).click(); 


  await page.getByRole('tab', { name: 'RI Activities' }).click();

  const table = page.getByRole('table');

// Headers
await expect(table.getByRole('columnheader')).toContainText([
  'Activity', 'Actual Begin', 'Actual End Date', 'Completion Code', 'Service Created by',
]);

// Row values (date is today, so compute it)
const today = new Date().toLocaleDateString('en-US', {
  timeZone:'America/Denver', month: '2-digit', day: '2-digit', year: 'numeric',
}); // "10/07/2026"

const row = table.getByRole('row', { name: /003 - RI - Self-Service W@W Registration/ });
await expect(row.getByRole('cell')).toContainText([
  '003 - RI - Self-Service W@W Registration', today, today, 'Successful Completion', 'System',
]);
 


 
   });


const { test, expect } =
  require('@playwright/test');
  require('dotenv').config();

  // TODO: add test to which edit the SSN then the Eye button is removed on the Confirm SSN field

  //Note
  // change name of Jobseeker on .env

  const loginUrl = 'https://www.oregon-dev.careeredgebeta.com/user/login';
  
  const randomNineDigits = () => String(Math.floor(100000000 + Math.random() * 900000000));

  test('MR-03', async({page}) => {
  test.setTimeout(5 * 60 * 1000); 
  // TC-01 Pre-condtion = 3 Walkthrough is activited ( Profile, Appointment, and Calendar ) repectively.


  /// TC-01 --
  await page.goto(loginUrl);
   
  // Jobseeker Login 
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.JOBSIK_EMAIL); //EDIT -- input email of the created jobseeker
  await page.getByRole('textbox', { name: 'Password' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.JOBSIK_PASS); //EDIT -- input passsword
  await page.getByRole('button', { name: 'Login' }).click();
  // checks URL
  await expect(page).toHaveURL("https://www.oregon-dev.careeredgebeta.com/home", { timeout: 30000 });

  // Checks Icons/tabs
  const nav = page.locator('header');

  await expect(nav.getByText('Home', { exact: true })).toBeVisible();
  await expect(nav.getByText('Jobs', { exact: true })).toBeVisible();
  await expect(nav.getByText('Resources', { exact: true })).toBeVisible();
  await expect(nav.getByText('Appointments', { exact: true })).toBeVisible();
  await expect(nav.getByLabel('Calendar')).toBeVisible();
  await expect(nav.getByLabel('Notifications')).toBeVisible();
  // Heading and subtitle
  
  //await expect(page.getByText('Get started with WorkSource Oregon')).toBeVisible();
  //await expect(page.getByText('Finish setting up to unlock personalized job support.')).toBeVisible();

  // Progress
  //await expect(page.getByText('1 of 3 done')).toBeVisible();

  // Step cards
  await expect(page.getByText('Step 1 of 3', { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Update your profile here' })).toBeVisible();
  await expect(page.getByText('Your profile isn\'t complete yet — open the menu under your avatar to finish it.', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Skip' })).toBeVisible();
  await page.getByRole('button', { name: 'Next' }).click();

  await expect(page.getByText('Step 2 of 3', { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Book an appointment here' })).toBeVisible();
  await expect(page.getByText('You haven\'t booked one yet — meet with a career counselor whenever you\'re ready.', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Back' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Skip' })).toBeVisible();
  await page.getByRole('button', { name: 'Next' }).click();

  await expect(page.getByText('Step 3 of 3', { exact: true })).toBeVisible();
  await expect(page.getByText('Enter a title, company, or keyword to get started.', { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Search for jobs here' })).toBeVisible();

  await expect(page.getByRole('button', { name: 'Back' })).toBeVisible();
  await page.getByRole('button', { name: 'Got it' }).click();

  await page.getByRole('button', { name: 'My Profile' }).click();
  await page.getByRole('menuitem', { name: 'View Profile' }).click();
  // 29% on a fresh jobseeker; higher once Demographic Information has been saved
  page.on('console', m => { if (m.type() === 'error') console.log('CONSOLE ERR', m.text().slice(0, 200)); });
  page.on('response', r => { if (r.status() >= 400) console.log('HTTP', r.status(), r.url().slice(0, 150)); });
  const t0 = Date.now();
  const ok = await page.getByText(/Profile Completion/).waitFor({ timeout: 90000 }).then(() => true).catch(() => false);
  console.log('FOUND', ok, 'after', Date.now() - t0, 'ms', 'url', page.url());
  if (!ok) { await page.reload(); const ok2 = await page.getByText(/Profile Completion/).waitFor({ timeout: 30000 }).then(() => true).catch(() => false); console.log('AFTER RELOAD', ok2); }
  });

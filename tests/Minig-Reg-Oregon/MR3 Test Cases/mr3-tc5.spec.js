const { test, expect } =
  require('@playwright/test');
  require('dotenv').config();

  // TODO: add test to which edit the SSN then the Eye button is removed on the Confirm SSN field
  
  // Test Case 5
  
  // Pre-Condition
  // The Jobseeker have completed Profile Tiles or mr3-tc-1-2-4.spec.js as passed testing
  // The idea is that the first walkthtough condition have been met since profile is at 100%


  //Note
  // change name of Jobseeker on .env

  const loginUrl = 'https://www.oregon-dev.careeredgebeta.com/user/login';
  
  const randomNineDigits = () => String(Math.floor(100000000 + Math.random() * 900000000));



  test('MR-03', async({page}) => {
  test.setTimeout(5 * 60 * 1000); 


  await page.goto(loginUrl);
   
  // Jobseeker Login 
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.JOBSIK_EMAIL); //EDIT -- input email of the created jobseeker
  await page.getByRole('textbox', { name: 'Password' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.JOBSIK_PASS); //EDIT -- input passsword
  await page.getByRole('button', { name: 'Login' }).click();
  await page.pause()
    await expect(page.getByText('Step 1 of 2', { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Book an appointment here' })).toBeVisible();
  await expect(page.getByText('You haven\'t booked one yet — meet with a career counselor whenever you\'re ready.', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Next' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Skip' })).toBeVisible();
  await page.getByRole('button', { name: 'Next' }).click();


  await expect(page.getByText('Step 2 of 2', { exact: true })).toBeVisible();
  await expect(page.getByText('Enter a title, company, or keyword to get started.', { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Search for jobs here' })).toBeVisible();

  await expect(page.getByRole('button', { name: 'Back' })).toBeVisible();
  await page.getByRole('button', { name: 'Got it' }).click();
  await page.pause();
  

  await page.getByRole('combobox', { name: 'Job Title, Company, Keywords' }).click();
  await page.getByRole('combobox', { name: 'Job Title, Company, Keywords' }).fill('test');
  await page.getByRole('button', { name: 'Search Jobs' }).click();


  });
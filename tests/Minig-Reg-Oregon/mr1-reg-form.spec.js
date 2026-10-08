const { test, expect } =
  require('@playwright/test');
  require('dotenv').config();

  // TODO: add test to which edit the SSN then the Eye button is removed on the Confirm SSN field

  //Note
  // Test Cases 10, 11, and 17 are separated test as they create jobseeker
  // To test them change the email and SSN for each Test Cases
  // add test.only on every test('title' , async) line

  const registrationUrl = 'https://www.oregon-dev.careeredgebeta.com/employer-jobseeker/job-seeker/registration';
  
  const newEmail = () => `ajregunay+js${Date.now()}@careerteam.com`;

  test('Mini Registration Form', async ({page}) => {
  test.setTimeout(15 * 60 * 1000);

  await page.goto(registrationUrl);
  
   // TC1 - Missing First Name
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Last Name');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('firstjobseeker@email.com');
  await page.getByRole('textbox', { name: 'Password * Must contain at' }).click();
  await page.getByRole('textbox', { name: 'Password * Must contain at' }).fill('High_lowers007!');
  await page.getByRole('textbox', { name: 'Confirm Password *' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('High_lowers007!');
  await page.locator('input[name="data[basicInfo.ssn]"]').click();
  await page.locator('input[name="data[basicInfo.ssn]"]').fill('111111111');
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).click();
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).fill('111111111');
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).click();
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).fill('11111');
  const dob = page.getByRole('textbox', { name: 'Date of Birth *' });
  await dob.click();
  await dob.pressSequentially('09222010', { delay: 50 });
  await page.keyboard.press('Tab');
  await page.locator('[class~="formio-component-eduInfo.typeOfNationalFarmworker"] .choices').click();
  await page.getByRole('option', { name: 'No' }).click();
  await page.locator('[class~="formio-component-addInfo.veteranStatus"] .choices').click();
  await page.getByRole('option', { name: 'No' }).click();
  await page.getByRole('button', { name: 'Create Account button. Click' }).click();
  await expect(page.locator('div.form-text.error').filter({ hasText: /^First Name is required$/ })).toBeVisible();
 
  // TC2 - Missing Last Name
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('First Name');
  await page.getByRole('textbox', { name: 'Last Name *' }).clear();
  await page.getByRole('button', { name: 'Create Account button. Click' }).click();
  await expect(page.locator('div.form-text.error').filter({ hasText: /^Last Name is required$/ })).toBeVisible();
 
  // TC3 - Missing Email
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Last Name');
  await page.getByRole('textbox', { name: 'Email *' }).clear();
  await page.getByRole('button', { name: 'Create Account button. Click' }).click();
  await expect(page.locator('div.form-text.error').filter({ hasText: /^Email is required$/ })).toBeVisible();
 
  // TC4 - Missing Password
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('firstjobseeker@email.com');
  await page.getByRole('textbox', { name: 'Password * Must contain at' }).clear();
  await page.getByRole('button', { name: 'Create Account button. Click' }).click();
  await expect(page.locator('div.form-text.error').filter({ hasText: /^Password is required$/ })).toBeVisible();
 
  // TC5 - Missing Zip Code
  await page.getByRole('textbox', { name: 'Password * Must contain at' }).click();
  await page.getByRole('textbox', { name: 'Password * Must contain at' }).fill('High_lowers007!');
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).clear();
  await page.getByRole('button', { name: 'Create Account button. Click' }).click();
  await expect(page.locator('div.form-text.error').filter({ hasText: /^Zip Code is required$/ })).toBeVisible();
 
  // TC6 - Missing Date of Birth
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).click();
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).fill('11111');
  await page.getByRole('textbox', { name: 'Date of Birth *' }).clear();
  await page.keyboard.press('Tab');
  await page.getByRole('button', { name: 'Create Account button. Click' }).click();
  await expect(page.locator('div.form-text.error').filter({ hasText: /^Date of Birth is required$/ })).toBeVisible();
 
  // TC7 - Missing MSFW Designation
  // Dropdowns can't be cleared like textboxes, so reload and skip MSFW
  await page.reload();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('First Name');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Last Name');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('firstjobseeker@email.com');
  await page.getByRole('textbox', { name: 'Password * Must contain at' }).click();
  await page.getByRole('textbox', { name: 'Password * Must contain at' }).fill('High_lowers007!');
  await page.getByRole('textbox', { name: 'Confirm Password *' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('High_lowers007!');
  await page.locator('input[name="data[basicInfo.ssn]"]').click();
  await page.locator('input[name="data[basicInfo.ssn]"]').fill('111111111');
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).click();
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).fill('111111111');
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).click();
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).fill('11111');
  await dob.click();
  await dob.pressSequentially('09222010', { delay: 50 });
  await page.keyboard.press('Tab');
  await page.locator('[class~="formio-component-addInfo.veteranStatus"] .choices').click();
  await page.getByRole('option', { name: 'No' }).click();
  await page.getByRole('button', { name: 'Create Account button. Click' }).click();
  await expect(page.locator('div.form-text.error').filter({ hasText: /^MSFW Designation is required$/ })).toBeVisible();
 
  // TC8 - Missing Veteran / Priority Service
  // Reload again and skip Veteran / Priority Service
  await page.reload();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('First Name');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Last Name');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('firstjobseeker@email.com');
  await page.getByRole('textbox', { name: 'Password * Must contain at' }).click();
  await page.getByRole('textbox', { name: 'Password * Must contain at' }).fill('High_lowers007!');
  await page.getByRole('textbox', { name: 'Confirm Password *' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('High_lowers007!');
  await page.locator('input[name="data[basicInfo.ssn]"]').click();
  await page.locator('input[name="data[basicInfo.ssn]"]').fill('111111111');
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).click();
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).fill('111111111');
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).click();
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).fill('11111');
  await dob.click();
  await dob.pressSequentially('09222010', { delay: 50 });
  await page.keyboard.press('Tab');
  await page.locator('[class~="formio-component-eduInfo.typeOfNationalFarmworker"] .choices').click();
  await page.getByRole('option', { name: 'No' }).click();
  await page.getByRole('button', { name: 'Create Account button. Click' }).click();
  await expect(page.locator('div.form-text.error').filter({ hasText: /^Veteran \/ Priority Service is required$/ })).toBeVisible();
 
  // TC9 - Confirm SSN appears and becomes required after entering a digit in SSN
  await page.reload();
  await expect(page.getByRole('textbox', { name: 'Confirm Social Security' })).toBeHidden();
  await page.locator('input[name="data[basicInfo.ssn]"]').click();
  await page.locator('input[name="data[basicInfo.ssn]"]').fill('1');
  await expect(page.getByRole('textbox', { name: 'Confirm Social Security' })).toBeVisible();
  // The "*" is rendered via CSS ::after on labels with the field-required class
  await expect(page.locator('label', { hasText: 'Confirm Social Security' })).toHaveClass(/field-required/);
  await expect(page.getByRole('textbox', { name: 'Confirm Social Security' })).toHaveAttribute('aria-required', 'true');

  // TC12 - Registration rejected when SSN has fewer than 9 digits
  await page.reload();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('First Name');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Last Name');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('ajregunay+one@careerteam.com');
  await page.getByRole('textbox', { name: 'Password * Must contain at' }).click();
  await page.getByRole('textbox', { name: 'Password * Must contain at' }).fill('High_lowers007!');
  await page.getByRole('textbox', { name: 'Confirm Password *' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('High_lowers007!');
  await page.locator('input[name="data[basicInfo.ssn]"]').click();
  await page.locator('input[name="data[basicInfo.ssn]"]').fill('12345');
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).click();
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).fill('12345');
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).click();
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).fill('11111');
  await dob.click();
  await dob.pressSequentially('09222010', { delay: 50 });
  await page.keyboard.press('Tab');
  await page.locator('[class~="formio-component-eduInfo.typeOfNationalFarmworker"] .choices').click();
  await page.getByRole('option', { name: 'No' }).click();
  await page.locator('[class~="formio-component-addInfo.veteranStatus"] .choices').click();
  await page.getByRole('option', { name: 'No' }).click();
  await page.getByRole('button', { name: 'Create Account button. Click' }).click();
  await expect(page.locator('div.form-text.error').filter({ hasText: /Social Security Number.*must have at least 9 characters/i }).first()).toBeVisible();
  await expect(page).toHaveURL(/registration/);
 
  // TC13 - Registration rejected when SSN and Confirm SSN do not match
  await page.locator('input[name="data[basicInfo.ssn]"]').click();
  await page.locator('input[name="data[basicInfo.ssn]"]').fill('123456789');
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).click();
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).fill('987654321');
  await page.getByRole('button', { name: 'Create Account button. Click' }).click();
  await expect(page.locator('div.form-text.error').filter({ hasText: /SSN entries don.t match/i })).toBeVisible();
  await expect(page).toHaveURL(/registration/);
 
  // TC14 - SSN tooltip displays explanatory text
  await page.locator('.formio-component').filter({ has: page.locator('input[name="data[basicInfo.ssn]"]') }).last().locator('[ref="tooltip"]').hover();
  await expect(page.locator('.tippy-content, [role="tooltip"]').filter({ hasText: 'Providing your SSN lets us verify your identity and determine eligibility for certain workforce services faster.' }).first()).toBeVisible();
 
  // TC15 - Password must meet standard strength rules
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).click();
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).fill('123456789');
  await page.getByRole('textbox', { name: 'Password * Must contain at' }).click();
  await page.getByRole('textbox', { name: 'Password * Must contain at' }).fill('abc');
  await page.getByRole('textbox', { name: 'Confirm Password *' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('abc');
  await page.getByRole('button', { name: 'Create Account button. Click' }).click();
  await expect(page.locator('div.form-text.error').filter({ hasText: /password/i }).filter({ hasNotText: /required/i }).first()).toBeVisible();
  await expect(page).toHaveURL(/registration/);
 
  // TC16 - Date of Birth rejected when under minimum age (14)
  //await page.getByRole('textbox', { name: 'Password * Must contain at' }).click();
  //await page.getByRole('textbox', { name: 'Password * Must contain at' }).fill('High_lowers007!');
  //await page.getByRole('textbox', { name: 'Confirm Password *' }).click();
  //await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('High_lowers007!');
  //await dob.clear();
  //await dob.click();
  //await dob.pressSequentially(dobYearsAgo(10), { delay: 50 });
  //await page.keyboard.press('Tab');
  // The date picker's maxDate is today minus 14 years, so an under-age date is discarded
  await expect(dob).toHaveValue('');
  await page.getByRole('button', { name: 'Create Account button. Click' }).click();
  await expect(page.locator('div.form-text.error').filter({ hasText: /^Date of Birth is required$/ })).toBeVisible();
  await expect(page).toHaveURL(/registration/);
 
 
  // TC18 - Zip Code tooltip displays explanatory text
  await page.goto(registrationUrl); // previous case landed on login
  await page.locator('.formio-component').filter({ has: page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }) }).last().locator('[ref="tooltip"]').hover();
  await expect(page.locator('.tippy-content, [role="tooltip"]').filter({ hasText: 'Used to show jobs and services near you' }).first()).toBeVisible();
 
  // TC18b - MSFW Designation tooltip displays explanatory text
  await page.locator('[class~="formio-component-eduInfo.typeOfNationalFarmworker"] [ref="tooltip"]').hover();
  await expect(page.locator('.tippy-content, [role="tooltip"]').filter({ hasText: 'Migrant and Seasonal Farmworker status determines eligibility for specialized outreach services.' }).first()).toBeVisible();
 
  // TC19 - Zip Code accepts any zip code format
  await page.reload();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('First Name');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Last Name');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('ajregunay+one@careerteam.com');
  await page.getByRole('textbox', { name: 'Password * Must contain at' }).click();
  await page.getByRole('textbox', { name: 'Password * Must contain at' }).fill('High_lowers007!');
  await page.getByRole('textbox', { name: 'Confirm Password *' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('High_lowers007!');
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).click();
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).fill('00000');
  await dob.click();
  await dob.pressSequentially('09222010', { delay: 50 });
  await page.keyboard.press('Tab');
  await page.locator('[class~="formio-component-eduInfo.typeOfNationalFarmworker"] .choices').click();
  await page.getByRole('option', { name: 'No' }).click();
  await page.locator('[class~="formio-component-addInfo.veteranStatus"] .choices').click();
  await page.getByRole('option', { name: 'No' }).click();
  await page.getByRole('button', { name: 'Create Account button. Click' }).click();
  await page.getByRole('dialog').getByRole('button', { name: 'Create Account' }).click();
  await expect(page).toHaveURL(/login/i, { timeout: 30000 });
 
  // TC20 - Invalid email format is rejected
  await page.goto(registrationUrl); // previous case landed on login
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('First Name');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Last Name');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('johndoe.test.com');
  await page.getByRole('textbox', { name: 'Password * Must contain at' }).click();
  await page.getByRole('textbox', { name: 'Password * Must contain at' }).fill('High_lowers007!');
  await page.getByRole('textbox', { name: 'Confirm Password *' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('High_lowers007!');
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).click();
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).fill('11111');
  await dob.click();
  await dob.pressSequentially('09222010', { delay: 50 });
  await page.keyboard.press('Tab');
  await page.locator('[class~="formio-component-eduInfo.typeOfNationalFarmworker"] .choices').click();
  await page.getByRole('option', { name: 'No' }).click();
  await page.locator('[class~="formio-component-addInfo.veteranStatus"] .choices').click();
  await page.getByRole('option', { name: 'No' }).click();
  await page.getByRole('button', { name: 'Create Account button. Click' }).click();
  await expect(page.locator('div.form-text.error').filter({ hasText: /valid email/i })).toBeVisible();
  await expect(page).toHaveURL(/registration/);

  
  });


  

  test('Test Case 10', async({page}) => {
   // TC10 - Registration succeeds when SSN and Confirm SSN are left blank
  await page.goto(regUrl);
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('First Name');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Last Name');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('ajregunay+one@careerteam.com');
  await page.getByRole('textbox', { name: 'Password * Must contain at' }).click();
  await page.getByRole('textbox', { name: 'Password * Must contain at' }).fill('High_lowers007!');
  await page.getByRole('textbox', { name: 'Confirm Password *' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('High_lowers007!');
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).click();
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).fill('11111');
  await dob.click();
  await dob.pressSequentially('09222010', { delay: 50 });
  await page.keyboard.press('Tab');
  await page.locator('[class~="formio-component-eduInfo.typeOfNationalFarmworker"] .choices').click();
  await page.getByRole('option', { name: 'No' }).click();
  await page.locator('[class~="formio-component-addInfo.veteranStatus"] .choices').click();
  await page.getByRole('option', { name: 'No' }).click();
  await page.getByRole('button', { name: 'Create Account button. Click' }).click();
  await expect(page).toHaveURL(/login/i);

  });

  test('Test Case 11', async({page}) => {
   // TC11 - Registration succeeds with valid matching 9-digit SSN
  await page.goto(regUrl);
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('First Name');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Last Name');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('ajregunay+one@careerteam.com');
  await page.getByRole('textbox', { name: 'Password * Must contain at' }).click();
  await page.getByRole('textbox', { name: 'Password * Must contain at' }).fill('High_lowers007!');
  await page.getByRole('textbox', { name: 'Confirm Password *' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('High_lowers007!');
  await page.locator('input[name="data[basicInfo.ssn]"]').click();
  await page.locator('input[name="data[basicInfo.ssn]"]').fill('123456789');
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).click();
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).fill('123456789');
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).click();
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).fill('11111');
  await dob.click();
  await dob.pressSequentially('09222010', { delay: 50 });
  await page.keyboard.press('Tab');
  await page.locator('[class~="formio-component-eduInfo.typeOfNationalFarmworker"] .choices').click
  });



  test('Test Case 17', async({page}) => {
  // TC17 - Date of Birth accepted when exactly minimum age (14)
  await page.reload();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('First Name');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Last Name');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('ajregunay+one@careerteam.com');
  await page.getByRole('textbox', { name: 'Password * Must contain at' }).click();
  await page.getByRole('textbox', { name: 'Password * Must contain at' }).fill('High_lowers007!');
  await page.getByRole('textbox', { name: 'Confirm Password *' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('High_lowers007!');
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).click();
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).fill('11111');
  await dob.click();
  await page.locator('.flatpickr-calendar.open .flatpickr-day:not(.flatpickr-disabled):not(.prevMonthDay):not(.nextMonthDay)').last().click();
  //await dob.pressSequentially('09222010', { delay: 50 }); //// change thiss ensure exactly 14 years old
  await page.keyboard.press('Tab');
  await page.locator('[class~="formio-component-eduInfo.typeOfNationalFarmworker"] .choices').click();
  await page.getByRole('option', { name: 'No' }).click();
  await page.locator('[class~="formio-component-addInfo.veteranStatus"] .choices').click();
  await page.getByRole('option', { name: 'No' }).click();
  await page.getByRole('button', { name: 'Create Account button. Click' }).click();
  // Confirm the "Submit Registration" dialog
  await page.getByRole('dialog').getByRole('button', { name: 'Create Account' }).click();
  await expect(page).toHaveURL(/login/i, { timeout: 30000 });
  });
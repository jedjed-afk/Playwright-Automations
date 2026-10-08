const { test, expect } =
  require('@playwright/test');
  require('dotenv').config();

  //Note
  // Change SSN and Email

  const registrationUrl = 'https://www.oregon-dev.careeredgebeta.com/employer-jobseeker/job-seeker/registration';

  const email1= 'ajregunay+john6@careerteam.com'
  const ssn1= '138432583'

  const email2= 'ajregunay+js6@careerteam.com'
  const ssn2= '133438574'

  const email3= 'ajregunay+js7@careerteam.com'
  const ssn3= '132438595'
  

  test('Mini Registration Form', async ({page}) => {
  test.setTimeout(15 * 60 * 1000);

  await page.goto(registrationUrl);

   // TC1 - Migrant Farmworker + TC 9 both Icons are present
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Johnsons');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('One');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill(email1);
  await page.getByRole('textbox', { name: 'Password *', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password *', exact: true }).fill('High_lowers007!');
  await page.getByRole('textbox', { name: 'Confirm Password *' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('High_lowers007!');
  await page.locator('input[name="data[basicInfo.ssn]"]').click();
  await page.locator('input[name="data[basicInfo.ssn]"]').fill(ssn1);
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).click();
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).fill(ssn1);
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).click();
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).fill('11111');
  const dob = page.getByRole('textbox', { name: 'Date of Birth *' });
  await dob.click();
  await dob.pressSequentially('09222010', { delay: 50 });
  await page.keyboard.press('Tab');
  await page.locator('[class~="formio-component-eduInfo.typeOfNationalFarmworker"] .choices').click();
  await page.getByRole('option', { name: 'Migrant Farmworker' }).click();
  await page.locator('[class~="formio-component-addInfo.veteranStatus"] .choices').click();
  await page.getByRole('option', { name: 'Veteran' }).click();
  await page.getByRole('button', { name: 'Create Account button. Click' }).click();
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.pause();

  // // Case Manager Login  check icons for the 1st account
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_OR_EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).click();

  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);  // PPP
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OR_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  // //login//

  await page.getByRole('button', { name: 'Individuals' }).waitFor({state: 'visible', timeout: 60000});
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).waitFor({state: 'visible', timeout: 60000});
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  //await page.getByRole('searchbox', { name: 'Search' }).click();
  //await page.getByRole('searchbox', { name: 'Search' }).fill(email1);
  //await page.getByRole('button', { name: 'search' }).click();
  const row = page.getByRole('row').filter({ hasText: email1 });
  await page.waitForTimeout(2000);
  await expect(row).toBeVisible();
  await expect(row.getByAltText('MSFW type logo')).toBeVisible();
  await expect(row.getByAltText('QEB type logo')).toBeVisible();
  await page.pause();
  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click();
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('menuitem', { name: 'As Jobseeker' }).click();



     // // TC2 -  Seasonal Farmworker
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('JS');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('One');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill(email2);
  await page.getByRole('textbox', { name: 'Password *', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password *', exact: true }).fill('High_lowers007!');
  await page.getByRole('textbox', { name: 'Confirm Password *' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('High_lowers007!');
  await page.locator('input[name="data[basicInfo.ssn]"]').click();
  await page.locator('input[name="data[basicInfo.ssn]"]').fill(ssn2);
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).click();
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).fill(ssn2);
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).click();
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).fill('11111');
  await dob.click();
  await dob.pressSequentially('09222010', { delay: 50 });
  await page.keyboard.press('Tab');
  await page.locator('[class~="formio-component-eduInfo.typeOfNationalFarmworker"] .choices').click();
  await page.getByRole('option', { name: 'Seasonal Farmworker' }).click();
  await page.locator('[class~="formio-component-addInfo.veteranStatus"] .choices').click();
  await page.getByRole('option', { name: 'No' }).click();
  await page.getByRole('button', { name: 'Create Account button. Click' }).click();
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.pause();
  
  // Case Manager Login  check icons for the 2nd account
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_OR_EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).click();

  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);  // PPP
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OR_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  //login//

  await page.getByRole('button', { name: 'Individuals' }).waitFor({state: 'visible', timeout: 60000});
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('tab', { name: 'All Individuals' }).waitFor({state: 'visible', timeout: 60000});
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  //await page.getByRole('searchbox', { name: 'Search' }).click();
  //await page.getByRole('searchbox', { name: 'Search' }).fill(email1);
  //await page.getByRole('button', { name: 'search' }).click();
  const row2 = page.getByRole('row').filter({ hasText: email2 });
  await page.waitForTimeout(2000);
  await expect(row2).toBeVisible();
  await expect(row2.getByAltText('MSFW type logo')).toBeVisible();
  await page.pause();
  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click()
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('menuitem', { name: 'As Jobseeker' }).click();


       // TC3 -  No
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('JS');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('One');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill(email3);
  await page.getByRole('textbox', { name: 'Password *', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password *', exact: true }).fill('High_lowers007!');
  await page.getByRole('textbox', { name: 'Confirm Password *' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('High_lowers007!');
  await page.locator('input[name="data[basicInfo.ssn]"]').click();
  await page.locator('input[name="data[basicInfo.ssn]"]').fill(ssn3);
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).click();
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).fill(ssn3);
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
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.pause();

  // Case Manager Login  check icons for the 3rd account
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_OR_EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).click();

  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);  // PPP
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OR_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  //login//

  await page.getByRole('button', { name: 'Individuals' }).waitFor({state: 'visible', timeout: 60000});
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('tab', { name: 'All Individuals' }).waitFor({state: 'visible', timeout: 60000});
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  //await page.getByRole('searchbox', { name: 'Search' }).click();
  //await page.getByRole('searchbox', { name: 'Search' }).fill(email3);
  //await page.getByRole('button', { name: 'search' }).click();
  //await expect(row.getByAltText('MSFW type logo')).toBeHidden();
  //await expect(row.getByAltText('QEB type logo')).toBeHidden();
  const row3 = page.getByRole('row').filter({ hasText: email3 });
  await page.waitForTimeout(2000);
  await expect(row3).toBeVisible();
  await expect(row3.getByAltText('MSFW type logo')).toHaveCount(0);
  await expect(row3.getByAltText('QEB type logo')).toHaveCount(0);
  await page.pause();
  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click();


  // TC 4 Cannot be tested, this need to be manually tested
  // TC 5 Already tested on previous test cases

  // TC 6 and 7  My Individuals and All Individuals ; Role: Case Manager and Voucher Reviewer

  ///////////////////// Login as Case Manager
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_OR_EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).click();

  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);  // PPP
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OR_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  //login//

  await page.getByRole('button', { name: 'Individuals' }).waitFor({state: 'visible', timeout: 60000});
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('tab', { name: 'All Individuals' }).waitFor({state: 'visible', timeout: 60000});
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  
  // Email 1
  await page.waitForTimeout(2000);
  await expect(row.getByAltText('MSFW type logo')).toBeVisible();
  const assignCase = page.getByRole('row').filter({hasText: email1});
  await assignCase.getByRole('button').last().click();
  await page.getByRole('menuitem', { name: 'Assign To Me' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('tab', { name: 'My Individuals' }).click();
  await expect(row).toBeVisible();
  await expect(row.getByAltText('MSFW type logo')).toBeVisible();
  await expect(row.getByAltText('QEB type logo')).toBeVisible();
  await page.pause();

  // Email 2
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  const assignCase2 = page.getByRole('row').filter({hasText: email2});
  await page.waitForTimeout(2000);
  await page.waitForLoadState('domcontentloaded');
  await expect(row2).toBeVisible();
  await expect(row2.getByAltText('MSFW type logo')).toBeVisible();
  await assignCase2.getByRole('button').last().click();
  await page.getByRole('menuitem', { name: 'Assign To Me' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('tab', { name: 'My Individuals' }).click();
  await expect(row2.getByAltText('MSFW type logo')).toBeVisible();
  await page.pause();

  // Email 3
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.waitForTimeout(2000);
  const assignCase3 = page.getByRole('row').filter({hasText: email3});
  await page.waitForTimeout(2000);
  await page.waitForLoadState('domcontentloaded');
  await expect(row3).toBeVisible();
  await expect(row3.getByAltText('MSFW type logo')).toHaveCount(0);
  await expect(row3.getByAltText('QEB type logo')).toHaveCount(0);
  await assignCase3.getByRole('button').last().click();
  await page.getByRole('menuitem', { name: 'Assign To Me' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('tab', { name: 'My Individuals' }).click();
  await expect(row3.getByAltText('MSFW type logo')).toBeVisible();
  await page.pause();
  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click();


  ///////////////////// Login as Voucher Reviewer
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.VOUCHERREV_OR_EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).click();

  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);  // PPP
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.VOUCHERREV_OR_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  //login//

  await page.getByRole('button', { name: 'Individuals' }).waitFor({state: 'visible', timeout: 60000});
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('tab', { name: 'All Individuals' }).waitFor({state: 'visible', timeout: 60000});
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  
  // Email 1
  const assignVouch = page.getByRole('row').filter({hasText: email1});
  await page.waitForTimeout(2000);
  await page.waitForLoadState('domcontentloaded');
  await expect(row).toBeVisible();
  await expect(row.getByAltText('MSFW type logo')).toBeVisible();
  await assignVouch.getByRole('button').last().click();
  await page.getByRole('menuitem', { name: 'Assign To Me' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('tab', { name: 'My Individuals' }).click();
  await expect(row.getByAltText('MSFW type logo')).toBeVisible();
  await page.pause();

  // Email 2
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.waitForTimeout(2000);
  await page.waitForLoadState('domcontentloaded');
  const assignVouch2 = page.getByRole('row').filter({hasText: email2});
  await expect(row2).toBeVisible();
  await expect(row2.getByAltText('MSFW type logo')).toBeVisible();
  await assignVouch2.getByRole('button').last().click();
  await page.getByRole('menuitem', { name: 'Assign To Me' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('tab', { name: 'My Individuals' }).click();
  await expect(row2.getByAltText('MSFW type logo')).toBeVisible();
  await page.pause();

  // Email 3
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.waitForTimeout(2000);
  await page.waitForLoadState('domcontentloaded');
  const assignVouch3 = page.getByRole('row').filter({hasText: email3});
  await expect(row3).toBeVisible();
  await expect(row3.getByAltText('MSFW type logo')).toHaveCount(0);
  await expect(row3.getByAltText('QEB type logo')).toHaveCount(0);
  await assignVouch3.getByRole('button').last().click();
  await page.getByRole('menuitem', { name: 'Assign To Me' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('tab', { name: 'My Individuals' }).click();
  await expect(row3.getByAltText('MSFW type logo')).toBeVisible();
  await page.pause();
  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click();
  




  // TC 8 candidate search to follow candidate search not working




  

  

  });
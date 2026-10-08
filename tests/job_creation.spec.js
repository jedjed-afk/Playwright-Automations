import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/user/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+friday@careerteam.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Hihelloww268!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Manage Jobs' }).click();
  await page.getByRole('button', { name: 'Post a Job' }).click();
  await page.getByRole('textbox', { name: 'Job Title Please accurately' }).click();
  await page.getByRole('textbox', { name: 'Job Title Please accurately' }).fill('Automation Job One');
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: 'Architecture and Engineering' }).click();
 // console.log(await page.locator('body').ariaSnapshot()); //// use to see accessibility Tree ---- Change 'body' to specific ID
  await page.getByText('SelectSelectRemove item').first().click();
  //getByText('Job Occupation')
  //await page.getByText('SelectSelectRemove item').nth(1).click();
  //await page.locator('#l-e5f387g-basicInfo.jobOccupation').click();
  // await page.getByText('Job Occupation').click();
  await page.getByRole('option', { name: 'Aerospace Engineering and' }).click();
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: 'Test' }).click();
  await page.getByRole('textbox', { name: 'Number of Positions Available' }).fill('10');
  await page.getByRole('textbox', { name: 'Job post go-live date *' }).fill('08/21/2026_');
  await page.getByRole('textbox', { name: 'Job post go-live date *' }).press('Enter');
  await page.getByRole('textbox', { name: 'Job post expiry date *' }).fill('12/30/2026_');
  await page.getByRole('textbox', { name: 'Job post expiry date *' }).press('Enter');
  await page.getByText('SelectSelectRemove item').first().click();
  //await page.locator('label[for$="basicInfo.jobType"]').click();
  //await page.getByText('SelectSelectRemove item').nth(1).click();
  await page.getByRole('option', { name: 'Regular' }).click();
  await page.getByText('Work Mode').click();
  //await page.getByLabel('data[basicInfo.workMode]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Full time Remote' }).click();
  await page.getByText('Minimum Education', { exact: true }).click();
  //await page.getByText('SelectSelectRemove item').nth(1).click();
  await page.getByRole('option', { name: 'No Minimum Education' }).click();
  await page.getByRole('textbox', { name: 'Minimum Months of Experience' }).fill('2');
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).fill('Description');
  await page.getByRole('textbox', { name: 'Skills' }).fill('Skills 1');
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.pause();

  ///////// Second Page ////////////
  await page.getByRole('textbox', { name: 'Minimum Salary , numeric only' }).fill('11');
  await page.getByRole('textbox', { name: 'Maximum Salary , numeric only' }).fill('22');
  await page.getByRole('textbox', { name: 'Hour Per Week , numeric only' }).fill('22');
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: 'Hour' }).click();
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: 'DOE (Depends on Experience)' }).click();
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Day Shift' }).click();
  await page.getByRole('checkbox', { name: 'Advanced Requirements for' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();

  //////// Third Page (Advance Option) ////////
  await page.getByRole('checkbox', { name: 'Drug Testing/Screening' }).click();
  //await page.getByText('Test Requirement').click();
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: 'Employer will perform testing' }).click();
  await page.getByRole('textbox', { name: 'Provide a brief description' }).click();
  await page.getByRole('textbox', { name: 'Provide a brief description' }).fill('test');
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();

  /////// Fourth Page //////////
  await page.getByRole('checkbox', { name: 'Mail paper resume to this' }).click();
  await page.getByRole('textbox', { name: 'Address *' }).click();
  await page.getByRole('textbox', { name: 'Address *' }).fill('Test');
  await page.getByRole('button', { name: 'Submit Form button. Click to' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  ////// Job Creation ///////
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click();


  /////// State Admin Login to Verify Job Created //////
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+wyo@careerteam.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('kec5mtv_uae9gbz_RYG');
  await page.getByRole('button', { name: 'Login' }).click();
  ////// Approval ///////////
  await page.getByRole('button', { name: 'Employers' }).click();
  // await page.pause(); or use pause
  await page.getByRole('searchbox', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('920182911'); ///// fill this base on the FEIN of the Employer Created
  await page.getByRole('button', { name: 'search' }).click();
  await page.getByRole('cell', { name: 'Jed Test Employer NEW' }).click();
  await page.getByRole('tab', { name: 'Manage Jobs' }).click();
  await page.pause();
  await page.getByRole('button', { name: 'more' }).click(); // find a unique locator
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.pause();
});
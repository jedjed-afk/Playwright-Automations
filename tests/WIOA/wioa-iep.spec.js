const { test, expect } =
  require('@playwright/test');
  require('dotenv').config();
  
//This test is written by Jade of Team Eagle

//Every radio button / dropdown option available on each field is listed in a
//comment above the line that interacts with it, so the value can be swapped easily.

// Test case Cancel application mid way and up to last step : https://careeredge.atlassian.net/browse/EDGE-40837

test('WIOA IEP', async ({ page }) => {
  
  await page.goto(process.env.WYO_PPP_LOGIN);    // PPP
  //await page.goto(process.env.WYO_OLDDEV_LOGIN); // DEV
  /////////// Login for Admin///////////
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_WYO_EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);  // PPP
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OLD_DEV_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  //login//
  
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.pause();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill(process.env.JOBSIK_NAME);
  await page.getByRole('button', { name: 'search' }).click();
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).click(); 

  await page.getByRole('tab', { name: 'Programs Overview' }).click();
  await page.locator('[data-testid^="program-row-"]')
    // Wagner Peyser | CCP | WIN | WIOA
    .filter({ hasText: 'WIOA' })
    .filter({ hasText: 'Eligibility Approved' })
    //Open Wagner Peyser application| Open CCP application|Open WIOA application
    .getByRole('button', { name: 'Open WIOA application' }).click();
  await page.getByRole('tab', { name: 'IEP' }).click();
  await page.getByRole('button', { name: 'Create IEP / Service Strategy' }).click();
  //////////////////// Page 1 (Plans and Goals) //////////////////
  await page.getByRole('textbox', { name: 'Plan Begin Date *' }).click();
  //{ const today = new Date();
  //const day = today.getDate();
  //await page.getByRole('textbox', { name: 'Select' }).click();
  //await page.getByRole('button', { name: String(day), exact: true }).click();}

  await page.locator('.flatpickr-day[aria-current="date"]:visible').click();
  await page.getByRole('button', { name: ' Add IEP/ISS Goal' }).click();
  // Sub Program options: Adult | Youth
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: 'Adult' }).click();
  await page.getByText('AdultRemove item').click();
  //await page.getByRole('option', { name: 'Youth' }).click();
  // Type of Goal options: Employment | Training | Schooling
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: 'Employment' }).click();
  // Term of Goal options: Short Term | Long Term | Intermediate Term
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Short Term' }).click();
  await page.getByRole('textbox', { name: 'Goal Name *' }).fill('Goal test');
  await page.getByRole('textbox', { name: 'Select' }).click();
  await page.locator('.flatpickr-day[aria-current="date"]:visible').click(); 
  await page.getByRole('textbox', { name: 'Goal Description' }).fill('test description');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
   //// save and close

  await page.getByRole('button', { name: 'Cancel button. Click to reset' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();
  await page.getByRole('button', { name: 'Create IEP / Service Strategy' }).click();
  

  // Page 1 
  await page.getByRole('textbox', { name: 'Plan Begin Date *' }).click();
  await page.locator('.flatpickr-day[aria-current="date"]:visible').click();
  await page.getByRole('button', { name: ' Add IEP/ISS Goal' }).click();
  // Sub Program options: Adult | Youth
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: 'Adult' }).click();
  await page.getByText('AdultRemove item').click();
  //await page.getByRole('option', { name: 'Youth' }).click();
  // Type of Goal options: Employment | Training | Schooling
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: 'Employment' }).click();
  // Term of Goal options: Short Term | Long Term | Intermediate Term
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Short Term' }).click();
  await page.getByRole('textbox', { name: 'Goal Name *' }).fill('Goal test');
  await page.getByRole('textbox', { name: 'Select' }).click();
  await page.locator('.flatpickr-day[aria-current="date"]:visible').click(); 
  await page.getByRole('textbox', { name: 'Goal Description' }).fill('test description');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();


  //////////////////// Page 2 (Objective) //////////////////
  await page.getByRole('button', { name: ' Add Objective' }).click();
  // Goal options are populated dynamically from the goals created on Page 1 (not a fixed list) - matches the Goal Name entered there, e.g. "Goal test"
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Goal' }).click(); /// change based on goal name
  await page.getByRole('textbox', { name: 'Objective Description *' }).fill('Goal Description');
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Select' }).click();
  await page.locator('.flatpickr-calendar.open .flatpickr-day[aria-current="date"]').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
   //// save and close

  await page.getByRole('button', { name: 'Cancel button. Click to reset' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause() 
  await page.getByRole('button', { name: 'Create IEP / Service Strategy' }).click();
  
  // Page 1 
  await page.getByRole('textbox', { name: 'Plan Begin Date *' }).click();
  await page.locator('.flatpickr-day[aria-current="date"]:visible').click();
  await page.getByRole('button', { name: ' Add IEP/ISS Goal' }).click();
  // Sub Program options: Adult | Youth
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: 'Adult' }).click();
  await page.getByText('AdultRemove item').click();
  //await page.getByRole('option', { name: 'Youth' }).click();
  // Type of Goal options: Employment | Training | Schooling
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: 'Employment' }).click();
  // Term of Goal options: Short Term | Long Term | Intermediate Term
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Short Term' }).click();
  await page.getByRole('textbox', { name: 'Goal Name *' }).fill('Goal test');
  await page.getByRole('textbox', { name: 'Select' }).click();
  await page.locator('.flatpickr-day[aria-current="date"]:visible').click(); 
  await page.getByRole('textbox', { name: 'Goal Description' }).fill('test description');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();


  //////////////////// Page 2 (Objective) //////////////////
  await page.getByRole('button', { name: ' Add Objective' }).click();
  // Goal options are populated dynamically from the goals created on Page 1 (not a fixed list) - matches the Goal Name entered there, e.g. "Goal test"
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Goal' }).click(); /// change based on goal name
  await page.getByRole('textbox', { name: 'Objective Description *' }).fill('Goal Description');
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Select' }).click();
  await page.locator('.flatpickr-calendar.open .flatpickr-day[aria-current="date"]').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();


  ///////////////////// Page 3 (Case Notes) ///////////////
  await page.getByRole('textbox', { name: 'Contact Date *' }).click();
  await page.locator('.flatpickr-day[aria-current="date"]:visible').click();
  await page.getByRole('textbox', { name: 'Subject *' }).click();
  await page.getByRole('textbox', { name: 'Subject *' }).fill('Test Subject');
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).click();
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).fill('Test Description');
   {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this section
  }
  
  await page.getByRole('button', { name: 'Submit Form button. Click to' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  ////////////////////////////// Log Out //////////////////////////////////////
  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click();
  ////////////////////////////// Log In of the Jobseeker //////////////////////
   await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.JOBSIK_EMAIL); //EDIT -- input email of the created jobseeker
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.JOBSIK_PASS); //EDIT -- input passsword
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('button', { name: 'My Profile' }).click();
  await page.getByRole('menuitem', { name: 'View Profile' }).click();
  await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Individual Employment Plans (' }).click();
  await page.getByRole('button', { name: 'more' }).click();
  await page.getByRole('menuitem', { name: 'Sign the IEP' }).click();
  await page.getByRole('checkbox', { name: 'I agree to sign the IEP' }).check();
  await page.getByRole('button', { name: 'Save & Close' }).click();
  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click();

  ////////////////////////////// Log In of Admin ////////////////////////////////////
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_WYO_EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);  // PPP
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OLD_DEV_PASS);
  await page.getByRole('button', { name: 'Login' }).click();

  
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).click(); 

  await page.waitForTimeout(3000);
  await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Individual Employment Plans (' }).click();
  await page.getByRole('button', { name: 'more' }).click();
  await page.getByRole('menuitem', { name: 'View the IEP' }).click();
  await page.getByRole('checkbox', { name: 'I agree to sign the IEP' }).check();
  await page.getByRole('button', { name: 'Save & Close' }).click();
  await page.pause();
});
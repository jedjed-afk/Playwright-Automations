import { test, expect } from '@playwright/test';
//This test is written by Jade of Team Eagle
test('WIOA IEP', async ({ page }) => {
  await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/user/login'); 
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+wyo@careerteam.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('kec5mtv_uae9gbz_RYG');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.pause() // wait for it to load all individulas before continue
  //await page.waitForTimeout(10000);
  await page.getByRole('cell', { name: 'JedOneFour' }).click(); // change the name
  await page.getByRole('tab', { name: 'Programs Overview' }).click();
  await page.getByText('Eligibility Approved').first().click();
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
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: 'Adult' }).click();
  await page.getByText('AdultRemove item').click();
  await page.getByRole('option', { name: 'Youth' }).click();
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: 'Employment' }).click();
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
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+efive@careerteam.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Not_jed123#@$3dsd');
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
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanager@careerteam.com'); //DEV Change depends on ENV
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.DEV_PASS);   //DEV Change depends on ENV
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.getByRole('cell', { name: 'JedOneFour' }).click(); //////// change
  await page.waitForTimeout(3000);
  await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Individual Employment Plans (' }).click();
  await page.getByRole('button', { name: 'more' }).click();
  await page.getByRole('menuitem', { name: 'View the IEP' }).click();
  await page.getByRole('checkbox', { name: 'I agree to sign the IEP' }).check();
  await page.getByRole('button', { name: 'Save & Close' }).click();
  await page.pause();
});
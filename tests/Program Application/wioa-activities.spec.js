import { test, expect } from '@playwright/test';
//This test is written by Jade of Team Eagle
test('WIOA Activities', async ({ page }) => {
  //await page.goto('https://www.wyo-platform-pre-prod.careeredgebeta.com/user/login'); // PPP
  //await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/user/login '); // DEV
  await page.goto('https://www.oregon-dev.careeredgebeta.com/user/login '); // Oregon

  /////////// Login for Admin///////////
  await page.getByRole('textbox', { name: 'Email' }).click();
  //await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanager@careerteam.com'); 
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanger@careerteam.com'); //oregon
  await page.getByRole('textbox', { name: 'Password' }).click();

  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS); // PPP
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.DEV_PASS); // DEV
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OR_PASS); //Oregon
  await page.getByRole('button', { name: 'Login' }).click();
  ///////////////////// Login /////////////////////////////////
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.pause();
  await page.getByRole('cell', { name: 'JedOneOne' }).click();  //////// change name as needed
  await page.getByRole('tab', { name: 'Programs Overview' }).click();
  await page.getByText('Eligibility Approved').first().click();
  await page.getByRole('tab', { name: 'Activities' }).click();
  await page.getByRole('button', { name: 'Add Activity' }).click();
  await page.getByRole('combobox', { name: 'Sub program Select' }).click();
  await page.getByRole('option', { name: 'Adult' }).click();             ////change this depends on the eligibility ::add options
  await page.getByRole('combobox', { name: 'Activity code' }).click();
  await page.getByRole('option', { name: '180 - Support Service - Child' }).click();  //// :: add option for adults and youth eligible
  //await page.getByRole('option', { name: '180 - Support Service – Child' }).click(); // for oregon
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Projected Begin Date *' }).click();
  await page.locator('.flatpickr-calendar.animate.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .flatpickr-day.today').click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Projected End Date *' }).click();
  await page.locator('.flatpickr-day[aria-current="date"]:visible').click();
  await page.getByText('Service Provided').click();

  //const serviceProvidedField = page.locator('.formio-component-serviceProvided');
  //await serviceProvidedField.locator('.choices__inner').click();
  //await serviceProvidedField.locator('.choices__list--dropdown .choices__item--selectable', { hasText: 'Virtual/Online' }).click();

  await page.getByRole('option', { name: 'Virtual/Online' }).click(); // add options
  await page.getByText('Provider', { exact: true }).click();  
  await page.getByRole('textbox', { name: 'Select' }).fill('test'); /// change based on provider name
  await page.getByRole('option', { name: 'testorg' }).click();     /// change based on provider name
  await page.getByText('Service, Course or Contract').click();
  await page.getByRole('option').filter({ visible: true }).first().click();  //use this or line 40 
  //await page.getByRole('option', { name: 'test' }).click();        /// change base on available option
  await page.getByText('SelectSelectRemove item').nth(1).click();
  await page.getByRole('option', { name: 'jadeStaff' }).click();
  await page.getByText('SelectSelectRemove item').nth(1).click();
  await page.getByRole('option', { name: 'Chief Executives' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('textbox', { name: 'Contact Date *' }).click();
  await page.locator('.flatpickr-calendar.animate.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .flatpickr-day.today').click();
  await page.getByRole('textbox', { name: 'Subject *' }).click();
  await page.getByRole('textbox', { name: 'Subject *' }).fill('test');
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).click();
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).fill('test');

 {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this section ;; you can choose what file you want to upload just change the path 
  }

  await page.getByRole('button', { name: 'Submit button. Click to' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.pause();
});
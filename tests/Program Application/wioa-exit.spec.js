import { test, expect } from '@playwright/test';
//This test is written by Jade of Team Eagle
test('WIOA Exit', async ({ page }) => {

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
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.pause();
  await page.getByRole('cell', { name: 'JedOneOne' }).click();  //////// change name as needed
  await page.getByRole('tab', { name: 'Programs Overview' }).click();
  await page.getByText('Eligibility Approved').first().click();
  await page.waitForTimeout(4000);
  await page.getByRole('tab', { name: 'Activities' }).click();
  
  const openCells = page.getByRole('cell', { name: 'Open', exact: true });

  //  Step 1: There is always at least one Open item 
  await expect(openCells.first()).toBeVisible();
  const firstRow = openCells.first().locator('xpath=ancestor::tr[1]');

  // Click the kebab/"more" menu button in that row
  await firstRow.getByRole('button', { name: 'more' }).click();

  // Then click whatever menu item actually closes it (adjust label as needed)
  await page.getByRole('menuitem', { name: 'Close' }).click();

  await page.getByRole('textbox', { name: 'Actual End *' }).click();
  await page.locator('.flatpickr-calendar.animate.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .flatpickr-day.today').click();
  await page.getByText('Completion Code').click();
  await page.getByRole('option', { name: 'Successful Completion', exact: true }).click();
  await page.getByRole('textbox', { name: 'Contact Date *' }).click();
  await page.locator('.flatpickr-calendar.animate.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .flatpickr-day.today').click();
  await page.getByRole('textbox', { name: 'Subject *' }).click();
  await page.getByRole('textbox', { name: 'Subject *' }).fill('Test subject Activities');
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).click();
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).fill('Test Case Notes Activities');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

  await page.waitForTimeout(2000); // replace with a proper wait if possible

  // --- Step 2: Check if a second Open item now exists ---
  const remainingCount = await openCells.count();

  if (remainingCount > 0) {
    console.log('Second Open item found, closing it too');
    const secondRow = openCells.first().locator('xpath=ancestor::tr[1]');
    await secondRow.getByRole('button', { name: 'more' }).click();
    await page.getByRole('menuitem', { name: 'Close' }).click();

  await page.getByRole('textbox', { name: 'Actual End *' }).click();
  await page.locator('.flatpickr-calendar.animate.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .flatpickr-day.today').click();
  await page.getByText('Completion Code').click();
  await page.getByRole('option', { name: 'Successful Completion', exact: true }).click();
  await page.getByRole('textbox', { name: 'Contact Date *' }).click();
  await page.locator('.flatpickr-calendar.animate.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .flatpickr-day.today').click();
  await page.getByRole('textbox', { name: 'Subject *' }).click();
  await page.getByRole('textbox', { name: 'Subject *' }).fill('Test subject Activities');
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).click();
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).fill('Test Case Notes Activities');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

    await page.waitForTimeout(2000);
  } else {
    console.log('No second Open item, proceeding to next step');
  }
  // Proceed to next step regardless 
  await page.pause();

  ///////////////////// Upload of Hard Exit Evidence ///////////////////////
  await page.getByRole('link', { name: 'JedOneOne' }).click();     ///////// change name of jobseeker
  await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Evidences' }).click();
  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Hard Exit File');

  {
    const fileChooserPromise = page.waitForEvent('filechooser')
    await page.getByRole('link', { name: 'browse Browse to attach file'}).click();
    const fileChooser = await fileChooserPromise
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf');
  }
  
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('cell', { name: 'more' }).first().click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.getByText('Select an evidence typeSelect').click();
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('hard');
  await page.getByRole('option', { name: 'Hard Exit Verification' }).click();
  await page.getByRole('heading', { name: 'One of the following is' }).click();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('tab', { name: 'Programs Overview' }).click();
  await page.getByText('Eligibility Approved').first().click();
  await page.getByRole('tab', { name: 'Exit / Outcome' }).click();
  await page.getByRole('button', { name: 'Create Exit/Outcome' }).click();
  await page.getByRole('button', { name: ' Add Alternate Contact' }).click();
  await page.getByRole('textbox', { name: 'Contact Name *' }).click();
  await page.getByRole('textbox', { name: 'Contact Name *' }).fill('Test ');
  await page.getByRole('textbox', { name: 'Contact Name *' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Contact Name *' }).fill('Jade');
  await page.getByText('SelectRemove item').click();
  await page.getByRole('option', { name: 'Parent', exact: true }).click();
  await page.getByRole('textbox', { name: 'Phone Number , numeric only, *' }).click();
  await page.getByRole('textbox', { name: 'Phone Number , numeric only, *' }).fill('3432125423');
  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByLabel('data[exitReason]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Institutionalized' }).click();  //////////////////////////// ::add options
  await page.getByText('Select DocumentSelect').click();
  await page.pause();
  await page.getByRole('option', { name: 'Hard Exit Verification (file' }).first().click();
  await page.getByLabel('data[schoolStatus]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'None Selected' }).click();       ////////////////////////// ::add options
  await page.getByRole('radio', { name: 'School records' }).check();       ////////////////////////// ::add options

  await page.getByRole('link', { name: 'browse Browse to attach file' }).click();

  {
    const fileChooserPromise = page.waitForEvent('filechooser')
    await page.getByRole('link', { name: 'browse Browse to attach file'}).click();
    const fileChooser = await fileChooserPromise
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf');
  }

  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Not Applicable' }).click();     ////////////////////////// ::add options
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();

  await page.getByRole('textbox', { name: 'Contact Date *' }).click();
  await page.locator('flatpickr-day[aria-current="date"]').click();
  await page.getByText('SelectRemove item').click();
  await page.getByText('Contact Type (Optional)').click();
  await page.getByText('Contact Type (Optional)').click();
  await page.getByRole('option', { name: 'Face-to-Face' }).click();
  await page.getByRole('textbox', { name: 'Subject *' }).click();
  await page.getByRole('textbox', { name: 'Subject *' }).fill('Test Subject Exit');
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).click();
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).fill('Test Case Notes Exit');

  await page.getByRole('link', { name: 'browse Browse to attach file' }).click();

  {
    const fileChooserPromise = page.waitForEvent('filechooser')
    await page.getByRole('link', { name: 'browse Browse to attach file'}).click();
    const fileChooser = await fileChooserPromise
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf');
  }
  await page.getByRole('button', { name: 'Submit button. Click to' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('textbox', { name: 'Status' }).click();
  await page.pause();
});
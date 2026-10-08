import { test, expect } from '@playwright/test';
//This test is written by Jade of Team Eagle
test('test', async ({ page }) => {

   //await page.goto('https://www.wyo-platform-pre-prod.careeredgebeta.com/user/login'); // PPP
  await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/user/login '); // DEV
  //await page.goto('https://www.oregon-dev.careeredgebeta.com/user/login '); // Oregon

  /////////// Login for Admin///////////
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanager@careerteam.com'); 
  //await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanger@careerteam.com'); //oregon
  await page.getByRole('textbox', { name: 'Password' }).click();

  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS); // PPP
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.DEV_PASS); // DEV
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OR_PASS); //Oregon
  await page.getByRole('button', { name: 'Login' }).click();
  //login//
  // await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/home');
  await page.getByRole('button', { name: 'Individuals' }).click();
  //await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/employer-jobseeker/individuals?tab=myIndividuals');
  await page.pause();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.pause();
  //await page.getByLabel('Jed', { exact: true }).click();

  /////////////////// Selective Service Registration Evidence ////////////

  
  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Selective Service Acknowledge');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this section
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'more' }).click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('selective service acknowledge');
  await page.getByRole('option', { name: 'Selective Service Acknowledgement letter', exact: true }).click();
  await expect (page.getByRole('button', { name: 'update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Screen printout of the Selective');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this section
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  getByRole('row', { name: 'Screen printout of the' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('print');
  await page.getByRole('option', { name: 'Screen printout of the' }).click();
  await expect (page.getByRole('button', { name: 'update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Selective Service Registrat');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this section
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Selective Service Registration' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('selective service registration');
  await page.getByRole('option', { name: 'Selective Service Registration', exact: true }).click();
  await expect (page.getByRole('button', { name: 'update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Selective Verification (Form 3A)');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this section
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Selective Service Verification Form (Form 3A)' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('form 3');
  await page.getByRole('option', { name: 'Selective Service Verification Form (Form 3A)', exact: true }).click();
  await expect (page.getByRole('button', { name: 'update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Selective Waiver Request');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this section
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Selective Service Waiver Request Form' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('waiver');
  await page.getByRole('option', { name: 'Selective Service Waiver' }).click();
  await expect (page.getByRole('button', { name: 'update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Approved Waiver'); // TODO: confirm exact document name for this evidence type
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this section
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Approved Waiver' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('waiver');
  await page.getByRole('option', { name: 'Approved Waiver' }).click();
  await expect (page.getByRole('button', { name: 'update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();

  /////////////////// YOUTH EVIDENCE /////////////////////////////
  await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Evidences' }).click();
  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Test WIOA');
  //await page.getByRole('link', { name: 'browse Browse to attach file' }).click(); // don't click - this opens the native OS file picker
  //await page.pause(); //I prefer to use this so I can choose the file I want to upload
  //await page.locator('input[type="file"]').setInputFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf');
  }

  //await page.locator('input[type="file"]').setInputFiles('Family Size Verification Form.pdf'); //this could be executed however, you need to move the file to the playwright folder instead for it to be uploaded
  //await page.locator('input[type="file"]').setInputFiles('C:/path/to/Family Size Verification Form.pdf'); // this can be used also just provide absolute path
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'more' }).click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('self');
  await page.getByRole('option', { name: 'Self-Attestation' }).click();
  await expect (page.getByRole('button', { name: 'update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  //await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('confirmation');
  //await page.getByRole('option', { name: 'Social Services Agency' }).click();

  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Social Services Agency'); /// change
  //await page.pause(); //I prefer to use this so I can choose the file I want to upload
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this section
  }
  //await page.locator('input[type="file"]').setInputFiles('Family Size Verification Form.pdf'); //this could be executed however, you need to move the file to the playwright folder instead for it to be uploaded
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Social Services Agency' }).getByLabel('more').click();
  //await page.getByRole('cell', { name: 'more' }).first().click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('confirmation'); // 2 change
  await page.getByRole('option', { name: 'Social Services Agency' }).click();
  await expect (page.getByRole('button', { name: 'update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  // await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Foster');
  //await page.getByRole('option', { name: 'Foster Care Agency Referral' }).click();

  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Foster Care Agency Referral'); /// change
  //await page.pause(); //I prefer to use this so I can choose the file I want to upload
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this section
  }
  //await page.locator('input[type="file"]').setInputFiles('Family Size Verification Form.pdf'); //this could be executed however, you need to move the file to the playwright folder instead for it to be uploaded
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Foster Care Agency Referral' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Foster'); // 2 change
  await page.getByRole('option', { name: 'Foster Care Agency Referral' }).click();
  await expect (page.getByRole('button', { name: 'update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  //await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('intake');
  //await page.getByRole('option', { name: 'Signed Intake Application or' }).click();

  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Signed Intake Application or'); /// change
  //await page.pause(); //I prefer to use this so I can choose the file I want to upload
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this section
  }
  //await page.locator('input[type="file"]').setInputFiles('Family Size Verification Form.pdf'); //this could be executed however, you need to move the file to the playwright folder instead for it to be uploaded
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Signed Intake Application or' }).getByLabel('more').click(); /////////////
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('intake');
  await page.getByRole('option', { name: 'Signed Intake Application or' }).click();
  await expect(page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  //await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('needs');
  //await page.getByRole('option', { name: 'Needs Assessment' }).click();

  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Needs Assessment'); /// change
  //await page.pause(); //I prefer to use this so I can choose the file I want to upload
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/Equal Opportunity is the Law-e95d3d64-7288-418b-87ce-ac211d952041-1786619297723 (3).pdf');
  }
  //await page.locator('input[type="file"]').setInputFiles('Family Size Verification Form.pdf'); //this could be executed however, you need to move the file to the playwright folder instead for it to be uploaded
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Needs Assessment' }).getByLabel('more').click(); /////////////
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('needs'); // 2 change
  await page.getByRole('option', { name: 'Needs Assessment' }).click();
  await expect (page.getByRole('button', { name: 'update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  //await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('strategy');
  //await page.getByRole('option', { name: 'Signed Individual Service' }).click();
  
  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Signed Individual Service'); /// change
  //await page.pause(); //I prefer to use this so I can choose the file I want to upload
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this section
  }
  //await page.locator('input[type="file"]').setInputFiles('Family Size Verification Form.pdf'); //this could be executed however, you need to move the file to the playwright folder instead for it to be uploaded
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Signed Individual Service' }).getByLabel('more').click(); /////////////
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('strategy'); // 2 change
  await page.getByRole('option', { name: 'Signed Individual Service' }).click();
  await expect (page.getByRole('button', { name: 'update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  //await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('staff');
  //await page.getByRole('option', { name: 'Staff Verified based upon' }).click();

  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Staff Verified based upon'); /// change
  //await page.pause(); //I prefer to use this so I can choose the file I want to upload
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this section
  }
  //await page.locator('input[type="file"]').setInputFiles('Family Size Verification Form.pdf'); //this could be executed however, you need to move the file to the playwright folder instead for it to be uploaded
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Signed Individual Service' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('staff'); // 2 change
  await page.getByRole('option', { name: 'Staff Verified based upon' }).click();
  await expect (page.getByRole('button', { name: 'update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  //await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('lunch');
  //await page.getByRole('option', { name: 'Free or Reduced Lunch Form' }).click();
  
  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Free or Reduced Lunch Form'); /// change
  //await page.pause(); //I prefer to use this so I can choose the file I want to upload
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this section
  }
  //await page.locator('input[type="file"]').setInputFiles('Family Size Verification Form.pdf'); //this could be executed however, you need to move the file to the playwright folder instead for it to be uploaded
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Free or Reduced Lunch Form' }).getByLabel('more').click(); /////////////
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('lunch'); // 2 change
  await page.getByRole('option', { name: 'Free or Reduced Lunch Form' }).click();
  await expect (page.getByRole('button', { name: 'update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  //await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('shelter');
  //await page.getByRole('option', { name: 'Shelter or Social Service' }).click();

  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Shelter or Social Service'); /// change
  //await page.pause(); //I prefer to use this so I can choose the file I want to upload
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this section
  }
  //await page.locator('input[type="file"]').setInputFiles('Family Size Verification Form.pdf'); //this could be executed however, you need to move the file to the playwright folder instead for it to be uploaded
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Shelter or Social Service' }).getByLabel('more').click(); /////////////
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('shelter'); // 2 change
  await page.getByRole('option', { name: 'Shelter or Social Service' }).click();
  await expect (page.getByRole('button', { name: 'update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  //await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('caseworker');
  //await page.getByRole('option', { name: 'Caseworker or Support' }).click();

    await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Caseworker or Support'); /// change
  //await page.pause(); //I prefer to use this so I can choose the file I want to upload
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this section
  }
  //await page.locator('input[type="file"]').setInputFiles('Family Size Verification Form.pdf'); //this could be executed however, you need to move the file to the playwright folder instead for it to be uploaded
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Caseworker or Support' }).getByLabel('more').click(); /////////////
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('caseworker'); // 2 change
  await page.getByRole('option', { name: 'Caseworker or Support' }).click();
  await expect (page.getByRole('button', { name: 'update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


 // await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('WIC');
 // await page.getByRole('option', { name: 'WIC Eligibility Verification' }).click();

  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('WIC Eligibility Verification'); /// change
  //await page.pause(); //I prefer to use this so I can choose the file I want to upload
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this section
  }
  //await page.locator('input[type="file"]').setInputFiles('Family Size Verification Form.pdf'); //this could be executed however, you need to move the file to the playwright folder instead for it to be uploaded
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'WIC Eligibility Verification' }).getByLabel('more').click(); /////////////
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('WIC'); // 2 change
  await page.getByRole('option', { name: 'WIC Eligibility Verification' }).click();
  await expect (page.getByRole('button', { name: 'update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();
  
  //await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('public assistance eligibility');
  //await page.getByRole('option', { name: 'Public Assistance Eligibility' }).click();

  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Public Assistance Eligibility'); /// change
  //await page.pause(); //I prefer to use this so I can choose the file I want to upload
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this section
  }
  //await page.locator('input[type="file"]').setInputFiles('Family Size Verification Form.pdf'); //this could be executed however, you need to move the file to the playwright folder instead for it to be uploaded
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Public Assistance Eligibility' }).getByLabel('more').click(); /////////////
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('public assistance eligibility'); // 2 change
  await page.getByRole('option', { name: 'Public Assistance Eligibility' }).click();
  await expect (page.getByRole('button', { name: 'update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();
});
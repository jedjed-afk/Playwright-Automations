import { test, expect } from '@playwright/test';
//This test is written by Jade of Team Eagle

test('all-evidence', async ({ page }) => {

   //await page.goto('https://www.wyo-platform-pre-prod.careeredgebeta.com/user/login'); // PPP
  await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/user/login '); // DEV
  //await page.goto('https://www.oregon-dev.careeredgebeta.com/user/login '); // Oregon

  /////////// Login for Admin///////////
  await page.goto(process.env.WYO_OLDDEV_LOGIN); // DEV
  //await page.goto(process.env.WYO_PPP_LOGIN);    // PPP
  /////////// Login for Admin///////////
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_WYO_EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OLD_DEV_PASS); // DEV and New DEV
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);  // PPP

  await page.getByRole('button', { name: 'Login' }).click();
  //login//

  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.pause();
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).click();
 

  /////////////////// ALL OTHER VERIFYING DOCUMENTS ////////////

  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Assessment Test Results');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'more' }).click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Assessment Test Results');
  await page.getByRole('option', { name: 'Assessment Test Results', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Authorization to Receive Cash Public Assistance');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Authorization to Receive Cash Public Assistance' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Authorization to Receive Cash Public Assistance');
  await page.getByRole('option', { name: 'Authorization to Receive Cash Public Assistance', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Award Letter from Veteran\'s Administration');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Award Letter from Veteran\'s Administration' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Award Letter from Veteran\'s Administration');
  await page.getByRole('option', { name: 'Award Letter from Veteran\'s Administration', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Bank Records Showing Financial Dependence on Spouse');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Bank Records Showing Financial Dependence on Spouse' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Bank Records Showing Financial Dependence on Spouse');
  await page.getByRole('option', { name: 'Bank Records Showing Financial Dependence on Spouse', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Bank Statements');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Bank Statements' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Bank Statements');
  await page.getByRole('option', { name: 'Bank Statements', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Baptismal Record');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Baptismal Record' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Baptismal Record');
  await page.getByRole('option', { name: 'Baptismal Record', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Birth Certificate');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Birth Certificate' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Birth Certificate');
  await page.getByRole('option', { name: 'Birth Certificate', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Cat 1 or 2: Separation Notice');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Cat 1 or 2: Separation Notice' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Cat 1 or 2: Separation Notice');
  await page.getByRole('option', { name: 'Cat 1 or 2: Separation Notice', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Cat 1 or 2: UC Records');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Cat 1 or 2: UC Records' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Cat 1 or 2: UC Records');
  await page.getByRole('option', { name: 'Cat 1 or 2: UC Records', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Cat 12: NDWG Documentation showing proof of eligibility');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Cat 12: NDWG Documentation showing proof of eligibility' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Cat 12: NDWG Documentation showing proof of eligibility');
  await page.getByRole('option', { name: 'Cat 12: NDWG Documentation showing proof of eligibility', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Cat 3: WARN notice or letter of authorization from State Admin');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Cat 3: WARN notice or letter of authorization from State Admin' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Cat 3: WARN notice or letter of authorization from State Admin');
  await page.getByRole('option', { name: 'Cat 3: WARN notice or letter of authorization from State Admin', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Cat 4: Documentation of "General Announcement"');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Cat 4: Documentation of "General Announcement"' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Cat 4: Documentation of "General Announcement"');
  await page.getByRole('option', { name: 'Cat 4: Documentation of "General Announcement"', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Cat 5: A debt-to-asset ratio sufficiently high to be indicative of the likely insolvency of the farm, ranch or business');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Cat 5: A debt-to-asset ratio sufficiently high to be indicative of the likely insolvency of the farm, ranch or business' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Cat 5: A debt-to-asset ratio sufficiently high to be indicative of the likely insolvency of the farm, ranch or business');
  await page.getByRole('option', { name: 'Cat 5: A debt-to-asset ratio sufficiently high to be indicative of the likely insolvency of the farm, ranch or business', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Cat 5: Entry of individual into bankruptcy proceedings');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Cat 5: Entry of individual into bankruptcy proceedings' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Cat 5: Entry of individual into bankruptcy proceedings');
  await page.getByRole('option', { name: 'Cat 5: Entry of individual into bankruptcy proceedings', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Cat 5: Inability to make payments on loans secured by tangible business assets');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Cat 5: Inability to make payments on loans secured by tangible business assets' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Cat 5: Inability to make payments on loans secured by tangible business assets');
  await page.getByRole('option', { name: 'Cat 5: Inability to make payments on loans secured by tangible business assets', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Cat 5: Inability to obtain capital necessary to continue operations');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Cat 5: Inability to obtain capital necessary to continue operations' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Cat 5: Inability to obtain capital necessary to continue operations');
  await page.getByRole('option', { name: 'Cat 5: Inability to obtain capital necessary to continue operations', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Cat 5: Other events indicative of the likely insolvency of the farm, ranch, or business');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Cat 5: Other events indicative of the likely insolvency of the farm, ranch, or business' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Cat 5: Other events indicative of the likely insolvency of the farm, ranch, or business');
  await page.getByRole('option', { name: 'Cat 5: Other events indicative of the likely insolvency of the farm, ranch, or business', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Cat 5: Proof of failure of the farm, business, or ranch to return a profit during preceeding 12 months');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Cat 5: Proof of failure of the farm, business, or ranch to return a profit during preceeding 12 months' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Cat 5: Proof of failure of the farm, business, or ranch to return a profit during preceeding 12 months');
  await page.getByRole('option', { name: 'Cat 5: Proof of failure of the farm, business, or ranch to return a profit during preceeding 12 months', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Cat 5: Receipt of Notice of Foreclosure or intent to foreclose');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Cat 5: Receipt of Notice of Foreclosure or intent to foreclose' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Cat 5: Receipt of Notice of Foreclosure or intent to foreclose');
  await page.getByRole('option', { name: 'Cat 5: Receipt of Notice of Foreclosure or intent to foreclose', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Cat 6: Is verified in Barriers - Displaced Homemaker');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Cat 6: Is verified in Barriers - Displaced Homemaker' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Cat 6: Is verified in Barriers - Displaced Homemaker');
  await page.getByRole('option', { name: 'Cat 6: Is verified in Barriers - Displaced Homemaker', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Cat 7: Case file documents active duty Armed Forces spouse employment loss related to duty station change');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Cat 7: Case file documents active duty Armed Forces spouse employment loss related to duty station change' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Cat 7: Case file documents active duty Armed Forces spouse employment loss related to duty station change');
  await page.getByRole('option', { name: 'Cat 7: Case file documents active duty Armed Forces spouse employment loss related to duty station change', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Cat 8: Case file documents active duty Armed Forces spouse is unemployed/underemployed and having difficulty obtaining/upgrading employment');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Cat 8: Case file documents active duty Armed Forces spouse is unemployed/underemployed and having difficulty obtaining/upgrading employment' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Cat 8: Case file documents active duty Armed Forces spouse is unemployed/underemployed and having difficulty obtaining/upgrading employment');
  await page.getByRole('option', { name: 'Cat 8: Case file documents active duty Armed Forces spouse is unemployed/underemployed and having difficulty obtaining/upgrading employment', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Compensation Award Letter');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Compensation Award Letter' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Compensation Award Letter');
  await page.getByRole('option', { name: 'Compensation Award Letter', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Copy of Diploma, Credential, or Degree');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Copy of Diploma, Credential, or Degree' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Copy of Diploma, Credential, or Degree');
  await page.getByRole('option', { name: 'Copy of Diploma, Credential, or Degree', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Court Award Letter');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Court Award Letter' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Court Award Letter');
  await page.getByRole('option', { name: 'Court Award Letter', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Court or Probation Officer Referral or Written Statement');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Court or Probation Officer Referral or Written Statement' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Court or Probation Officer Referral or Written Statement');
  await page.getByRole('option', { name: 'Court or Probation Officer Referral or Written Statement', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Court Records');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Court Records' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Court Records');
  await page.getByRole('option', { name: 'Court Records', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Criminal Justice System Documentation (Juvenile or Adult)');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Criminal Justice System Documentation (Juvenile or Adult)' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Criminal Justice System Documentation (Juvenile or Adult)');
  await page.getByRole('option', { name: 'Criminal Justice System Documentation (Juvenile or Adult)', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('DD-214');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'DD-214' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('DD-214');
  await page.getByRole('option', { name: 'DD-214', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Department of Defense Records Cross-Match');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Department of Defense Records Cross-Match' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Department of Defense Records Cross-Match');
  await page.getByRole('option', { name: 'Department of Defense Records Cross-Match', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Divorce Records');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Divorce Records' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Divorce Records');
  await page.getByRole('option', { name: 'Divorce Records', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Driver\'s License');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Driver\'s License' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Driver\'s License');
  await page.getByRole('option', { name: 'Driver\'s License', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Electronic Records');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Electronic Records' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Electronic Records');
  await page.getByRole('option', { name: 'Electronic Records', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Employer Statement/Contact');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Employer Statement/Contact' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Employer Statement/Contact');
  await page.getByRole('option', { name: 'Employer Statement/Contact', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Family Bible');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Family Bible' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Family Bible');
  await page.getByRole('option', { name: 'Family Bible', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Family or Business Financial Records');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Family or Business Financial Records' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Family or Business Financial Records');
  await page.getByRole('option', { name: 'Family or Business Financial Records', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Family Size Verification Form');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Family Size Verification Form' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Family Size Verification Form');
  await page.getByRole('option', { name: 'Family Size Verification Form', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Federal Bonding Program Application');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Federal Bonding Program Application' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Federal Bonding Program Application');
  await page.getByRole('option', { name: 'Federal Bonding Program Application', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Hospital Record of Birth');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Hospital Record of Birth' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Hospital Record of Birth');
  await page.getByRole('option', { name: 'Hospital Record of Birth', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Housing Authority Verification');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Housing Authority Verification' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Housing Authority Verification');
  await page.getByRole('option', { name: 'Housing Authority Verification', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('ID Card (Federal, State, Local or Tribal)');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'ID Card (Federal, State, Local or Tribal)' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('ID Card (Federal, State, Local or Tribal)');
  await page.getByRole('option', { name: 'ID Card (Federal, State, Local or Tribal)', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Income Verification Form');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Income Verification Form' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Income Verification Form');
  await page.getByRole('option', { name: 'Income Verification Form', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Justice System Records');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Justice System Records' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Justice System Records');
  await page.getByRole('option', { name: 'Justice System Records', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Medical Card Showing Cash Grant Status');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Medical Card Showing Cash Grant Status' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Medical Card Showing Cash Grant Status');
  await page.getByRole('option', { name: 'Medical Card Showing Cash Grant Status', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Medical Records');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Medical Records' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Medical Records');
  await page.getByRole('option', { name: 'Medical Records', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('NGB-22 Form documenting Title 10 Federal Active Duty Service');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'NGB-22 Form documenting Title 10 Federal Active Duty Service' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('NGB-22 Form documenting Title 10 Federal Active Duty Service');
  await page.getByRole('option', { name: 'NGB-22 Form documenting Title 10 Federal Active Duty Service', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Notice of Layoff');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Notice of Layoff' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Notice of Layoff');
  await page.getByRole('option', { name: 'Notice of Layoff', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Other Federal or State ID with SSN');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Other Federal or State ID with SSN' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Other Federal or State ID with SSN');
  await page.getByRole('option', { name: 'Other Federal or State ID with SSN', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Passport');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Passport' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Passport');
  await page.getByRole('option', { name: 'Passport', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Pay Stubs');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Pay Stubs' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Pay Stubs');
  await page.getByRole('option', { name: 'Pay Stubs', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Pension Statement');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Pension Statement' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Pension Statement');
  await page.getByRole('option', { name: 'Pension Statement', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Public Assistance Benefit Receipt Verification');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Public Assistance Benefit Receipt Verification' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Public Assistance Benefit Receipt Verification');
  await page.getByRole('option', { name: 'Public Assistance Benefit Receipt Verification', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Public Assistance Check');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Public Assistance Check' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Public Assistance Check');
  await page.getByRole('option', { name: 'Public Assistance Check', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Public Assistance Database Cross-Match');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Public Assistance Database Cross-Match' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Public Assistance Database Cross-Match');
  await page.getByRole('option', { name: 'Public Assistance Database Cross-Match', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Public Assistance Referral');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Public Assistance Referral' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Public Assistance Referral');
  await page.getByRole('option', { name: 'Public Assistance Referral', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Public Assistance/Social Service Records');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Public Assistance/Social Service Records' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Public Assistance/Social Service Records');
  await page.getByRole('option', { name: 'Public Assistance/Social Service Records', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Quarterly Estimated Tax for Self-Employed Persons');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Quarterly Estimated Tax for Self-Employed Persons' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Quarterly Estimated Tax for Self-Employed Persons');
  await page.getByRole('option', { name: 'Quarterly Estimated Tax for Self-Employed Persons', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Rapid Response List');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Rapid Response List' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Rapid Response List');
  await page.getByRole('option', { name: 'Rapid Response List', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Records from Education Institution');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Records from Education Institution' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Records from Education Institution');
  await page.getByRole('option', { name: 'Records from Education Institution', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Refugee Assistance Records');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Refugee Assistance Records' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Refugee Assistance Records');
  await page.getByRole('option', { name: 'Refugee Assistance Records', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Remove Verification Box');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Remove Verification Box' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Remove Verification Box');
  await page.getByRole('option', { name: 'Remove Verification Box', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Report of Transfer or Discharge Paper');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Report of Transfer or Discharge Paper' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Report of Transfer or Discharge Paper');
  await page.getByRole('option', { name: 'Report of Transfer or Discharge Paper', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('RESEA or WPRS Referral');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'RESEA or WPRS Referral' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('RESEA or WPRS Referral');
  await page.getByRole('option', { name: 'RESEA or WPRS Referral', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('School 504 Records');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'School 504 Records' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('School 504 Records');
  await page.getByRole('option', { name: 'School 504 Records', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('School ID Card');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'School ID Card' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('School ID Card');
  await page.getByRole('option', { name: 'School ID Card', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('School IEP');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'School IEP' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('School IEP');
  await page.getByRole('option', { name: 'School IEP', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('School Records');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'School Records' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('School Records');
  await page.getByRole('option', { name: 'School Records', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Secondary or Postsecondary Education database Cross-Match');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Secondary or Postsecondary Education database Cross-Match' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Secondary or Postsecondary Education database Cross-Match');
  await page.getByRole('option', { name: 'Secondary or Postsecondary Education database Cross-Match', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Signed File Documentation with Information Obtained from Education or Training Provider');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Signed File Documentation with Information Obtained from Education or Training Provider' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Signed File Documentation with Information Obtained from Education or Training Provider');
  await page.getByRole('option', { name: 'Signed File Documentation with Information Obtained from Education or Training Provider', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Signed Follow-Up Survey Response from Program Participant');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Signed Follow-Up Survey Response from Program Participant' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Signed Follow-Up Survey Response from Program Participant');
  await page.getByRole('option', { name: 'Signed Follow-Up Survey Response from Program Participant', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Signed Letter from Parent/Guardian');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Signed Letter from Parent/Guardian' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Signed Letter from Parent/Guardian');
  await page.getByRole('option', { name: 'Signed Letter from Parent/Guardian', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Spouse\'s Death Record');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Spouse\'s Death Record' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Spouse\'s Death Record');
  await page.getByRole('option', { name: 'Spouse\'s Death Record', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Spouse\'s Layoff Notice');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Spouse\'s Layoff Notice' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Spouse\'s Layoff Notice');
  await page.getByRole('option', { name: 'Spouse\'s Layoff Notice', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Spouse\'s Permanent Change of Station (PCS) Orders');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Spouse\'s Permanent Change of Station (PCS) Orders' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Spouse\'s Permanent Change of Station (PCS) Orders');
  await page.getByRole('option', { name: 'Spouse\'s Permanent Change of Station (PCS) Orders', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('SSN Card');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'SSN Card' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('SSN Card');
  await page.getByRole('option', { name: 'SSN Card', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Stamped Post Office Receipt of Selective Service Registration');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Stamped Post Office Receipt of Selective Service Registration' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Stamped Post Office Receipt of Selective Service Registration');
  await page.getByRole('option', { name: 'Stamped Post Office Receipt of Selective Service Registration', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('State Agency Records Cross-Match');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'State Agency Records Cross-Match' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('State Agency Records Cross-Match');
  await page.getByRole('option', { name: 'State Agency Records Cross-Match', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('State MIS Database Cross-Match');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'State MIS Database Cross-Match' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('State MIS Database Cross-Match');
  await page.getByRole('option', { name: 'State MIS Database Cross-Match', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('State UI Database Cross-Match');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'State UI Database Cross-Match' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('State UI Database Cross-Match');
  await page.getByRole('option', { name: 'State UI Database Cross-Match', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('UI Claim Documents');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'UI Claim Documents' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('UI Claim Documents');
  await page.getByRole('option', { name: 'UI Claim Documents', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Verification from Employer');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Verification from Employer' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Verification from Employer');
  await page.getByRole('option', { name: 'Verification from Employer', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Veterans Adminstration (VA) Letter');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Veterans Adminstration (VA) Letter' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Veterans Adminstration (VA) Letter');
  await page.getByRole('option', { name: 'Veterans Adminstration (VA) Letter', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Veterans Service Database Cross-Match');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Veterans Service Database Cross-Match' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Veterans Service Database Cross-Match');
  await page.getByRole('option', { name: 'Veterans Service Database Cross-Match', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();


  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Work Permit');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('row', { name: 'Work Permit' }).getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('Work Permit');
  await page.getByRole('option', { name: 'Work Permit', exact: true }).click();
  await expect (page.getByRole('button', { name: 'Update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
 
});

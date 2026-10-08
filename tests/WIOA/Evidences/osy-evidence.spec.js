
const { test, expect } =
  require('@playwright/test');
  require('dotenv').config();
//This test is written by Jade of Team Eagle
const documents = [
"Assessment Test Results",
"Authorization to Receive Cash Public Assistance",
"Caseworker or Support Provider Letter",
"Court or Probation Officer Referral or Written Statement",
"Criminal Justice System Documentation (Juvenile or Adult)",
"Federal Bonding Program Application",
"Foster Care Agency Referral",
"Free or Reduced Lunch Form",
"Medical Card Showing Cash Grant Status",
"Needs Assessment",
"Public Assistance Benefit Receipt Verification",
"Public Assistance Check",
"Public Assistance Database Cross-Match",
"Public Assistance Eligibility Verification",
"Public Assistance Referral",
"Public Assistance/Social Service Records",
"Records from Education Institution",
"Refugee Assistance Records",
"School 504 Records",
"School IEP",
"Self-Attestation",
"Shelter or Social Service Agency Referral or Written Statement",
"Signed Individual Service Strategy/Individual Employment Plan",
"Signed Intake Application or Enrollment Form",
"Social Services Agency Written Confirmation",
"Staff Verified based upon Address",
"WIC Eligibility Verification",
];

test('all-evidence', async ({ page }) => {

    //await page.goto(process.env.WYO_OLDDEV_LOGIN); // DEV
  await page.goto(process.env.WYO_PPP_LOGIN);    // PPP
  /////////// Login for Admin///////////
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_WYO_EMAIL); 
  await page.getByRole('textbox', { name: 'Password' }).click();

  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OLD_DEV); // DEV and New DEV
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);  // PPP
  
  await page.getByRole('button', { name: 'Login' }).click();
  //login//
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.pause(); // select an individual and navigate to the Evidences tab, then resume

  /////////////////// ALL OTHER VERIFYING DOCUMENTS ////////////

  for (const docName of documents) {
    await page.getByRole('button', { name: 'Upload Document' }).click();
    await page.getByRole('textbox', { name: 'Document Name *' }).click();
    await page.getByRole('textbox', { name: 'Document Name *' }).fill(docName);
    {
      const fileChooserPromise = page.waitForEvent('filechooser');
      await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
      const fileChooser = await fileChooserPromise;
      await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this document
    }
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();
    await page.getByRole('row', { name: docName }).getByLabel('more').click();
    await page.getByRole('menuitem', { name: 'Verify' }).click();
    await page.waitForTimeout(2000);
    await page.getByText('Select an evidence typeSelect').click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Select an evidence type' }).fill(docName);
    await page.getByRole('option', { name: docName, exact: true }).click();
    await expect(page.getByRole('button', { name: 'Update' })).toBeEnabled();
    await page.getByRole('button', { name: 'Update' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();
    await page.pause();
  }
});

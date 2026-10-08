import { test, expect } from '@playwright/test';
//This test is written by Jade of Team Eagle

const documents = [
  
  //"Assessment Test Results",
  //"Receive Cash Public Assistance ",
  //"Award Letter from Veteran",
  //"Bank Records Showing Financial",
  //"Bank Statements",
  //"Baptismal Record",
  //"Birth Certificate",
  //"Cat 1 or 2: Separation Notice",
  //"Cat 1 or 2: UC Records",
  //"Cat 12: NDWG Documentation",
  "Cat 3: WARN notice or letter",
  "Cat 4: Documentation",
  "Cat 5: A debt-to-asset ratio",
  "Cat 5: Entry of individual",
  "Cat 5: Inability to make pay",
  "Cat 5: Inability to obtain capital",
  "Cat 5: Other events indicative",
  "Cat 5: Proof of failure of the",
  "Cat 5: Receipt of Notice of",
  "Cat 6: Is verified in Barrier",
  "Cat 7: Case file documents active",
  "Cat 8: Case file documents active",
  "Compensation Award Letter",
  "Copy of Diploma, Credential",
  "Court Award Letter",
  "Court or Probation Officer",
  "Court Records",
  "Criminal Justice System",
  "DD-214",
  "Department of Defense Records",
  "Divorce Records",
  "Driver's License",
  "Electronic Records",
  "Employer Statement/Contact",
  "Family Bible",
  "Family or Business Financial",
  "Family Size Verification Form",
  "Federal Bonding Program",
  "Free or Reduced Lunch",
  "Foster Care Agency Referral",
  "Hospital Record of Birth",
  "Housing Authority Verification",
  "Income Verification Form",
  "Justice System Records",
  "Medical Card Showing Cash Grant",
  "Medical Records",
  "Needs Assessment",
  "NGB-22 Form documenting Title",
  "Notice of Layoff",
  "Other Federal or State ID with SSN",
  "Passport",
  "Pay Stubs",
  "Pension Statement",
  "Public Assistance Benefit Rece",
  "Public Assistance Check",
  "Public Assistance Database Cr",
  "Public Assistance Eligibility",
  "Public Assistance Referral",
  "Public Assistance/Socia",
  "Quarterly Estimated Tax",
  "Rapid Response List",
  "Records from Educational Institut",
  "Refugee Assistance Records",
  "Report of Transfer or Dischar",
  "RESEA or WPRS Referral",
  "School 504 Records",
  "School ID Card",
  "School IEP",
  "School Records",
  "Screen Printout of the Selective",
  "Secondary or Postsecondary Educa",
  "Selective Service Acknowle",
  "Verification Form (Form 3A)",
  "Self-Attestation",
  "Shelter or Social Service Agency",
  "Signed File Documentation with",
  "Signed Follow-Up Survey Response",
  "Signed Individual Service Strategy",
  "Signed Intake Application or ",
  "Signed Letter from Parent/Guardian",
  "Social Services Agency Written",
  "Spouse's Death Record",
  "Spouse's Layoff Notice",
  "Spouse's Permanent Change of",
  "SSN Card",
  "Staff Verified based upon",
  "Stamped Post Office Receipt of",
  "State Agency Records Cross-Match",
  "State MIS Database Cross-Match",
  "State UI Database Cross-Match",
  "UI Claim Documents",
  "Verification from Employer",
  "Veterans Service Database Cross",
  "Work Permit",
  "ID Card (Federal, State",
  "Selective Service Registration", // check
];


test('all-evidence', async ({ page }) => {
  test.setTimeout(15 * 60 * 1000);
  
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
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).click(); 
  /////////////////// ALL OTHER VERIFYING DOCUMENTS ////////////
  await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Evidences' }).click();

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
    await page.waitForLoadState('domcontentloaded');
    await page.getByRole('textbox', { name: 'Select an evidence type' }).pressSequentially(docName, {delay: 100});
    //await page.getByRole('option', { name: docName, exact: true }).click();
    //await page.getByRole('option', { name: docName }).click();
    //await expect(page.getByRole('button', { name: 'Update' })).toBeEnabled();
    //await page.getByRole('button', { name: 'Update' }).click();
    //await page.getByRole('button', { name: 'Yes' }).click();
    //await page.waitForTimeout(3000);
    const option = page.getByRole('option', { name: docName });
    await option.waitFor({ state: 'visible' });
    await option.click();

    // Give the enable-check a fair timeout in case it depends on an async validation call
    await expect(page.getByRole('button', { name: 'Update' })).toBeEnabled({ timeout: 10000 });
    await page.getByRole('button', { name: 'Update' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();
  }
});

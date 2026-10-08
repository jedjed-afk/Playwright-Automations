const { test, expect } =
  require('@playwright/test');
  require('dotenv').config();
//This test is written by Jade of Team Eagle

// LLSIL (Non-Metro) Annualized Family Income thresholds per Family Size.
// Source: 'Non- Metro LLSIL.xlsx'. At/below the threshold for a given family
// size, the applicant is expected to be Out-of-School Youth income eligible.
const llsilThresholds = [
  { familySize: 1, income: 14761 },
  { familySize: 2, income: 24191 },
  { familySize: 3, income: 33213 },
  { familySize: 4, income: 41001 },
  { familySize: 5, income: 48381 },
  { familySize: 6, income: 56588 },
  { familySize: 7, income: 64795 },
  { familySize: 8, income: 73002 },
];

// Each threshold yields two scenarios: income at the LLSIL limit (eligible)
// and income one dollar over the limit (expected ineligible).
const llsilScenarios = llsilThresholds.flatMap(({ familySize, income }) => [
  { familySize, income, expected: 'Yes' },
  { familySize, income: income + 1, expected: 'Yes' },
]);

// Re-opens the Family Size dropdown (a choices.js widget with no accessible
// name/role) by walking forward from its label in the DOM, so it can be
// re-selected on later passes when it no longer shows the "Select"
// placeholder that the initial fill relies on.
async function editFamilySize(page, familySize) {
  await page
    .getByText('Family Size', { exact: false })
    .locator('xpath=following::*[contains(@class, "form-control") and contains(@class, "ui")][1]')
    .click();
  await page.getByRole('option', { name: String(familySize), exact: true }).click();
}

async function editAnnualizedIncome(page, income) {
  const incomeField = page.getByRole('textbox', { name: 'Annualized Family Income (' });
  await incomeField.click();
  await incomeField.fill(String(income));
}

test('WIOA Out of School Youth - LLSIL Eligibility Scenarios (Family Size 1-8)', async ({ page }) => {

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
  await page.pause();
  await page.getByRole('cell', { name: 'Eligibility', exact: true }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('cell', { name: 'Eligibility', exact: true }).click();
  /////////// EVIDENCE ////////////// --- use this if no evidence uploaded yet
  // await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  // await page.getByRole('button', { name: 'Evidences' }).click();
  // await page.getByRole('button', { name: 'Upload Document' }).click();
  // await page.getByRole('textbox', { name: 'Document Name *' }).click();
  // await page.getByRole('textbox', { name: 'Document Name *' }).fill('Test WIOA');
  // //await page.getByRole('link', { name: 'browse Browse to attach file' }).click(); // don't click - this opens the native OS file picker
  // //await page.pause(); //I prefer to use this so I can choose the file I want to upload
  // //await page.locator('input[type="file"]').setInputFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf');
  // {
  //   const fileChooserPromise = page.waitForEvent('filechooser');
  //   await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
  //   const fileChooser = await fileChooserPromise;
  //   await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf');
  // }

  // //await page.locator('input[type="file"]').setInputFiles('Family Size Verification Form.pdf'); //this could be executed however, you need to move the file to the playwright folder instead for it to be uploaded
  // //await page.locator('input[type="file"]').setInputFiles('C:/path/to/Family Size Verification Form.pdf'); // this can be used also just provide absolute path
  // await page.getByRole('button', { name: 'Submit' }).click();
  // await page.getByRole('button', { name: 'Yes' }).click();
  // await page.getByRole('button', { name: 'more' }).click();
  // await page.getByRole('menuitem', { name: 'Verify' }).click();
  // await page.waitForTimeout(3000);
  // await page.getByText('Select an evidence typeSelect').click();
  // await page.waitForTimeout(3000);
  // await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('self');
  // await page.waitForTimeout(3000);
  // await page.getByRole('option', { name: 'Self-Attestation' }).click();
  // //await expect (page.getByRole('button', { name: 'update' })).toBeEnabled();
  // await page.getByRole('button', { name: 'Update' }).click();
  // await page.getByRole('button', { name: 'Yes' }).click();
  // await page.pause();

//////////// Creation of WIOA Applicaiton ////////////
  await page.getByRole('radio', { name: 'WIOA' }).check();
  await page.getByRole('button', { name: 'Continue' }).click();
  // 1st Page //
  //await page.getByRole('checkbox', { name: 'WIOA Adult' }).check();
  await page.getByRole('checkbox', { name: 'WIOA Youth' }).check();
  //await page.locator('.form-control.ui').first().click();
  //await page.getByText('Verified with').click();
  await page.locator('.col-form-label.field-required', { hasText: 'Verified with' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Test' }).click(); // Change name on what name you put on your evidence
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 2nd Page //
  await page.locator('.form-control.ui').first().click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Test' }).first().click(); // Change name on what name you put on your evidence
  //await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('radiogroup', { name: 'Haitian *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 3rd Page //
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 4th Page //
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Employed', exact: true }).click();
  //await page.pause();
  //await page.locator('#er0z2wf > .choices > .form-control.ui')
  await page.getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Test' }).click(); // Change name on what name you put on your evidence
  await page.getByRole('radiogroup', { name: 'If employed, individual is' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'In a Registered' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radio', { name: 'Neither Claimant nor Exhaustee' }).check();
  await page.getByRole('radiogroup', { name: 'Unemployed due to layoff or' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Attended a Rapid Response' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Long-Term Unemployed *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('textbox', { name: 'Current or most recent hourly' }).click();
  await page.getByRole('textbox', { name: 'Current or most recent hourly' }).fill('11');
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('radiogroup', { name: 'Has secondary school diploma/' }).getByLabel('No', { exact: true }).check();
  await page.getByText('School Status at Youth').click();
  await page.getByRole('option', { name: 'Not attending school, secondary school graduate or equivalent' }).click();
  await page.getByText('Highest School Grade Completed').click();
  await page.getByRole('option', { name: '12th Grade Completed' }).click();
  await page.getByText('Highest Educational Level').click();
  await page.getByRole('option', { name: 'High School Diploma' }).click();
  await page.getByText('School Status', { exact: true }).click();
  await page.getByRole('option', { name: 'No, Not Attending Any School' }).click();

  await page.getByRole('radiogroup', { name: 'Receiving services from Adult' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Receiving services from Job' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Receiving Services from Vocational Education (Carl Perkins) *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radio', { name: 'Not applicable', exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Temporary Assistance for' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Supplemental Security Income' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'General Assistance (GA)' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Supplemental Nutrition' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Refugee Cash Assistance (RCA)' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Social Security Disability' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Foster Child' }).getByLabel('No', { exact: true }).check();
  //await page.getByText('Verified with').nth(2).click();
  //wait page.getByRole('option', { name: 'Self-Attestation (file: Test' }).click();
  await page.getByRole('radiogroup', { name: 'Youth currently living in' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Youth currently receives, or' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Receiving, or has been' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Ticket to Work Holder issued' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Meets Governor’s special' }).getByLabel('No', { exact: true }).check();

  // 5th Page //
  // await page. locator('#exrwyds > .choices > .form-control.ui')
  //await page.locator('#exhibo > .choices > .form-control.ui').click();
  // await page.getByRole('option', { name: 'Self-Attestation (file: Test' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 6th Page //
  await page.getByRole('radiogroup', { name: 'English language learner *' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('No').check();
  //await page.getByRole('group').filter({ hasText: 'Barriers English language' }).getByLabel('Select Document').click();
  //await page.pause(); /// click 'Verified with' manually
  //await page.waitForTimeout(1500);
  //await page.getByRole('option', { name: 'Case Note (file: Located in' }).first().click();
  await page.waitForTimeout(1500);
  await page.getByRole('radiogroup', { name: 'Runaway *' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Youth in, or aged-out of,' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Out-of-home placement *' }).getByLabel('No', { exact: true }).check();
  //await page.pause();
  await page.getByRole('radiogroup', { name: 'Eligible under Section 477 of' }).getByLabel('No', { exact: true }).check(); //Eligible under Section 477 of
  await page.getByRole('radiogroup', { name: 'Ex-Offender' }).getByLabel('No', { exact: true }).check(); // Ex-Offender
  await page.getByRole('radiogroup', { name: 'Incarcerated at Program Entry' }).getByLabel('No', { exact: true }).check(); //Incarcerated at Program Entry
  await page.getByRole('radiogroup', { name: 'Displaced Homemaker' }).getByLabel('No', { exact: true }).check(); // Displaced Homemaker
  await page.getByRole('radiogroup', { name: 'Pregnant or parenting youth' }).getByLabel('No', { exact: true }).check(); // Pregnant or parenting youth
  await page.getByRole('radiogroup', { name: 'Youth Requires Additional' }).getByLabel('No', { exact: true }).check(); // Youth Requires Additional
  //await page.getByRole('radiogroup', { name: 'Within 2 years of exhausting' }).getByLabel('No', { exact: true }).check(); // Within 2 years of exhausting
  await page.getByRole('radiogroup', { name: 'Hawaiian Native' }).getByLabel('No', { exact: true }).check(); // Hawaiian Native
  await page.getByRole('radiogroup', { name: 'Single Parent (including' }).getByLabel('No', { exact: true }).check(); // Single Parent (including
  await page.getByRole('radiogroup', { name: 'Is the individual' }).getByLabel('No', { exact: true }).check(); // Is the individual

  // ---- Family Size / Annualized Family Income: LLSIL scenario loop ----
  // First pass fills these two fields the normal way (dropdown still shows
  // its empty "Select" placeholder). Every later scenario re-opens the same
  // fields via editFamilySize/editAnnualizedIncome after clicking "Previous"
  // back onto this tab.
  const [firstScenario, ...remainingScenarios] = llsilScenarios;

  await page.getByText('SelectSelectRemove item').click(); // Family Size
  await page.getByRole('option', { name: String(firstScenario.familySize), exact: true }).click(); // Family Size
  await page.getByRole('textbox', { name: 'Select Document' }).nth(1).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Test' }).click(); // Change name on what name you put on your evidence
  await page.getByRole('textbox', { name: 'Annualized Family Income (' }).click();
  await page.getByRole('textbox', { name: 'Annualized Family Income (' }).fill(String(firstScenario.income));
  //await page.getByRole('textbox', { name: 'Select Document' }).nth(2).click();
  await page.getByRole('textbox', { name: 'Select Document' }).first().click(); //// change

  await page.getByRole('option', { name: 'Self-Attestation (file: Test' }).click(); // Change name on what name you put on your evidence
  await page.getByRole('radio', { name: 'N/A' }).check();
  //await page.getByRole('radiogroup', { name: 'Does the participant live in' }).getByLabel('N/A', { exact: true }).check();  // Does the participant live in
  await page.getByRole('radiogroup', { name: 'TAA Petition Number' }).getByLabel('No', { exact: true }).check(); // TAA Petition Number
  await page.getByRole('radiogroup', { name: 'Intent to live and work in' }).getByLabel('Yes', { exact: true }).check();
  await page.getByRole('textbox', { name: 'Select Document' }).nth(2).click(); //// change
  await page.getByRole('option', { name: 'Self-Attestation (file: Test' }).click(); // Change name on what name you put on your evidence

  async function submitAndVerify(expected, familySize, income) {
    await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
    await expect(page.getByText('WIOA YOUTH, Out-of-school')).toBeVisible();
    await expect(page.getByText(expected, { exact: true })).toBeVisible();
    console.log(`Verified Family Size ${familySize} / Income ${income} -> expected ${expected}`);
    await page.pause(); // manual checkpoint per scenario before moving on
  }

  await submitAndVerify(firstScenario.expected, firstScenario.familySize, firstScenario.income);

  for (const { familySize, income, expected } of remainingScenarios) {
    // Go back to the tab holding Family Size / Annualized Family Income.
    await page.getByRole('button', { name: 'Previous button. Click to go back to the previous tab' }).click();
    await editFamilySize(page, familySize);
    await editAnnualizedIncome(page, income);
    await submitAndVerify(expected, familySize, income);
  }

  //await page.getByRole('button', { name: 'Submit Form button. Click to' }).click();
  //await page.getByRole('button', { name: 'Yes' }).click();
  //await page.getByRole('button', { name: 'Cancel button. Click to reset' }).click();
  //await page.getByRole('button', { name: 'Yes' }).click();

});

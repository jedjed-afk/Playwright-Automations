const { test, expect } =
  require('@playwright/test');
  require('dotenv').config();
//This test is written by Jade of Team Eagle



const llsilThresholds = [
  //Metro (the test individual is in a Non-Metro county, confirmed live on PPP -- switch blocks if you use a Metro individual)
  { familySize: 1, income: 14761 },
  { familySize: 2, income: 24191 },
  { familySize: 3, income: 33213 },
  { familySize: 4, income: 41001 },
  { familySize: 5, income: 48381 },
  { familySize: 6, income: 56588 },
  { familySize: 7, income: 64795 },
  { familySize: 8, income: 73002 },
  
  //Non-Metro
  //{ familySize: 1, income: 14465 },
  //{ familySize: 2, income: 23707 },
  //{ familySize: 3, income: 32549 },
  //{ familySize: 4, income: 40174 },
  //{ familySize: 5, income: 47415 },
  //{ familySize: 6, income: 55454 },
  //{ familySize: 7, income: 63493 },
  //{ familySize: 8, income: 71532 },
];

// Each threshold yields two scenarios: income at the LLSIL limit (eligible)
// and income one dollar over the limit (expected ineligible).
const llsilScenarios = llsilThresholds.flatMap(({ familySize, income }) => [
  { familySize, income, expected: 'Yes' },
  { familySize, income: income + 1, expected: 'No' },
]);

// Re-opens the Family Size dropdown (a choices.js widget with no accessible
// name/role) by scoping to the select component whose label is exactly
// "Family Size". The app clears Family Size every time you click "Previous"
// back onto this tab, so it must be re-selected on every pass.
async function editFamilySize(page, familySize) {
  await page
    .locator('.formio-component-select')
    .filter({ has: page.getByText('Family Size', { exact: true }) })
    .locator('.form-control.ui')
    .click();
  await page.getByRole('option', { name: String(familySize), exact: true }).click();
}

async function editAnnualizedIncome(page, income) {
  const incomeField = page.getByRole('textbox', { name: 'Annualized Family Income (' });
  await incomeField.click();
  await incomeField.fill(String(income));
}

test('WIOA Adult - LLSIL Eligibility Scenarios (Family Size 1-8)', async ({ page }) => {
   test.setTimeout(15 * 60 * 1000);

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
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).click();


  /////////// EVIDENCE ////////////// --- use this if no evidence uploaded yet
  //await page.getByRole('tab', { name: 'Forms & Documents' }).waitFor({ state: 'visible', timeout: 60000 }); // profile can be slow to render on PPP
  //await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  //await page.getByRole('button', { name: 'Evidences' }).click();
  //// Pagination label reads e.g. "1–10 of 96"; its total is used below to know when the new upload has landed in the table
  //const evidenceTotal = page.getByText(/^\d+–\d+ of \d+$/);
  //const evidenceCountBefore = Number((await evidenceTotal.textContent()).split(' of ')[1]);
  //await page.getByRole('button', { name: 'Upload Document' }).click();
  //await page.getByRole('textbox', { name: 'Document Name *' }).click();
  //await page.getByRole('textbox', { name: 'Document Name *' }).fill('Test WIOA');
  ////await page.getByRole('link', { name: 'browse Browse to attach file' }).click(); // don't click - this opens the native OS file picker
  ////await page.pause(); //I prefer to use this so I can choose the file I want to upload
  ////await page.locator('input[type="file"]').setInputFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf');
  //{
  //  const fileChooserPromise = page.waitForEvent('filechooser');
  //  await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
  //  const fileChooser = await fileChooserPromise;
  //  await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf');
  //}

  ////await page.locator('input[type="file"]').setInputFiles('Family Size Verification Form.pdf'); //this could be executed however, you need to move the file to the playwright folder instead for it to be uploaded
  ////await page.locator('input[type="file"]').setInputFiles('C:/path/to/Family Size Verification Form.pdf'); // this can be used also just provide absolute path
  //await page.getByRole('button', { name: 'Submit' }).click();
  //await page.getByRole('button', { name: 'Yes' }).click();
  //await expect(evidenceTotal).toHaveText(new RegExp(` of ${evidenceCountBefore + 1}$`), { timeout: 30000 });
  //// Every evidence row has its own "more" button; the newest upload is listed first with status "In Review"
  //await page.getByRole('row', { name: /Test WIOA.*In Review/ }).first().getByRole('button', { name: 'more' }).click();
  //await page.getByRole('menuitem', { name: 'Verify' }).click();
  //await page.waitForTimeout(3000);
  //await page.getByText('Select an evidence typeSelect').click();
  //await page.waitForTimeout(3000);
  //await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('self');
  //await page.waitForTimeout(3000);
  //await page.getByRole('option', { name: 'Self-Attestation' }).click();
  ////await expect (page.getByRole('button', { name: 'update' })).toBeEnabled();
  //await page.getByRole('button', { name: 'Update' }).click();
  //await page.getByRole('button', { name: 'Yes' }).click();
  // await page.pause();

//////////// Creation of WIOA Applicaiton ////////////
 // Select a Program options: CCP | Wagner Peyser | WIOA | WIN | IDST | SNAP E&T
  await page.getByRole('radio', { name: 'WIOA' }).check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('checkbox', { name: 'WIOA Adult' }).check();
  await page.locator('.form-control.ui').first().click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click(); // Change name on what name you put on your evidence
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 2nd Page //
  await page.locator('.form-control.ui').first().click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).first().click(); // Change name on what name you put on your evidence
  //await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // Haitian options: Yes | No | Information Not Provided
  await page.getByRole('radiogroup', { name: 'Haitian *' }).getByLabel('No', { exact: true }).check();
  // (this page also has these fields, not interacted with here:
  //  Gender: Male | Female | I Do Not Wish to Answer
  //  Sexual Orientation: Straight/Heterosexual | Gay/Lesbian or Homosexual | Bisexual | Another sexual orientation | I Do Not Wish to Answer
  //  Registered with the Selective Service: Yes | Documented exemption from registration | No | Not Applicable | Registration Waived
  //  Citizenship: Citizen of U.S. or U.S. Territory | U.S. Permanent Resident | Alien/Refugee Lawfully Admitted to U.S. | None of the above
  //  Hispanic (radio): Yes | No | Information Not Provided
  //  Race (checkboxes): White | Black or African American | Asian | American Indian or Alaskan Native | Native Hawaiian or other Pacific Islander | Middle Eastern or North African | Unknown
  //  Do you wish to disclose a disability? (radio): Yes, I have a disability. | No, I do not have a disability. | I do not wish to disclose my disability status.)
  await page.pause();
  await page.getByRole('button', { name: 'Cancel button. Click to reset' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();

  await page.getByRole('button', { name: 'Edit application' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click(); ////// it will go to 4th Page

  ////////////////
  //await page.getByRole('button', { name: 'Next button. Click to go to' }).click();


  // 3rd Page //
  // (Veterans Information page, not interacted with here:
  //  I am the spouse or family caregiver of a wounded, ill, or injured current service member...: Yes | No | I do not wish to disclose
  //  My spouse was a veteran who died because of a service-connected disability: Yes | No | I do not wish to disclose
  //  My spouse has (or my deceased spouse had) a total and permanent service-connected disability rating...: Yes | No | I do not wish to disclose
  //  My active-duty spouse is listed as one of the following and has been for more than 90 days: Missing in action | Captured in the line of duty by a hostile force | Forcibly detained or interned by a foreign government power | None of the above
  //  Are you currently in the U.S. Military or a Veteran?: Yes | No -- answering Yes reveals a large additional Eligible Veteran Status branch)
  //await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 4th Page //
  // Employment Status options: Employed | Employed, but Received Notice of Termination of Employment or Military Separation is pending | Not in labor force, not actively looking for work (including Incarcerated Individuals) | Unemployed, looking for work
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Employed', exact: true }).click();
  //await page.pause();
  //await page.locator('#er0z2wf > .choices > .form-control.ui')
  await page.getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click(); // Change name on what name you put on your evidence
  await page.keyboard.press('Escape')
  // If employed, individual is under-employed options: Yes | No | Not Applicable
  await page.getByRole('radiogroup', { name: 'If employed, individual is' }).getByLabel('No', { exact: true }).check();
  // In a Registered Apprenticeship Program options: Yes | No | Not Disclosed
  await page.getByRole('radiogroup', { name: 'In a Registered' }).getByLabel('No', { exact: true }).check();
  // Unemployment Eligibility Status options: Neither Claimant nor Exhaustee | Eligible Claimant referred by WPRS (disabled) | Claimant | Exhaustee | Unknown
  await page.getByRole('radio', { name: 'Neither Claimant nor Exhaustee' }).check();
  // Unemployed due to layoff or termination? options: Yes | No
  await page.getByRole('radiogroup', { name: 'Unemployed due to layoff or' }).getByLabel('No', { exact: true }).check();
  // Attended a Rapid Response Orientation? options: Yes | No
  await page.getByRole('radiogroup', { name: 'Attended a Rapid Response' }).getByLabel('No', { exact: true }).check();
  // Long-Term Unemployed options: Yes, Unemployed ≥ 27 consecutive weeks | Yes, other Disaster DWG LTU definition | Yes, Unemployed ≥ 27 non-consecutive weeks in past 12 months | No
  await page.getByRole('radiogroup', { name: 'Long-Term Unemployed *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('textbox', { name: 'Current or most recent hourly' }).click();
  await page.getByRole('textbox', { name: 'Current or most recent hourly' }).fill('11');
  await page.pause();


  await page.getByRole('button', { name: 'Cancel button. Click to reset' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'Edit application' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click(); /// 5th page

  // 5th Page //
  // Highest School Grade Completed options: No School Grades Completed | 1st Grade Completed | 2nd Grade Completed | 3rd Grade Completed | 4th Grade Completed | 5th Grade Completed | 6th Grade Completed | 7th Grade Completed | 8th Grade Completed | 9th Grade Completed | 10th Grade Completed | 11th Grade Completed | 12th Grade Completed
  await page.getByLabel('data[highestSchoolGradeCompleted]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: '12th Grade Completed' }).click();
  // Highest Educational Level Completed options: High School Diploma | High School Equivalency Diploma | Certificate of Attendance/Completion (Disabled Individuals) | 1 + year of college or technical schooling | Vocational School Certificate | Associate's Degree | Bachelor's Degree | Higher than bachelor's degree | No Education Level Completed
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'High School Diploma' }).click();
  // await page. locator('#exrwyds > .choices > .form-control.ui')

  //await page.locator('#exhibo > .choices > .form-control.ui').click();
  // await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();

  // the schooll should be yes for the field to open
  // this "Verified with" belongs to School Status, kept at its default -- School Status options: Yes, Attending High School, Junior High, Middle or Elementary School | Yes, Attending An Alternative High School | Yes, Attending College or a Technical or Vocational School | No, Not Attending Any School
  await page.getByRole('textbox', { name: 'Select Document' }).nth(1).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click(); // Change name on what name you put on your evidence
  await page.keyboard.press('Escape');
  // Receiving services from Adult Education (WIOA Title II) options: Yes | No | Did not self-identify
  await page.getByRole('radiogroup', { name: 'Receiving services from Adult' }).getByLabel('No', { exact: true }).check();
  // Receiving services from Job Corps options: Yes | No | Did not self-identify
  await page.getByRole('radiogroup', { name: 'Receiving services from Job' }).getByLabel('No', { exact: true }).check();
  // Receiving Services from Vocational Education (Carl Perkins) options: Yes | No | Did not self-identify
  await page.getByRole('radiogroup', { name: 'Receiving Services from Vocational Education (Carl Perkins) *' }).getByLabel('No', { exact: true }).check();
  // Individualized Education Program Participant options: Current IEP | Previous IEP | Not applicable
  await page.getByRole('radio', { name: 'Not applicable', exact: true }).check();
  // Temporary Assistance for Needy Families (TANF) options: Yes | No
  await page.getByRole('radiogroup', { name: 'Temporary Assistance for' }).getByLabel('No', { exact: true }).check();
  // Supplemental Security Income (SSI) options: Yes | No
  await page.getByRole('radiogroup', { name: 'Supplemental Security Income' }).getByLabel('No', { exact: true }).check();
  // General Assistance (GA) options: Yes | No
  await page.getByRole('radiogroup', { name: 'General Assistance (GA) *' }).getByLabel('No', { exact: true }).check();
  // Supplemental Nutrition Assistance Program (SNAP) options: Yes | No
  await page.getByRole('radiogroup', { name: 'Supplemental Nutrition' }).getByLabel('No', { exact: true }).check(); // Supplemental Nutrition
  // Refugee Cash Assistance (RCA) options: Yes | No
  await page.getByRole('radiogroup', { name: 'Refugee Cash Assistance (RCA)' }).getByLabel('No', { exact: true }).check();  // Refugee Cash Assistance (RCA)
  // Social Security Disability Income (SSDI) options: Yes | No
  await page.getByRole('radiogroup', { name: 'Social Security Disability' }).getByLabel('No', { exact: true }).check();  // Social Security Disability
  // Receiving, or has been notified will receive, Pell Grant options: Yes | No | Not Applicable
  await page.getByRole('radiogroup', { name: 'Receiving, or has been' }).getByLabel('No', { exact: true }).check();  // Receiving, or has been
  // Ticket to Work Holder issued by the Social Security Administration options: Yes | No | Unknown
  await page.getByRole('radiogroup', { name: 'Ticket to Work Holder issued' }).getByLabel('No', { exact: true }).check();   // Ticket to Work Holder issued
  // Meets Governor's special barriers to employment options: Yes | No
  await page.getByRole('radiogroup', { name: 'Meets Governor’s special' }).getByLabel('No', { exact: true }).check(); // Meets Governor’s special
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 6th Page //
  // English language learner options: Yes | No
  await page.getByRole('radiogroup', { name: 'English language learner *' }).getByLabel('No').check();
  // Basic Skills deficient/Low levels of literacy options: Yes | No
  // Must be No for this test: "Yes" makes WIOA Adult eligible regardless of income, which hides the LLSIL result
  await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('No').check();
  //await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('Yes').check();
  //await page.getByRole('group').filter({ hasText: 'Barriers English language' }).getByLabel('Select Document').click();
  //await page.pause(); /// click 'Verified with' manually
  //await page.waitForTimeout(1500);
  //await page.getByRole('option', { name: 'Case Note (file: Located in' }).first().click();
  //await page.keyboard.press('Escape');
  // Homeless options: Yes | No (not interacted with here, left at default No)
  // Runaway options: Yes | No
  await page.getByRole('radiogroup', { name: 'Runaway *' }).getByLabel('No').check();
  // Youth in, or aged-out of, Foster Care options: No | Yes, currently in | Yes, aged out
  await page.getByRole('radiogroup', { name: 'Youth in, or aged-out of,' }).getByLabel('No').check();
  // Out-of-home placement options: Yes | No | Not Provided
  await page.getByRole('radiogroup', { name: 'Out-of-home placement *' }).getByLabel('No', { exact: true }).check();
  //await page.pause();
  // Eligible under Section 477 of the Social Security Act options: Yes | No | Not Provided
  await page.getByRole('radiogroup', { name: 'Eligible under Section 477 of' }).getByLabel('No', { exact: true }).check(); //Eligible under Section 477 of
  // Ex-Offender options: Yes | No | Did not self-identify
  await page.getByRole('radiogroup', { name: 'Ex-Offender' }).getByLabel('No', { exact: true }).check(); // Ex-Offender
  // Incarcerated at Program Entry options: Yes | No
  await page.getByRole('radiogroup', { name: 'Incarcerated at Program Entry' }).getByLabel('No', { exact: true }).check(); //Incarcerated at Program Entry
  // Displaced Homemaker options: Yes | No
  await page.getByRole('radiogroup', { name: 'Displaced Homemaker' }).getByLabel('No', { exact: true }).check(); // Displaced Homemaker
  // Pregnant or parenting youth options: Yes | No
  await page.getByRole('radiogroup', { name: 'Pregnant or parenting youth' }).getByLabel('No', { exact: true }).check(); // Pregnant or parenting youth
  // Youth Requires Additional Assistance... options: Yes | No
  await page.getByRole('radiogroup', { name: 'Youth Requires Additional' }).getByLabel('No', { exact: true }).check(); // Youth Requires Additional
  // Within 2 years of exhausting TANF lifetime eligibility options: Yes | No
  await page.getByRole('radiogroup', { name: 'Within 2 years of exhausting' }).getByLabel('No', { exact: true }).check(); // Within 2 years of exhausting
  // Hawaiian Native options: Yes | No
  await page.getByRole('radiogroup', { name: 'Hawaiian Native' }).getByLabel('No', { exact: true }).check(); // Hawaiian Native
  // Single Parent (including single pregnant women) options: Yes | No | Not Disclosed
  await page.getByRole('radiogroup', { name: 'Single Parent (including' }).getByLabel('No', { exact: true }).check(); // Single Parent (including
  // Meets Qualifying Barrier for Employment (QEB) options: Yes | No (disabled, auto-calculated field, not interacted with)
  // Is the individual participating in the National Farmworker Jobs Program (WIOA Sec. 167)? options: Yes | No
  await page.getByRole('radiogroup', { name: 'Is the individual' }).getByLabel('No', { exact: true }).check(); // Is the individual

  // ---- Family Size / Annualized Family Income: LLSIL scenario loop ----
  // First pass fills these two fields the normal way (dropdown still shows
  // its empty "Select" placeholder). Every later scenario re-opens the same
  // fields via editFamilySize/editAnnualizedIncome after clicking "Previous"
  // back onto this tab.
  const [firstScenario, ...remainingScenarios] = llsilScenarios;

  await page.getByText('SelectSelectRemove item').click(); // Family Size
  await page.getByRole('option', { name: String(firstScenario.familySize), exact: true }).click(); // Family Size
  // "Select Document" boxes visible on this page (Basic Skills = No): nth(0) Family Size, nth(1) Annualized Income, nth(2) Intent to live and work
  await page.getByRole('textbox', { name: 'Select Document' }).nth(0).click(); // Family Size - Verified with
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click(); // Change name on what name you put on your evidence
  await page.keyboard.press('Escape'); // close the list only after picking, otherwise it stays open over the income field
  await page.getByRole('textbox', { name: 'Annualized Family Income (' }).click();
  await page.getByRole('textbox', { name: 'Annualized Family Income (' }).fill(String(firstScenario.income));
  await page.getByRole('textbox', { name: 'Select Document' }).nth(1).click(); // Annualized Income - Verified with
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click(); // Change name on what name you put on your evidence
  await page.keyboard.press('Escape');
  await page.getByRole('radio', { name: 'N/A' }).check();
  //await page.getByRole('radiogroup', { name: 'Does the participant live in' }).getByLabel('N/A', { exact: true }).check();  // Does the participant live in
  await page.getByRole('radiogroup', { name: 'TAA Petition Number' }).getByLabel('No', { exact: true }).check(); // TAA Petition Number
  await page.getByRole('radiogroup', { name: 'Intent to live and work in' }).getByLabel('Yes', { exact: true }).check();
  await page.getByRole('textbox', { name: 'Select Document' }).nth(2).click(); // Intent to live and work - Verified with
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click(); // Change name on what name you put on your evidence
  await page.keyboard.press('Escape');
  async function submitAndVerify(expected, familySize, income) {
    await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
    await page.waitForTimeout(2000);
    await expect(page.getByText('WIOA ADULT')).toBeVisible();
    // Scope Yes/No to the WIOA ADULT result so it can't match some other "Yes"/"No" text on the page
    await expect(page.getByText('WIOA ADULT').locator('xpath=..').getByText(expected, { exact: true })).toBeVisible();
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

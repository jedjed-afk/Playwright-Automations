const { test, expect } =
  require('@playwright/test');
  require('dotenv').config();

test('WIOA Out of Shool Youth', async ({ page }) => {
  test.setTimeout(15 * 60 * 1000); // long scenario loops + slowMo exceed the default 30s test timeout

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
  //await page.pause(); // temporarily disabled for automated verification run
  await page.getByRole('cell', { name: 'WP', exact: true }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('cell', { name: 'WP', exact: true }).click(); 
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
  // // await page.pause();

//////////// Creation of WIOA Applicaiton ////////////
  await page.getByRole('radio', { name: 'WIOA' }).scrollIntoViewIfNeeded();
  await page.getByRole('radio', { name: 'WIOA' }).dispatchEvent('click');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(500); // let the sticky wizard-nav settle before interacting with fields near the top
  // 1st Page //
  //await page.getByRole('checkbox', { name: 'WIOA Adult' }).dispatchEvent('click');
  await page.getByRole('checkbox', { name: 'WIOA Youth' }).dispatchEvent('click'); // sticky wizard-nav permanently overlaps this checkbox at default viewport size; dispatchEvent bypasses hit-testing
  //await page.locator('.form-control.ui').first().click();
  //await page.getByText('Verified with').click();
  //await page.locator('.col-form-label.field-required', { hasText: 'Verified with' }).click();
 // await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click(); // Change name on what name you put on your evidence
  await page.locator('.form-control.ui').first().click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.waitForTimeout(500); // let the sticky wizard-nav settle before interacting with fields near the top
  // 2nd Page //
  await page.locator('.form-control.ui').first().click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).first().click(); // Change name on what name you put on your evidence
  //await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('radiogroup', { name: 'Haitian *' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.waitForTimeout(500); // let the sticky wizard-nav settle before interacting with fields near the top
  // 3rd Page //
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.waitForTimeout(500); // let the sticky wizard-nav settle before interacting with fields near the top
  // 4th Page //
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Employed', exact: true }).click();
  //await page.pause();
  //await page.locator('#er0z2wf > .choices > .form-control.ui')
  await page.getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click(); // Change name on what name you put on your evidence
  await page.getByRole('radiogroup', { name: 'If employed, individual is' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await page.getByRole('radiogroup', { name: 'In a Registered' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await page.getByRole('radio', { name: 'Neither Claimant nor Exhaustee' }).dispatchEvent('click');
  await page.getByRole('radiogroup', { name: 'Unemployed due to layoff or' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await page.getByRole('radiogroup', { name: 'Attended a Rapid Response' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await page.getByRole('radiogroup', { name: 'Long-Term Unemployed *' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await page.getByRole('textbox', { name: 'Current or most recent hourly' }).click();
  await page.getByRole('textbox', { name: 'Current or most recent hourly' }).fill('11');
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.waitForTimeout(500); // let the sticky wizard-nav settle before interacting with fields near the top  
  await page.getByRole('radiogroup', { name: 'Has secondary school diploma/' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await page.getByText('School Status at Youth').click();
  await page.getByRole('option', { name: 'Not attending school, secondary school graduate or equivalent' }).click();
  await page.getByText('Highest School Grade Completed').click();
  await page.getByRole('option', { name: '12th Grade Completed' }).click();
  await page.getByText('Highest Educational Level').click();
  await page.getByRole('option', { name: 'High School Diploma' }).click();
  await page.getByText('School Status', { exact: true }).click();
  await page.getByRole('option', { name: 'No, Not Attending Any School' }).click();

  await page.getByRole('radiogroup', { name: 'Receiving services from Adult' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await page.getByRole('radiogroup', { name: 'Receiving services from Job' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await page.getByRole('radiogroup', { name: 'Receiving Services from Vocational Education (Carl Perkins) *' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await page.getByRole('radio', { name: 'Not applicable', exact: true }).dispatchEvent('click');
  await page.getByRole('radiogroup', { name: 'Temporary Assistance for' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await page.getByRole('radiogroup', { name: 'Supplemental Security Income' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await page.getByRole('radiogroup', { name: 'General Assistance (GA)' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await page.getByRole('radiogroup', { name: 'Supplemental Nutrition' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await page.getByRole('radiogroup', { name: 'Refugee Cash Assistance (RCA)' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await page.getByRole('radiogroup', { name: 'Social Security Disability' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await page.getByRole('radiogroup', { name: 'Foster Child' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  //await page.getByText('Verified with').nth(2).click();
  //wait page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.getByRole('radiogroup', { name: 'Youth currently living in' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await page.getByRole('radiogroup', { name: 'Youth currently receives, or' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await page.getByRole('radiogroup', { name: 'Receiving, or has been' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await page.getByRole('radiogroup', { name: 'Ticket to Work Holder issued' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await page.getByRole('radiogroup', { name: 'Meets Governor’s special' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  
  // 5th Page //
  // await page. locator('#exrwyds > .choices > .form-control.ui')
  //await page.locator('#exhibo > .choices > .form-control.ui').click();
  // await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.waitForTimeout(500); // let the sticky wizard-nav settle before interacting with fields near the top
  // 6th Page //
  await page.getByRole('radiogroup', { name: 'English language learner *' }).getByLabel('No').dispatchEvent('click');
  await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('Yes').dispatchEvent('click');
  await page.getByRole('group').filter({ hasText: 'Barriers English language' }).getByLabel('Select Document').click();
  //await page.pause(); /// click 'Verified with' manually
  await page.waitForTimeout(1500);
  await page.getByRole('option', { name: 'Case Note (file: Located in' }).first().click();
  await page.waitForTimeout(1500);
  await page.getByRole('radiogroup', { name: 'Runaway *' }).getByLabel('No').dispatchEvent('click');
  await page.getByRole('radiogroup', { name: 'Youth in, or aged-out of,' }).getByLabel('No').dispatchEvent('click');
  await page.getByRole('radiogroup', { name: 'Out-of-home placement *' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  //await page.pause();
  await page.getByRole('radiogroup', { name: 'Eligible under Section 477 of' }).getByLabel('No', { exact: true }).dispatchEvent('click'); //Eligible under Section 477 of
  await page.getByRole('radiogroup', { name: 'Ex-Offender' }).getByLabel('No', { exact: true }).dispatchEvent('click'); // Ex-Offender
  await page.getByRole('radiogroup', { name: 'Incarcerated at Program Entry' }).getByLabel('No', { exact: true }).dispatchEvent('click'); //Incarcerated at Program Entry
  await page.getByRole('radiogroup', { name: 'Displaced Homemaker' }).getByLabel('No', { exact: true }).dispatchEvent('click'); // Displaced Homemaker
  await page.getByRole('radiogroup', { name: 'Pregnant or parenting youth' }).getByLabel('No', { exact: true }).dispatchEvent('click'); // Pregnant or parenting youth
  await page.getByRole('radiogroup', { name: 'Youth Requires Additional' }).getByLabel('No', { exact: true }).dispatchEvent('click'); // Youth Requires Additional
  //await page.getByRole('radiogroup', { name: 'Within 2 years of exhausting' }).getByLabel('No', { exact: true }).dispatchEvent('click'); // Within 2 years of exhausting
  await page.getByRole('radiogroup', { name: 'Hawaiian Native' }).getByLabel('No', { exact: true }).dispatchEvent('click'); // Hawaiian Native
  await page.getByRole('radiogroup', { name: 'Single Parent (including' }).getByLabel('No', { exact: true }).dispatchEvent('click'); // Single Parent (including
  await page.getByRole('radiogroup', { name: 'Is the individual' }).getByLabel('No', { exact: true }).dispatchEvent('click'); // Is the individual

  // The "Family and Income" evidence dropdowns below sit near the bottom of this long tab.
  // Opening one of them can get the page stuck in a scroll-up/scroll-down loop (the choices.js
  // dropdown's own auto-scroll-into-view fights with the sticky wizard-nav footer) where the
  // option click never lands. In the app itself this only resolves once the wizard's "Continue"
  // (Next tab) button is clicked - which re-renders the tab and clears the stuck state. Clicking
  // "Previous" immediately afterwards brings us back to this same tab so the remaining fields can
  // still be filled in. clickOptionWithStuckDropdownRecovery() automates that recovery so the
  // script doesn't hang if/when the loop happens.
  async function clickOptionWithStuckDropdownRecovery(triggerLocator, optionLocator, timeout = 8000, maxAttempts = 3) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        // Both the opening click and the option click can get caught in the scroll-fight,
        // so neither is allowed to hang past `timeout` without a chance to recover.
        await triggerLocator.click({ timeout });
        await optionLocator.click({ timeout });
        await page.keyboard.press('Escape'); // the scroll-fight can leave the dropdown expanded even after a successful selection, blocking later fields
        return;
      } catch (e) {
        if (attempt === maxAttempts) break;
        // Stuck in the scroll loop - click Continue then Previous to break out of it and reset the tab,
        // which re-renders it and clears the stuck state, before retrying.
        await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
        await page.waitForTimeout(500);
        await page.getByRole('button', { name: 'Previous button. Click to go back to the previous tab' }).click();
        await page.waitForTimeout(500);
      }
    }
    // Last resort after repeated recovery cycles: force the clicks through,
    // bypassing Playwright's actionability/stability checks so the script
    // doesn't hang indefinitely on the scroll loop.
    await triggerLocator.click({ force: true });
    await optionLocator.click({ force: true });
    await page.keyboard.press('Escape');
  }

  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: '1', exact: true }).click();
  const familySizeDoc = page.getByRole('textbox', { name: 'Select Document' }).nth(1);
  await clickOptionWithStuckDropdownRecovery(familySizeDoc, page.getByRole('option', { name: 'Self-Attestation (file: Self-' })); // Change name on what name you put on your evidence
  await page.getByRole('textbox', { name: 'Annualized Family Income (' }).click();
  await page.getByRole('textbox', { name: 'Annualized Family Income (' }).fill('111111');
  const incomeDoc = page.getByRole('textbox', { name: 'Select Document' }).nth(2);
  await clickOptionWithStuckDropdownRecovery(incomeDoc, page.getByRole('option', { name: 'Self-Attestation (file: Self-' })); // Change name on what name you put on your evidence
  await page.getByRole('radio', { name: 'N/A' }).dispatchEvent('click');
  //await page.getByRole('radiogroup', { name: 'Does the participant live in' }).getByLabel('N/A', { exact: true }).dispatchEvent('click');  // Does the participant live in
  await page.getByRole('radiogroup', { name: 'TAA Petition Number' }).getByLabel('No', { exact: true }).dispatchEvent('click'); // TAA Petition Number
  await page.getByRole('radiogroup', { name: 'Intent to live and work in' }).getByLabel('Yes', { exact: true }).dispatchEvent('click');
  const intentDoc = page.getByRole('textbox', { name: 'Select Document' }).nth(3);
  await clickOptionWithStuckDropdownRecovery(intentDoc, page.getByRole('option', { name: 'Self-Attestation (file: Self-' })); // Change name on what name you put on your evidence
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.waitForTimeout(500); // let the sticky wizard-nav settle before interacting with fields near the top
  await expect(page.getByText('WIOA YOUTH, Out-of-school')).toBeVisible();
  await expect(page.getByText('Yes', { exact: true })).toBeVisible();
  // NOTE: "Submit Form" actually INITIATES the application (it triggers a
  // signature notification to the applicant), so it is not clicked on every
  // check below - only the Yes/No eligibility text is asserted for each
  // scenario. Uncomment these two lines if a real submission is ever needed.
  //await page.getByRole('button', { name: 'Submit Form button. Click to' }).click();
  //await page.getByRole('button', { name: 'Yes' }).click();

  // ---- Reusable helpers for the OSY barrier eligibility scenarios ----
  // Basis: 'OSY with Eligibility.xlsx' - column A is the qualifying question,
  // column B is the evidence that should be attached once it is answered Yes.
  // Each scenario: answer Yes + attach evidence -> verify eligible (Yes),
  // then answer No -> verify ineligible (No), mirroring the Basic Skills
  // deficient/Low check above.
  async function goPrevious(times) {
    for (let i = 0; i < times; i++) {
      await page.getByRole('button', { name: 'Previous button. Click to go back to the previous tab' }).click();
      await page.waitForTimeout(500); // let the sticky wizard-nav settle before interacting with fields near the top
    }
  }

  async function goNext(times) {
    for (let i = 0; i < times; i++) {
      await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.waitForTimeout(500); // let the sticky wizard-nav settle before interacting with fields near the top
    }
  }

  async function verifyEligibility(expected) {
    await expect(page.getByText('WIOA YOUTH')).toBeVisible();
    await expect(page.getByText(expected, { exact: true })).toBeVisible();
  }

  async function selectEvidence(group, evidenceName) {
    const doc = group.getByRole('textbox', { name: 'Select Document' });
    await clickOptionWithStuckDropdownRecovery(doc, page.getByRole('option', { name: `${evidenceName} (file: ${evidenceName})`, exact: true }));
  }

  const barriersGroup = () => page.getByRole('group').filter({ hasText: 'Barriers English language' });
  const publicAssistanceGroup = () => page.getByRole('group', { name: 'Public Assistance' });

  // ---- Basic Skills deficient/Low levels of literacy: revert to No ----
  // (tab is 1 "Previous" back from Applicant Eligibility)
  await goPrevious(1);
  await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await goNext(1);
  await verifyEligibility('No');

  // ---- "Education and Public Assistance" tab scenarios (2 tabs back) ----
  // SNAP/TANF/GA/RCA reveal an extra "Recipient" question (and SNAP also a
  // SNAP Employment & Training question) once answered Yes.
  const publicAssistanceScenarios = [
    {
      name: 'Supplemental Nutrition Assistance Program (SNAP)',
      radiogroupName: 'Supplemental Nutrition',
      evidence: 'Public Assistance Eligibility Verification',
      extraFields: async () => {
        await page.getByRole('radiogroup', { name: 'SNAP Recipient' }).getByLabel('Applicant', { exact: true }).dispatchEvent('click');
        await page.getByRole('radiogroup', { name: 'Receiving services under SNAP' }).getByLabel('No', { exact: true }).dispatchEvent('click');
      },
    },
    {
      name: 'Temporary Assistance for Needy Families (TANF)',
      radiogroupName: 'Temporary Assistance for',
      evidence: 'Public Assistance Benefit Receipt Verification',
      extraFields: async () => {
        await page.getByRole('radiogroup', { name: 'TANF Recipient' }).getByLabel('Applicant', { exact: true }).dispatchEvent('click');
      },
    },
    {
      name: 'General Assistance (GA)',
      radiogroupName: 'General Assistance (GA)',
      evidence: 'Authorization to Receive Cash Public Assistance',
      extraFields: async () => {
        await page.getByRole('radiogroup', { name: 'GA Recipient' }).getByLabel('Applicant', { exact: true }).dispatchEvent('click');
      },
    },
    {
      name: 'Refugee Cash Assistance (RCA)',
      radiogroupName: 'Refugee Cash Assistance (RCA)',
      evidence: 'Public Assistance Check',
      extraFields: async () => {
        await page.getByRole('radiogroup', { name: 'RCA Recipient' }).getByLabel('Applicant', { exact: true }).dispatchEvent('click');
      },
    },
    {
      name: 'Foster Child',
      radiogroupName: 'Foster Child',
      evidence: 'Social Services Agency Written Confirmation',
    },
    {
      name: 'High Poverty Area (Youth currently living in high-poverty area)',
      radiogroupName: 'Youth currently living in',
      evidence: 'Staff Verified based upon Address',
    },
    {
      name: 'Free or Reduced Lunch',
      radiogroupName: 'Youth currently receives, or',
      evidence: 'Free or Reduced Lunch Form',
    },
  ];

  for (const scenario of publicAssistanceScenarios) {
    await goPrevious(2);
    await page.getByRole('radiogroup', { name: scenario.radiogroupName }).getByLabel('Yes', { exact: true }).dispatchEvent('click');
    if (scenario.extraFields) await scenario.extraFields();
    await selectEvidence(publicAssistanceGroup(), scenario.evidence);
    await goNext(2);
    await verifyEligibility('Yes');

    await goPrevious(2);
    await page.getByRole('radiogroup', { name: scenario.radiogroupName }).getByLabel('No', { exact: true }).dispatchEvent('click');
    await goNext(2);
    await verifyEligibility('No');
  }

  // ---- "Barriers and Miscellaneous" tab scenarios (1 tab back) ----
  const barrierScenarios = [
    {
      name: 'English Language Learner',
      radiogroupName: 'English language learner',
      yesLabel: 'Yes',
      evidence: 'Assessment Test Results',
    },
    {
      name: 'Homeless',
      radiogroupName: 'Homeless',
      yesLabel: 'Yes',
      evidence: 'Shelter or Social Service Agency Referral or Written Statement',
    },
    {
      name: 'Ex-Offender',
      radiogroupName: 'Ex-Offender',
      yesLabel: 'Yes',
      evidence: 'Criminal Justice System Documentation (Juvenile or Adult)',
    },
    {
      name: 'Runaway',
      radiogroupName: 'Runaway *',
      yesLabel: 'Yes',
      evidence: 'Signed Intake Application or Enrollment Form',
    },
    {
      name: 'Youth in, or aged-out of, Foster Care',
      radiogroupName: 'Youth in, or aged-out of,',
      yesLabel: 'Yes, currently in',
      evidence: 'Foster Care Agency Referral',
    },
    {
      name: 'Out-of-home placement',
      radiogroupName: 'Out-of-home placement *',
      yesLabel: 'Yes',
      evidence: 'Self-Attestation',
    },
    {
      name: 'Eligible under Section 477 of the Social Security Act',
      radiogroupName: 'Eligible under Section 477 of',
      yesLabel: 'Yes',
      evidence: 'Needs Assessment',
    },
    {
      name: 'Pregnant or parenting youth',
      radiogroupName: 'Pregnant or parenting youth',
      yesLabel: 'Yes',
      evidence: 'WIC Eligibility Verification',
    },
  ];

  for (const scenario of barrierScenarios) {
    await goPrevious(1);
    await page.getByRole('radiogroup', { name: scenario.radiogroupName }).getByLabel(scenario.yesLabel, { exact: true }).dispatchEvent('click');
    await selectEvidence(barriersGroup(), scenario.evidence);
    await goNext(1);
    await verifyEligibility('Yes');

    await goPrevious(1);
    await page.getByRole('radiogroup', { name: scenario.radiogroupName }).getByLabel('No', { exact: true }).dispatchEvent('click');
    await goNext(1);
    await verifyEligibility('No');
  }

  // ---- Disability ("Demographic Information" tab, 5 tabs back) ----
  // Answering "Yes, I have a disability." reveals a larger sub-section;
  // the extra required questions are filled with neutral/No answers so the
  // form validates, since the Excel only maps Disability -> evidence.
  await goPrevious(5);
  await page.getByRole('radio', { name: 'Yes, I have a disability.' }).dispatchEvent('click');
  const disabilityGroup = page.getByRole('group', { name: 'Disability' });
  await selectEvidence(disabilityGroup, 'School 504 Records');
  await disabilityGroup.getByRole('checkbox', { name: 'Physical/Chronic Health Condition' }).dispatchEvent('click');
  await disabilityGroup.getByRole('radiogroup', { name: 'Received services from a State Developmental Disability Agency (SDDA)' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await disabilityGroup.getByRole('radiogroup', { name: 'Received services from a State or Local mental health agency (LSMHA)' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await disabilityGroup.getByRole('radiogroup', { name: 'Received Service from a Home' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await disabilityGroup
    .getByText('Received Disability Financial Capability', { exact: false })
    .locator('xpath=following::*[contains(@class, "form-control") and contains(@class, "ui")][1]')
    .click();
  await page.getByRole('option', { name: 'No', exact: true }).click();
  await disabilityGroup.getByRole('radiogroup', { name: 'Section 504 Plan' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await disabilityGroup.getByRole('radiogroup', { name: 'Received Services from Vocational Rehabilitation' }).getByLabel('No', { exact: true }).dispatchEvent('click');
  await goNext(5);
  await verifyEligibility('Yes');

  await goPrevious(5);
  await page.getByRole('radio', { name: 'No, I do not have a disability.' }).dispatchEvent('click');
  await goNext(5);
  await verifyEligibility('No');

  //await page.pause(); // temporarily disabled for automated verification run

});


  
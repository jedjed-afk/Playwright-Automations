const { test, expect } =
  require('@playwright/test');
  require('dotenv').config();
//This test is written by Jade of Team Eagle

// Test Cases
// Normal WIOA Adult Application using LLSIL Eligibility
// With Save and Close test on page 2 and 4 
// Verify Tabs that should be enabled or disabled, Status, Pecil Icon and Eligibility Status

////////////PRECONDITION/////////////////
//Check which ENV you are testing
//Replace Caseman, CenterMan, Jobseeker Email and Pass on .ENV
//Replace Jobseeker Name on .ENV
test('WIOA Application', async ({ page }) => {
   test.setTimeout(15 * 60 * 1000);

  //await page.goto(process.env.WYO_PPP_LOGIN);    // PPP
  await page.goto(process.env.WYO_OLDDEV_LOGIN); // DEV
  /////////// Login for Admin///////////
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_WYO_EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).click();

  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);  // PPP
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OLD_DEV_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  //login//
  
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.pause();
  //await page.getByRole('searchbox', { name: 'Search' }).click();
  //await page.getByRole('searchbox', { name: 'Search' }).fill('560471');
  //await page.getByRole('searchbox', { name: 'Search' }).fill(process.env.JOBSIK_NAME);
  //await page.getByRole('button', { name: 'search' }).click();
  //await page.waitForLoadState('domcontentloaded');
  //await page.waitForLoadState('networkidle');
  //await page.pause();
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).click(); 

  ////////////// EVIDENCE ////////////// --- use this if no evidence uploaded yet
  // await page.pause()
  await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Evidences' }).click();
  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Self-Attestation');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf');
  }

  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'more' }).click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(3000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('self');
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: 'Self-Attestation' }).click();
  await expect(page.getByRole('button', { name: 'update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();


//////////// Creation of WIOA Applicaiton ////////////

  // await page.getByRole('Summary', { name: 'Summary', exact: true }).click();
  await page.pause();
  // Select a Program options: CCP | Wagner Peyser | WIOA | WIN | IDST | SNAP E&T
  //await page.getByRole('radio', { name: 'WIOA' }).check();
  //await page.getByRole('button', { name: 'Continue' }).click();
  // 1st Page //
  // Select Sub-Program(s) options: WIOA Adult | WIOA Youth | WIOA DW | WIOA NDWG (disabled)
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
  
  await page.pause();
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
  await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('Yes').check();
  await page.getByRole('group').filter({ hasText: 'Barriers English language' }).getByLabel('Select Document').click();
  //await page.pause(); /// click 'Verified with' manually
  await page.waitForTimeout(1500);
  await page.getByRole('option', { name: 'Case Note (file: Located in' }).first().click();
  await page.waitForTimeout(1500);
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
  // Due to the individual's disability, they qualify as a Family of 1 options: Yes | No (not interacted with here, left at default No)
  // Family Size options: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: '1', exact: true }).click();
  await page.getByRole('textbox', { name: 'Select Document' }).nth(1).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click(); // Change name on what name you put on your evidence
  await page.getByRole('textbox', { name: 'Annualized Family Income (' }).click();
  await page.getByRole('textbox', { name: 'Annualized Family Income (' }).fill('11111');
  await page.getByRole('textbox', { name: 'Select Document' }).nth(2).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click(); // Change name on what name you put on your evidence
  // Does the participant live in a low-income census tract options: In low-income census tract | N/A
  await page.getByRole('radio', { name: 'N/A' }).check();
  //await page.getByRole('radiogroup', { name: 'Does the participant live in' }).getByLabel('N/A', { exact: true }).check();  // Does the participant live in
  // TAA Petition Number options: Yes | No
  await page.getByRole('radiogroup', { name: 'TAA Petition Number' }).getByLabel('No', { exact: true }).check(); // TAA Petition Number
  // Intent to live and work in the State of Wyoming Requirement Met options: Yes | No
  await page.getByRole('radiogroup', { name: 'Intent to live and work in' }).getByLabel('Yes', { exact: true }).check();
  await page.getByRole('textbox', { name: 'Select Document' }).nth(3).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click(); // Change name on what name you put on your evidence
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.pause();
  await expect(page.getByText('WIOA ADULT')).toBeVisible(); /// you can change this depending on what eligibility
  await expect(page.getByText('Yes', { exact: true })).toBeVisible(); /// you can change this depending on what expect if it is supposed to be eligible
  await page.getByRole('button', { name: 'Submit Form button. Click to' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  //await page.getByRole('button', { name: 'Cancel button. Click to reset' }).click();
  //await page.getByRole('button', { name: 'Yes' }).click();


    // 1. Check Status shows "Application Draft"
  const statusSection = page.locator('text=Status').locator('..');
  await expect(statusSection.getByText('Application Initiated')).toBeVisible();

  // Also check Application Status field within the summary card
  await expect(page.getByText('Application Status')).toBeVisible();
  await expect(page.getByText('Application Initiated')).toBeVisible();

  // 2. Check all tabs are disabled except "Application"
  const disabledTabs = [
    'Assessment',
    'IEP',
    'Activities',
    'Training Justification',
    'MSG / EFL',
    'Credentials',
    'Funding',
    'Closure',
    'Exit / Outcome',
    'Follow Up',
    'Case Notes',
  ];

  for (const tabName of disabledTabs) {
    const tab = page.getByRole('tab', { name: tabName });
    await expect(tab).toBeDisabled();
    // If tabs aren't real <button disabled> elements, fall back to class/attribute check:
    // await expect(tab).toHaveClass(/disabled/);
    // await expect(tab).toHaveAttribute('aria-disabled', 'true');
  }

  // Confirm "Application" tab itself IS enabled/active
  const applicationTab = page.getByRole('tab', { name: 'Application', exact: true });
  await expect(applicationTab).toBeEnabled();

  // 3. Check pencil/edit icon is present in Application Summary
  const summaryCard = page.locator('text=APPLICATION SUMMARY').locator('..');
  const editIcon = summaryCard.locator('.css-jvn5oe [focusable]');
  await expect(editIcon).toBeVisible();

  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click();
  await page.waitForTimeout(3500);

  //login for jobseeker   ///////////////////////////////////////////////////////////////////////
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.JOBSIK_EMAIL); //EDIT -- input email of the created jobseeker
  await page.getByRole('textbox', { name: 'Password' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.JOBSIK_PASS); //EDIT -- input passsword
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('button', { name: 'My Profile' }).click();
  await page.getByRole('menuitem', { name: 'View Profile' }).click();
  await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Signature' }).click();
  await page.pause(); /// sign manually
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'Back to all Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Applications' }).click();
  await page.pause(); /// click the 3-dot menu of the correct application

  // Locate the specific status Summary
 // const statusSummary = page.getByRole('Summary', { name: 'Application Initiated', exact: true });

  // Assert it exists (fails clearly if it's missing, rather than silently doing nothing)
 // await expect(statusSummary).toBeVisible(); /// change this 

  // Get the row containing that Summary
  //const row = statusSummary.locator('xpath=ancestor::tr[1]');

  // Click the 3-dot menu button within that row
  //await row.getByRole('button').last().click();

  const statusSummary = page.locator('tbody tr')
    .filter({ hasText: 'WIOA' })
    .filter({ hasText: 'Application Initiated' })
    .filter({ hasText: 'Participant sign is pending' });

    await statusSummary.getByRole('button', { name: 'more' }).click();

  await page.getByRole('menuitem', { name: 'Sign Application' }).click();
  await page.getByRole('checkbox', { name: 'I agree to sign the' }).click();
  await page.getByRole('button', { name: 'Save & Close' }).click();
  //getByRole('button').filter({ hasText: /^$/ }) check if needed
  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click();
  await page.waitForTimeout(3500);
  
  // login again to sign application as case manager  ///////////////////////////////////////////////
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_WYO_EMAIL); 
  await page.getByRole('textbox', { name: 'Password' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OLD_DEV_PASS); // DEV and New DEV
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  //login//
  
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.pause(); 
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).click(); 
  await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Applications' }).click();

  
  //const signatureStatus = page.getByRole('Summary', {name: 'Case Manager sign is pending',exact: true});
  //await expect(signatureStatus).toBeVisible();
  //const signatureRow = signatureStatus.locator('xpath=ancestor::tr[1]');
  //await signatureRow.getByRole('button').last().click();


   const casemanSign = page.locator('tbody tr')
    .filter({ hasText: 'WIOA' })
    .filter({ hasText: 'Application Initiated' })
    .filter({ hasText: 'Case Manager sign is pending' });

    await casemanSign.getByRole('button', { name: 'more' }).click();

  await page.getByRole('menuitem', { name: 'Sign Application' }).click();
  await page.getByRole('checkbox', { name: 'I agree to sign the' }).click();
  await page.getByRole('button', { name: 'Save & Close' }).click();
  //getByRole('button').filter({ hasText: /^$/ }) check if needed

  // Submit Application
  await page.getByRole('tab', { name: 'Programs Overview' }).click();
  await page.getByText('Application Initiated').click(); /// this could not be used id there are other application initiated. Just pick the application after the pause
  await page.getByRole('button', { name: 'Submit for Approval' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  // Logout
  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click();
  await page.waitForTimeout(4000);

  // login Center Manager for Eligibility    ///////////////////////////////////////////////////////////
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CENTERMAN_EMAIL); //PPP
  //await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CENTERMAN_EMAIL); 
  await page.getByRole('textbox', { name: 'Password' }).click();
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.CENTERMAN_PPP_PASS);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.CENTERMAN_DEV_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).click(); 
  await page.getByRole('tab', { name: 'Programs Overview' }).click();
  await page.getByText('Submitted for Approval').click(); /// this could be used or just use pause 
  //await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Determine Eligibility' }).click();
  await page.getByRole('radio', { name: 'Approve' }).click();
  await page.getByRole('checkbox', { name: 'I agree to sign the' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.pause();


  /////////////////////// Application Summary //////////////////////////

  await page.getByRole('button', { name: 'Preview application' }).click();
   // --- Page 1 ---
 await expect(page.getByRole('checkbox', { name: 'WIOA Adult' })).toBeChecked({ timeout: 20000 });
  // Evidence document for WIOA Adult
  await expect(page.locator('.form-control.ui').first()).toHaveText(/Self-Attestation/);
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // --- Page 2 ---
  // Evidence document (first "Select Document" style control on this page)
  await expect(page.locator('.form-control.ui').first()).toHaveText(/Self-Attestation/);
  await expect(page.getByRole('radiogroup', { name: 'Haitian *' }).getByLabel('No', { exact: true })).toBeChecked();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // -- Page 3 --
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // --- Page 4 ---
  // Employment status dropdown
  await expect(
    page.getByText('EmployedRemove item')
  ).toBeVisible();
  // Evidence document for employment status
  // Note: the "Select Document" textbox is the Choices.js search-input clone, which
  // is always empty; the selected value renders in its parent .form-control.ui container.
  await expect(page.getByRole('textbox', { name: 'Select Document' }).locator('xpath=..')).toHaveText(/Self-Attestation/);
  await expect(page.getByRole('radiogroup', { name: 'If employed, individual is' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'In a Registered' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radio', { name: 'Neither Claimant nor Exhaustee' })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Unemployed due to layoff or' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Attended a Rapid Response' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Long-Term Unemployed *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('textbox', { name: 'Current or most recent hourly' })).toHaveValue('11');
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // --- Page 5 ---
  await expect(page.getByLabel('data[highestSchoolGradeCompleted]')).toHaveText(/12th Grade Completed/);
  // "High School Diploma" also appears as an unselected option in the closed dropdown's
  // hidden option list, so a bare text search resolves to multiple elements (strict-mode
  // violation). Scope to the selected-value control for the specific field instead.
  await expect(
    page.locator('select[name="data[highestEducationalLevelCompleted]"]')
      .locator('xpath=ancestor::div[contains(@class,"choices")][1]')
      .locator('.form-control.ui')
  ).toHaveText(/High School Diploma/);
  await expect(page.getByRole('radiogroup', { name: 'Receiving services from Adult' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Receiving services from Job' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Receiving Services from Vocational Education (Carl Perkins) *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radio', { name: 'Not applicable', exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Temporary Assistance for' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Supplemental Security Income' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'General Assistance (GA) *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Supplemental Nutrition' }).getByLabel('No', { exact: true })).toBeChecked(); // Supplemental Nutrition
  await expect(page.getByRole('radiogroup', { name: 'Refugee Cash Assistance (RCA)' }).getByLabel('No', { exact: true })).toBeChecked(); // Refugee Cash Assistance (RCA)
  await expect(page.getByRole('radiogroup', { name: 'Social Security Disability' }).getByLabel('No', { exact: true })).toBeChecked(); // Social Security Disability
  await expect(page.getByRole('radiogroup', { name: 'Receiving, or has been' }).getByLabel('No', { exact: true })).toBeChecked(); // Receiving, or has been
  await expect(page.getByRole('radiogroup', { name: 'Ticket to Work Holder issued' }).getByLabel('No', { exact: true })).toBeChecked(); // Ticket to Work Holder issued
  await expect(page.getByRole('radiogroup', { name: 'Meets Governor’s special' }).getByLabel('No', { exact: true })).toBeChecked(); // Meets Governor's special
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // --- Page 6 ---
  await expect(page.getByRole('radiogroup', { name: 'English language learner *' }).getByLabel('No')).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('Yes')).toBeChecked();
  // Verify the uploaded/selected evidence document for that field
  await expect(page.getByRole('group').filter({ hasText: 'Barriers English language' }).getByLabel('Select Document').locator('xpath=..')).toHaveText(/Case Note/);
  await expect(page.getByRole('radiogroup', { name: 'Runaway *' }).getByLabel('No')).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Youth in, or aged-out of,' }).getByLabel('No')).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Out-of-home placement *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Eligible under Section 477 of' }).getByLabel('No', { exact: true })).toBeChecked(); // Eligible under Section 477 of
  await expect(page.getByRole('radiogroup', { name: 'Ex-Offender' }).getByLabel('No', { exact: true })).toBeChecked(); // Ex-Offender
  await expect(page.getByRole('radiogroup', { name: 'Incarcerated at Program Entry' }).getByLabel('No', { exact: true })).toBeChecked(); // Incarcerated at Program Entry
  await expect(page.getByRole('radiogroup', { name: 'Displaced Homemaker' }).getByLabel('No', { exact: true })).toBeChecked(); // Displaced Homemaker
  await expect(page.getByRole('radiogroup', { name: 'Pregnant or parenting youth' }).getByLabel('No', { exact: true })).toBeChecked(); // Pregnant or parenting youth
  await expect(page.getByRole('radiogroup', { name: 'Youth Requires Additional' }).getByLabel('No', { exact: true })).toBeChecked(); // Youth Requires Additional
  await expect(page.getByRole('radiogroup', { name: 'Within 2 years of exhausting' }).getByLabel('No', { exact: true })).toBeChecked(); // Within 2 years of exhausting
  await expect(page.getByRole('radiogroup', { name: 'Hawaiian Native' }).getByLabel('No', { exact: true })).toBeChecked(); // Hawaiian Native
  await expect(page.getByRole('radiogroup', { name: 'Single Parent (including' }).getByLabel('No', { exact: true })).toBeChecked(); // Single Parent (including
  await expect(page.getByRole('radiogroup', { name: 'Is the individual' }).getByLabel('No', { exact: true })).toBeChecked(); // Is the individual
  // Family size dropdown value. A bare text search for "1" also matches the same
  // digit inside the closed dropdown's hidden option list (strict-mode violation),
  // so scope to the selected-value control for this specific field.
  await expect(
    page.locator('select[name="data[familySize115]"]')
      .locator('xpath=ancestor::div[contains(@class,"choices")][1]')
      .locator('.form-control.ui .choices__item span')
  ).toHaveText('1');
  // Evidence document for family size
  await expect(page.getByRole('textbox', { name: 'Select Document' }).nth(1).locator('xpath=..')).toHaveText(/Self-Attestation/);
  // Annualized Family Income
  await expect(page.getByRole('textbox', { name: 'Annualized Family Income (' })).toHaveValue('11111');
  // Evidence document for family income
  await expect(page.getByRole('textbox', { name: 'Select Document' }).nth(2).locator('xpath=..')).toHaveText(/Self-Attestation/);
  await expect(page.getByRole('radio', { name: 'N/A' })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'TAA Petition Number' }).getByLabel('No', { exact: true })).toBeChecked(); // TAA Petition Number
  await expect(page.getByRole('radiogroup', { name: 'Intent to live and work in' }).getByLabel('Yes', { exact: true })).toBeChecked();
  // -- Page 7 
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await expect(page.getByText('WIOA ADULT')).toBeVisible(); /// you can change this depending on what eligibility
  await expect(page.getByText('Yes', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: '← Back' }).click();



  ///////////////////// Document Summary /////////////////////////
  await page.getByRole('tabpanel', { name: 'Application' }).getByRole('link').click()
   // --- Page 1 ---
   await expect(page.getByRole('checkbox', { name: 'WIOA Adult' })).toBeChecked({ timeout: 20000 });
  // Evidence document for WIOA Adult
  await expect(page.locator('.form-control.ui').first()).toHaveText(/Self-Attestation/);
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // --- Page 2 ---
  // Evidence document (first "Select Document" style control on this page)
  await expect(page.locator('.form-control.ui').first()).toHaveText(/Self-Attestation/);
  await expect(page.getByRole('radiogroup', { name: 'Haitian *' }).getByLabel('No', { exact: true })).toBeChecked();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // -- Page 3 --
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // --- Page 4 ---
  // Employment status dropdown
  await expect(
    page.getByText('EmployedRemove item')
  ).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Select Document' }).locator('xpath=..')).toHaveText(/Self-Attestation/);
  await expect(page.getByRole('radiogroup', { name: 'If employed, individual is' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'In a Registered' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radio', { name: 'Neither Claimant nor Exhaustee' })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Unemployed due to layoff or' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Attended a Rapid Response' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Long-Term Unemployed *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('textbox', { name: 'Current or most recent hourly' })).toHaveValue('11');
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // --- Page 5 ---
  await expect(page.getByLabel('data[highestSchoolGradeCompleted]')).toHaveText(/12th Grade Completed/);
 
  await expect(
    page.locator('select[name="data[highestEducationalLevelCompleted]"]')
      .locator('xpath=ancestor::div[contains(@class,"choices")][1]')
      .locator('.form-control.ui')
  ).toHaveText(/High School Diploma/);
  await expect(page.getByRole('radiogroup', { name: 'Receiving services from Adult' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Receiving services from Job' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Receiving Services from Vocational Education (Carl Perkins) *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radio', { name: 'Not applicable', exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Temporary Assistance for' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Supplemental Security Income' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'General Assistance (GA) *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Supplemental Nutrition' }).getByLabel('No', { exact: true })).toBeChecked(); // Supplemental Nutrition
  await expect(page.getByRole('radiogroup', { name: 'Refugee Cash Assistance (RCA)' }).getByLabel('No', { exact: true })).toBeChecked(); // Refugee Cash Assistance (RCA)
  await expect(page.getByRole('radiogroup', { name: 'Social Security Disability' }).getByLabel('No', { exact: true })).toBeChecked(); // Social Security Disability
  await expect(page.getByRole('radiogroup', { name: 'Receiving, or has been' }).getByLabel('No', { exact: true })).toBeChecked(); // Receiving, or has been
  await expect(page.getByRole('radiogroup', { name: 'Ticket to Work Holder issued' }).getByLabel('No', { exact: true })).toBeChecked(); // Ticket to Work Holder issued
  await expect(page.getByRole('radiogroup', { name: 'Meets Governor’s special' }).getByLabel('No', { exact: true })).toBeChecked(); // Meets Governor's special
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // --- Page 6 ---
  await expect(page.getByRole('radiogroup', { name: 'English language learner *' }).getByLabel('No')).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('Yes')).toBeChecked();
  // Verify the uploaded/selected evidence document for that field
  await expect(page.getByRole('group').filter({ hasText: 'Barriers English language' }).getByLabel('Select Document').locator('xpath=..')).toHaveText(/Case Note/);
  await expect(page.getByRole('radiogroup', { name: 'Runaway *' }).getByLabel('No')).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Youth in, or aged-out of,' }).getByLabel('No')).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Out-of-home placement *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Eligible under Section 477 of' }).getByLabel('No', { exact: true })).toBeChecked(); // Eligible under Section 477 of
  await expect(page.getByRole('radiogroup', { name: 'Ex-Offender' }).getByLabel('No', { exact: true })).toBeChecked(); // Ex-Offender
  await expect(page.getByRole('radiogroup', { name: 'Incarcerated at Program Entry' }).getByLabel('No', { exact: true })).toBeChecked(); // Incarcerated at Program Entry
  await expect(page.getByRole('radiogroup', { name: 'Displaced Homemaker' }).getByLabel('No', { exact: true })).toBeChecked(); // Displaced Homemaker
  await expect(page.getByRole('radiogroup', { name: 'Pregnant or parenting youth' }).getByLabel('No', { exact: true })).toBeChecked(); // Pregnant or parenting youth
  await expect(page.getByRole('radiogroup', { name: 'Youth Requires Additional' }).getByLabel('No', { exact: true })).toBeChecked(); // Youth Requires Additional
  await expect(page.getByRole('radiogroup', { name: 'Within 2 years of exhausting' }).getByLabel('No', { exact: true })).toBeChecked(); // Within 2 years of exhausting
  await expect(page.getByRole('radiogroup', { name: 'Hawaiian Native' }).getByLabel('No', { exact: true })).toBeChecked(); // Hawaiian Native
  await expect(page.getByRole('radiogroup', { name: 'Single Parent (including' }).getByLabel('No', { exact: true })).toBeChecked(); // Single Parent (including
  await expect(page.getByRole('radiogroup', { name: 'Is the individual' }).getByLabel('No', { exact: true })).toBeChecked(); // Is the individual

  await expect(
    page.locator('select[name="data[familySize115]"]')
      .locator('xpath=ancestor::div[contains(@class,"choices")][1]')
      .locator('.form-control.ui .choices__item span')
  ).toHaveText('1');
  // Evidence document for family size
  await expect(page.getByRole('textbox', { name: 'Select Document' }).nth(1).locator('xpath=..')).toHaveText(/Self-Attestation/);
  // Annualized Family Income
  await expect(page.getByRole('textbox', { name: 'Annualized Family Income (' })).toHaveValue('11111');
  // Evidence document for family income
  await expect(page.getByRole('textbox', { name: 'Select Document' }).nth(2).locator('xpath=..')).toHaveText(/Self-Attestation/);
  await expect(page.getByRole('radio', { name: 'N/A' })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'TAA Petition Number' }).getByLabel('No', { exact: true })).toBeChecked(); // TAA Petition Number
  await expect(page.getByRole('radiogroup', { name: 'Intent to live and work in' }).getByLabel('Yes', { exact: true })).toBeChecked();
  // -- Page 7 
  await expect(page.getByText('WIOA ADULT')).toBeVisible(); /// you can change this depending on what eligibility
  await expect(page.getByText('Yes', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: '← Back' }).click();
  


  //////////////////// Eligibility Summary ///////////////////////////////
  await page.getByRole('button', { name: 'Preview eligibility' }).click();
  // --- Page 1 ---
  await expect(page.getByRole('checkbox', { name: 'WIOA Adult' })).toBeChecked({ timeout: 20000 });
  // Evidence document for WIOA Adult
  await expect(page.locator('.form-control.ui').first()).toHaveText(/Self-Attestation/);
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // --- Page 2 ---e)
  await expect(page.locator('.form-control.ui').first()).toHaveText(/Self-Attestation/);
  await expect(page.getByRole('radiogroup', { name: 'Haitian *' }).getByLabel('No', { exact: true })).toBeChecked();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // -- Page 3 --
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // --- Page 4 ---
  await expect(
    page.getByText('EmployedRemove item')
  ).toBeVisible();

  await expect(page.getByRole('textbox', { name: 'Select Document' }).locator('xpath=..')).toHaveText(/Self-Attestation/);
  await expect(page.getByRole('radiogroup', { name: 'If employed, individual is' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'In a Registered' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radio', { name: 'Neither Claimant nor Exhaustee' })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Unemployed due to layoff or' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Attended a Rapid Response' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Long-Term Unemployed *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('textbox', { name: 'Current or most recent hourly' })).toHaveValue('11');
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // --- Page 5 ---
  await expect(page.getByLabel('data[highestSchoolGradeCompleted]')).toHaveText(/12th Grade Completed/);

  await expect(
    page.locator('select[name="data[highestEducationalLevelCompleted]"]')
      .locator('xpath=ancestor::div[contains(@class,"choices")][1]')
      .locator('.form-control.ui')
  ).toHaveText(/High School Diploma/);
  await expect(page.getByRole('radiogroup', { name: 'Receiving services from Adult' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Receiving services from Job' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Receiving Services from Vocational Education (Carl Perkins) *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radio', { name: 'Not applicable', exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Temporary Assistance for' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Supplemental Security Income' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'General Assistance (GA) *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Supplemental Nutrition' }).getByLabel('No', { exact: true })).toBeChecked(); // Supplemental Nutrition
  await expect(page.getByRole('radiogroup', { name: 'Refugee Cash Assistance (RCA)' }).getByLabel('No', { exact: true })).toBeChecked(); // Refugee Cash Assistance (RCA)
  await expect(page.getByRole('radiogroup', { name: 'Social Security Disability' }).getByLabel('No', { exact: true })).toBeChecked(); // Social Security Disability
  await expect(page.getByRole('radiogroup', { name: 'Receiving, or has been' }).getByLabel('No', { exact: true })).toBeChecked(); // Receiving, or has been
  await expect(page.getByRole('radiogroup', { name: 'Ticket to Work Holder issued' }).getByLabel('No', { exact: true })).toBeChecked(); // Ticket to Work Holder issued
  await expect(page.getByRole('radiogroup', { name: 'Meets Governor’s special' }).getByLabel('No', { exact: true })).toBeChecked(); // Meets Governor's special
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // --- Page 6 ---
  await expect(page.getByRole('radiogroup', { name: 'English language learner *' }).getByLabel('No')).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('Yes')).toBeChecked();
  // Verify the uploaded/selected evidence document for that field
  await expect(page.getByRole('group').filter({ hasText: 'Barriers English language' }).getByLabel('Select Document').locator('xpath=..')).toHaveText(/Case Note/);
  await expect(page.getByRole('radiogroup', { name: 'Runaway *' }).getByLabel('No')).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Youth in, or aged-out of,' }).getByLabel('No')).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Out-of-home placement *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Eligible under Section 477 of' }).getByLabel('No', { exact: true })).toBeChecked(); // Eligible under Section 477 of
  await expect(page.getByRole('radiogroup', { name: 'Ex-Offender' }).getByLabel('No', { exact: true })).toBeChecked(); // Ex-Offender
  await expect(page.getByRole('radiogroup', { name: 'Incarcerated at Program Entry' }).getByLabel('No', { exact: true })).toBeChecked(); // Incarcerated at Program Entry
  await expect(page.getByRole('radiogroup', { name: 'Displaced Homemaker' }).getByLabel('No', { exact: true })).toBeChecked(); // Displaced Homemaker
  await expect(page.getByRole('radiogroup', { name: 'Pregnant or parenting youth' }).getByLabel('No', { exact: true })).toBeChecked(); // Pregnant or parenting youth
  await expect(page.getByRole('radiogroup', { name: 'Youth Requires Additional' }).getByLabel('No', { exact: true })).toBeChecked(); // Youth Requires Additional
  await expect(page.getByRole('radiogroup', { name: 'Within 2 years of exhausting' }).getByLabel('No', { exact: true })).toBeChecked(); // Within 2 years of exhausting
  await expect(page.getByRole('radiogroup', { name: 'Hawaiian Native' }).getByLabel('No', { exact: true })).toBeChecked(); // Hawaiian Native
  await expect(page.getByRole('radiogroup', { name: 'Single Parent (including' }).getByLabel('No', { exact: true })).toBeChecked(); // Single Parent (including
  await expect(page.getByRole('radiogroup', { name: 'Is the individual' }).getByLabel('No', { exact: true })).toBeChecked(); // Is the individual

  await expect(
    page.locator('select[name="data[familySize115]"]')
      .locator('xpath=ancestor::div[contains(@class,"choices")][1]')
      .locator('.form-control.ui .choices__item span')
  ).toHaveText('1');
  // Evidence document for family size
  await expect(page.getByRole('textbox', { name: 'Select Document' }).nth(1).locator('xpath=..')).toHaveText(/Self-Attestation/);
  // Annualized Family Income
  await expect(page.getByRole('textbox', { name: 'Annualized Family Income (' })).toHaveValue('11111');
  // Evidence document for family income
  await expect(page.getByRole('textbox', { name: 'Select Document' }).nth(2).locator('xpath=..')).toHaveText(/Self-Attestation/);
  await expect(page.getByRole('radio', { name: 'N/A' })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'TAA Petition Number' }).getByLabel('No', { exact: true })).toBeChecked(); // TAA Petition Number
  await expect(page.getByRole('radiogroup', { name: 'Intent to live and work in' }).getByLabel('Yes', { exact: true })).toBeChecked();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // -- Page 7 
  await expect(page.getByText('WIOA ADULT')).toBeVisible(); /// you can change this depending on what eligibility
  await expect(page.getByText('Yes', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Close' }).click();

});


  
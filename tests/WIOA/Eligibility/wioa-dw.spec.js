const { test, expect } =
  require('@playwright/test');
  require('dotenv').config();

test('WIOA Dislocated Worker', async ({ page }) => {

  //await page.goto(process.env.WYO_OLDDEV_LOGIN); // DEV
  await page.goto(process.env.WYO_PPP_LOGIN);    // PPP
  /////////// Login for Admin///////////
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_WYO_EMAIL); 
  await page.getByRole('textbox', { name: 'Password' }).click();

  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OLD_DEV_PASS); // DEV and New DEV
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);  // PPP
  
  await page.getByRole('button', { name: 'Login' }).click();
  //login//
  
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.pause();
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).click(); 


  /////////// EVIDENCE ////////////// --- use this if no evidence uploaded yet

  await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Evidences' }).click();
  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Self-Attestation');
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
  await page.pause();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.waitForTimeout(3000);
  await page.getByText('Select an evidence typeSelect').click();
  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('self');
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: 'Self-Attestation' }).click();
  await expect (page.getByRole('button', { name: 'update' })).toBeEnabled();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();

//////////// Creation of WIOA Applicaiton ////////////
  // Select a Program options: CCP | Wagner Peyser | WIOA | WIN | IDST | SNAP E&T
  await page.getByRole('radio', { name: 'WIOA' }).check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.pause();



  // Select Sub-Program(s) options: WIOA Adult | WIOA Youth | WIOA DW | WIOA NDWG (disabled)
  await page.getByRole('checkbox', { name: 'WIOA DW' }).check();

  await page.locator('.col-form-label.field-required', { hasText: 'Verified with' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click(); // Change name on what name you put on your evidence
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 2nd Page //
  await page.locator('.form-control.ui').first().click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).first().click(); // Change name on what name you put on your evidence
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
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
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 3rd Page //
  // (Veterans Information page, not interacted with here:
  //  I am the spouse or family caregiver of a wounded, ill, or injured current service member...: Yes | No | I do not wish to disclose
  //  My spouse was a veteran who died because of a service-connected disability: Yes | No | I do not wish to disclose
  //  My spouse has (or my deceased spouse had) a total and permanent service-connected disability rating...: Yes | No | I do not wish to disclose
  //  My active-duty spouse is listed as one of the following and has been for more than 90 days: Missing in action | Captured in the line of duty by a hostile force | Forcibly detained or interned by a foreign government power | None of the above
  //  Are you currently in the U.S. Military or a Veteran?: Yes | No -- answering Yes reveals a large additional Eligible Veteran Status branch)
   await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 4th Page //

  // Employment Status options: Employed | Employed, but Received Notice of Termination of Employment or Military Separation is pending | Not in labor force, not actively looking for work (including Incarcerated Individuals) | Unemployed, looking for work
  await page.locator('.formio-component-employmentStatus .form-control.ui.fluid.selection.dropdown').click();
  await page.getByRole('option', { name: 'Employed', exact: true }).click();

  await page.locator('.formio-component-verifiedWith7 .choices').click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.keyboard.press('Escape');
  // In a Registered Apprenticeship Program options: Yes | No | Not Disclosed
  await page.getByRole('radiogroup', { name: 'In a Registered' }).getByLabel('No', { exact: true }).check();
  // Unemployment Eligibility Status options: Neither Claimant nor Exhaustee | Eligible Claimant referred by WPRS (disabled) | Claimant | Exhaustee | Unknown
  await page.getByRole('radio', { name: 'Neither Claimant nor Exhaustee' }).check();
  // Unemployed due to layoff or termination? options: Yes | No
  await page.getByRole('radiogroup', { name: 'Unemployed due to layoff or' }).getByLabel('No').check();
  // Attended a Rapid Response Orientation? options: Yes | No
  await page.getByRole('radiogroup', { name: 'Attended a Rapid Response' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('textbox', { name: 'Current or most recent hourly' }).click();
  await page.getByRole('textbox', { name: 'Current or most recent hourly' }).fill('11');
  //await page.pause();

  // DW Question //
  // Employment Status at Dislocated Worker Eligibility options: Employed | Employed, but received notice of termination of employment or military separation | Not Employed
  await page.getByRole('radio', { name: 'Not Employed' }).check();
  // Underemployed at Dislocated Worker Eligibility options: Yes | No | Not Applicable
  await page.getByRole('radiogroup', { name: 'Underemployed at Dislocated' }).getByLabel('No', { exact: true }).check();
  // Dislocated Worker Category options:
  //  Category 1: Terminated of laid off, or has received notice of termination or layoff and is eligible for or has exhausted entitlements to UC, and is unlikely to return to previous industry or occupation
  //  Category 2: Terminated or laid off, or has received notice of termination or layoff, and has been employed for sufficient duration (based on state policy) to demonstrate workforce attachment, but is not eligible for UC due to insufficient earnings, or the employer is not covered under the state UC law, and is unlikely to return to previous industry or occupation
  //  Category 3: Individual is terminated or laid off, or has received notice of termination or layoff, from employment as a result of the Permanent closure of or substantial layoff at a plant, facility or enterprise
  //  Category 4: Individual is employed at a facility at which the employer has made a general announcement that the facility will close. Enter the date the facility will close (if known) in the Projected Layoff Date below
  //  Category 5: Individual was previously self-employed (including farmers, ranchers and fishermen), but is unemployed due to general economic conditions in the community of residence or because of natural disaster. Record the last date of self-employment in the Actual Layoff Date
  //  Category 6: An individual who has been providing unpaid services to family members in the home and has been dependent on the income of another family member but is no longer supported by that income; or is the dependent spouse of a member of the Armed Forces on active duty and whose family income is significantly reduced because of a deployment, or a call or order to active duty, or a permanent change of station, or the service-connected death or disability of the member; and is unemployed or underemployed and is experiencing difficulty in obtaining or upgrading employment
  //  Category 7: The spouse of a member of the Armed Forces on active duty, and who has experienced a loss of employment as a direct result of relocation to accommodate a permanent change in duty station of such member
  //  Category 8: The spouse of a member of the Armed Forces on active duty and who is unemployed or underemployed and is experiencing difficulty in obtaining or upgrading employment
  //  None of the above. Individual does not meet the definition of Dislocated Worker
  await page.getByRole('radio', { name: 'Category 1: Terminated of' }).check();
  await page.locator('.formio-component-verifiedWith35 .choices').click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.keyboard.press('Escape');
  // Category 12: Dislocated Worker Grant (DWG) eligibility - single checkbox, not a Yes/No group
  await page.getByRole('checkbox', { name: 'Category 12: Dislocated' }).check();
  await page.locator('.formio-component-verifiedWith45 .choices').click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.keyboard.press('Escape');
  // Is unemployed due to general economic conditions... options: Yes | No | Not Provided
  await page.getByRole('radiogroup', { name: 'Is unemployed due to general' }).getByLabel('No', { exact: true }).check();
  // Is unemployed as a result of an emergency or natural disaster... options: Yes | No | Not Provided
  await page.getByRole('radiogroup', { name: 'Is unemployed as a result of' }).getByLabel('No', { exact: true }).check();
  // Self-employed Individual who became unemployed or significantly underemployed... options: Yes | No | Not Provided
  await page.getByRole('radiogroup', { name: 'Self-employed Individual who' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('textbox', { name: 'Projected Date of Layoff' }).click();
  await page.locator('.flatpickr-day[aria-current="date"]:visible').click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Actual Layoff Date *' }).click();
  await page.waitForTimeout(2000);
  await page.locator('.flatpickr-day[aria-current="date"]:visible').click();
  await page.keyboard.press('Escape');
  await page.locator('.formio-component-verifiedWith3 .choices').click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.keyboard.press('Escape');
  await page.getByRole('textbox', { name: 'Dislocation Employer *' }).fill('test Employer');
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('Newcastle');
  await page.getByText('State', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Select', exact: true }).fill('wyo');
  await page.getByRole('option', { name: 'Wyoming' }).click()
  await page.getByRole('textbox', { name: 'City *' }).fill('Newcatle');
  await page.getByRole('textbox', { name: 'Zip Code *' }).fill('82001');
  await page.getByRole('textbox', { name: 'Dislocation Hourly Wage' }).fill('11');
  // Declining Industry options: Yes | No
  await page.getByRole('radiogroup', {name: 'Declining Industry'}).getByLabel('No', {exact: true}).click();
  // If working, job lacks opportunity to advance or have a wage gain options: Yes | No
  await page.getByRole('radiogroup', {name: 'If working, job lacks'}).getByLabel('No', {exact: true}).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();

   // 5th Page //
  // Attending any school options: Yes | No | Not Provided
  await page.getByRole('radiogroup', {name: 'Attending any school'}).getByLabel('No', {exact: true}).click();
  // Highest School Grade Completed options: No School Grades Completed | 1st Grade Completed | 2nd Grade Completed | 3rd Grade Completed | 4th Grade Completed | 5th Grade Completed | 6th Grade Completed | 7th Grade Completed | 8th Grade Completed | 9th Grade Completed | 10th Grade Completed | 11th Grade Completed | 12th Grade Completed
  await page.getByLabel('data[highestSchoolGradeCompleted]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: '12th Grade Completed' }).click();
  // Highest Educational Level Completed options: High School Diploma | High School Equivalency Diploma | Certificate of Attendance/Completion (Disabled Individuals) | 1 + year of college or technical schooling | Vocational School Certificate | Associate's Degree | Bachelor's Degree | Higher than bachelor's degree | No Education Level Completed
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'High School Diploma' }).click();
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
  await expect(page.getByText('WIOA DW')).toBeVisible(); /// you can change this depending on what eligibility
  await expect(page.getByText('Yes', { exact: true })).toBeVisible(); /// you can change this depending on what expect if it is supposed to be eligible
  await page.getByRole('button', { name: 'Submit Form button. Click to' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  //await page.getByRole('button', { name: 'Cancel button. Click to reset' }).click();
  //await page.getByRole('button', { name: 'Yes' }).click();

 await page.pause();
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
    //'Funding',
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

  //login for jobseeker
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
  await page.pause(); 

  const statusSummary = page.getByRole('Summary', { name: 'Application Initiated', exact: true });
  const row = statusSummary.locator('xpath=ancestor::tr[1]');
  await row.getByRole('button').last().click();

  await page.getByRole('menuitem', { name: 'Sign Application' }).click();
  await page.getByRole('checkbox', { name: 'I agree to sign the' }).click();
  await page.getByRole('button', { name: 'Save & Close' }).click();
  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click();
  await page.waitForTimeout(3500);
  
  // login again to sign application as case manager
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_WYO_EMAIL); 
  await page.getByRole('textbox', { name: 'Password' }).click();

  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OLD_DEV); // DEV and New DEV
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  //login//
  
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.pause(); 
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).click(); 
  await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Applications' }).click();

  
  const signatureStatus = page.getByRole('Summary', {name: 'Case Manager sign is pending',exact: true});

  await expect(signatureStatus).toBeVisible();

  const signatureRow = signatureStatus.locator('xpath=ancestor::tr[1]');

  await signatureRow.getByRole('button').last().click();

  await page.getByRole('menuitem', { name: 'Sign Application' }).click();
  await page.getByRole('checkbox', { name: 'I agree to sign the' }).click();
  await page.getByRole('button', { name: 'Save & Close' }).click();

  // Submit Application
  await page.getByRole('tab', { name: 'Programs Overview' }).click();
  await page.getByText('Application Initiated').click(); /// this could not be used id there are other application initiated. Just pick the application after the pause
  await page.getByRole('button', { name: 'Submit for Approval' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  // Logout
  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click();
  await page.waitForTimeout(4000);

  // login Center Manager for Eligibility
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
 await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CENTERMAN_EMAIL); 
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.CENTERMAN_PPP_PASS);  //PPP
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.CENTERMAN_DEV_PASS); //DEV
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


});
const { test, expect } =
  require('@playwright/test');
  require('dotenv').config();
//This test is written by Jade of Team Eagle

//Smoke-test: for every radio group / dropdown on the WP Application,
//click through every available option in sequence (no assertions), landing on the same final
//value the original test uses, before moving to the next field/page.

//Change Email and Password of Admin
//Change the name of the supposed Individual

async function cycleRadioGroup(page, groupName, optionLabels, { exact = true } = {}) {
  const group = page.getByRole('radiogroup', { name: groupName });
  for (const label of optionLabels) {
    await group.getByLabel(label, { exact }).click();
  }
}


async function cycleDropdownByIndex(page, index, optionLabels) {
  for (const label of optionLabels) {
    await page.getByRole('combobox').nth(index).click();
    await page.getByRole('option', { name: label, exact: true }).click();
  }
}

async function waitForPageLoad(page) {
  await page.getByRole('status', { name: 'Loading' }).waitFor({ state: 'hidden', timeout: 30000 });
}

async function goToNextPage(page) {
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await waitForPageLoad(page);   
  
}

async function fillIfEmpty(textbox, value) {
  if (!(await textbox.inputValue())) {
    await textbox.fill(value);
  }
}

async function answerRadioGroupIfEmpty(page, groupName, label) {
  const group = page.getByRole('radiogroup', { name: groupName });
  if (!(await group.getByRole('radio', { checked: true }).count())) {
    await group.getByLabel(label, { exact: true }).click();
  }
}

async function fillBasicInformationIfEmpty(page) {
  // The sub-program logic re-renders the form shortly after load and clears anything entered before it,
  // so keep refilling until the values survive a short settle period
  await expect(async () => {
    await fillBasicInformationOnce(page);
    await page.waitForTimeout(1500);
    await expect(page.getByRole('textbox', { name: 'Address Line 1 *' })).not.toHaveValue('', { timeout: 500 });
    await expect(page.getByRole('combobox').first()).not.toContainText('Select', { timeout: 500 });
  }).toPass({ timeout: 60000 });
}

async function fillBasicInformationOnce(page) {
  await fillIfEmpty(page.getByRole('textbox', { name: 'Address Line 1 *' }), '123 Test St');
  const state = page.getByRole('combobox').first();
  if ((await state.innerText()).trim().startsWith('Select')) {
    await state.click();
    await page.getByRole('option', { name: 'Oregon', exact: true }).click({ timeout: 5000 });
  }
  await fillIfEmpty(page.getByRole('textbox', { name: 'City *' }), 'Salem');
  await fillIfEmpty(page.getByRole('textbox', { name: 'Zip Code *' }), '97301');
  await fillIfEmpty(page.getByRole('textbox', { name: 'Primary Phone Number , numeric only, *' }), '5035551234');
  const phoneType = page.getByRole('radiogroup', { name: 'Primary Phone Type *' });
  if (!(await phoneType.getByRole('radio', { checked: true }).count())) {
    await phoneType.getByLabel('Mobile', { exact: true }).click();
  }
  // App flags the "(Optional)" alternate phone as "should be 10 digits" when left empty
  await fillIfEmpty(page.getByRole('textbox', { name: 'Alternate Phone Number (Optional) , numeric only,' }), '5035555678');
}

test('WP Application - click through every option', async ({ page }) => {
  test.setTimeout(300000); 

  //await page.goto(process.env.WYO_PPP_LOGIN);    // PPP
  //await page.goto(process.env.WYO_OLDDEV_LOGIN); // DEV
   await page.goto(process.env.WYO_OREGON_LOGIN); //OR
  /////////// Login for Admin///////////
  await page.getByRole('textbox', { name: 'Email' }).click();
  //await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_WYO_EMAIL); // PPP & Dev
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_OR_EMAIL); // OR
  await page.getByRole('textbox', { name: 'Password' }).click();

  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);  // PPP
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OLD_DEV_PASS); // DEV
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OR_PASS); // OR
  await page.getByRole('button', { name: 'Login' }).click();
  //login//

  await page.getByRole('button', { name: 'Individuals' }).click();
  
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).click(); 

  // Select a Program: cycle CCP | Wagner Peyser | WIN | WIOA | IDST | SNAP E&T, end on Wagner Peyser
  const selectAProgramGroup = page.getByRole('radiogroup', { name: 'Select a Program' });
  await selectAProgramGroup.waitFor({ state: 'visible', timeout: 30000 }); // new-profile page can take longer than the default 5s to render
  //wait cycleRadioGroup(page, 'Select a Program', ['CCP', 'Wagner Peyser', 'WIN', 'WIOA', 'IDST', 'SNAP E&T', 'Wagner Peyser']);
  await cycleRadioGroup(page, 'Select a Program', ['Wagner Peyser', 'WIOA', 'Wagner Peyser']); //FOR OR ONLY
  await page.getByRole('button', { name: 'Continue' }).click();
  await waitForPageLoad(page); 

  //page 1 - Basic Information
  // Required contact fields can be blank on the participant; Next silently stays on page 1 until they're filled
  await fillBasicInformationIfEmpty(page);
  await goToNextPage(page);

  async function cycleDropdownByName(page, comboboxName, optionLabels) {
  const combobox = page.getByRole('combobox', { name: comboboxName });
  for (const label of optionLabels) {
    await combobox.click();
    await page.getByRole('option', { name: label, exact: true }).click();
  }
}

  // Same as cycleDropdownByName, but skips options the app doesn't offer for this participant
  async function cycleAvailableDropdownByName(page, comboboxName, optionLabels) {
  const combobox = page.getByRole('combobox', { name: comboboxName });
  for (const label of optionLabels) {
    await combobox.click();
    const option = page.getByRole('option', { name: label, exact: true });
    if (await option.isVisible()) {
      await option.click();
    } else {
      await page.keyboard.press('Escape');
    }
  }
}

  //page 2 - Demographic Information
  await cycleDropdownByName(page, 'data[gender]', ['Female', 'Male', 'I Do Not Wish to Answer']);
  await cycleDropdownByName(page, 'data[sexualOrientation]', ['Straight/Heterosexual', 'Gay/Lesbian or Homosexual', 'Bisexual', 'Another sexual orientation', 'I Do Not Wish to Answer']);
  // Options depend on age/gender; an under-18 participant only gets 'Not Applicable'
  await cycleAvailableDropdownByName(page, 'data[registeredWithTheSelectiveService]', ['Yes', 'Documented exemption from registration', 'No', 'Not Applicable', 'Registration Waived']);
  await cycleDropdownByIndex(page, 3, ['U.S. Permanent Resident', 'Alien/Refugee Lawfully Admitted to U.S.', 'None of the above', 'Citizen of U.S. or U.S. Territory']);
  await cycleRadioGroup(page, 'Hispanic/Latino Heritage *', ['Yes', 'No', 'Information Not Provided']);
  await goToNextPage(page);

  //page 3 - Veterans Information
  // Required spouse questions can be blank on the participant; Next stays on page 3 until they're answered
  await answerRadioGroupIfEmpty(page, 'My spouse was a veteran who died because of a service-connected disability *', 'No');
  await answerRadioGroupIfEmpty(page, 'My spouse has (or my deceased spouse had) a total and permanent service-connected disability rating from the Department of Veterans Affairs. *', 'No');
  await answerRadioGroupIfEmpty(page, 'My active-duty spouse is listed as one of the following and has been for more than 90 days. *', 'None of the above');
  await goToNextPage(page);

  //page 4 - Employment Information
  await goToNextPage(page);

  await cycleDropdownByIndex(page, 0, ['Employed', 'Employed, but Received Notice of Termination of Employment or Military Separation is pending', 'Not in labor force, not actively looking for work (including Incarcerated Individuals)', 'Unemployed, looking for work', 'Employed']);
  await cycleRadioGroup(page, 'In a Registered Apprenticeship Program *', ['Yes', 'No', 'Not Disclosed', 'No']);
  // "Eligible Claimant referred by WPRS" is disabled on this participant, so it's skipped
  await cycleRadioGroup(page, 'Unemployment Eligibility Status *', ['Neither Claimant nor Exhaustee', 'Claimant', 'Exhaustee', 'Unknown', 'Neither Claimant nor Exhaustee']);
  await cycleRadioGroup(page, 'Long-Term Unemployed *', ['Yes, Unemployed ≥ 27 consecutive weeks', 'Yes, other Disaster DWG LTU definition', 'Yes, Unemployed ≥ 27 non-consecutive weeks in past 12 months', 'No']);
  await cycleRadioGroup(page, 'Attended a Rapid Response Orientation? *', ['Yes', 'No']);
  await cycleDropdownByName(page, 'data[eligibleMigrantAndSeasonalFarmworkerStatus]', ['Seasonal Farmworker Adult', 'Migrant Farmworker Adult', 'MSFW Youth', 'Dependent Adult', 'Dependent Youth', 'No', 'Migrant Farmworker Adult']);
  await goToNextPage(page);
  await cycleRadioGroup(page, 'Unemployed due to layoff or termination? *', ['Yes', 'No']);
  await goToNextPage(page);

  //page 5 - Education and Public Assistance
  await cycleDropdownByName(page, 'data[highestSchoolGradeCompleted]', ['No School Grades Completed', '1st Grade Completed', '2nd Grade Completed', '3rd Grade Completed', '4th Grade Completed', '5th Grade Completed', '6th Grade Completed', '7th Grade Completed', '8th Grade Completed', '9th Grade Completed', '10th Grade Completed', '11th Grade Completed', '12th Grade Completed']);
  await cycleDropdownByName(page, 'data[highestEducationalLevelCompleted]', ['High School Diploma', 'High School Equivalency Diploma', 'Certificate of Attendance/Completion (Disabled Individuals)', '1 + year of college or technical schooling', 'Vocational School Certificate', "Associate's Degree", "Bachelor's Degree", 'Higher than bachelor’s degree', 'No Education Level Completed', 'High School Equivalency Diploma']);
  await cycleDropdownByName(page, 'data[schoolStatus]', ['Yes, Attending High School, Junior High, Middle or Elementary School', 'Yes, Attending An Alternative High School', 'Yes, Attending College or a Technical or Vocational School', 'No, Not Attending Any School', 'Yes, Attending High School, Junior High, Middle or Elementary School']);
  await cycleRadioGroup(page, 'Receiving services from Adult Education (WIOA Title II) *', ['Yes', 'No', 'Did Not Self-Identify', 'No']);
  await cycleRadioGroup(page, 'Receiving services from YouthBuild *', ['Yes', 'No', 'Did Not Self-Identify', 'No']);
  await cycleRadioGroup(page, 'Receiving services from Job Corps *', ['Yes', 'No', 'Did Not Self-Identify', 'No']);
  await cycleRadioGroup(page, 'Receiving services from Vocational Education (Carl Perkins) *', ['Yes', 'No', 'Did Not Self-Identify', 'No']);
  await cycleRadioGroup(page, 'Temporary Assistance for Needy Families (TANF) recipient *', ['Yes', 'No']);
  await cycleRadioGroup(page, 'Supplemental Security Income (SSI) recipient *', ['Yes', 'No']);
  await cycleRadioGroup(page, 'Supplemental Nutrition Assistance Program (SNAP) Recipient', ['Yes', 'No']);
  await cycleRadioGroup(page, 'General Assistance (GA) Recipient *', ['Yes', 'No']);
  await cycleRadioGroup(page, 'Refugee Cash Assistance (RCA) Recipient *', ['Yes', 'No']);
  await cycleRadioGroup(page, 'Social Security Disability Insurance (SSDI) recipient *', ['Yes', 'No']);
  await cycleRadioGroup(page, 'Youth Currently living in High Poverty Area', ['Yes', 'No', 'Not Provided']);
  await cycleRadioGroup(page, 'Foster Care Payments', ['Yes', 'No']);
  await cycleRadioGroup(page, 'Youth currently receives, or is eligible to receive, free or reduced lunch under the Richard B. Russell National School Lunch Act', ['Yes', 'No']);
  await cycleRadioGroup(page, 'Receiving Services under SNAP Employment and Training Program *', ['Yes', 'No', 'Unknown', 'No']);
  await cycleRadioGroup(page, 'Ticket-to-Work Holder issued by Social Security Administration *', ['Yes', 'No', 'Unknown', 'No']);
  await cycleRadioGroup(page, 'The Ticket-to-Work has been assigned an employment network *', ['Yes', 'No']);
  await goToNextPage(page);

  //page 6 - Barriers and Miscellaneous
  await cycleRadioGroup(page, 'English Language Learner *', ['Yes', 'No']);
  await cycleRadioGroup(page, 'Basic Skills Deficient/Low Levels of Literacy *', ['Yes', 'No']);
  await cycleRadioGroup(page, 'Homeless *', ['Yes', 'No']);
  await cycleRadioGroup(page, 'Runaway *', ['Yes', 'No']);
  await cycleRadioGroup(page, 'Foster Care Status *', ['Yes, Currently In', 'Yes, Aged Out', 'Yes,16 & left Foster Care', 'No']);
  await cycleRadioGroup(page, 'Ex-Offender *', ['Yes', 'No', 'Did not Self-Identify', 'No']);
  await cycleRadioGroup(page, 'Single Parent *', ['Yes', 'No', 'Did not Self-Identify', 'No']);
  await cycleRadioGroup(page, 'Within 2 years of exhausting TANF lifetime eligibility *', ['Yes', 'No']);
  await cycleRadioGroup(page, 'Displaced Homemaker *', ['Yes', 'No']);
  await cycleRadioGroup(page, 'Cultural Barriers *', ['Yes', 'No', 'Did not Self-Identify', 'No']);
  await cycleRadioGroup(page, 'Are you required to pay child support?', ['Yes', 'No', 'Did Not Wish to Identify', 'No']);
  await goToNextPage(page);

  //page 7 - Applicant Eligibility (review-only, no options here)
  await page.getByRole('button', { name: 'Submit button. Click to' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
});

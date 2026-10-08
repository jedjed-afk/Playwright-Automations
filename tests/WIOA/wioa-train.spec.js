import { test, expect } from '@playwright/test';
// This test is written by Jade of Team Eagle 
// Note: this test is for pending means 1-6 ='Yes' and 7='No' 
test('test', async ({ page }) => {

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
  
  await page.getByRole('tab', { name: 'Programs Overview' }).click();
  await page.pause;

 //const wioaEligibleCard = page.locator('[data-testid^="program-row-"]')
  //.filter({
    //has: page.locator('text=WIOA').first()
  //})
  //.filter({ hasText: 'Eligibility Approved' });

  //await wioaEligibleCard.click();
    await page.locator('[data-testid^="program-row-"]')
    .filter({ hasText: 'WIOA' })
    .filter({ hasText: 'Eligibility Approved' })
    .getByRole('button', { name: 'Open WIOA application' }).click();
  await page.pause();
  //await page.getByText('Eligibility Approved').first().click();
  await page.getByRole('tab', { name: 'Training Justification' }).click();
  await page.getByRole('button', { name: 'Add Training Justification' }).click();
  ///////////////////// First Page /////////////////////
  await page.getByRole('textbox', { name: 'Training Justification Date *' }).click();
  await page.locator('.flatpickr-calendar.hasTime > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .flatpickr-day.today').click();
  await page.getByText('2 Case Note').click();
  // Recommended Types of Training options: Business Skills | Commercial Skills | Computer Skills | Continuous Improvement Skills | Green/Clean Skills | Hazardous Materials Skills | Job Readiness Skills | Literacy Skills | Management Skills | Manufacturing Skills (ME) | Medical Skills (didactic) | Medical Skills (preceptor) | RSI (Apprenticeship) | OSHA | Other
  await page.locator('.form-control.ui').first().click();
  await page.getByRole('option', { name: 'Business Skills' }).click();
  await page.getByText('2 Case Note').click();
  // Industry/Industries in which employment is expected options: Architecture and Engineering | Arts, Design, Entertainment, Sports, and Media | Building and Grounds Cleaning and Maintenance | Business and Financial Operations | Community and Social Service | Computer and Mathematical | Construction and Extraction | Educational Instruction and Library | Farming, Fishing, and Forestry | Food Preparation and Serving Related | Healthcare Practitioners and Technical | Healthcare Support | Installation, Maintenance, and Repair | Legal | Life, Physical, and Social Science | Management | Military Specific | Office and Administrative Support | Personal Care and Service | Production | Protective Service | Sales and Related | Transportation and Material Moving
  await page.getByRole('textbox', { name: 'Select' }).nth(1).click();
  //await page.locator('.formio-component-serviceProvided .choices__list--dropdown .choices__item--selectable').nth(1).click();
  await page.getByRole('option', { name: 'Architecture and Engineering' }).click();
  await page.getByText('2 Case Note').click();
  // Occupation(s) expected from selected training: a comprehensive, independent O*NET/SOC detailed occupation title list (hundreds of entries, e.g. Accountants and Auditors, Actors, Actuaries, Acupuncturists, ... ) - not filtered by the industry selected above, too large to enumerate
  await page.getByRole('textbox', { name: 'Select' }).nth(2).click();
  await page.getByRole('option', { name: 'Accountants and Auditors' }).click();
  await page.getByText('2 Case Note').click();
  // Condition 1 (Is unlikely or unable to obtain or retain employment...) options: Yes | No
  await page.getByRole('radiogroup', { name: 'Condition 1 Is unlikely or' }).getByLabel('Yes').check();
  // Condition 2 (Is in need of training services to obtain or retain employment...) options: Yes | No
  await page.getByRole('radiogroup', { name: 'Condition 2 Is in need of' }).getByLabel('Yes').check();
  // Condition 3 (Has the skills and qualifications to successfully participate...) options: Yes | No
  await page.getByRole('radiogroup', { name: 'Condition 3 Has the skills' }).getByLabel('Yes').check();
  // Condition 4 (Has selected a program of training services directly linked to employment opportunities...) options: Yes | No
  await page.getByRole('radiogroup', { name: 'Condition 4 Has selected a' }).getByLabel('Yes').check();
  // Condition 5 (Is unable to obtain grant assistance from other sources...) options: Yes | No
  await page.getByRole('radiogroup', { name: 'Condition 5 Is unable to' }).getByLabel('Yes').check();
  // Condition 6 (Is determined eligible in accordance with the State and local priority system...) options: Yes | No
  await page.getByRole('radiogroup', { name: 'Condition 6 Is determined' }).getByLabel('Yes').check();

  // Condition 7 (TAA Petition Pending - is a member of a worker group covered by a TAA petition awaiting determination) options: Yes | No
  const conditionSeven = page.locator('.formio-component-condtionSeven');
  await conditionSeven.getByLabel('No').check();

  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();

  ///////////////////// Second Page (Case Notes) //////////////////////////////
  await page.getByRole('textbox', { name: 'Contact Date *' }).click();
  await page.locator('.flatpickr-calendar.animate.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .flatpickr-day.today').click();
  // Contact Type (Optional) options: Face-to-Face | Telephone | E-mail | Other | Form Insert | UI Reportable | Fax | Group Session | Mail | Virtual Meeting
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Face-to-Face' }).click();
  await page.getByRole('textbox', { name: 'Subject *' }).click();
  await page.getByRole('textbox', { name: 'Subject *' }).fill('Test Subject');
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).click();
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).fill('Test Case Notes');
  await page.getByRole('button', { name: 'Submit button. Click to' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('tab', { name: 'Training Justification' }).click();
  await page.getByText('Pending').first().click();
  await page.getByText('Pending', { exact: true }).click();
  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click();
  ///////////////////// Login of State Admin for Approval ////////////////////
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();

  //await page.getByRole('textbox', { name: 'Email' }).fill(process.env.STATE_AD_EMAIL_PPP); //////////////////////
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.STATE_AD_EMAIL_DEV);

  await page.getByRole('textbox', { name: 'Password' }).click();
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.STATE_AD_PPP_PASS); //////////////////////////////
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.STATE_AD_DEV_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).waitFor({ state: 'visible', timeout: 60000 });
 await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).click();
  await page.getByRole('tab', { name: 'Programs Overview' }).click();
  await page.getByText('Eligibility Approved').first().click();
  await page.getByRole('tab', { name: 'Training Justification' }).click();
  await page.pause();
  //await page.getByRole('cell', { name: '1875' }).click(); 
  const pendingRows = page.locator('table.MuiTable-root tbody tr').filter({ hasText: 'Pending' });

  await pendingRows.first().click();
  //await page.locator('table tbody tr').first().locator('td').first().click();
  await page.getByText('View / Download').click();
  await page.getByRole('heading', { name: 'HIRE.WYO.GOV' }).click();
  await page.getByRole('button').nth(1).click();
  await page.getByText('Verify').click();
  await page.getByRole('radio', { name: 'Yes' }).check();
  await page.getByRole('button', { name: 'Choose date' }).click();
  await page.getByRole('gridcell', { name: '22' }).click();
  await page.getByTestId('inviteButton').click();
  await page.getByRole('tabpanel', { name: 'Training Justification' }).getByLabel('Status').click();
  await page.pause();
});
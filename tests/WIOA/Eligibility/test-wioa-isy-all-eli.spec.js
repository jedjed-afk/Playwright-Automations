/* Snippet only (no test wrapper) - commented out so Playwright can load the test suite.
  ///////////////////// SSI + BSD ////////////////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('Yes').check();
  await page.getByRole('group').filter({ hasText: 'Barriers English language' }).getByLabel('Select Document').click();
  await page.waitForTimeout(1500);
  await page.getByRole('option', { name: 'Case Note (file: Located in' }).first().click();
  await page.getByRole('option', { name: 'Assessment Test Results (file' }).click();
  await page.getByRole('option', { name: 'Records from Education' }).click();
  await page.waitForTimeout(1500);
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await expect(page.getByText('WIOA YOUTH, In-school')).toBeVisible();
  await expect(page.getByText('Yes', { exact: true })).toBeVisible();

  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('No').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

  //////////////////// SSI + ELL ////////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'English language learner *' }).getByLabel('Yes').check();
  await page.getByRole('group').filter({ hasText: 'English language learner' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Assessment Test Results (file' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.getByRole('option', { name: 'Records from Education' }).click();
  await page.getByRole('option', { name: 'Signed Individual Service' }).click();
  await page.getByRole('option', { name: 'Signed Intake Application or' }).click();
  await page.getByRole('option', { name: 'Case Note (file: Located in' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();

  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'English language learner *' }).getByLabel('No').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

  ///////////////////// SSI + Ex-Offender ///////////////////////////

  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Ex-Offender' }).getByLabel('Yes').check();
  await page.getByRole('group').filter({ hasText: 'Ex-Offender' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Needs Assessment (file: Needs' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.getByRole('option', { name: 'Court or Probation Officer' }).click();
  await page.getByRole('option', { name: 'Criminal Justice System' }).click();
  await page.getByRole('option', { name: 'Signed Intake Application or' }).click();
  await page.getByRole('option', { name: 'Signed Individual Service' }).click();
  await page.getByRole('option', { name: 'Federal Bonding Program' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Ex-Offender' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

///////////////////// SSI + Runaway ///////////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Runaway *' }).getByLabel('Yes').check();
  await page.getByRole('group').filter({ hasText: 'Runaway' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.getByRole('group').filter({ hasText: 'Runaway' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Signed Individual Service' }).click();
  await page.getByRole('group').filter({ hasText: 'Runaway' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Needs Assessment (file: Needs' }).click();
  await page.getByRole('group').filter({ hasText: 'Runaway' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Shelter or Social Service' }).click();
  await page.getByRole('group').filter({ hasText: 'Runaway' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Signed Intake Application or' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Runaway *' }).getByLabel('No').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

  ///////////////////// SSI + Out-of-Home Placement ///////////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Out-of-home placement *' }).getByLabel('Yes', { exact: true }).check();
  await page.getByRole('group').filter({ hasText: 'Out-of-home placement' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.getByRole('group').filter({ hasText: 'Out-of-home placement' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Social Services Agency' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Out-of-home placement *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();
 

  ///////////////////// SSI +  Section 477 of SSA ///////////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Eligible under Section 477 of' }).getByLabel('Yes', { exact: true }).check();
  await page.getByRole('group').filter({ hasText: 'Eligible under Section 477 of' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Needs Assessment (file: Needs' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.getByRole('option', { name: 'Social Services Agency' }).click();
  await page.getByRole('option', { name: 'Foster Care Agency Referral (' }).click();
  await page.getByRole('option', { name: 'Signed Intake Application or' }).click();
  await page.getByRole('option', { name: 'Signed Individual Service' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Eligible under Section 477 of' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();


  ///////////////////// SSI + Pregnant/Parenting Youth ///////////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Pregnant or parenting youth' }).getByLabel('Yes').check();
  await page.getByRole('group').filter({ hasText: 'Pregnant or parenting youth' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.getByRole('group').filter({ hasText: 'Pregnant or parenting youth' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Needs Assessment (file: Needs' }).click();
  await page.getByRole('group').filter({ hasText: 'Pregnant or parenting youth' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Public Assistance Eligibility' }).click();
  await page.getByRole('group').filter({ hasText: 'Pregnant or parenting youth' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Signed Intake Application or' }).click();
  await page.getByRole('group').filter({ hasText: 'Pregnant or parenting youth' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Signed Individual Service' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Pregnant or parenting youth' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();
*/

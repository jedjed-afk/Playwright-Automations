# WIN Application Test Plan

## Application Overview

The WYO platform lets a **Case Manager** open an existing **Individual** record
and submit a **WIN** program application on that person's behalf. The
application is a 3-page form (Demographics confirmation → Race/Ethnicity →
Eligibility Questionnaire) reached from the Individuals list by selecting a
person, choosing the "WIN" program radio, and continuing.
`tests/dumpcode.spec.js` currently records this single Case Manager flow
end-to-end in one script (a near-duplicate of `tests/WIN/win-app.spec.js`,
which records the same flow with hardcoded credentials instead of env vars).

## Known issues in the existing script (to fix)

- `tests/dumpcode.spec.js:19,55` — two `page.pause()` calls are leftover
  Codegen/debug artifacts. They open the Playwright Inspector and halt the run
  indefinitely under `npx playwright test`; they must be removed before this
  becomes a real automated test.
- The script depends on a specific fixture individual, **"JedOneEight"**,
  already existing in the DEV environment with a WIN application still
  eligible to be started (no prior in-progress/submitted WIN application that
  would change the form's starting state). If this fixture drifts (e.g. the
  application was already submitted, or demographic fields were pre-filled
  differently), Page 1's plain "Next" click and the exact field states
  asserted on Page 3 may no longer hold.
- Page 1 is submitted with a single "Next" click and no field assertions —
  it's unclear whether this page has no required fields for this individual,
  or whether required fields are already pre-populated from prior data. This
  should be confirmed and asserted explicitly rather than assumed.
- The two dropdown interactions (`getByText('SelectSelectRemove item').first()`)
  are positional, not scoped to a specific labeled field, so they're fragile —
  if the form's field order changes, the wrong dropdown gets filled.
- Login reads `process.env.WYO_OLDDEV_LOGIN`, `process.env.CASEMAN_WYO_EMAIL`,
  and `process.env.OLD_DEV` from `.env`; these must be present for any
  generated test to run.

## Test Scenarios

### 1. WIN Program Application (Case Manager)

**Seed:** `tests/win-application/seed-case-manager.spec.ts` (login as Case
Manager via `WYO_OLDDEV_LOGIN` / `CASEMAN_WYO_EMAIL` / `OLD_DEV`)

#### 1.1. should-submit-a-win-application-for-an-individual

**File:** `tests/win-application/should-submit-a-win-application-for-an-individual.spec.ts`

**Steps:**
  1. Click "Individuals", then the "All Individuals" tab.
     - expect: the individuals list is shown.
  2. Click the "JedOneEight" row.
     - expect: the individual's program-selection panel opens.
  3. Check the "WIN" program radio, click "Continue".
     - expect: the WIN application form opens on page 1.
  4. Click "Next" (page 1 → page 2).
     - expect: page 2 (Race/Ethnicity) is shown.
  5. Check "African American/Black", click "Next" (page 2 → page 3).
     - expect: page 3 (Eligibility Questionnaire) is shown.
  6. Fill page 3:
     - "Are you the spouse of someone [on active duty]?" → No
     - "Have you served on active [duty]?" → No
     - Highest grade completed → "12th Grade Completed"
     - "High school Diploma or [equivalent]?" → No
     - School status / credential → "High School Diploma"
     - "Receiving services from Adult [Education]?" → No
     - "Temporary Assistance for [Needy Families]?" → No
     - "Supplemental Nutrition [Assistance Program]?" → No
     - "Ticket-to-Work Holder Issued?" → No
     - "English Language Learner?" → No
     - "Basic Skills Deficient/Low [Levels]?" → No
     - "Ex-Offender?" → No
     - "Displaced Homemaker?" → No
     - "Within 2 years of exhausting [TANF]?" → No
     - "Single Parent (Including [Pregnant Women])?" → No
     - "Were you referred by child [support]?" → Yes
     - "Are you unemployed?" → No
     - "Are you underemployed?" → No
     - "Have you failed to make a [child support payment]?" → No
     - "Do you face barriers to making full child support payments?" → No
     - expect: no validation errors block navigation.
  7. Click "Next", then click "Submit" (form-level), then click "Submit" (confirmation dialog).
     - expect: a success confirmation is shown.
     - expect: the WIN application now appears against "JedOneEight" with a
       submitted status.

## Open questions for you

1. What does the "confirmation dialog" Submit actually show/say on success?
   I need the exact on-screen text/toast to write a real assertion for step 7
   — I can capture this live with playwright-cli once you confirm.
2. Should page 1's fields be asserted/filled explicitly, or is "Next" with no
   input intentionally correct for this fixture individual? If explicit, what
   fields does page 1 contain?
3. Is `tests/dumpcode.spec.js` meant to replace `tests/WIN/win-app.spec.js`
   (env-var creds vs. hardcoded), or are both intentionally kept? If replacing,
   `win-app.spec.js` and its hardcoded credentials should be retired.
4. Per repo convention (see `tests/login/*`, `tests/checkout/*`), should this
   become its own `tests/win-application/` folder with a seed + one scenario
   file as drafted above?

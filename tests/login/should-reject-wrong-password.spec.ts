// spec: specs/plan.md
// seed: tests/login/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Login Suite', () => {
  test('Should show error for valid username with wrong password', async ({ page }) => {
    // 1. Navigate to https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/');

    // 2. Enter 'standard_user' in the Username field and 'wrong_password' in the Password field
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('wrong_password');

    // 3. Click the Login button
    await page.locator('[data-test="login-button"]').click();

    // expect: User remains on the login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');

    // expect: Error banner shows 'Epic sadface: Username and password do not match any user in this service'
    await expect(page.locator('[data-test="error"]')).toHaveText(
      'Epic sadface: Username and password do not match any user in this service'
    );
  });
});

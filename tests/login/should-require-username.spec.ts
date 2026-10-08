// spec: Login Suite
// seed: tests/login/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Login Suite', () => {
  test('Should show validation error when username is empty', async ({ page }) => {
    // 1. Navigate to https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/');

    // 2. Leave Username field empty; enter 'secret_sauce' in Password field
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // 3. Click the Login button
    await page.locator('[data-test="login-button"]').click();

    // expect: Error banner displays 'Epic sadface: Username is required'
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required');

    // expect: User stays on the login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.locator('[data-test="username"]')).toHaveValue('');
  });
});

const { test, expect } = require("@playwright/test");

const userData = require('../user.js');

test('test', async ({ page }) => {
  // Go to https://netology.ru/?modal=sign_in
  await page.goto('https://netology.ru/?modal=sign_in');
  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();
  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill(userData.userEmail);
  // Click [placeholder="Пароль"]
  await page.locator('[placeholder="Пароль"]').click();
  // Fill [placeholder="Пароль"]
  await page.locator('[placeholder="Пароль"]').fill(userData.userPassword);
  // Click [data-testid="login-submit-btn"]
  await page.locator('[data-testid="login-submit-btn"]').click();
  await expect(page).toHaveURL('https://netology.ru/profile');
  // Click text=Мои курсы и профессии
  await page.locator('text=Мои курсы и профессии').click();
});


test('test', async ({ page }) => {
  // Go to https://netology.ru/?modal=sign_in
  await page.goto('https://netology.ru/?modal=sign_in');
  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();
  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill('user@user');
  // Click [placeholder="Пароль"]
  await page.locator('[placeholder="Пароль"]').click();
  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();
  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill('user@user.ru');
  // Click [placeholder="Пароль"]
  await page.locator('[placeholder="Пароль"]').click();
  // Fill [placeholder="Пароль"]
  await page.locator('[placeholder="Пароль"]').fill('123456789');
  // Click [data-testid="login-submit-btn"]
  await page.locator('[data-testid="login-submit-btn"]').click();
  // Click [data-testid="login-error-hint"]
  await page.locator('[data-testid="login-error-hint"]').click();
});
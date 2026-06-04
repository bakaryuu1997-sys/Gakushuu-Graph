import { expect, test } from '@playwright/test';

test('Frontend course learning flow', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Frontend Roadmap').click();
  await page.getByTestId('view-phaseStudy').click();
  await expect(page.getByText(/Đang ở bước/i).first()).toBeVisible();

  await page.getByTestId('view-projects').click();
  await expect(page.getByText(/Project-based learning/i)).toBeVisible();

  await page.getByTestId('view-cheatsheet').click();
  await expect(page.getByText(/Frontend Cheat Sheet/i).first()).toBeVisible();
});

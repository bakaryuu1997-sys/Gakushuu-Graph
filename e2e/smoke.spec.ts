import { expect, test } from '@playwright/test';

test('AI Passport critical learning flow', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('AI Passport').first()).toBeVisible();
  await expect(page.getByText(/Beginner Focus Mode/i).first()).toBeVisible();

  await page.getByTestId('view-phaseStudy').click();
  await expect(page.getByText(/Đang ở bước/i).first()).toBeVisible();

  await page.getByTestId('view-exam').click();
  await expect(page.getByText(/Mini Quiz|Quiz/i).first()).toBeVisible();

  await page.getByTestId('view-session').click();
  await expect(page.getByText(/Exam Simulator/i).first()).toBeVisible();

  await page.getByRole('button', { name: 'Advanced' }).click();
  await page.getByTestId('view-graph').click();
  await expect(page.getByText(/Visual Knowledge Map/i)).toBeVisible();

  await page.getByTestId('view-crashCourse').click();
  await expect(page.getByText(/Crash Course/i).first()).toBeVisible();

  await page.getByTestId('view-coverage').click();
  await expect(page.getByText(/Content Coverage/i).first()).toBeVisible();

  await page.getByTestId('view-japanese').click();
  await expect(page.getByText(/Japanese/i).first()).toBeVisible();
});

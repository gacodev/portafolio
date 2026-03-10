import { test, expect } from '@playwright/test';

test.describe('Portfolio Responsive & UX Tests', () => {

  // ─── Footer Tests ───
  test('Footer renders correctly and does not overflow viewport', async ({ page }) => {
    await page.goto('/es', { waitUntil: 'networkidle' });
    const footer = page.locator('footer');
    await expect(footer).toBeVisible({ timeout: 15000 });

    // Verify key footer elements
    await expect(footer.locator('a[aria-label="LinkedIn"]')).toBeVisible();
    await expect(footer.locator('a[aria-label="GitHub"]')).toBeVisible();

    // No horizontal overflow
    const box = await footer.boundingBox();
    const viewport = page.viewportSize();
    expect(box.width).toBeLessThanOrEqual(viewport.width + 2);
  });

  // ─── Metrics Link Test ───
  test('ProjectStats shows a "Ver Métricas Detalladas" link', async ({ page }) => {
    await page.goto('/es', { waitUntil: 'networkidle' });
    const metricsLink = page.locator('a:has-text("Ver Métricas Detalladas")');
    await expect(metricsLink).toBeVisible({ timeout: 15000 });
    await expect(metricsLink).toHaveAttribute('href', /\/es\/metrics/);
  });

  // ─── Portuguese Translation Tests ───
  test('Portuguese route loads with correct translations', async ({ page }) => {
    await page.goto('/pt', { waitUntil: 'networkidle' });

    // ProfessionalSummary in Portuguese
    const ptTitle = page.locator('text=Resumo Profissional');
    await expect(ptTitle).toBeVisible({ timeout: 15000 });

    // CloudProviderList in Portuguese  
    const cloudTitle = page.locator('text=Experiência em Nuvem');
    await expect(cloudTitle).toBeVisible({ timeout: 15000 });
  });

  // ─── WebP Image Verification ───
  test('All images use WebP format (no broken .png/.jpg references)', async ({ page }) => {
    await page.goto('/es', { waitUntil: 'networkidle' });
    
    // Check that no image src ends with .png, .jpg, or .jpeg
    const brokenImages = await page.evaluate(() => {
      const imgs = document.querySelectorAll('img');
      const broken = [];
      for (const img of imgs) {
        const src = img.src || img.getAttribute('src') || '';
        if (/\.(png|jpg|jpeg)$/i.test(src)) {
          broken.push(src);
        }
      }
      return broken;
    });
    expect(brokenImages).toEqual([]);
  });

  // ─── Sidebar Navigation (Desktop) ───
  test('Desktop sidebar is visible with correct menu items', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Desktop-only test');
    await page.goto('/es', { waitUntil: 'networkidle' });
    const sidebar = page.locator('.menu-container');
    await expect(sidebar).toBeVisible({ timeout: 15000 });

    // "Detailed Metrics" tab should NOT exist in the sidebar
    const detailedMetrics = sidebar.locator('text=Métricas Detalladas por Proyecto');
    await expect(detailedMetrics).not.toBeVisible();
  });

  // ─── Mobile Menu Toggle ───
  test('Mobile toggle button opens the menu', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile-only test');
    await page.goto('/es', { waitUntil: 'networkidle' });

    const toggleBtn = page.locator('.menu-toggle-button');
    await expect(toggleBtn).toBeVisible({ timeout: 15000 });
    await toggleBtn.click();

    const mobileMenu = page.locator('.mobile-menu');
    await expect(mobileMenu).toBeVisible();
  });

  // ─── English Route Smoke Test ───
  test('English route loads without errors', async ({ page }) => {
    await page.goto('/en', { waitUntil: 'networkidle' });
    const title = page.locator('text=Professional Summary');
    await expect(title).toBeVisible({ timeout: 15000 });

    // English metrics link
    const metricsLink = page.locator('a:has-text("View Detailed Metrics")');
    await expect(metricsLink).toBeVisible({ timeout: 15000 });
  });
});

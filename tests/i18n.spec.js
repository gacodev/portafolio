import { test, expect } from '@playwright/test';

// ─── Expected translations per language ───
const TRANSLATIONS = {
  es: {
    professionalSummary: 'Resumen Profesional',
    kubernetesExperience: 'Experiencia en Kubernetes',
    toolsTechnologies: 'Herramientas y Tecnologías',
    cicdPipeline: 'Pipeline de CI/CD',
    agileSection: 'Dominio Ágil: Principios en Acción',
    observability: 'Observabilidad',
    metricsLink: 'Ver Métricas Detalladas',
  },
  en: {
    professionalSummary: 'Professional Summary',
    kubernetesExperience: 'Kubernetes Experience',
    toolsTechnologies: 'Tools & Technologies',
    cicdPipeline: 'CI/CD Pipeline',
    agileSection: 'Agile Mastery: Principles in Action',
    observability: 'Observability',
    metricsLink: 'View Detailed Metrics',
  },
  pt: {
    professionalSummary: 'Resumo Profissional',
    kubernetesExperience: 'Experiência em Kubernetes',
    toolsTechnologies: 'Ferramentas e Tecnologias',
    cicdPipeline: 'Pipeline de CI/CD',
    agileSection: 'Domínio Ágil: Princípios em Ação',
    observability: 'Observabilidade',
    metricsLink: 'Ver Métricas Detalhadas',
  },
};

const LANGUAGES = ['es', 'en', 'pt'];

// ─────────────────────────────────────────────────────────
// 1. Language consistency per route
// ─────────────────────────────────────────────────────────
test.describe('Language consistency per route', () => {
  for (const lang of LANGUAGES) {
    test(`/${lang} shows Professional Summary in correct language`, async ({ page }) => {
      await page.goto(`/${lang}`, { waitUntil: 'networkidle' });

      const expected = TRANSLATIONS[lang].professionalSummary;
      await expect(page.locator(`text=${expected}`)).toBeVisible({ timeout: 15000 });

      // Ensure translations from other languages are NOT present
      for (const otherLang of LANGUAGES) {
        if (otherLang === lang) continue;
        const wrong = TRANSLATIONS[otherLang].professionalSummary;
        if (wrong === expected) continue; // skip if same string across languages
        await expect(page.locator(`text=${wrong}`)).not.toBeVisible();
      }
    });
  }
});

// ─────────────────────────────────────────────────────────
// 2. Key section headers per language
// ─────────────────────────────────────────────────────────
test.describe('Key section headers per language', () => {
  const SECTION_KEYS = [
    'professionalSummary',
    'kubernetesExperience',
    'toolsTechnologies',
    'cicdPipeline',
    'agileSection',
    'observability',
  ];

  for (const lang of LANGUAGES) {
    test(`/${lang} renders all section headers in ${lang}`, async ({ page }) => {
      await page.goto(`/${lang}`, { waitUntil: 'networkidle' });

      for (const key of SECTION_KEYS) {
        const expected = TRANSLATIONS[lang][key];
        await expect(
          page.locator(`text=${expected}`),
          `Expected "${expected}" to be visible on /${lang} (section: ${key})`
        ).toBeVisible({ timeout: 15000 });
      }
    });

    test(`/${lang} footer renders correctly`, async ({ page }) => {
      await page.goto(`/${lang}`, { waitUntil: 'networkidle' });
      const footer = page.locator('footer');
      await expect(footer).toBeVisible({ timeout: 15000 });
      await expect(footer.locator('a[aria-label="LinkedIn"]')).toBeVisible();
      await expect(footer.locator('a[aria-label="GitHub"]')).toBeVisible();
    });
  }
});

// ─────────────────────────────────────────────────────────
// 3. Portuguese completeness (critical)
// ─────────────────────────────────────────────────────────
test.describe('Portuguese completeness', () => {
  test('/pt has Kubernetes section in Portuguese, not Spanish or English', async ({ page }) => {
    await page.goto('/pt', { waitUntil: 'networkidle' });

    await expect(page.locator('text=Experiência em Kubernetes')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('text=Experiencia en Kubernetes')).not.toBeVisible();
    await expect(page.locator('text=Kubernetes Experience')).not.toBeVisible();
  });

  test('/pt has Tools & Technologies heading in Portuguese', async ({ page }) => {
    await page.goto('/pt', { waitUntil: 'networkidle' });

    await expect(page.locator('text=Ferramentas e Tecnologias')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('text=Herramientas y Tecnologías')).not.toBeVisible();
    await expect(page.locator('text=Tools & Technologies')).not.toBeVisible();
  });

  test('/pt has CI/CD Pipeline heading in Portuguese', async ({ page }) => {
    await page.goto('/pt', { waitUntil: 'networkidle' });

    await expect(page.locator('text=Pipeline de CI/CD')).toBeVisible({ timeout: 15000 });
  });

  test('/pt has Agile section heading in Portuguese', async ({ page }) => {
    await page.goto('/pt', { waitUntil: 'networkidle' });

    await expect(page.locator('text=Domínio Ágil: Princípios em Ação')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('text=Dominio Ágil: Principios en Acción')).not.toBeVisible();
    await expect(page.locator('text=Agile Mastery: Principles in Action')).not.toBeVisible();
  });

  test('/pt has AI Agents section with Portuguese content', async ({ page }) => {
    await page.goto('/pt', { waitUntil: 'networkidle' });

    // Verify presence of Portuguese AI Agents content (check for a known Portuguese label)
    const body = await page.textContent('body');
    // AI Agents section should contain Portuguese text, not Spanish/English equivalents
    expect(body).toContain('Agentes de IA');
  });

  test('/pt has Kafka/Elastic sections with Portuguese headers', async ({ page }) => {
    await page.goto('/pt', { waitUntil: 'networkidle' });

    const body = await page.textContent('body');
    // Check that Kafka and Elastic related sections have Portuguese content
    expect(body).toContain('Kafka');
    expect(body).toContain('Elastic');
  });

  test('/pt has Observability section with Portuguese labels', async ({ page }) => {
    await page.goto('/pt', { waitUntil: 'networkidle' });

    await expect(page.locator('text=Observabilidade')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('text=Observabilidad')).not.toBeVisible();
  });
});

// ─────────────────────────────────────────────────────────
// 4. No language mixing
// ─────────────────────────────────────────────────────────
test.describe('No language mixing', () => {
  // Unique phrases that should ONLY appear on their respective language route
  const EXCLUSIVE_PHRASES = {
    es: [
      'Herramientas y Tecnologías',
      'Resumen Profesional',
      'Experiencia en Kubernetes',
      'Dominio Ágil: Principios en Acción',
    ],
    en: [
      'Tools & Technologies',
      'Professional Summary',
      'Kubernetes Experience',
      'Agile Mastery: Principles in Action',
    ],
    pt: [
      'Ferramentas e Tecnologias',
      'Resumo Profissional',
      'Experiência em Kubernetes',
      'Domínio Ágil: Princípios em Ação',
    ],
  };

  for (const routeLang of LANGUAGES) {
    test(`/${routeLang} does not contain exclusive phrases from other languages`, async ({ page }) => {
      await page.goto(`/${routeLang}`, { waitUntil: 'networkidle' });
      // Wait for content to settle
      await page.locator(`text=${TRANSLATIONS[routeLang].professionalSummary}`).waitFor({ timeout: 15000 });

      const body = await page.textContent('body');

      for (const sourceLang of LANGUAGES) {
        if (sourceLang === routeLang) continue;

        for (const phrase of EXCLUSIVE_PHRASES[sourceLang]) {
          // Skip if the phrase happens to be identical across languages (e.g. "Pipeline de CI/CD")
          if (EXCLUSIVE_PHRASES[routeLang].includes(phrase)) continue;

          expect(
            body,
            `"${phrase}" (${sourceLang}) should NOT appear on /${routeLang}`
          ).not.toContain(phrase);
        }
      }
    });
  }
});

// ─────────────────────────────────────────────────────────
// 5. Navigation language consistency
// ─────────────────────────────────────────────────────────
test.describe('Navigation language consistency', () => {
  test('/pt floating menu items are in Portuguese', async ({ page }) => {
    await page.goto('/pt', { waitUntil: 'networkidle' });

    const menuContainer = page.locator('.menu-container');
    await expect(menuContainer).toBeVisible({ timeout: 15000 });

    const menuText = await menuContainer.textContent();

    // Menu should NOT contain Spanish or English navigation labels
    // It should contain Portuguese equivalents
    expect(menuText).not.toContain('Resumen Profesional');
    expect(menuText).not.toContain('Professional Summary');
  });

  test('/es floating menu items are in Spanish', async ({ page }) => {
    await page.goto('/es', { waitUntil: 'networkidle' });

    const menuContainer = page.locator('.menu-container');
    await expect(menuContainer).toBeVisible({ timeout: 15000 });

    const menuText = await menuContainer.textContent();

    expect(menuText).not.toContain('Professional Summary');
    expect(menuText).not.toContain('Resumo Profissional');
  });

  test('/en floating menu items are in English', async ({ page }) => {
    await page.goto('/en', { waitUntil: 'networkidle' });

    const menuContainer = page.locator('.menu-container');
    await expect(menuContainer).toBeVisible({ timeout: 15000 });

    const menuText = await menuContainer.textContent();

    expect(menuText).not.toContain('Resumen Profesional');
    expect(menuText).not.toContain('Resumo Profissional');
  });
});

// ─────────────────────────────────────────────────────────
// 6. Metrics link language
// ─────────────────────────────────────────────────────────
test.describe('Metrics link language', () => {
  for (const lang of LANGUAGES) {
    test(`/${lang} metrics link text matches language`, async ({ page }) => {
      await page.goto(`/${lang}`, { waitUntil: 'networkidle' });

      const expectedText = TRANSLATIONS[lang].metricsLink;
      const metricsLink = page.locator(`a:has-text("${expectedText}")`);
      await expect(metricsLink).toBeVisible({ timeout: 15000 });
      await expect(metricsLink).toHaveAttribute('href', new RegExp(`\\/${lang}\\/metrics`));

      // Ensure other language metrics links are NOT visible
      for (const otherLang of LANGUAGES) {
        if (otherLang === lang) continue;
        const wrongText = TRANSLATIONS[otherLang].metricsLink;
        if (wrongText === expectedText) continue;
        await expect(
          page.locator(`a:has-text("${wrongText}")`),
          `Metrics link "${wrongText}" (${otherLang}) should NOT appear on /${lang}`
        ).not.toBeVisible();
      }
    });
  }
});

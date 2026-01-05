import { component$ } from "@builder.io/qwik";

import { useTranslations } from "~/i18n/use-translations";

export default component$(() => {
  const { t } = useTranslations();

  const ghLink = 'https://github.com/hamid-k/personal-security-checklist-FA/';
  const licenseLink = 'https://github.com/hamid-k/personal-security-checklist-FA/blob/master/LICENSE';

  return (
  <footer class="footer footer-center px-4 py-2 mt-4 text-base-content bg-base-200 bg-opacity-25">
    <aside>
      <p>{t('footer.licensedUnder')} <a href={licenseLink} class="link link-primary">MIT</a> -
      © Alicia Sykes 2024 - 
      {t('footer.viewSource')} <a href={ghLink} class="link link-primary">GitHub</a> -
      Maintained by <a href="https://github.com/hamid-k" class="link link-primary">hamid-k</a>
      </p>
    </aside>
  </footer>
  );
});

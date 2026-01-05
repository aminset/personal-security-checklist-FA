import { component$, Slot, useContextProvider, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { type RequestHandler } from "@builder.io/qwik-city";

import Navbar from "~/components/furniture/nav";
import Footer from "~/components/furniture/footer";
import { ChecklistContext } from "~/store/checklist-context";
import { LocaleContext } from "~/store/locale-context";
import { useLocale } from "~/store/locale-store";
import { getChecklist } from "~/data/checklists";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  const localeStore = useLocale();
  useContextProvider(LocaleContext, localeStore);
  const checklists = useSignal(getChecklist(localeStore.locale.value));
  useContextProvider(ChecklistContext, checklists);

  useVisibleTask$(({ track }) => {
    const locale = track(() => localeStore.locale.value);
    checklists.value = [...getChecklist(locale)];
  });

  return (
    <>
      <Navbar />
      <main class="bg-base-100 min-h-full">
        <Slot />
      </main>
      <Footer />
    </>
  );
});

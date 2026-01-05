import { component$, useContextProvider, Slot } from "@builder.io/qwik";
import { routeLoader$, type RequestHandler } from "@builder.io/qwik-city";
import jsyaml from "js-yaml";
import checklistYaml from '../../public/personal-security-checklist.yml?raw';

import Navbar from "~/components/furniture/nav";
import Footer from "~/components/furniture/footer";
import { ChecklistContext } from "~/store/checklist-context";
import { LocaleContext } from "~/store/locale-context";
import { useLocale } from "~/store/locale-store";
import type { Sections } from "~/types/PSC";

export const useChecklists = routeLoader$(async () => {
  try {
    return jsyaml.load(checklistYaml) as Sections;
  } catch (error) {
    console.log(error);
    return [];
  }
});

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  const checklists = useChecklists();
  useContextProvider(ChecklistContext, checklists);
  const localeStore = useLocale();
  useContextProvider(LocaleContext, localeStore);

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

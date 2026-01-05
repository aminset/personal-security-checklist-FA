import jsyaml from 'js-yaml';

import type { Sections } from '~/types/PSC';

import enChecklist from './checklists/en.yml?raw';
import faChecklist from './checklists/fa.yml?raw';

const parseChecklist = (content: string): Sections => {
  const parsed = jsyaml.load(content);
  return Array.isArray(parsed) ? (parsed as Sections) : [];
};

const checklistsByLocale: Record<string, Sections> = {
  en: parseChecklist(enChecklist),
  fa: parseChecklist(faChecklist),
};

export const getChecklist = (locale: string, fallback = 'en'): Sections => {
  return checklistsByLocale[locale] || checklistsByLocale[fallback] || [];
};

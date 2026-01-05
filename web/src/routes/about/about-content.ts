import type { Locale } from '~/i18n/translations';

const aboutContent: Record<Locale, {
  intro: string[];
  contributing: string[];
  projects: {
    title: string;
    description: string;
    icon: string;
    link: string;
  }[];
}> = {
  en: {
    intro: [
      'The objective of this project is to give you practical guidance on how to improve your digital security, and protect your privacy online.',
      'The Farsi translation is maintained by Hamid K (github.com/hamid-k).',
      'The checklist is a living document, and will be updated regularly to reflect the latest threats and best practices. This is made possible by open sourcing the content, and making it a community maintained resource, meaning that anyone can suggest changes, make additions or update the guidance. All edits are then reviewed by maintainers before being merged and going live.',
    ],
    contributing: [
      'This project is only possible thanks to contributors like you!',
      'You can make changes to any of the checklist content, by editing [`personal-security-checklist.yml`](https://github.com/hamid-k/personal-security-checklist-FA/blob/master/personal-security-checklist.yml).',
    ],
    projects: [],
  },
  fa: {
    intro: [
      'هدف این پروژه ارائه راهنمای عملی برای بهبود امنیت دیجیتال و حفاظت از حریم خصوصی آنلاین شماست.',
      'ترجمه و نگه‌داری نسخه فارسی توسط حمید ک (github.com/hamid-k) انجام می‌شود.',
      'چک لیست یک سند زنده است و به طور منظم برای بازتاب تازه ترین تهدیدها و بهترین روش ها به روز می شود. این کار با متن باز کردن محتوا و نگهداری جامعه محور آن ممکن شده است؛ یعنی هر کسی می تواند تغییر پیشنهاد دهد، موردی اضافه کند یا راهنما را به روزرسانی کند. سپس همه ویرایش ها قبل از انتشار توسط نگهدارندگان بازبینی و ادغام می شوند.',
    ],
    contributing: [
      'این پروژه فقط به لطف مشارکت کنندگانی مثل شما ممکن است!',
      'می توانید با ویرایش [`personal-security-checklist.yml`](https://github.com/hamid-k/personal-security-checklist-FA/blob/master/personal-security-checklist.yml) در محتوای چک لیست تغییر ایجاد کنید.',
    ],
    projects: [],
  },
};

export const getAboutContent = (locale: Locale) => aboutContent[locale];

export const socials: Array<{ title: string; icon: string; link: string }> = [];

export const license = `
The MIT License (MIT)
Copyright (c) Alicia Sykes 

Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal 
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sub-license, and/or sell 
copies of the Software, and to permit persons to whom the Software is furnished 
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included install 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANT ABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL 
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`;

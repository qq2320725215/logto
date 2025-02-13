/* eslint-disable @typescript-eslint/consistent-indexed-object-style */

/* Copied from i18next/index.d.ts */
export type Resource = Record<Language, ResourceLanguage>;

export interface ResourceLanguage {
  [namespace: string]: ResourceKey;
}

export type ResourceKey = string | { [key: string]: unknown };

export enum Language {
  English = 'en',
  Chinese = 'zh-CN',
}

export const languageOptions = [
  { value: Language.English, title: 'English' },
  { value: Language.Chinese, title: '中文' },
];

/* eslint-enable @typescript-eslint/consistent-indexed-object-style */

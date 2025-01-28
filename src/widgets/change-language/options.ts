import { LANGUAGES } from "@shared/consts/languages";

type Options = {
  value: string;
  label: string;
};

export const options: readonly Options[] = Object.freeze([
  {
    value: LANGUAGES.EN,
    label: "english",
  },
  {
    value: LANGUAGES.RU,
    label: "русский",
  },
]);

import i18next from 'i18next';

/**
 * Query for a message in the i18n translations and replace variables in it with replacement values passed into the function.
 *
 * Variables have to start with a % sign and also end with a % sign eg. `%variablename%`
 *
 * Replacement values passed in as Stringarray will replace each variable in the message with the corresponding index value in the array
 *
 * Passing in an Object will replace variables with the keys of the passed in Object
 *
 * @param i18nProp i18n obejct property
 * @param {Array | Object} replacement  Array or Object with named variables to replace in i18n message
 * @returns i18n message text
 */
export function i18n(
  i18nProp: string,
  replacement?:
    | string[]
    | number[]
    | boolean[]
    | Record<string, string | number | boolean>
) {
  let message = i18next.t(i18nProp);

  if (!message || !replacement) return message;

  if (Array.isArray(replacement)) {
    replacement.forEach(
      (rep) =>
        (message = message.replace(/%[a-zA-Z_0-9]*%|%s/, rep?.toString()))
    );
    return message;
  }

  for (const key in replacement) {
    message = message.replace(`%${key}%`, String(replacement[key]));
  }

  return message;
}

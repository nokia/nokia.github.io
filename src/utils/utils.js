/**
 * Trims the input string at the max length and adds '...' to the end.
 *
 * @param {string} str Input string
 * @param {number} max Max length
 */

const trim = (str, max) => {
  if (str === null) return;
  return str.length > max ? `${str.slice(0, max - 3)}...` : str;
};

export { trim };

/* eslint-disable no-useless-escape */
// normal function
export default function validateUrl(str) {
  const regex = new RegExp(/^(https?:\/\/+[a-zA-Z][^\/?#]+).*?$/);
  const isMatch = regex.test(str);
  return isMatch;
}

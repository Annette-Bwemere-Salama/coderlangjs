export const isShortWord = (s) => {
  return s.length < 10 && !/\s/.test(s);;
}
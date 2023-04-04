export const delayedLog = (s, n) => {
  setTimeout(() => {
    console.log(s);
  }, n * 1000);
}
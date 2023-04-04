export const slowLog = (s) => {
  setTimeout(() => {
    console.log(s);
  }, 3000);
}
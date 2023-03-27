export const startProgressBar = (progressBar, delay) => {
  const timer = setInterval(() => {
    progressBar.tick();
    if (progressBar.complete) {
      delay
      console.log('DONE!');
    }
  }, 100);
}

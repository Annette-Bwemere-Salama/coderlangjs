export const startProgressBar = (progressBar, delay) => {
  const timer = setInterval(() => {
    let progress = 0
    progressBar.tick();
    if (progressBar.complete) {
      delay
      console.log('DONE!');
    }
  }, 100);
}

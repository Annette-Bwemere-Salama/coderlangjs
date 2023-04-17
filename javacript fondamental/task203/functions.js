export function startProgressBar(progressBar,delay) {
  progressBar = 0;
  const interval = setInterval(() => {
    progressBar += 100;
    console.log(`Progress: ${progressBar}%`);
    if (progressBar >= 1000) {
      clearInterval(interval);
      console.log('Progress complete!');
    }
  }, delay);
}
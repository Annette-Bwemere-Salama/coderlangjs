export function startProgressBar(progressBar,delay) {
  progressBar = 0;
  const interval = setInterval(() => {
    progressBar += 10;
    console.log(`Progress: ${progressBar}%`);
    if (progressBar >= 100) {
      clearInterval(interval);
      console.log('Progress complete!');
    }
  }, delay);
}
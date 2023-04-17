export const startCountdown = (n) => {
  let i = n;
  
  const intervalId = setInterval(() => {
    console.log(i);
    
    if (i === 1) {
      console.log('GO!');
      clearInterval(intervalId);
    }
    
    i--;
  }, 100);
}
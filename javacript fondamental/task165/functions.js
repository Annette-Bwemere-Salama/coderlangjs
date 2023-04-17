export const setEasyTimeout = (func, time) => {
  const hours = time.hours || 0;
  const minutes = time.minutes || 0;
  const seconds = time.seconds || 0;
  
  const totalMilliseconds = (hours * 60 * 60 + minutes * 60 + seconds) * 1000;
  
  setTimeout(func, totalMilliseconds);
}
export const getFormattedDate = (date) => {
  if (date) {
    return date.toUTCString();
  }
  return new Date().toUTCString();
}


export const logger = (req, res, next)=>{
  console.log(`${req.method} ${req.url}`);
  next()
}
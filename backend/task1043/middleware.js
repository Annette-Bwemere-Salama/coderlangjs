import { getFormattedDate } from "./functions"; 

export const logRequestTimestamp = (req,res,next) => {
  // console.log('Mon, 23 Nov 3027 10:15:26 GMT');
  console.log(getFormattedDate())
  next();

}

export const logRequestType = (req, res, next) => {
  console.log(`Received ${req.method} request`);
  console.log(getFormattedDate())
  next();
}

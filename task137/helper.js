export const positiveElements = (arr) => {
 let positive = [];
 for (let i = 0; i < arr.length; i++) {
  if(arr[i]>0 && arr[i] !== null &&arr[i] !== undefined)
  positive.push(arr[i])
 }
  return positive;


}

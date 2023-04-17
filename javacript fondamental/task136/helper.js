export const getTotal = (arr) => {
  let sum = 0
  for (let i of arr) {
    sum+=i;
    
  }
  // console.log(sum);
  return sum
}
export const getCar = (numberOfPassengers) => {
  if(numberOfPassengers>4){
    throw numberOfPassengers;
  }
  return `Here's your car for ${numberOfPassengers} passengers`;
}

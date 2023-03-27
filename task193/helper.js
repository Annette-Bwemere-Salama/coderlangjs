export const bakeMyCake = (ingredients) => {
  console.log(`Baking a cake!`)
// try {
  if(!ingredients){
    
    throw ingredients
  }
  return {
    type: 'cake',
    from: ingredients
  }
// } catch (error) {
//   if(!ingredients){
//     return error
//   }
// }
}

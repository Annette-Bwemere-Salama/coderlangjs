export const getObjectKeys = (obj) => {
  const keys = []
  for(const  key in obj){
    keys.push(key)}
    return keys;
  }
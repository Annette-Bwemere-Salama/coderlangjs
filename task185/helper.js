export const isKeyPresent = (obj, key) => {
for (const ky in obj ) {
  if(key === ky){

    return true;
  }
}
  return false;
}
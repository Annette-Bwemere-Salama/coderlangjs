export const isKeyPresent = (obj, key) => {
if (key in obj ) {
  return obj[key]
}
  return false;
}
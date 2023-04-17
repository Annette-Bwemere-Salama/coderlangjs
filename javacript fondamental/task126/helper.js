export const allTheSame = (x, y, z) => {
   if (x ===y && x ===z || y === x && y === z || z === x && z ===y) {
    return true
  }else{
    return false
  }
}
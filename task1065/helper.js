export const hasUpperCaseLetters = (s) => {
  let arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === /[A-Z]/.test(s)) {
      return true
    }
    
  }
  return false;
}
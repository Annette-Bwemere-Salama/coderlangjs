export const checkSpam = (text, spamKeywords) => {
  let a = text.split(" ")
  for (let i =0; i< spamKeywords.length;i++){
    if(a instanceof spamKeywords[i]){
      return true
    }
  }
  return false

}
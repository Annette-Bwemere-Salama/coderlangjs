export const checkSpam = (text, spamKeywords) => {
  let a = text.toUpperCase().split(" ")
  
  let inter = spamKeywords.filter(el => a.includes(el.toUpperCase()))

  if (inter.length){
    return true
  }else{
    return false
  }
}
export const checkSpam = (text, spamKeywords) => {
    let a = text.split(" ")
    let intersection = spamKeywords.filter(el=>a.includes(el))
    let inter = intersection
  if(inter.length>=1){
    return true
  }else if (inter<1){
    return false
  }
  return true

}
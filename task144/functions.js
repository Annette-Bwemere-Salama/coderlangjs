export const capitalizeEachWord = (s) => {
  let words = s.split(" ");
  return words.map((word)=>{
  word[0].toUpperCase() + words.substring(1)
  }).join(" ");
}
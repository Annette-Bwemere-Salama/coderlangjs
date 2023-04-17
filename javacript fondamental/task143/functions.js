export const extractNumber = (s) => {
  let j = s.split("")
  let res = ''
  for(let i = 0; i< j.length; i++){
    
    if (j[i].match(/[0-9.]/))
    {
      res += j[i]
    }

  }

  return Number(res)

}
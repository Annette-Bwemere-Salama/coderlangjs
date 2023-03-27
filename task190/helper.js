export const errorPractice = (name, surname) => {

 try {
throw console.log(`Hey, ${name} ${surname}! Welcome to the JavaScript error practice.`)

} catch(e) {
  console.log(e.message);

}


  }

export const askNameAndGreet = () => {
  const name = readlineSync.question('Please enter your name: ');

  console.log(`Hello, ${name}!`);
}

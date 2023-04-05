export default function () {
  const variant = Math.random();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (variant < 0.3) {
        resolve({ name: "John Doe" });
      } else {
        resolve("some error");
      }
    }, 1000)
  });
}
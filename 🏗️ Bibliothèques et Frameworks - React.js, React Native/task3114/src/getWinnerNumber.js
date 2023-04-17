export const getWinnerNumber = () => {
  const generateNumber = () => (Math.floor(Math.random() * 10) + 1).toString().padStart(2, '0');

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Array.from({ length: 5 }, generateNumber).join(' - '));
    }, 500);
  });
};

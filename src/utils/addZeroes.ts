export const addZeroes = (num: String) =>
  Number(num).toFixed(Math.max(num.split(".")[1]?.length, 2) || 2);

const sum = (...args) => {
  const nums = [...args];
  return nums.reduce((a, b) => a + b, 0);
}
function avg(array) {
  if (array === undefined) {
    throw new Error('No parameter provided');
  }

  // if (!Array.isArray(arr)) return 0;
  if (array.length === 0) return 0;

  return array.reduce((acc, value) => acc + value, 0)/array.length;
}
const createRangeFillMap = (start, end) =>
  new Array(end - start + 1)
    .fill(0)
    .map((_, index) => start + index);

console.log(createRangeFillMap(5, 25));
console.log(createRangeFillMap(0, 29));
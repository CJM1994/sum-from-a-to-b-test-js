
function sum(fromN, toN) {
  if (fromN < toN) {
    return fromN + sum(fromN + 1, toN);
  } else if (fromN >= toN) return fromN;
}

module.exports = sum;

console.log(sum(3, 7));

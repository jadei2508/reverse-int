module.exports = function reverse (n) {
  let arr = n.toString().split('');
  let len = arr.length -1;
  let result = '';
  while (len !== -1) {
      result += arr[len];
      len--;
  }
  return Number.parseInt(result);
}

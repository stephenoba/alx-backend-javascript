export default function divideFunction(numerator, denominator) {
  let result;
  if (denominator !== 0) {
    result = numerator / denominator;
  } else {
    throw Error('cannot divide by 0');
  }
  return result;
}

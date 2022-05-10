export default function analyzeArray(arr) {
  if (!Array.isArray(arr)) {
    return 'Input is not an array!';
  }

  if (arr.length === 0) {
    return 'Inputted array is empty!';
  }

  if (arr.some(current => isNaN(current))) {
    return 'Array must only contain numbers!';
  }

  return {
    average: arr.reduce((sum, current) => sum + current, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  }
}

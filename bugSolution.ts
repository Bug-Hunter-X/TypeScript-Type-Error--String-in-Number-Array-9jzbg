function combine(arr1: number[], arr2: number[]): number[] {
  // Type Guard to check if all elements are numbers
  function isNumberArray(arr: any[]): arr is number[] {
    return arr.every(item => typeof item === 'number');
  }

  if (!isNumberArray(arr1) || !isNumberArray(arr2)) {
    throw new Error("Arrays must contain only numbers.");
  }

  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = combine(arr1, arr2);
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

const arr3 = [1, 2, "3"];
const arr4 = [4, 5, 6];

// this will throw an error because arr3 contains a string
try {
  const combined2 = combine(arr3, arr4);
  console.log(combined2);
} catch (e) {
  console.error(e);
}

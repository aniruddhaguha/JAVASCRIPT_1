const arr = [12, 45, 7, 89, 23, 56, 34, 90, 11, 67, 78, 54, 32, 21, 9, 88, 76, 43, 29, 115];

let max = arr[0]; 

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);
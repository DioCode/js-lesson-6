// function highestOccurrence(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }

//   return Array.from(new Set(newArr));
// }

// console.log(highestOccurrence([2, 3, 2, 5, 6, 7, 2]));
// // -> [2];
// console.log(highestOccurrence([1, 2, 3, 3, 'a', 'b', 'b', 'c']))
// // -> [3, 'b'];
// console.log(highestOccurrence(['it', 'keeps', 'coding', 'on', 'or', 'it', 'gets']))
// -> ['it'];

////

// function highestOccurrence(arr) {
//   arr = arr.sort();
//   console.log(arr);

//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == arr[i + 1] && arr[i] != arr[i + 2]) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

////

// function highestOccurrence(arr) {
//   return [...(new Set(arr.filter(x => arr.indexOf(x) !== arr.lastIndexOf(x))))];
// }

//////////////

// let a = 3;
// let b = a;

let nums = [1, 2, 3, 4, 5, 6];
// let nums2 = nums;
// let nums2 = nums.slice(); // создать копию (старый способ)


nums2.push('a');
nums2.push('b');
nums2.push('c');
nums.push('123');

console.log(nums)
console.log(nums2)
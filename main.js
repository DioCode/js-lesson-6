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

// let nums = [1, 2, 3, 4, 5, 6];
// let nums2 = nums;
// let nums2 = nums.slice(); // создать копию (старый способ)
// let nums2 = [...nums]; // достаёт объекты из nums и записывает в nums2


// nums2.push('a');
// nums2.push('b');
// nums2.push('c');
// nums.push('123');

// console.log(nums)
// console.log(nums2)

// let numbers = [1, 2, 3, 4, 5];
// let numbers2 = [19, 14, 39];
// let numbers3 = [6, 6, 7, 8, 10];

// let result = [...numbers, ...numbers2, ...numbers3];

// console.log(result);

// function test(...args) {
//   console.log(args)
// }

// test(11, 2, 94, 'abc');

/////////

// function square(num) {
//   return num ** 2;
// }

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newNums = nums.map(square);

// // let newNums = [];
// // for (let i = 0; i < nums.length; i++) {
// //   newNums = newNums.push(square());
// // }


// console.log(newNums)

/////////

// functions as first-class objects

// function foo() {
//   console.log(1);
// }

// let bar = foo;
// bar();

////////

// function isPositive(x) {
//   return x > 0;
// }

// let nums = [-4, 12, 13, -80, 91, 48, -41];
// // let newNums = [];
// // for (let i = 0; i < nums.length; i++) {
// //   if (isPositive(nums[i])) {
// //     newNums.push(nums[i]);
// //   }
// // }

// let newNums = nums.filter(isPositive);


// console.log(newNums);

////////

// function extractDomain(url) {
//   return url.split('/')[2];
// }

// console.log(extractDomain("https://google.com/doodles/"));
// // -> 'google.com';
// console.log(extractDomain("https://vk.com/users/id132123123"));
// // // -> 'vk.com';
// console.log(extractDomain("http://localhost:9090/books"));
// // -> 'localhost:9090';

//////
// аэро функции 

// function add(x, y) {
//   return x + y;
// }
// let add = (x, y) => x + y;

// console.log(add(15, 2));

//////
// let add = (x, y) => {
//   console.log(`Calling add with: ${x} and ${y}`)
//   return x + y;
// };

// console.log(add(15, 25))


// let person = {
//   name: 'Steve',
//   age: 13,
//   // sayHello: function () {
//   //   console.log(`Hi, my name is ${this.name}`)
//   // }
//   sayHello: () => {
//     console.log(`Hi, my name is ${person.name}`)
//   }
// };

// person.sayHello();

/////////

// let add = (x, y) => x + y;
// let square = x => x ** 2;
// let hello = () => console.log('Hello World');

// let nums = [-1, 69, -200];

// let nums1 = nums.map(x => x ** 2);
// let nums2 = nums.filter(x => x > 0);

// console.log(nums1, nums2)

////////

// let deleteWords = arr => arr.filter(y => y[0] !== y[y.length - 1]);

// console.log(deleteWords(['space', 'escape', 'detect', 'dead', 'simple']));

///////

// let filterNums = nums => nums.filter(y => y - 50 > 0);

// console.log(filterNums([1, 60, 35, 98, -10, 203]))

//////

// let wordCounter = text => { };
let wordCounter = text => {
  let counts = {};
  let words = text.replace(/[,.?!]/g, '').toLowerCase().split(' ');

  for (let i = 0; i < words.length; i++) {
    if (words[i] in counts) {
      counts[words[i]] += 1;
    } else {
      counts[words[i]] = 1;
    }
  }
  return counts;
}


console.log(wordCounter('Hello, my name is John. My favourite color is blue'));
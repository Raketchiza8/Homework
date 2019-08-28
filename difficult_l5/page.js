// // 1)
// let arr = [];

// let getRandom = function() {
//     return Math.floor(Math.random() * 10000000);
// };

// for (let i = 0; i < 7; i++) {
//     arr.push(String(getRandom()));
// }
// console.log(arr);

// arr.forEach((num) => {
//     num[0] === '2' || num[0] === '4' ? console.log(num) : '';
// });

// 2)

outer:
for (let i = 2; i <= 100; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue outer; 
  }

  console.log(i);
}  




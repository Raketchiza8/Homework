let num = 266219;
let result = num.toString().split('').reduce((mult, current) => mult * current, 1);
console.log(result);
console.log( (result ** 3).toString().slice(0, 2) );
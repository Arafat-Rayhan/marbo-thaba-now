//practice

const numbers = [12,34,45,342,345,22];
const exest35 =numbers.some(num => num <=35);
console.log(exest35);

const marks = [44,56,76,33,6,45,23];
const divide5 = marks.every(num => num % 5 ===0);
console.log(divide5);

const word =['fish','rice','egg','hello'];
const chak =word.some( name => name ==='hello');
console.log(chak);

const age =[22,24,25,14,19,7];
const chak18 =age.every(x => x >=18);
console.log(chak18);
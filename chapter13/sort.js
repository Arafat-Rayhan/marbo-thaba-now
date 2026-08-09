// practice
const number =[50,12,25,8,15];
number.sort((a,b)=> a - b);
console.log(number);

const number2 = [13,2,45,9,6];
number2.sort((a,b) => b - a);
console.log(number2);

const friends =[{
    name : 'Ali',
    age : 29,
},{
    name : 'sara',
    age : 22,
},{
    name : 'Tariq',
    age : 35,
}]
friends.sort((a,b) => a.age - b.age);
console.log(friends);

const names =['nabil','zubayer','sarwar','delwar'];
names.sort();
console.log(names);
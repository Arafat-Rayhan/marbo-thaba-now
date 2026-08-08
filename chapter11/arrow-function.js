//
const add3 = (a,b) => a+b;
const sum = add3(2,3,);
console.log(sum);
const doMath = (x,y,z)=>{
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
}
const result = doMath ( 2, 5,7);
console.log(result);

//practice

const returnObject = () =>({name :' Rayhan'});
console.log(returnObject());

const returnIndex = (array) => array[0];
console.log(returnIndex([3,5,56,7,5]));

const threeMultiply = (x,y,z) => x* y * z;
console.log(threeMultiply(3,5,7));

const deffarant = () => `unknown`;
console.log(deffarant());

const personOparation = (name,money) => money * 5;
console.log(personOparation('Rayhan',30000));

const lastIndex = (array) => {
    const length = array.length;
    const last = length - 1;
    return array[last]
}
const last = lastIndex([33,5,56,67,12,5,67]);
console.log(last);

const add = (a=10,b=5) => a + b;
console.log(add());
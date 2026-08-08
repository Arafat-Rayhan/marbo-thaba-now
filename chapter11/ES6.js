const num = [3,345,6,7,43,56,7,6,34,34,];
num[1]=5;
console.log(num);

// for object
const student ={
    name:'arafat rayhan',
    roll:796,
    clas:'dawra hadith'
}
student.name ='anas khan';
console.log(student);

//default parameter

function add(num1,num2=2){
   const result = num1 + num2;
   return result;
}
const sum = add(9,);
console.log(sum);

//practice

function add3(a =0,b=0,c=0){
    const result = a + b + c;
    return result;
}
console.log(add3(2,4,9));

function depositMoney(money =50){
    return money;
}
console.log(depositMoney());

function nameEarn(name ='anonymous',money = 0){
    const id = `name:${name} is earn ${money} money`;
    return id;
}
console.log(nameEarn('Rayhan',50000));

function square(num= 1){
    const result = num * num;
    return result;
}
console.log(square(4));

function merkating(product= 'unknow product', price = 1){
    return `${product} price is ${price}`;
}
console.log(merkating('doi',25));

function faavorateBook(name='js book'){
    return name;
}
console.log(faavorateBook());

function idInfo({price=10,quantity=1}={}){
    const totel = price * quantity;
    return totel;
}
console.log(idInfo());

function arrayInfo(array=[5,10,15]){
    const evenArray=[]
    for(let num of array){
        num *= 2;
        evenArray.push(num);
    }
    return evenArray;
}
console.log(arrayInfo());

function interest({principal = 1000,rate=5}={}){
    const interastAmount = principal * rate;
    return interastAmount;
}
console.log(interest());

function taxCalculate({salary = 50000,tax = 10}={}){
    const taxAmount = (salary * tax)/100;
    const netSalary = salary - taxAmount;
    return netSalary;
}
console.log(taxCalculate({salary:20000,tax:3}));
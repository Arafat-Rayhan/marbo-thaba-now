//practice use {} into paramiter
//this first is very important
const product = {
    name : 'Laptop',
    price : 50000,
    // brand : 'Dell'
}
function seeBrand({brand}){
    return brand;
}
const brand = seeBrand(product);
console.log(brand);

const item = {
    name : 'Mobile',
    price : 20000,
    company : 'Sumsung'
}
const {company,price}=item;
console.log(company,);
console.log(price);

const colors = ['red','blue','green','yellow'];
const [first, second] = colors;
console.log(first);
console.log(second);

const fruits =['mango','banana','jackfruit','papaya'];
const [,favorate] = fruits;
console.log(favorate);

const digite =[2,4,6,8];
const [tow,,,eight] = digite;
console.log(tow);
console.log(eight);


//dificalt
function multiply(a,b){
    return [a*3,b*3]
}
const [rayhan,arafat]= multiply(5,8);
console.log(rayhan);
console.log(arafat);
//default value
const student = {
    name :'Arafat',
    city : 'Dhaka',
    
}
const {name,city, Wife = 'pending'} = student;
console.log(Wife);

const teacher = {
    ism : 'kamrul',
    profession : 'teacher',
    age :70,
    subject : 'math'
}
let {ism,profession : job} = teacher;
console.log(job);
job = 'markating';
console.log(job);


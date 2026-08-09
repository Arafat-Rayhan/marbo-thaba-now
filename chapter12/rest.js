// ...
function multiply(mulplier, ...number){
    return number;
}
const numbers = multiply (34,45,567,34,76,90,23,34,);
console.log(numbers);

//practice

const product = {
    name : 'laptop',
    price : '50000',
    brand :'Dell'
} 
const {name,...rest} = product;
console.log(rest);

const project ={
    id : 101,
    title : 'web app',
    budget : 30000,
    client : 'Tech crope'
}
const {title, ...objects} = project;
console.log(objects);

const programmer = {
    name : 'sophia',
    language : 'JavaScript',
    exprience : 5,
    specialty : 'Frontend',
    tools : 'React'
}
const {language,specialty,...details} = programmer;
console.log(details);

const digite =[10,20,3,300,3000];
const [first,second,...all]=digite;
console.log(all);

function addRest(first,second,...rest){
    let sum = 0;
    for(let part of rest){
        sum +=part;
    }
    return sum;
}
const addlasts = addRest(233,54,5,34,2,57,78,);
console.log(addlasts);

function addAll(...paramiter){
    let sum = 0;
    for(const num of paramiter){
        sum += num;
    }
    const digits = paramiter.length;
    const avarages = sum / digits ;
    return avarages;
}
const arrayAvarages = addAll(3,5,6,6,78,22);
console.log(arrayAvarages);

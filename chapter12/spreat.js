const num = [34,56,7,5,4,2]
const num2 = [...num,33,45];
console.log(...num2);

//practice

const technologies =[ 'variable','condition','loop','array','function'];
const technologiesGo = [...technologies];
console.log(technologiesGo);

const myFruits = ['Apple','Banana','mango'];
const more =[...myFruits,'papaya','orange'];
console.log(more);

const fronEnd = ['JavaScript'];
const backEnd =['node.js'];
const database =['MongoDB'];
const iWant = [...fronEnd,...backEnd,...database];
console.log(iWant);

const website = {
    name : 'Book galary',
    type : 'library',
    status :'active'
}
const website2 ={
    ...website,
    theme : 'dark',
}
console.log(website2);

const young ={
    name : 'Arif',
    age : 30,
    country : 'B Baria'
}
const {country,...other}=young;
const young2 = {
    ...other
}
console.log(young2);

// update concept

const car = {
    make :'Toyota',
    model :'Corolla',
    year : 2020
}
const newCar = {
    ...car,
    year : 2032,
}
console.log(newCar);
function printResult(params) {
    console.log(params);
}
function sum(a,b,printResult) {
    const add = a + b;
    printResult(add); 
}

sum(24,23,printResult)

//practice
//1
function say(params) {
    console.log(params);
}
function good(params) {
    console.log('good morning');
}
say(good)
//2
function greeting(params) {
    params()
}
function greetingGreet(params) {
    console.log('good morningt');
}
greeting(greetingGreet)

function objPrint(params) {
    console.log(params);
}

function obj(params,objPrint) {
    objPrint(params)
}

const student ={
    name :'Rayhan',
    age : 28,
}
obj(student,objPrint)


function numPrint(params) {
    console.log(params);
}

function devide(params,numPrint) {
    const devide5 = params /5;
    numPrint(devide5)
}

devide(500,numPrint);

function first1(params) {
    params()
}
function second(params) {
    console.log('assalamualikun');
}
first1(second)
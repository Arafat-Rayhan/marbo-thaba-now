const x = 'false';
console.log(!!x);

const obj ={};
console.log(!!obj);

const arr =[];
if(!!arr){
    console.log('Truthy');
}else{
    console.log('false');
}

console.log(!![]);

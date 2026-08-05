// one oparation
function sumOfNmu(number){
    console.log(number);
}
const result = sumOfNmu([32,6,67,15,8,46,])
console.log(result);// because there no retuen

//oparation
function sumOparation(number){
    let sum = 0;
    for(const num of number){
        sum = sum + num;
    }
    return sum;
}
const sumArray = sumOparation([3,5,5,456,23,67,])
console.log(sumArray);

// oparation
 function evenNumSum(array){
    let sum = 0;
    for(const part of array){
        if(part % 2 === 0){
            sum = sum + part;
        }
    }
    return sum;
 }
 const evenArrayAdd = evenNumSum([3,54,76,78,18,56,89,65,65,43,23,6,7]);
 console.log('oparation', evenArrayAdd);

 // practice

 function oddOparation(num){
    let sum = 0;
    for(const taka of num  ){
        if(taka % 2 === 1){
            sum = sum + taka
        }
    }
    return sum;
 }
 const yourTaka = oddOparation([4,54,23,557,56,34,68,3])
 console.log(yourTaka);

 function oparationInArray(num){
    if(num[0]<num[1]){
        return num[0];
    }else{
        return num[1]
    }
 }
 const inArray = oparationInArray([,32,56,98]);
 console.log('small',inArray);

 function OurAge(num){
    if(num<18){
        return 18;
    }else if(num>45){
        return 45
    }else{
        return num;
    }
 }
 const age = OurAge(33);
 console.log(age);

 function chek4(num){
    let sum = 0;
    for(const part of num){
        if(part%4===0){
            sum = sum + part ;
        }
    }
    return sum;
 }
 const youHave = chek4([5,4,8,6,12,34,16]);
 console.log('4 fammaly',youHave);

 function chek20(num){
    if(num<=20){
        return num*20;
    }else{
        return num / 20;
    }
 }
 const mony =chek20(40);
 console.log(mony);

 function nagativeArray(array){
    let sum = 0;
    for(const nagative of array){
        if(nagative % 2 ===1){
            sum = sum + nagative;
        }
    }
    return sum;
 }
 const myArray = nagativeArray([9,13,4,1,813,796]);
 console.log(myArray);

 function chek3(array){
    let sum = 1;// there is multeple so 1
    for(const num of array){
        if(num % 3 ===0){
            sum = sum * num;
        }
    }
    return sum;
 }
 const family3 = chek3([3,7,9,12]);
 console.log('family3',family3);
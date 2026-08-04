// return
function tenTimes(number){
    const result = number * 10;
    return result ;
}
const tenof28 = tenTimes(28);
console.log(tenof28);

//shortcut
function add(price1,price2){
    return price1 + price2 ;
}
const totel = add(45,55);
console.log(totel);

//several
 const potato = 38;
 const onion = 62;
 const shirt = 500;
 const pant =400;
 function addaprice(price1, price2){
    return price1 + price2;
 }
 const bill1= addaprice(potato,onion);
 const bill2 = addaprice(shirt,pant);
 const totelAmount = bill1+ bill2;
 console.log(totelAmount);

 //deffrant
 function doMath(num1,num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiple = sum * diff;
    const result =multiple / 2;
    return result;
 }
 const result = doMath(10,15);
 console.log(result);
 
// chak evev
 function isEven(num){
    if(num%2===0){
        return true;
    }else{
        return false;
    }
 }
 console.log(isEven(23));
 console.log(isEven(88));

 // chak odd

 function isOdd(num){
    if(num % 2 ===1){
        return true;
    }
    return false;
 }
 console.log(isOdd(1));
 console.log(isOdd(2));

 //practice

 function chak10(num){
    if(num<=10){
        return true;
    }
    return false;
 }
 console.log(chak10(12));

 function devied13(num){
    if(num%13===0){
        return true;
    }
    return false;
 }
 console.log(devied13(49));

 function bill(rice,carry,drink){
    const totel = rice + carry + drink;
    return totel
 }
 console.log(bill(20,15,5));

function isVoter(num){
    if(num>=18){
        return 'is isVoter';
    }
    return 'not a voter'
}
console.log(isVoter(10));

function longIs(word){
    return word.length;
}
console.log(longIs('arafat'));

function average3(x,y,z){
    const result =(x + y + z)/3;
    return result;
}
console.log(average3(6,3,9,));

function nagative(num){
    if(num<0){
      num = num * (-1);
        return num ;
    }
    return 'not a nagativ'
}
console.log(nagative(12));
console.log(nagative(-15));
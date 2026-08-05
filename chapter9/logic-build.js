//size
function SizeStr(str){
    const size = str.length;
    console.log(str,size);
}
const sstr = SizeStr('arafat');

//chek even
function evenStr(str){
    const size = str.length;
    if(str%2===0){
        return 'Even size';
    }
    return 'Odd size';
}
console.log(evenStr('rayhan'));

function maltipleMethod(num,doDouble){
    if(doDouble===true){
        const result = num * 2;
        return result
    }else {
        const result = num * 3;
        return result;
    }
}
console.log(maltipleMethod(13,true));
console.log(maltipleMethod(86,false));

//length of array

function numOfElement(array){
    const num = array.length;
    return num;
}
console.log(numOfElement([23,45,77,4,6,32,65,33,6,]));

//practic

function isEvevnor(num){
    if(num%2===0){
        return 'is even'
    }else{
        return 'is odd'
    }
}
console.log(isEvevnor(33));

function getNum(name){
    return name[0];
}
console.log(getNum('arafat'));

function chak10(num){
    if(num>=10){
        const result = num /10;
        return result;
    }else{
        const result = num *10;
        return result;
    }
}
console.log(chak10(34));

function addArray(array){
    return array[0]+array[1];
}
console.log(addArray([35,324,89,]));

function multipleN(num){
    if(num>0){
        return num * num;
    }else if(num < 0){
        return num *num *num;
    }
}
console.log(multipleN(-6));

function chekName(name1,name2){
    if(name1.length>name2.length){
        return true;
    }
    return false;
}
console.log(chekName('arfat','rayhan'));

function multipleOparation(num1,num2){
    const result = num1 * num2;
    if(result>=100){
        return result/2
    }else{
         return result;
    }
   
}
console.log(multipleOparation(55,55));
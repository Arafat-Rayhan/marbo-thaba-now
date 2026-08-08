function oddavarage(array){
    const odds = [] ;
    for(const number of array){
        if(number % 2 ===1){
            odds.push(number);
        }
    } 
    if(odds.length===0){
        return 0;
    }
    
    let sum = 0;
    for(const number of odds){
        sum += number;
    }
    const count = odds.length;
    const avarage = sum / count;
    return avarage;

}
const countArray=oddavarage([2,34,6,67,2,45,67,79,0,34]);
console.log(countArray);

//practice

function addEvenNumber(array){
    const holeEven = [];
    
        for( const even of array){
            if( even % 2 === 0){
                holeEven.push(even)
            }
        }
    
    console.log( 'hole',holeEven);

    if(holeEven.length===0){
        return 0;
    }

    let sum = 0;
    for(const num of holeEven){
        sum += num;
    }
    const orderOfEven = holeEven.length;
    const avarage = sum / orderOfEven;
    return avarage;
}
const evarageEven = addEvenNumber([23,45,67,56,34,78,12,66,34,6,34,34]);
console.log(evarageEven);

function oddArray(array){
    const odds =[];
    if(odds.length===0){
        return 0;
    }

    for(let num of array){
        if(num % 2 === 1){
            num = num * 2;
            odds.push(num);
        }
    }return odds;
    
}
const odds = oddArray([1,3,5,7]);
console.log(odds);

function sarchOdd(array){
    for(const num of array){
        if(num % 2 !== 0){
            return 'no odd number is found'
        } 
        else if(num % 2 ===0){
            return 'even is found'
        }


    }
}
const oddeven =sarchOdd([2]);
console.log(oddeven);

function oddavarage(array){
    const odds = [];
    for( const num of array){
        if( num % 2 === 0){
            odds.push(num)
        }
    }
     let sum = 0;
    for(let num of odds){
        sum += num;
    }
    const orderOFodds= odds.length;
    const avarage = sum / orderOFodds;
    const iWant = avarage.toFixed(2);
    return iWant;
}
const oddsAvarage = oddavarage([2,54,45,22,56,7,7,5,9]);
console.log(oddsAvarage);

function newOddArray(array){
    const odds1= [];
    for(let num of array){
        if(num % 2 === 1){
            num += 1;
            odds1.push(num);
        }
    }return odds1;

}
const odd1 =newOddArray([22,45,13,35,57,67,9,23,434,]);
console.log(odd1);
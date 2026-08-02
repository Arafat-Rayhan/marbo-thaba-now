//brack
for(let i = 0; i <= 15; i++){
    console.log(i);
    if(i >=9){
        break;
    }
}

//continue = scip
for(let j = 0; j <=10; j++){
    if(j == 4){
        continue;
        console.log(j);
    }
}
//practice
 
for(let k = 1; k <=30; k++){
    if(k==15){
        break;
    }console.log(k);
}

for(let m = 1 ; m <= 40; m++){
    if(m % 7=== 0){
        continue;
       
    } console.log('without 7 fammaly', m);
}

for(let n =1; n <=15 ; n ++){
    if( n==9){
        continue;
    }console.log('without 9',n);
}

for(let o = 1;o <= 20;o++){
    if(o==12){
        continue;
    }console.log(o);
}

for(let p = 1; p <=25; p++){
    if(p%3===0){
        continue;
    }console.log('without 3s fammily',p);
}

for(let q =91; q <=120; q++){
    if(q % 10 ===0){
        break;
    }console.log(q);
}
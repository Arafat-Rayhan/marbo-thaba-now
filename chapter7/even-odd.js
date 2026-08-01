for(let i = 0; i<=20;i++){
    if(i % 2 ===0){
        console.log(i);
    }
}
//odd
for(let j =0 ; j<=20; j++){
    if(j % 2 !== 0){
        console.log(j);
    }
}

//without if even
for(let k = 2 ; k<=20; k = k + 2){
    console.log(k);
}

// without if odd

for(let l = 1; l <=20; l = l + 2){
    console.log(l);
}
//multiple
for(let m =1; m <=30;m++){
    if(m % 5 ===0){
        console.log(m);
    }
}

for( let n = 1; n <=30; n++){
    if(n % 3 ===0){
        console.log(n);
    }
}

//mix
for(let o = 1; o <=30; o++){
    if(o % 3===0 || o % 5 === 0){
        console.log(o);
    }
}
//mix mix
for(let p = 1; p <=30; p++){
    if( p % 3 === 0 && p % 5 ===0){
        console.log(p);
    }
}
//practice

for(let q = 20; q <= 50;q++){
    if(q % 7 === 0){
        console.log(q);
    }
}

for( let r = 40; r<= 80; r++){
    if( r % 5 === 0 && r % 7 ===0){
        console.log('5 and 7 add in ',r);
    }
}

let sum = 0;
for(let s =1; s<=40; s++){
    if(s % 13===0){
        sum = sum + s;
        console.log(s);
    }
}console.log(sum);

for(let t = 0; t <=50;t +=4){
    console.log(t);
}

for(let u = 0; u <=100; u++){
    if(u % 6 ===0 && u % 9===0){
        console.log('6 and 9 add',u);
    }
}

let pless = 0;
for(let v =1; v<=50; v++){
    if(v %3 ===0 && v % 4 === 0){
        pless = pless + v;
    }
}console.log('3 and 4 add',pless);
//. notation
const cricketer ={
    psition:4,
    specialty:'batter',
    age:24,
    runs:8000
}
console.log(cricketer.psition);
console.log(cricketer['runs']);

cricketer.psition = 1;
cricketer['runs'] = 900;

console.log(cricketer['psition']);
console.log(cricketer.runs);

//in into into

const college ={
    name:'bd here',
    class:[11,12],
    event:['sience fair','bijoy dibos','21 fb'],
    unique:{
        color:'blue',
        result:{
            'g.p.a':5,
            merit:'top'
        },
    }
}

console.log(college.unique.color);
console.log(college.unique.result["g.p.a"]);
console.log(college.event[2]);

//practice

const player = {
    name:'khela bondho',
    age:34,
    westTime:'in bat ball',
    teme:'b.c.b',

}
console.log(player.name);

const laptop ={
    brand:'DELL',
    price: 50000,
    ram:'8 gb',
    screenSize:'14 ecn',

}
console.log(laptop.screenSize);

const fvPlace ={
    name:"cox'x bazar",
    distance:'408 Km',
    popularity:true,

}
console.log(fvPlace['popularity']);

const phone ={
    brand:'Nokia',
    color:'blacj',
    price:5000,
}
console.log(phone['price']);

const library ={
    name:'Public Library',
    location:'Dhaka',
    books:5000
}
console.log(library.location);

const contain ={
    type:'information',
    title:'classica',
    directot:' abu obayda',
    power:'high'
}
console.log(contain['power']);

const madrasha ={
    name:'jatrabai bobro madrasha',
    establish:1969,
    gope:['hafiji', 'kitab','ifta','tarikh'],
}
console.log(madrasha.gope[1]);

const fammaly={
    fother:{
        name:'m a mannan',
        age:57,
        profetion:'manajar'
    },
    mother:{
        name: 'a a lipi',
        age:40,
        profetion:'hous wife'
    }
}
console.log(fammaly.fother.age + fammaly.mother.age);
//object.keys
const computer = {
    brand:'linovo',
    price:35000,
    processor:'intel',
    ssd:'512 gb'
    }
    const keys = Object.keys(computer);
    console.log(keys);
    //object.values
    const values = Object.values(computer);
    console.log(values);
    //check .. is it here?
    const profile = {
        name:'Rahim',
        age:27,
        city:'Dhaka'
    };
    const profileKeys = Object.keys(profile);
    const hasName = profileKeys.includes('name');
    console.log(hasName);
    // with method
    if('name' in profile){
        console.log('name is exists');
    }else{
        console.log(' no no no');
    }
    // with hasOwnProperty
    if(profile.hasOwnProperty('name')){
        console.log('yes');
    }
    //entries
const student ={
   name:'Arafat Rayhan',
   age:19,
   class:'dawra'
};
  const entries = Object.entries(student);
    console.log(entries);
//for in 
const i ={
    name :'Arafat Rayhan',
    roll:796,
    city:'Dhaka'
};
for(const item in i){
    const values = i[item];
    console.log(item,values);    
}
//or
const j ={
    name:'Rahim',
    age:43,
    city:'Charachi',
    hoby:'coding'
}
const things = Object.keys(j);
for(key of things){
    console.log(key,j[key]);
} 
//practice
const books ={
    name:'marbo thaba',
    subject:'programming',
    wrighter:'jhonker mahbob',
    age:40,
};
console.log(Object.keys(books),Object.values(books));
console.log(Object.entries(books));
for(const book in books){
    const name = books[book];
    console.log(book,name);
}
const article ={
    title:'Learning js',
    catagori:'programming'
}
const aItems =Object.keys(article);
const hasOther = aItems.includes('other');
console.log(hasOther);

const laptop={
    brand:'DELL',
    model:'Inspiron',
    price:45000,
}
for(info in laptop){           //11111111
    const detail = laptop[info];
    console.log(info,':',detail);
}

const phone ={
    brand:'sumsaung',
    model:'Galaxy S21',
    price:85000
};
const pItemes =Object.keys(phone);     //222
for(pItem of pItemes){
    console.log(pItem,phone[pItem]);
}

const bike ={
    brand:'Hero',
    price:120000,
    model:'splendor'
};
const bValue=Object.values(bike);
console.log(bValue);

const boiis={
    book1:'psycolosy',
    book2:'world analises',
    book3:'sunaah'
}
for(boii in boiis){
    console.log(boii);
}

const numbers ={
    a:10,
    b:20,
    c:30,
    d:40
};
const num =Object.values(numbers);
let sum = 0;
for(const i of num){
    sum = sum + i;
    let totel = sum + i;
    console.log(totel);
}
const mojahid ={
    name:'ileas khan',
    war:43,
    team:'hamas',
}
const mValue =Object.values(mojahid);
console.log(mValue);

const bulding ={
    floors:10,
    address:{
        streed:'main fode',
        city:'Dhaka',
    },
    type:'Commercial'
}
for( bItem in bulding){
    console.log(bItem,':',bulding[bItem]);
}
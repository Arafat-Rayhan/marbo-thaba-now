//delete.object.property
const person ={
    name:'Rahnuma',
    age:21,
    country:'Bangladesh'
}
delete person.age;
console.log(person);

// Object.freeze(object name)
const adminUser ={
    userName:'Rayhan',
    email:'rayhan2026arafat@gmail.com',
    roll:'decetionMeaker'
};
Object.freeze(adminUser);
adminUser.userName='amir';
adminUser.roll='cesf';
delete adminUser.email;
console.log(adminUser);

//seal====object.seal(objectName)
const user ={
    username:'bulbul',
    email:'johanrafi@gmail.com',
    password:'ioeu394578'
};
Object.seal(user);
user.password='23235rrtw';
user.age=45;
delete user.email;
console.log(user);

//practice
const headphone ={
    brand:'sony',
    price:3000,
    color:'red'
};
Object.freeze(headphone);
headphone.verson='bule sky';
console.log(headphone);

const mujahid={
    name:'ansar',
    team:'hamas',
    skill:'beast fighting'
};
Object.freeze(mujahid);
mujahid.age=65;
console.log(mujahid);

const book={
    name:'daily dairy',
    auther:'Anas',
    page:458,
};
Object.seal(book);
book.price=423;
console.log(book);

const gadget={
    name:'iphone',
    price:120000,
    color:'black'
};
delete gadget.color;
console.log(gadget);

const animal ={
    name:'Tiger',
    location:'sondorbon',
    hobey:'alone'
};
Object.freeze(animal);
console.log(animal);

const pitha={
    name:'chitoi',
    price:10,
    size:'small'
};
Object.seal(pitha);
pitha.price=15;
console.log(pitha);

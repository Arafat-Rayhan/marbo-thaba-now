//practice
const food = [30,45,20,60,10];
const add13 = food.map(num => num +13);
console.log(add13);

const player = ['Abu obida','Rshide','osama','Aiman zauhari'];
const name5Word = player.filter(name => name.length>5);
console.log(name5Word);

const digit = [10,15,20,25,30,35];
const just20 = digit.find(num => num ===20);
console.log(just20);

const height = [65,70,68,72,68,73];
const needed69 =height.filter(num => num >69);
console.log(needed69);

const numbers =[7,10,15,20,25,30];
const mutiple3 =numbers.map(num => num * 3);
console.log(mutiple3);

const myFriend = ['kaji rakib','ali hasan','patoary','abu jar','ahmad','talha'];
const thidWord = myFriend.map(name => name[2]);
console.log(thidWord);

const name =['tom','Harray','same','jack','jafor'];
const withH =name.find(name => name[0]==='H');
console.log(withH);

const myNumber = [34,45,12,56,78,54];
const everys = myNumber.forEach(num => {num * 2;
     console.log(num);
    })
     console.log(everys);//his chacter

const animal = ['cow','goat','sheep','horse'];
const hero =animal.forEach(name =>{name ==='horse';
    console.log(name);
})     
console.log(hero);//his chacter
// practice
const iHave = [5,10,15,20,25];
const totel = iHave.reduce((sum , num) =>{
    return sum + num
},0)
console.log(totel);

const myShop = [{
    name : 'shampu',
    price : 100,
},{
    name : 'soap',
    price : 50
},{
    name : 'toothpast',
    price : 75
}]
const totelPrice =myShop.reduce((allp,p) => 
    { console.log(p.price);
     return allp + p.price;
   }, 0,
)
console.log(totelPrice);

const list =[{
    name : 'pen',
    price : 5,
},
{
    name : 'book',
    price :50,
},{
    name : 'bag',
    price :100
}]

const totelItemPrice = list.reduce((sum,num)=> sum+num.price,0);
console.log(totelItemPrice);

const myfavorate = [1,2,3,4,5];
const totelFavorate = myfavorate.reduce((sum,num) => sum * num,1);
console.log(myfavorate);
console.log(totelFavorate);

const totelN =[10,20,30,40,50];
const bigTotel = totelN.reduce((sum,num) => sum > num ? sum : num,0);
console.log(bigTotel);

const denger =[100,200,300,400];
const addDanger = denger.reduce((sum,num) => sum + num,50);
console.log(addDanger);
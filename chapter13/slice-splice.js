//practice
const friuts = ['apple','mango','jackFriut','papaya'];
const someOfThem =friuts.slice(1,3);
console.log(someOfThem);

const cars =['Tesla','BMW','Toyota','Ford'];
const important = cars.slice(0,2);
console.log(important);

const kitabList =['tarikh','sasot','safat','najrana','tafsir'];
const iWant =kitabList.splice(4,1,'hadith');
console.log(iWant);

const mojahid = ['hamas','taliban','Al kayda','kashmiri','sudani'];
const now = mojahid.splice(2,1,'Amarikan');
console.log(mojahid);
console.log(now);
//inch to fit
function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
const myHight = inchToFeet(61);
console.log(myHight);

//feet with inch
function inchToFeet2(inch){
    const feetFractiion = inch/12;
    const feetNumber = parseInt(feetFractiion);
    const inchRemaining = inch % 12 ;
    const result = `${feetNumber} ft ${inchRemaining} inch`;
    return result; 
}
const hight = inchToFeet2(63);
console.log(hight);
// mile to kilometer 
function mileTOkilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;

}
const countKilo = mileTOkilometer(1.4);
console.log(countKilo);

//practice

function mileTOyerd(mile){
    const yerd = mile * 1760;
    return yerd;
}
const meserMile = mileTOyerd(13);
console.log(meserMile);

function kHourToKkalore(hour){
    const kalore = hour * 860;
    return kalore;
}
const kaloreMeser = kHourToKkalore(4);
console.log(kaloreMeser);

function hourToSecond(hour){
    const minute = hour * 60 ;
    const second = minute * 60;
    return second ;
}
const countSecond = hourToSecond(8);
console.log(countSecond);

function centimeterToMeter(centimeter){
    const meter = centimeter / 100;
    return meter;  
}
const meter = centimeterToMeter(43645);
console.log(meter);

function inchToCentimeter(inch){
    const centimeter = inch * 2.54;
    return centimeter;
}
const countCentimeter= inchToCentimeter(63);
console.log(countCentimeter);

function poundToKelogram(pound){
    const kelogram = pound * 0.453;
    return kelogram;
}
const countKilogram = poundToKelogram(23);
console.log(countKilogram);

function yerdToMeter(yerd){
    const meter = yerd * 0.91;
    return meter;
}
const countMeter = yerdToMeter(5);
console.log(countMeter);
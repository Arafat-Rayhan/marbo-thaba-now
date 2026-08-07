//leap year
 function isLeapYear(year){
    if( year % 400 === 0){
        return `Leap year`;
    }
    else if( year % 100 === 0){
        return `No leap year`
    }
    else if(year % 4 === 0){
        return `Leap year`
    }
    else{
        return `No leap year`
    }
 }
 const thisYear = isLeapYear(2028);
 console.log(thisYear);
 
 //practice

 function taxAmount(amount){
    if(amount <= 50000){
        return ` tax 10%`
    }
    else if(amount <= 100000){
        return `tax 20%`
    }
    else if(amount <=200000){
        return`tax 30%`
    }
    else if(amount <=$200000){
        return `tax 40%`
    }
 }
 const tax = taxAmount(54356);
 console.log(tax);

 function pacagsDlivary(mesure){
    if(mesure<=10){
        return 100;
    }
    else if(mesure <= 20){
        return 300;
    }
    else if(mesure <= 50){
        return 1000;
    }
    else if( mesure > 50){
        let totel = 0;
        for(let i = 51; i<=mesure;i++){
            totel += 100;
        }
        return totel+1000
    }

 }
 const dalivaryCharge =pacagsDlivary(1000);
 console.log(dalivaryCharge);

 function marksGrat(marks){
    if(marks >=80){
        return 'A+';
    }
    else if(marks >=79 ){
        return 'B+';
    }
    else if(marks >= 69){
        return 'C+'
    }
    else if(marks >= 59){
        return 'D+'
    }
    else if(marks >=50){
        return 'F+'
    }
    
 }
 const grat = marksGrat(50);
 console.log(grat);

    

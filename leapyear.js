// JavaScript Program to Check Leap Year

function checkLeapYear(year){
    const leap = new Date(year, 1, 29).getDate() === 29;
    if(leap){
        console.log(year + " It is leap year");
    }else{
        console.log(year + " it is not leap year");
    }
}
const year = 2023;
checkLeapYear(year);
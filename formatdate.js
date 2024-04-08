// JavaScript Program to Format the Date

let currentDate = new Date();
let day = currentDate.getDate();
let Month = currentDate.getMonth()+1;
let Year = currentDate.getFullYear();

if(day < 10){
    day = '0' + day;  
}
else if(Month > 10){
    Month = '0' + Month;
}
const format1 = Month + '/' + day + '/' + Year;
console.log(format1);
const format2 = Month + '-' + day + '-' + Year;
console.log(format2);
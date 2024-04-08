// JavaScript Program to Display Date and Time

const date = new Date(2017, 3, 12, 9, 30, 50);
const n = date.toDateString();
const time = date.toLocaleTimeString();
console.log('Date: ' + n);
console.log('Time: ' + time);

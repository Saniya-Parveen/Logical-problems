//JavaScript Program to Sort Words in Alphabetical Order

function alphabeticalOrder(str){
    let sortedstr = str.split('');
    sortedstr.sort();
    return sortedstr.join('');

}
const str = 'saniya';
console.log(alphabeticalOrder(str));
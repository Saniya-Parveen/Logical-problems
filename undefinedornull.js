// JavaScript Program To Check If A Variable Is undefined or null

function checkVariable(variable){
    if(variable == null){
        console.log('the valriable is undefined or null');
    }else{
        console.log('the variable is neither undefined nor null');
    }
}
let newVariable;

checkVariable(5);
checkVariable('HELLO');
checkVariable(null);
checkVariable(newVariable);
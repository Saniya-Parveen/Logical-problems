// JavaScript Program to Perform Function Overloading

function sum(){
    if(arguments.length === 0){
        console.log('no arguments passed');
    }else if(arguments.length === 1){
        console.log('1 arguments is passed');
       
    }else{
        let result = 0;
        let length = arguments.length;
        for(i = 0; i < length; i++){
            result = result + arguments[i];
        }
        console.log(result);
    }
}
sum();
sum(3, 4);
sum(5);
sum(1, 2, 3, 4, 5, 6);
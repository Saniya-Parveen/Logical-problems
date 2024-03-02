//JavaScript Program to Solve Quadratic Equation

function quadraticEquation(a,b,c){
    let discriminant = b * b - 4 * a * c;
    if(discriminant > 0){
        let root1 = (-b + Math.sqrt(discriminant)) / (2*a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2*a);
        return root1, root2;
    }
    else if(discriminant === 0){
        let root = -b / (2*a);
        return [root];
    }
    else{
        let realPart = -b / (2*a);
        let imaginaryPart = Math.sqrt(-discriminant)/ 2*a;
        return [realPart, imaginaryPart];
    }

}
let a = 1;
let b = -3;
let c = 10;

console.log(quadraticEquation(a,b,c));
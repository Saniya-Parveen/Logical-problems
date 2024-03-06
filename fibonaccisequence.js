function fibonacciSequnence(numTerm){
    let sequence = [0, 1];
    for(let i = 2; i < numTerm; i++){
        let nextTerm = sequence[i-1] + sequence[i-2];
        sequence.push(nextTerm);
    }
    return sequence;
}
const numTerm = 10;
console.log(fibonacciSequnence(numTerm));
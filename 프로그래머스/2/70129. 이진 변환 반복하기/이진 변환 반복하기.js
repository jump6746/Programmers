function solution(s) {
    
    let count = 0;
    let zeroCount = 0;
    let numberArray = [...s];
    
    while(numberArray.length > 1){
        const result = binaryTransform(numberArray);
        zeroCount += result[0];
        numberArray = result[1];
        count++;
    }
    
    const countArray = [count, zeroCount];
    
    return countArray;
}

function binaryTransform(arr){
    
    let count = 0;
    
    const numberArray = arr;
    
    const binary = numberArray.filter((number) => {
        if(Number(number) === 0){
            count++;
            return false;
        }else{
            return true;
        }
    })
    
    let newNumber = binary.length;
    
    let newString = "";
    
    while(newNumber > 0){
        const num = newNumber % 2;
        newString += String(num);
        newNumber = Math.trunc(newNumber / 2);
    }
    
    const newArray = [...newString];
    
    return [count, newArray];
}
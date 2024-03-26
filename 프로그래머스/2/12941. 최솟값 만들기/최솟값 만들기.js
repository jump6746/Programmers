function solution(A,B){
    const firstArr = A.sort((a,b)=>(a-b));
    const secondArr = B.sort((a,b) => (b-a));
    
    let result = 0;
    
    for(let i=0; i<firstArr.length; i++){
        result += firstArr[i] * secondArr[i];
    }

    return result;
}
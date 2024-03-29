function solution(n)
{
    let count = 1;
    
    while(n > 1){
        if(n % 2 === 1){
            n -= 1;
            n = n / 2;
            count++;
        }else{
            n = n / 2;
        }
    }
    
    return count;
}
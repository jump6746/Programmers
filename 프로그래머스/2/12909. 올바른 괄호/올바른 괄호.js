function solution(s){
    
    const stringArray = [...s];
    
    const stack = [];
    
    let answer = false;
    
    stringArray.forEach((string) => {
        if(string === "("){
            stack.push(string);
        }else if(string === ")"){
            if(stack.length > 0){
                stack.splice(-1, 1)
            }else{
                stack.push(string)
                return;
            }
        }
    })
    
    answer = !Boolean(stack.length);
     
    return answer;
}
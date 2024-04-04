function solution(people, limit) {
    
    let count = 0;
    
    people.sort((a,b)=>(a-b));
    
    
    while(people.length > 0){
        if(people[0] + people[people.length - 1] <= limit){
            people.pop();
            people.shift();
            count++;
        }else if(people[0] + people[people.length - 1] > limit){
            people.pop();
            count++;
        }
        
    }
    
    return count;
}
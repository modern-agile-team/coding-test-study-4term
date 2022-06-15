function solution(participant, completion) {
    const people = {};
    
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] in people)
            people[participant[i]] += 1;
        else
            people[participant[i]] = 1; 
    }
    
    for (let i = 0; i < completion.length; i++) {
        people[completion[i]] -= 1;  
    }
          
    for (const i in people) {
        if (people[i] === 1) return i;
    }
    
}
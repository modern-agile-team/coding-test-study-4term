function solution(array, commands) {
    const answer = [];
    
    for (let i = 0; i < commands.length; i++){  
        let arraySlice = array.slice(commands[i][0]-1, commands[i][1]);  
        arraySlice.sort((a,b) => a - b);                            //기존의 sort()로 하게 된다면 문자열로 인식해 유니코드문자로 정렬을 하게 됨 
        answer.push(arraySlice[commands[i][2] - 1]);
    }
    
    return answer;
}
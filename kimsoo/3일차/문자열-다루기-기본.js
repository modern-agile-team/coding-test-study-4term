function solution(s) {
    let answer = '';
    let add = 0;
    const sArr = s.split("");
    
    if (sArr.length == 4 || sArr.length == 6) {
         sArr.forEach((num, index) => {
            if(sArr[index] >= 0)
                add++;
        });
        if(sArr.length == add)
            answer = true;
        else
            answer = false;
    }else 
        answer = false;
    
    return answer;
}
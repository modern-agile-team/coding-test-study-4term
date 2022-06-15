// function solution(absolutes, signs) {
//     let answer = 0;
//     for (let i = 0; i < absolutes.length; i++){
//         if (signs[i] === true){
//             answer += absolutes[i];
//         }else
//             answer += (absolutes[i] * -1);
//     }
//     return answer;
// }
function solution(absolutes, signs) {
    
    const answer = absolutes.reduce((sum, current, index) => { //sum 누산기(누적) current(현재 요소의 값) index(인덱스)
        if (signs[index] === false) {
            current = current * -1;
            return sum + current;
        } 
        return sum + current;
    }, 0); //초기값을 0으로 해야 0번 인덱스부터 시작
    
    return answer;
}
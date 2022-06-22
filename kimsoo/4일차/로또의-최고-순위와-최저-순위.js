// function solution(lottos, win_nums) {
//     const answer = [];
    
//     let correctNum = lottos.filter(num => win_nums.includes(num)).length
//     let zeroNum = lottos.filter(num => num == 0).length;
//     if (correctNum == 0){
//         answer.push(1 , 6);
//     }else if (correctNum == 6){
//         answer.push(1, 1);
//     }else{
//         let low = 7 - correctNum;
//         let high = low - zeroNum;
//         answer.push(high, low)
//     }

    
//     return answer;
// } //미해결...

function solution(lottos, win_nums) {
    const answer = [];

    let correctNum = lottos.filter(num => win_nums.includes(num)).length
    let zeroNum = lottos.filter(num => num == 0).length;
    
    let min = 7 - correctNum >= 6 ? 6 : 7 - correctNum;
    let max = zeroNum === 6 ? 1 : min - zeroNum;
    answer.push(max, min);
    

    return answer;
}
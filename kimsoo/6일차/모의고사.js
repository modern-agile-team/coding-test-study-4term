// 1,2,3번의 답을 배열로 담아둔다.
// 정답과 123 비교
// 가장 많이 맞힌사람 리턴

function solution(answers) {
    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5,];
    const top = [0, 0, 0];
    const answer = [];
    
    for (var i = 0; i < answers.length; i++){
        if (one[i % 5] === answers[i])
            top[0]++;
        if (two[i % 8] === answers[i])
            top[1]++;
        if (three[i % 10] === answers[i])
            top[2]++;
    }
    // let a = top.filter((el, i) => {
    //     if (el === Math.max(...top)){
    //         console.log(el, i);
    //         return i;
    //     }
    // }); 필터로도 하고싶었지만 안되네요..
    
    top.forEach((el, index)=>{
        if (el === Math.max(...top)){
            answer.push(index+1);
        }
    });
    return answer;
}

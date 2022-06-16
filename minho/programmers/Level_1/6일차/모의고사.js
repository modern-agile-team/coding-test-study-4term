function solution(answers) {
    let supo = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]; 
    // supo[] = 수포자1,2,3번
    // supo[][] = 각 수포자의 찍는 방식
    let score = [0, 0, 0];
    let tops = []; // 최고점자가 다수일 때
    
    for(let c_supo = 0; c_supo < 3; c_supo ++){                  // supo[] 반복
        for(let c_ans = 0; c_ans <= answers.length; c_ans ++){   // supo[][] 반복
            if(answers[c_ans] === supo[c_supo][c_ans % supo[c_supo].length]){
                score[c_supo] ++;
            }
        }
    }
    let top = [score.indexOf(Math.max(...score)) + 1];
    
    for(let count = 0; count < 3; count ++){
        if(score[count] === Math.max(...score)){
            tops.push(count + 1);
        }
    }
    
    return (score.filter(el => el === Math.max(...score)).length > 1) ? tops : top;    
}

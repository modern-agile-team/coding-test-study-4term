function solution(s) {
    const answer = s.toUpperCase().split(' ');
    const splitAnswer = [];

    for (let i = 0; i < answer.length; i++) {
        for (let j = 0; j < answer[i].length; j++) {
            if (j % 2 === 0)
                splitAnswer.push(answer[i][j]);
            else
                splitAnswer.push(answer[i][j].toLowerCase());
        }
        if (i < answer.length-1)
            splitAnswer.push(" ");
    }

    return splitAnswer.join('');
} //map 방법 확인후 한번 더
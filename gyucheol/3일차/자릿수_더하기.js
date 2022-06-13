function solution(N){
    let arr = N
    .toString()
    .split("")
    .reduce((prev, curr) => Number(prev) + Number(curr),0); // Number(prev) + Number(curr),0에서 0이 뭘 의미하는지 모르겠습니다
    return arr;
}

console.log(solution(1243));
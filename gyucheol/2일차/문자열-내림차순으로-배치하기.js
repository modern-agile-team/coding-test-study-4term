//1. 문자열을 배열로 변환
//2. 배열로 변환한 요소들을 큰것부터 작은순으로 정리
//3. 배열을 문자열로 변환한 것을 리턴함
function solution(s) {
    let result = s
    .split("")
    .sort((a,b) =>{ 
        if(a < b) return 1; 
        if(a > b) return -1;
    })
    .join('');
    return result;
}

console.log(solution("Zbcdefg"));
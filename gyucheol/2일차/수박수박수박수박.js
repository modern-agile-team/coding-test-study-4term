    //1. n만큼의 반복
    //2. 빈문자열 선언
    //3. 조건절에다가 i 가 짝수일때 박을 저장, 홀수일때 수를 저장
    //5. 선언된 문자열을 리턴
function solution(n) {
    let result = '';
    for(let i = 0; i < n; i++){
        if(i % 2 === 0) {
            result += '수';
        }
            else if (i % 2 === 1) {
                result += '박';
            }
    }
    return result;
}
console.log(solution(4));
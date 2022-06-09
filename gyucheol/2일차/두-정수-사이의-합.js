function solution(a, b) {
    let sum = 0;
    if(a >= b){
        for(let i = b; i <= a; i++){
            sum += i; // i가 1씩 계속 증가하니까 0 + n + m + ...
        }
    }else{
        for(let j = a; i <= b; j++){
            sum += j;
        }
    }
    return sum;
}
console.log(solution(4,1));

/* 우림이형 풀이
function solution(a, b) {
    // a, b 중 최소, 최대 값 구하기
    const max = a > b ? a : b;
    const min = a < b ? a : b;
    
    // a - b까지 순회하면서 사이 값들의 총합 구하기
    let total = 0;
    for (let i = min; i <= max; i++) {
        total += i;
    }
    
    // 총합 반환
    return total
}
*/
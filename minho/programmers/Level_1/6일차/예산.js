function solution(d, budget) {
    let sum = 0;
    let result = 0;
    d.sort((a,b) => a - b);
    for(let count = 0; count < d.length; count++){
        result++;
        sum += d[count]
        if(sum > budget)
            result--;
    }  
    return result;
}

// 다른 풀이
function solution(d, budget) {
    return d.sort((a, b) => a - b).reduce((count, price) => {
        return count + ((budget -= price) >= 0);
    }, 0);
}
// sort로 오름차순 정렬 후 reduce 메소드로 예산이 떨어질때까지의 합 반환

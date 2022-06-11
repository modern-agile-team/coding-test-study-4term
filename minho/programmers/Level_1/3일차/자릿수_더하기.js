function solution(n){    
    let sum = 0;
    do {
        sum += n % 10;
        n = Math.floor(n / 10);
    } while(n > 0);

    return sum;
}
// Math.floor : 소수점 이하 버림
// Math.ceil : 소수점 이하를 올림
// Math.round : 소수점 이하를 반올림

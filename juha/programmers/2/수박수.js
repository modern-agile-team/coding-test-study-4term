function solution(n) {
    var answer = "수박".repeat(parseInt((n+1)/2));
    return answer.substr(0,n);
}
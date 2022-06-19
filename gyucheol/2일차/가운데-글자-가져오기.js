function solution(s) {
    let answer = '';
    if((s.length % 2) == 1){
        answer = s[((s.length + 1)/2) - 1]
    }else{
        answer = s[s.length/2 - 1] + s[s.length / 2]
    } 
    return answer;
}
console.log(solution("abcdef"));
// 문자열이나 배열에서 인덱스, 값을 가져올때는 [] 를 사용
function solution(s) {
    total = s.length;
    var answer = s.substr(parseInt((total+1)/2)-1,total%2?1:2);
    return answer;
}
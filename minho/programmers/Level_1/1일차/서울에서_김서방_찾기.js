function solution(seoul) { 
    for(var i = 0; i<seoul.length; i++){
        if(seoul[i] == 'Kim') return '김서방은 ' + i + '에 있다';
    }
    return answer;
} //1번 풀이

function solution(seoul) {
    return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
} //commit 풀이

//10진수를 2진수로 변환 -- toString, padStart사용
//padStart(maxlength, ?fillString) 앞에 특정한 문자열로 채우는 기능 length보다 작으면 fillString으로 length만큼 채움

function solution(n, arr1, arr2) {
    
    const arr2String = [];
    const arr1String = [];
    const answer = [];
    
    for (let i = 0; i < n; i++) {
        arr1String.push(arr1[i].toString(2).padStart(n, '0')); 
        arr2String.push(arr2[i].toString(2).padStart(n, '0'));
        answer[i] = '';
        
        for (let j = 0; j < n; j++) {
            if (arr1String[i][j] == '1' || arr2String[i][j] == '1') {
                answer[i] = answer[i] + '#';
        }
            else{
                answer[i] = answer[i] + ' '; 
            }
        }
    }
    
    return answer;
}
// function solution(new_id) {
    
//     //1대문자를 소문자로
//     let replaceOne = new_id.toLowerCase();
    
//     //2'!@#문자 제거'
//     let replaceTwo = replaceOne.replace(/[^a-z0-9-_.]/g,'');

//     //3 ... , .. > .
//     let replaceThree = replaceTwo.replace(/[\.]+/g, '.');   
    
//     //4 처음과 끝 .
//     let answer = replaceThree.replace(/^\.|\.$/g, '');  
    
//     //5 빈문자열
//     if (answer.length === 0) {
//         answer = 'a';
//     }
    
//     //6 아이디 길이 15까지
//     if (answer.length > 15) {
//         answer = answer.slice(0,15);
//         answer = answer.replace(/^\.|\.$/g, '');  
//     }
    
//     //7 길이가 2이하일때 길이가 3이 될때까지 마지막 문자 반복
//     if (answer.length < 3) {
//         while (answer.length !== 3)
//             answer += answer[answer.length - 1];
//     }
            
//     return answer;
// }

function solution(new_id) {
    let answer = new_id.toLowerCase()     //1
        .replace(/[^a-z0-9-_.]/g,'')      //2
        .replace(/[\.]+/g, '.')           //3
        .replace(/^\.|\.$/g, '');         //4
    
    if(answer.length === 0) {
        answer = 'a';                     //5
    }
    
    if (answer.length > 15) {
        answer = answer.slice(0,15);      //6
        answer = answer.replace(/^\.|\.$/g, '');  
    }
    
    if (answer.length < 3) {              //7
        while (answer.length !== 3) 
            answer += answer[answer.length - 1];
    }
    
    return answer;
}

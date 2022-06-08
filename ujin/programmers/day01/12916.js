// 문자열 내 p와 y의 개수
function solution(s) {
  let answer = s.toLowerCase();  
  let answerP = answer.split('p').length;  
  let answerY = answer.split('y').length;  

  return answerP == answerY ? true : false; 
}

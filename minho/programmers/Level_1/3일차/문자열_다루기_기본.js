function solution(s) {  
  if (s.length === 4 || s.length === 6){
   return s.split('').every(el => !isNaN(el))
  }
  return false;
}
// every : 조건만족 시 true 반환
// isNaN : is Not a Number의 약자, 문자면 true 숫자면 false 반환



function solution(participant, completion) {  
  let obj = new Object();  
  for (let p of participant) {
    if (!obj[p]) {
      obj[p] = 1;
    } else {
      obj[p] += 1;
    }
  }  
  for (let c of completion) {
    if (obj[c]) {
      obj[c] -= 1;
    }
  }  
  for (let p of participant) {
    if (obj[p] >= 1) {
      answer = p;
    }
  }
  return answer;
}



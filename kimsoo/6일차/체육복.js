// 1. 전체 학생이 체육복을 가지고 있다. 보유한 체육복의 수를 1로 설정
// 2. 여벌의 체육복이 있는 학생 +1
// 3. 도난 당한 학생의 값을 받으면 그것을 인덱스로 하여 학생의 체육복 수를 -1
// 4. 체육복이 2벌인 학생의 앞 뒤로 값이 0인 학생에게 +1 본인 -1

function solution(n, lost, reserve) {
    
    const student = [];
    
    for (let  i = 0; i < n; i++) {
        student[i] = 1;
    }
    
    for (let i = 0; i < reserve.length; i++)
        student[reserve[i]-1] += 1;
    
    for (let i = 0; i < lost.length; i++)
        student[lost[i]-1] -= 1;
    
    for (let i = 0; i < student.length; i++) {
        if (student[i] === 2){
            if (student[i-1] === 0) {
                student[i-1] += 1;
                student[i] -= 1;
            }
            else if (student[i+1] === 0) {
                student[i+1] += 1;
                student[i] -= 1;
            }
        }
   }
    
    return student.filter((el) => el === 1 || el === 2).length;
}
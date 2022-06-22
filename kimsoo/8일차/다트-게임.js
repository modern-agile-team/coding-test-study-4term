//정규식 도전.. 
//1 정규식으로 나누기 패턴 : SDT앞 숫자, SDT, *#있을수도 없을수도\
//2 배열 num으로 받은 3 가지를 숫자, SDT, * #으로 나누기
function solution(dartResult) {
    const dartReg = dartResult.match(/[0-9]{1,2}[SDT][\* | \#]?/g);
    const score = [];
    
    for (let i = 0; i < dartReg.length; i++) {
        let num = dartReg[i].match(/[0-9]{1,2}/g);
        let sdt = dartReg[i].match(/[SDT]/g);
        let spe = dartReg[i].match(/[\* | \#]/g);
        
        if (sdt == 'S') {           // num 을 문자열로 인식해서 S일때는 타입 변환
            num = parseInt(num);
        }else if (sdt == 'D') {
            num = num * num;
        }else if (sdt == 'T') {
            num = num * num * num;
        }
        
        if (spe == '*') {
            num = num * 2
            if (i !== 0) {          // *은 앞에 영향을 주기 때문에
                score[i-1] = score[i-1] * 2;
            }  
        }else if (spe == '#') {
            num = num * -1;
        }
        
        score.push(num);
    }
    
    return score.reduce((sum,cur) => sum + cur); //누적을 사용하여 score배열안의 값을 출력
}

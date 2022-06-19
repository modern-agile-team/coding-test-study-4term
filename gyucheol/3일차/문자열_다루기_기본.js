function solution(s) {
    return(s.length === 4 || s.length === 6) && s == parseInt(s)
    }
console.log(solution(1234));


// parseInt - 문자열을 파싱하여 문자열에 포함된 숫자를 찾아서 number로 형변환 시켜줌
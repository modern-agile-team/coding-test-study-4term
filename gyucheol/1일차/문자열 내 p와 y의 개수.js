function string(s){
    //1. 대문자와 소문자를 구별하지 않는 조건이 있으니 편하게 개수를 셀 수 있도록 대문자를 다 소문자로 변환함
    let p = 0, y = 0;
    s = s.toLowerCase(); 
    //2. for문을 사용해서 p,y의 개수를 세줌
    for(let i = 0; i < s.length; i++){
        if(s[i] === "p"){
            p++;
        }
        else if(s[i] === "y"){
            y++;    
}         
    }
    // 삼항 연산자를 사용해서 p와 y의 개수가 같으면 true 다르면 false 반환
    return p === y ? true : false;
}

function solution(new_id) {
    new_id = new_id
        .toLowerCase() // 1단계
        .replace(/[~!@#$%^&*()=+:?,<>/\[\]\{\}]/g, '') // 2단계
        .replace(/\.{2,}/g, '.') // 3단계
        .replace(/\.$|^\./g,''); // 4단계
    console.log(new_id)
    
    if(!new_id){ // 5단계
        new_id = 'a'; 
    } 
    if(new_id.length > 15){ // 6단계
        new_id = (new_id
            .substr(0, 15))
            .replace(/\.$|^\./g,''); // 4단계 반복
    }
    if(new_id.length < 3){ // 7단계
        let l_el = new_id.substr(-1);
        new_id += l_el.repeat(3 - new_id.length);
    }
    return new_id;
}

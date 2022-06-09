function solution(num) {
    let result = "";
    
    for(let count = 0; count < num; count ++){
        (count % 2 === 0) ? result += '수' : result += '박';
    }
    return result;
}

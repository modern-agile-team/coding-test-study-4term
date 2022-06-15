function solution(numbers) {
    const answer = [];
    
    for (let i = 0; i < numbers.length; i++){
        for (let j = 0; j < numbers.length; j++){
            if (i != j){
                answer.push(numbers[i] + numbers[j]);
            }
        }   
    }
    
    const set = new Set(answer);                    //set을 통해 중복 제거
    const newArr = [...set];                        //set을 spread함수를 이용하여 배열로 만들기
    let result = newArr.sort((a,b) => a-b); 
    
    return result;
}
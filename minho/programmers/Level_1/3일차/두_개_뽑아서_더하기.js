function solution(numbers) {   
    let temp = [];
    let result = [];
    for(let count1 = 0; count1 < numbers.length; count1++) {
        temp = numbers.slice(count1 + 1, numbers.length);
        temp = temp.map(el => el + numbers[count1]);
        result = result.concat(temp);           
    }    
    return result = Array.from(new Set(result)).sort(function(a, b){return a - b;});
}

function solution(s) {   
    let arr = s.split(' ')
        let result = [];
        console.log(arr)
        for(let i = 0; i<arr.length; i++){
            let words = arr[i].split('').map((word,idx)=>{ 
            if(idx % 2 === 0){
                return word.toUpperCase()
            } else return word.toLowerCase();
        }
    ).join(''); console.log(words);
    
            result.push(words)
    }
    
    return result.join(' ')
}
console.log(solution("try hello world"))
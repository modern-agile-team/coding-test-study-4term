function solution(n, lost, reserve) {
    let real_lost = lost.filter((el) => !reserve.includes(el)).sort((a, b) => a - b);
    let real_reserve = reserve.filter((el) => !lost.includes(el)).sort((a, b) => a - b);
    
    let result = n - real_lost.length;
    
    real_lost.forEach((el) => {
        
         if(real_reserve.length === 0){
            return;
        }        
        if(real_reserve.includes(el - 1)){
            real_reserve = real_reserve.filter((r) => r !== el - 1);
            result++;            
        }
        else if(real_reserve.includes(el + 1)){
            real_reserve = real_reserve.filter((r) => r !== el + 1);
            result++;            
        }
    })    
    return result;
}

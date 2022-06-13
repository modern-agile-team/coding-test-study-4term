function solution(lottos, win_nums) {        
    let low_rank = 7;
    let c_num = 0;
    for(let num_l of lottos){
        for(let num_w of win_nums){
            if(num_l === num_w){
                low_rank--;                  
            }            
        }
        if(num_l === 0){
                c_num++;
            }
    }
    let top_rank = low_rank - c_num;
    if(top_rank === 7) top_rank = 6;
    if(low_rank === 7) low_rank = 6;    
    return [top_rank, low_rank];
}
// 기본 메소드 연습

function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];
    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    // includes메소드로 뽑은 번호가 당첨번호와 같은지 판별, length로 배열의 길이(당첨번호 갯수)확인
    // filter 메소드로 뽑은 번호에서 위의 조건을 만족하는 원소 반환
    let zeroCount = lottos.filter(v => !v).length;
    const maxCount = minCount + zeroCount;
    return [rank[maxCount], rank[minCount]];
}
// array.filter( ) : 특정조건을 만족하는 새 배열을 만들 때 사용
// arrat.includes( ) :  배일이 특정 요소를 포함하는지 판별

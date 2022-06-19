function solution(lottos, win_nums) {
    let answer = [];
    const win = lottos.filter(lottos => win_nums.includes(lottos)).length;
    const zero = lottos.filter(lottos => lottos === 0).length;

    const min = 7 - win >= 6 ? 6 : 7 - win;
    const max = min - zero < 1 ? 1 : min - zero;

    answer = [max, min];
    return answer;
}
function solution(lottos, win_nums) {
  const fixedRank =
    7 - lottos.filter((number) => win_nums.includes(number)).length;
  const zeroNum = lottos.filter((value) => !value).length;
  const calcRank = (x) => (x > 6 ? 6 : x);
  const maxRank = calcRank(fixedRank - zeroNum);
  const minRank = calcRank(fixedRank);

  return [maxRank, minRank];
}

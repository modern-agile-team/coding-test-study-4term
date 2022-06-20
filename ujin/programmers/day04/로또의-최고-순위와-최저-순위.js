function solution(lottos, win_nums) {
  const answer = [];
  const correctCount = lottos.filter(lotto => win_nums.includes(lotto)).length;
  const zeroCount = lottos.filter(lotto => lotto === 0).length;
  console.log(`correctCount: ${correctCount}, zeroCount: ${zeroCount}`);
  const minRank = 7 - correctCount >= 6 ? 6 : 7 - correctCount;
  const maxRank = minRank - zeroCount < 1 ? 1 : minRank - zeroCount;
  console.log(`maxRank : ${maxRank}, minRank: ${minRank}`);
  return [maxRank, minRank];
}

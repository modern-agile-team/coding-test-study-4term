function solution(lottos, win_nums) {
  let count = 0;
  let res = [0, 0];
  let lotto_res = [6, 6, 5, 4, 3, 2, 1];

  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.indexOf(lottos[i]) !== -1) {
      count++;
    }
  }

  res[1] = lotto_res[count];
  count += lottos.filter((e) => e === 0).length;
  res[0] = lotto_res[count];

  return res;
}

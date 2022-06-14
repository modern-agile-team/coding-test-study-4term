function solution(n, lost, reserve) {
  const arr = lost.filter((x) => reserve.includes(x));
  let res = lost.length - arr.length;
  lost = lost.filter((x) => !arr.includes(x));
  reserve = reserve.filter((x) => !arr.includes(x));
  lost.sort((a, b) => a - b);

  for (i in lost) {
    if (reserve.includes(lost[i] - 1)) {
      res--;
      reserve = reserve.filter((x) => x !== lost[i] - 1);
    } else if (reserve.includes(lost[i] + 1)) {
      res--;
      reserve = reserve.filter((x) => x !== lost[i] + 1);
    }
  }

  return n - res;
}

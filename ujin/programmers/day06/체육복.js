function solution(n, lost, reserve) {
  let lostHave = lost.filter(a => !reserve.includes(a));
  let realReserve = reserve.filter(a => !lost.includes(a));
  let answer = n - lostHave.length;
  while (realReserve.length) {
    const r = realReserve.pop();
    if (
      lostHave.includes(r - 1) ||
      lostHave.includes(r + 1) ||
      lostHave.includes(r)
    ) {
      answer += 1;
    }
  }
  return answer > n ? n : answer;
}

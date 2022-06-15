function solution(n, lost, reserve) {
  const participants = new Array(n + 1).fill(1);
  reserve.forEach((student) => {
    participants[student] += 1;
  });
  lost.forEach((student) => {
    participants[student] -= 1;
  });
  for (let i = 0; i <= n; i++) {
    if (participants[i] == 0) {
      for (let j = Math.max(0, i - 1); j <= i + 1; j++) {
        if (participants[j] == 2) {
          participants[j] = participants[i] = 1;
          break;
        }
      }
    }
  }
  return participants.filter((count) => count >= 1).length - 1;
}

function solution1(absolutes, signs) {
  let answer = 0;
  for (let i in absolutes) {
    if (!signs[i]) {
      absolutes[i] = -absolutes[i];
    }
    answer += absolutes[i];
  }
  return answer;
}

function solution2(absolutes, signs) {
  if (!signs[0]) {
    absolutes[0] = -absolutes[0];
  }
  const answer = absolutes.reduce((acc, current, currentIndex) => {
    return !signs[currentIndex] ? acc - current : acc + current;
  });

  return answer;
}

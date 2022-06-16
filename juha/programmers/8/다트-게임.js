function solution(dartResult) {
  let result = [0, 0, 0];
  const bonus = dartResult.split(/[0-9]0?/g).filter((x) => x);
  const scores = dartResult.split(/[^0-9]+/g).map((score) => Number(score));
  for (let i = 0; i < 3; i++) {
    const extraPoint = bonus[i].split("");
    result[i] +=
      scores[i] ** (extraPoint[0] === "D" ? 2 : extraPoint[0] === "S" ? 1 : 3);
    if (extraPoint.length > 1) {
      if (extraPoint[1] === "*") {
        if (result[i - 1]) {
          result[i - 1] *= 2;
        }
        result[i] *= 2;
      } else {
        result[i] *= -1;
      }
    }
  }
  return result.reduce((acc, cur) => acc + cur, 0);
}

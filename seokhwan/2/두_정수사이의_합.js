function solution(a, b) {
  if (a > b) {
    const temp = a;
    a = b;
    b = temp;
  }

  let sum = a;

  for (++a; a <= b; a++) sum += a;
  return sum;
}

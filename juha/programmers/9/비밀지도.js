function solution(n, arr1, arr2) {
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = (arr1[i] | arr2[i])
      .toString(2)
      .replace(/1/g, "#")
      .replace(/0/g, " ")
      .padStart(n, " ");
  }
  return result;
}

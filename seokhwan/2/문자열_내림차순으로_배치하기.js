function solution(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);
  }

  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (arr[i] < arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr.join("");
}

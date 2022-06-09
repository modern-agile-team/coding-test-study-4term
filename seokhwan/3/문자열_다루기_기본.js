function solution(s) {
  const arr = s.split("");
  let res = true;

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      res = false;
    }
  }
  return (s.length === 4 || s.length === 6) && res ? true : false;
}

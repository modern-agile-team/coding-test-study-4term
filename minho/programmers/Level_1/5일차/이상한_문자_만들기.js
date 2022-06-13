function solution(s) {
  return s
    .split(" ")
    .map((x) =>
       x.split("")
        .map((el, index) => (index % 2 == 0 ? el.toUpperCase() : el.toLowerCase()))
        .join("")
    )
    .join(" ");
}

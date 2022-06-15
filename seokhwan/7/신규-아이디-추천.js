function solution(new_id) {
  new_id = new_id
    .toLowerCase() // 1단계
    .replace(/[^a-z0-9\-\_\.]/g, "") // 2단계
    .replace(/\.+/g, ".") // 3단계
    .replace(/(^\.)|(\.$)/g, "") // 4단계
    .replace(/^$/, "a") // 5단계
    .slice(0, 15)
    .replace(/\.$/, ""); // 6단계

  while (new_id.length <= 2) {
    // 7단계
    new_id += new_id.match(/[a-z0-9\-\_\.]$/);
  }

  return new_id;
}

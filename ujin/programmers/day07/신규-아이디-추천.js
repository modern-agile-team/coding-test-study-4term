function solution(newId) {
  const answer = newId
    .toLowerCase()
    .replace(/[^\w-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/, "");
  const answerLen = answer.length;
  return answerLen > 2
    ? answer
    : answer + answer.charAt(answerLen - 1).repeat(3 - answerLen);
}

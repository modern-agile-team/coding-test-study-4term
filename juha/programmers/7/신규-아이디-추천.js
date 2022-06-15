function solution(new_id) {
  let changedId = new_id
    .toLowerCase()
    .replace(/[^a-z0-9_\.-]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\./, "")
    .replace(/\.$/, "");
  if (!changedId) {
    changedId = "aaa";
  }
  changedId =
    changedId.length > 15
      ? changedId.substr(0, 15).replace(/\.$/, "")
      : changedId;
  changedId =
    changedId.length < 3
      ? changedId.concat(changedId.substr(-1).repeat(3 - changedId.length))
      : changedId;
  return changedId;
}

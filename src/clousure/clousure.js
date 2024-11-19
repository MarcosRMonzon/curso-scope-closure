function greeting() {
  let username = "Marcos";
  function displayUserName() {
    return `Hello ${username}`;
  }
  return displayUserName;
}
const g = greeting();
console.log(g, g());

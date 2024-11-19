function sumWithClosure(firstNum) {
  let a = firstNum;
  function secondNum (secondNum) {
      let b = secondNum;
      if (!b) {
          return a;
      } else{
          return a + b;
      }
  }
  return secondNum;
}
console.log(sumWithClosure(1)());

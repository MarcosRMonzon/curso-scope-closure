function sumWithClosure(firstNum) {
  let a = firstNum;
  return function (secondNum) {
      let b = secondNum;
      if (!b) {
          return a;
      } else{
          return a + b;
      }
  }
}
sumWithClosure(1)(2);

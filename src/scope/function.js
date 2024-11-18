function gretting() {
  let userName = 'Anna';
  console.log(userName);
  if (userName === 'Anna') {
    console.log(`Hello ${userName}`);
  }
}

gretting();
console.log(userName);// no es posible por fuera  (Funtion scope)

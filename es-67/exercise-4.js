function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

const numbers = [1, 2, 3];
console.log(sum(numbers[0], numbers[1], numbers[2]));

//--------------------------------------------------

function sumOne(...num) {
  const sum_ = num.reduce((newVal, tot) => tot + newVal);
  return sum_
}

const numb = [1, 2, 3];
console.log(sumOne(...numb));


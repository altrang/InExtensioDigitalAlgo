const fizzbuzzFunc = (n, fizz, buzz, fizzBuzz) => {
  for (let i = 1; i <= n; i++) {
    if (i % fizzBuzz === 0) {
      console.log("FizzBuzz");
    } else if (i % fizz === 0) {
      console.log("Fizz");
    } else if (i % buzz === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

fizzbuzzFunc(100, 3, 5, 15);

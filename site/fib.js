function fib(num){
  if(num===0){
    return 0;
  }

  if(num===1){
    return 1;
  }

  return fib(num-1) + fib(num-2);
}

function fibonacci(num){
  if(num===0){
    return 0;
  }

  if(num===1){
    return 1;
  }

  let sum = 0;
  let last = 0;
  let curr = 1;

  for(let i=2; i<=num;i++){
    sum = last + curr;
    last = curr;
    curr = sum;
  }

  return sum;
}

console.log("start calculate by js...");
console.time("js");

const res = fibonacci(50000);

console.log("result is: ", res);

console.timeEnd("js");
console.log("end calculate by js")

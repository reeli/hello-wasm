// function fib(num){
//   if(num===0){
//     return 0;
//   }
//
//   if(num===1){
//     return 1;
//   }
//
//   return fib(num-1) + fib(num-2);
// }

const map = {};

function fib(num){
  if(num===0){
    map[num] = 0;
    return 0;
  }

  if(num===1){
    map[num] = 1;
    return 1;
  }

  if(map[num]){
    return map[num];
  }

  map[num] = fib(num-1) + fib(num-2);

  return map[num];
}

//
// function fib(num) {
//   const arr = new Array(num).fill(undefined);
//   arr[0] = 0;
//   arr[1] = 1;
//
//   for (let i = 2; i <= num; i++) {
//     arr[i] =  arr[i - 2] + arr[i - 1];
//   }
//
//   return arr[num];
// }

console.log("start calculate...");
console.time("wasm");
const a = fib(45);
console.log("result is: ", a);
console.timeEnd("wasm");
console.log("end calculate")

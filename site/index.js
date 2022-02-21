import "./fib";

const js = import("../pkg/hello_wasm.js");

js.then(js => {
  console.log("start calculate by wasm...");
  console.time("wasm");

  const res = js.fibonacci(50000);
  console.log("result is: ", res);

  console.timeEnd("wasm");
  console.log("end calculate by wasm")
})


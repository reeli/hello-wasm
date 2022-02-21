const js = import("../pkg/hello_wasm.js");

js.then(js => {
  // js.greet("WebAssembly");
  js.run();
  console.log("start calculate...");
  console.time("wasm");
  js.fib(45);
  console.timeEnd("wasm");
  console.log("end calculate")
})

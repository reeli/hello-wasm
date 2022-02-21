const js = import("./node_modules/@ruili/hello-wasm/hello_wasm.js");

js.then(js=>{
  js.greet("WebAssembly");
})

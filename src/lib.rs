extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s:&str);
}

#[wasm_bindgen]
extern "C"{
    #[wasm_bindgen(js_namespace = console)]
    pub fn log(s:&str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}

#[wasm_bindgen]
pub fn run(){
    log("Hello from console log");
}

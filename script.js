import { finalres } from "./modules/mod1.mjs";

const running = document.getElementById("runner"); //runner button
let inp; // input declaration
let out = document.getElementById("outs"); // outputer

running.addEventListener("click", f1); 

function f1() { // mainfunc 
    inp = document.getElementById("input1").value; // input value
    let str1 = finalres(inp);
    out.innerHTML = str1;
}
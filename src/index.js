//import home from "./pages/home/index.js";
import home from "./pages/home/index.js";
import welcome from "./pages/welcome/index.js";
import result from "./pages/result/index.js";

const main = document.querySelector('#root')

window.addEventListener("load", () => {
  main.appendChild(welcome());
})
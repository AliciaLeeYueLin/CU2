import { add, subtract } from "./mathOperationExport.js";
//Notice how doSomthing does not require curly brackets, because it is a default export
import doSomething from "./defaultExport.js";

console.log(add(6, 7))
console.log(subtract(6, 4))

doSomething()
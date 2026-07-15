//Difference between let and var

//Var is function-scoped,let is a blocked-scoped
var name = 'jack'

//because it is function-scoped, you can redeclare it inside another function
function printName(){
    var name = 'john'
    console.log(name)
}

printName() //John
console.log(name) //jack

//What if it's NOT a function block?

if(true){
    var name ='jason'
}
console.log(name) //jason

//let

let age=37

function printAge(){
    let age = 45
    console.log(age)
}

printAge() //45
console.log(age) //37

// Whatever inside the curly bracket is a block of code
// Let is a blocked-code
if(true){
    console.log(age) //10
}
console.log(age) //37


//You learned how to declare a normal function

function sayHello(){
    console.log('Hello')
}

//you can also do somthing similar ,with arrow functions

//Syntax
//const funtionName =(arguments)=> doSomthing

const sayAnotherHello = () => console.log("Another hello!")

//With the above example,can you write an arrow function for multiplication?
//Hitn:There's answer in your portal lol.

const multiplication = (a,b) => a*b

console.log(multiplication(6,7))
//Arrow function callback

//Don't be alarmed by the word 'callback'
//Just don't think of it as special function for special procedure 
//Example is lke your filter array function

const list = [2,4,6,8]
//The filter function serves as a callback
const list2=list.filter(num =>num>5) //This is a callback
console.log(list2) //[6,8]

//Just to show you,normally you have to write function like this

const list3 = list.filter(function(num){return num<5})
console.log(list3)

//Above example is the counter part to using arrow function
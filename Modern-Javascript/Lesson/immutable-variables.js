// What is immutable

//mutable -> comes form mutation
//mutation -> change

//immuatable -> cannot change

const name = 'jack'
// name = 'john' //Uncaught TypeError: Assignment to constant variable.

//In the above example, it's not possible to re-assign a new value to the variable 'name'

// Re-assignment does not work with primitive data-types

//Primitive Data-Types
//1.Boolean
//2.String
//3.Number(Integer, Float)
//4.Undifined
//5.Null
//You don't really have to remember the ones below
//6.BigInt
//7.Symbol

// But Re-assignment 'works' with Non-primitive Date Types (A.K.A Complex Data Types)

//Complex Data Types
//1.Arrays[]
//2.Objects{}

//What does 'works' meann? YOu technically, cannot re-assign a new array or object, but you can cahnge the contents.

//For example, pushing a new item into an existing array. 

const list = ['apple','orange']
list.push('mango') 
console.log(list) //['apple', 'orange', 'mango']

//There,the above example, you clearly changed the cosnt varible content
//It was supposed to be just apple and orange
//But you added mango by using .push() array function

//Now, we talk about objects

//You can also 'change' objects that are constants

const student ={
    name:'Ze Yu',
    age:18
}
student.age=21; //You can change the field value
student.hobby='taekwondo' //You can ecen add a new field into the object
console.log(student.age) //21
console.log(student.hobby)  //taekwondo

//But you cannot re-assign a new object
student = {
    name: 'Sky',
    age:18
}
//TypeError:Attempted to assign to readonly property
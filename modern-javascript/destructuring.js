//Destructuring objects

//You can destructure objects into smaller parts(ihdividual variables) by using the Destructuring Assignment Opertor

//Example WIITHOUT destructuring

const user = {
    name: 'John Doe',
    age: 25
}

const name = user.name
const age = user.age

console.log(name)
console.log(age)

//Example WITH destructuring

const anotherUser ={
    anotherName:'Han Chuan',
    anotherAge:25
}
const{anotherName,anotherAge} = anotherUser
//The is the destruturing ^

console.log(anotherName) //Han Chuan
console.log(anotherAge) //25

//Basically, it's a fancy way fo extracting values into individual variables.

const student = {
    studentName:"Alicia",
    studentAge:18,
    studentGrade:"Diploma"
}

//Destructure the above student for me,and output their values.

const{studentName,studentAge,studentGrade} = student

console.log(studentName)
console.log(studentAge)
console.log(studentGrade)

//Destruturing a Nested Object

const player = {
    playerName: "Lee Sang-Hyeok",
    playerAge:30,
    playerGame: "League of Legends",
    team:{
        teamName:"T1",
        position:"Mid Laner"
    } 
    //These values inside 'team', a nested object inside player can also be extracted by using the destruturing operator
}

const{playerName,playerAge,playerGame,team:{ teamName , position }} = player

console.log(teamName)
console.log(position)

//Destructuring Arrays

const colors = ['red','green','yellow']

const[firstColor,secondColor,thridColor] = colors
console.log(firstColor) //red
console.log(secondColor) //green
console.log(thridColor) //yellow

//But sir, can you use any other words to represent the colors?

const[lalala,lululu,lelele] = colors
console.log(lalala) //red
console.log(lululu) //green
console.log(lelele) //yellow

//YES! YOU CAN!

//Can you skip a position in an array?

const [iWantFirstOne, ,butSkipSecondOne] = colors
console.log(iWantFirstOne) //red
console.log(butSkipSecondOne) //yellow

//No green :(

//Destructuring Function Parameters

function greetPerson(person){
    console.log(`Hello, ${person.name}. You are ${person.age} years old`)
}
const person = {
    personName:"Ming zhi",
    personAge:18
}
greetPerson(person)

//WITH Destructuring Function Parameters

function destructureGreetPerson({personName,personAge}){
    //Notice you do not have to specify person object anymore
    console.log(`Hello, ${personName}.You are ${personAge} years old`)
}
destructureGreetPerson(person)

//Default Values with Destructuring

//Using the 'person' object as an example, we can destructure and if there is a field with no adctual value from the origin object
//It's possible to give it a default value.

const {personName, personAge,profession ='student'} = person
console.log(personName); //Ming Zhi
console.log(personAge); //18
console.log(profession); //student

//Default Values for Array Destucturing

const fruits = ['apple', 'orange']
const [firstFruit,secondFruit,thirdFruit='strawberry'] = fruits

console.log(firstFruit) //apple
console.log(secondFruit) //orange
console.log(thirdFruit) //strawberry


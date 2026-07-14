// ==============================VARIABLES ===============================
//Variables

//Variables are basically values that are stored to a name

//Example

//cat=5
//So you know cat is 5

//Let's say cat's age is 7, you would declare that as 
//catAge = 7

//Declare 5 variables, and console log them all.
var teamA = "Chicago Bulls"
var teamB = "Golden State Warriors"
var teamAPoints = 123
var teamBPoints = 141
var teamBWin = true

console.log("Team A:" + teamA)
console.log(`Team B: ${teamB}`)
console.log("Team A points:" +teamAPoints)
console.log("Team B points:" +teamBPoints)
console.log("Team B Win:" +teamBWin)

//Can you change the above console logs to include proper statements?
//Example:
//Team A: Chicago Bulls
//Team A Points:123


// ==============================VARIABLES ===============================

// =============================== CONDITIONALS ===============================

//A.K.A if else statement

//if statement
var age = 25
if(age>= 21){
    console.log("You are allowed to enter")
}else{
    console.log("You are NOT allowed to enter")
}

//Write me a if,else if statement
//For a trafic light system
//If green, output "you may go"
//If yellow, output "You may go if you cross the line"
//If red, output "Stop!"

const trafficLight = "red"
if (trafficLight == "green"){
    console.log("You may go")
}else if (trafficLight == "yellow"){
   console.log("You may go if you cross the line")
}else{
    console.log("Stop!")
}

//Ternary Operator
var points=18
var message = points>=21 ? "The game has ended" : "The game shall continue"
console.log(message)

// =============================== CONDITIONALS ===============================


// =============================== LOOPS ===============================

let lapsNeeded = 10
let ian =0
// for(let shakthy =1; shakthy<=lapsNeeded ; shakthy++){
//     console.log(`Shakthy has run ${shakthy} laps`)
//     ian++
//     console.log(`Ian has run ${ian} laps`)
//     ian++
//     console.log(`Ian has run ${ian} laps`)
// }

//Rewrite the above logic in 'while' loop.

let shakthy =1
while( shakthy<=lapsNeeded){
     console.log(`Shakthy has run ${shakthy} laps`)
    shakthy++
    console.log(`Ian has run ${ian} laps`)
    ian++
    console.log(`Ian has run ${ian} laps`)
    ian++
}

// =============================== LOOPS ==============================


// =============================== FUNCTIONS ===============================
// function addTwoNumbers(num1,num2){
//     console.log(`Total: ${num1 +num2}`)
// }
// addTwoNumbers(5,6)

//The purpose of the return statement is to assign the value back to the function call
//Function call is whenever you call the function
function addTwoNumbers(num1,num2){
    return num1+num2;
}
console.log("Total:" +(addTwoNumbers(6,7)))

//function calculates the area of a rectangle

function areaRectangle(width,height){
    return width * height;
}
console.log("Area of rectangle:" + (areaRectangle(6,5)))

function perimeterRectangle(width,height){
    return (width + height)*2;
}
console.log("Perimeter:" + (perimeterRectangle(6,5)))

//SOMETHING NEW -> Arrow Function
//I will give the Area Example, you writ the perimeter example
const rectangleArea = (l,h) =>{
    return l*h
} 
console.log(rectangleArea(5,11))

const rectanglePerimeter =(l,h) =>(l+h)*2
console.log(rectanglePerimeter(5,11))

// =============================== FUNCTIONS ===============================


// =============================== Arrays & Objects ===============================

//This is an array
//Using square brackets []
let phones = ['iPhone','Nokia','Samsung','Vivo','Oppo','Pineapple 13 Pro Max','XiaoMi']
console.log(phones)

//Use a for each loop for the above array
phones.forEach((phone) => {
    console.log(phone)
})

//This is an object
//Using curly brackets
let myProfile ={
    name:"Paul",
    age:43,
    occupation:"Full-Stack Web Instructor",
    hobbies:["Gaming","Rock Climbing","Coding"]
}
console.log(myProfile)

for (let key in myProfile){
    console.log(`${key}: ${myProfile[key]}`)
  
}

//Modify the above, I only want to show the 2nd item when it comes to hobbies
//HINT: YOu need an if statement for this

for (let key in myProfile){
    if(key == "hobbies"){
        console.log(`${key}: ${myProfile[key][1]}`)
    }else{
        console.log(`${key}: ${myProfile[key]}`)
    }
  
}

//Aray of Objects
let myProfile2 ={
    name:"Paul",
    age:43,
    occupation:"Full-Stack Web Instructor",
    hobbies:["Gaming","Rock Climbing","Coding"]
}

let myFriendProfile ={
    name:"Will",
    age:45,
    occupation:"Web Instructor",
    hobbies:["Sewing","Crochet","Coding"]
}

const meAndMyFriendProfile = [myProfile2,myFriendProfile]
console.log(meAndMyFriendProfile)

const arayOfAnimalObjects =[
    {
        name:"Boar",
        type:"Mammal",
        no_of_legs:4
    },
    {
        name:"Hammerhead Shark",
        type:"fish",
        no_of_leg:0
    }
]

//Using 'push' array functionm add a new animal aato arrayOfAnimalObjects
//It has to be an object data type
arayOfAnimalObjects.push ({
    name:"Eagle",
        type:"Bird",
        no_of_legs:2
})
console.log(arayOfAnimalObjects)
//Using the foreach loop,output the animals with the format below
//My number 1 animal is {animal}, it is a {type} and it has {} number of legs"

arayOfAnimalObjects.forEach((animal,index) =>{
    console.log(`My number ${index} animal is ${animal.name}, it is a ${animal.type} and it has ${animal.no_of_legs} number of legs`)
    })
// =============================== Arrays & Objects ===============================

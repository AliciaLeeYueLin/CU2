//The 'callback' argument CAN act as function
function greet(callback){
    console.log("Hello!")
    //Over here, it's calling the argument as a function
    callback()
}

//Notice there's a function INSIDE the 'greet' function call 
greet(function sayName(){
    console.log("John Doe")
})

   
//NOT A CALLBACK 
function noCallbackGreeting (name){
    //Over here, you are using 'name' as a variable string
    //To pass it into console.log
    console.log(`My name is ${name}`)
}

noCallbackGreeting("Paul")

//I want a callback function that does addtion first, then squares the result and then console logs the squared result

const calculateSum =(num1, num2, squareFunction) => {
    const sum = num1 + num2
    squareFunction(sum)
}

const squareAndLog = (number) => {
    console.log(number**2)
}

calculateSum(5, 4, squareAndLog)


//             OR
//  calculateSum(5, 4, (result) => {
//     console.log(result**2)
//   })

//Practice 1
const addTwoNumber =(number1,number2,cubeNumber) =>{
    const sumTwo =number1 + number2
    cubeNumber(sumTwo)
}

addTwoNumber(6,7,(final) =>{
    console.log(final**3)
})


//Asynchronous Callbacks

//To understand Asynchronous, you have to first understand Synchronous

function dummyDownload(url, callback) {
    //To stimulate the download
  setTimeout(() => {
    console.log(`Downloaded data from ${url}`);
    //Once the 'download' is complete, use callback function to process the data
    callback();
  }, 2000)
  // As if you are downloading actual data
  console.log("Downloading data...")
}

dummyDownload('https://google.com', function process() {
  console.log('Now I am processing the data...');
});

// Downloading data...
// Downloaded data from https://google.com
// Now I am processing the data...

const numbers = [1, 2, 3, 4, 5];

//Question1
const  multiply = numbers.map(num => num**2)
console.log(multiply)


//Question2
const greater = numbers.filter(num => num>2)
console.log(greater)


//Question3
numbers.forEach((number) => {
    console.log(number)
})


//Question4 (% -> Find remainder)
const findNumber3 = numbers.find(num => num % 3 === 0)
console.log(findNumber3)


//Question5
const chainFilterAndMap =  numbers.filter(num => num>2).map(num => num**2)
console.log(chainFilterAndMap)




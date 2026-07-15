const numbers = [1, 2, 3, 4, 5];



const  multiply = numbers.map(num => num*num)
console.log(multiply)




const greater = numbers.filter(num => num>2)
console.log(greater)




numbers.forEach((number) => {
    console.log(number)
})




const findNumber3 = numbers.find(num => num % 3 === 0)
console.log(findNumber3)

const numberGreaterThanTwo = numbers.filter(num => num>2)
console.log(numberGreaterThanTwo)

const multiplication = numberGreaterThanTwo.map(num => num*num)
console.log(multiplication)




const student = {
    id: '101',
    name: 'John Doe',
    courses: ['Math', 'English', 'Science'],
    parents: {
        father: 'Mr. Doe',
        mother: 'Mrs. Doe'
    }
};

//Question1
const {id , name, course} = student
const {parents:{father, mother}} =student
console.log(id); 
console.log(name); 
console.log(father); 


//Question2
const arr1 = [1, 2, 3]; 
const arr2 = [4, 5, 6];

const arr3 =[...arr1, ...arr2]
console.log(arr3)
const arr4=[...arr1]
console.log(arr4)


//Question3
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [n1,n2,n3,n4,n5,...secondHalf] = numbers
const firstHalf = [n1,n2,n3,n4,n5]
console.log(firstHalf)
console.log(secondHalf)

//Question4
const numbersForFunction = [ 1, 2, 3 ];

function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(...numbersForFunction))









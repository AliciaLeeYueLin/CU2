const student = {
    id: '101',
    name: 'John Doe',
    courses: ['Math', 'English', 'Science'],
    parents: {
        father: 'Mr. Doe',
        mother: 'Mrs. Doe'
    }
};

const {id , name, course, parents:{father, mother}} = student
console.log(id); 
console.log(name); 
console.log(father); 



const arr1 = [1, 2, 3]; 
const arr2 = [4, 5, 6];

const arr3 ={...arr1, ...arr2}
console.log(arr3)
const arr4={...arr1}
console.log(arr4)



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const firstHalf = [n1,n2,n3,n4,n5]
const [n1,n2,n3,n4,n5,...secondHalf] = numbers
console.log(firstHalf)
console.log(secondHalf)










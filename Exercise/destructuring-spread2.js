const book = {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    characters: ['Bilbo', 'Gandalf', 'Thorin', 'Smaug'],
    publication: {
        year: 1937,
        publisher: 'George Allen & Unwin'
    }
};

const {title, author, characters, publication: {year,publisher}} = book
console.log(title)
console.log(author)
console.log(characters)
console.log(year)
console.log(publisher)

// const newBook ={
//     ...book,
//      publication: {
//         year: 1978,
//         publisher: 'Erwin Smith & Hange Zoe'
//     }
// }

// console.log(newBook)



const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = {...obj1,...obj2}
console.log(obj3)

const obj4 = {...obj1}
console.log(obj4)




const data = {
    numbers1: [1, 2, 3, 4],
    numbers2: [5, 6, 7, 8]
};

const {numbers1:array1,numbers2:array2} = data
console.log(array1)
console.log(array2)

const array3 = [...array1,...array2]
console.log(array3)



const numbers = [ 1, 2, 3 ];

function sum(a, b, c) {
    return a + b + c;
}

const num =[1, 2, 3]
console.log(sum(...num))


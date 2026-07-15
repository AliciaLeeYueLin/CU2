const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', ratings: 5 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', ratings: 4.5 },
  { title: '1984', author: 'George Orwell', ratings: 4.7 },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', ratings: 4 },
  { title: 'Moby-Dick', author: 'Herman Melville', ratings: 3.5 },
];

//Question1
const ratingValueGreaterThanFour = books.filter(books => books.ratings>4)
console.log(ratingValueGreaterThanFour)

//Question2
const titles = books.map(books => books.title)
console.log(titles)

//Question3
const title1984 = books.find(book => book.title == "1984")
console.log(title1984)

//Question4
const ratingDescending = books.sort((book1,book2) => book2.ratings - book1.ratings)
console.log (ratingDescending)

//Question5
const ratingHighest = books.sort((book1,book2) => book2.ratings - book1.ratings)[0].title
console.log(ratingHighest)

//OR console.log(ratingDescending [0].title)
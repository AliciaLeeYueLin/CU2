const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', ratings: 5 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', ratings: 4.5 },
  { title: '1984', author: 'George Orwell', ratings: 4.7 },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', ratings: 4 },
  { title: 'Moby-Dick', author: 'Herman Melville', ratings: 3.5 },
];

const ratingValueGreaterThanFour = books.filter(function(books){return books.ratings>4})
console.log(ratingValueGreaterThanFour)

const titles = books.map(function(books){return books.title})
console.log(titles)

const title1984 = books.find(book => book.title === "1984")
console.log(title1984)

const ratingDescending = books.sort((a,b) => b.ratings - a.ratings)
console.log (ratingDescending)

const ratingHighest = books.sort((a,b) => b.ratings - a.ratings)[0].title
console.log(ratingHighest)

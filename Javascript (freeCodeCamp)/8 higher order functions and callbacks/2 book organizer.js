const books = [
  {
    title: '48 Laws of power',
    authorName: "Robert Greene",
    releaseYear: 1998
  },
  {
    title: 'How to talk to anyone',
    authorName: "Liel Lowndes",
    releaseYear: 1999
  },
  {
    title: 'Rick dad Poor dad',
    authorName: "Robert Kiyosaki",
    releaseYear: 1997
  }
];

function sortByYear(book1, book2){
  if (book2.releaseYear > book1.releaseYear) return -1;
  if (book2.releaseYear < book1.releaseYear) return 1;
  if (book2.releaseYear === book1.releaseYear) return 0;
}


const filteredBooks = books.filter(book => book.releaseYear <= 1998)

filteredBooks.sort(sortByYear)
console.log(filteredBooks)
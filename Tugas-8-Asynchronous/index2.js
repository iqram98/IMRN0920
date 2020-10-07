var readBooksPromise = require("./promise.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

function bacaBooks(waktu, books, indeks = 0) {
  if (indeks < books.length) {
    readBooksPromise(waktu, books[indeks])
      .then((result) => {
        if (result >= 0) {
          bacaBooks(result, books, indeks + 1);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  } else {
    console.log("buku habis");
  }
}

bacaBooks(7000, books);

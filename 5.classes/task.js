class PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

fix() {this.state = this.state * 1.5;
}

set state (conditionBook){
   if  (conditionBook < 0) {
    this._state = 0;
   } else if (conditionBook > 100) {
    this._state = 100;
   } else {
    this._state = conditionBook;
   }
}

get state () {
    return this._state 
}

}

class Magazine extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount, state) {
      super(name, releaseDate, pagesCount, state);
      this.author = author;
      this.type = "book";
    }
  }

  class NovelBook extends Book {
    constructor (name, releaseDate, pagesCount, state) {
      super(name, releaseDate, pagesCount, state);
      this.type = "novel";
    }
  }
  class FantasticBook extends Book {
    constructor (name, releaseDate, pagesCount, state) {
      super(name, releaseDate, pagesCount, state);
      this.type = "fantastic";
    }
  }
  class DetectiveBook extends Book {
    constructor (name, releaseDate, pagesCount, state) {
      super(name, releaseDate, pagesCount, state);
      this.type = "detective";
    }
  }

  class Library {
    constructor (name, book) {
        this.name = name;
        this.books = [];
    }
  

  addBook(book) {
if (book.state > 30)  {
  this.books.push(book);
  }
}

findBookBy(type, value) {
for (let i = 0; i < this.books.length; i++) {
  if (this.books[i][type] === value) {
      return this.books[i]
  }
}
return null;
}

giveBookByName(bookName) {
  for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
          let findBook = this.books[i];
          this.books.splice(i, 1);
          return findBook;
      }
  }
  return null;
}
}

//Я не заметил что у книжки ещё есть статус в задании , запоминание книг реализовал через borrowList , думаю это не критично

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
class Library {
  constructor(books) {
    this.books = books;
    this.borrowList = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  borrowBook(isbn) {
    const book = this.books.find((book) => book.isbn === isbn);
    if (!book) {
      if (this.borrowList.includes(isbn)) {
        console.log('Эту книгу уже кто-то взял , вернитесь позже');
        return null;
      }
      console.log('Такой книги в библиотеке нет');
      return null;
    }
    this.books = this.books.filter((item) => item.isbn != isbn);
    this.borrowList.push(book);
    console.log('Книга успешно взята');

    return book;
  }
  returnBook(isbn) {
    const book = this.borrowList.find((book) => book.isbn === isbn);
    if (book) {
      this.borrowList = this.borrowList.filter((book) => book.isbn != isbn);
      this.books.push(book);
      console.log('Книга возвращена');
      return null;
    } else {
      console.log('Вы брали эту книжку не у нас');
      return null;
    }
  }
  listAvailableBooks() {
    console.log(this.borrowList, 'То что взяли');
    console.log(this.books, 'То что осталось');

    return this.books;
  }
}
const book1 = new Book('title1', 'author1', 1111);
const book2 = new Book('title2', 'author2', 2222);
const book3 = new Book('title3', 'author3', 3333);
const book4 = new Book('title4', 'author4', 4444);
const lib = new Library([book1, book2, book3]);

// console.log(lib.listAvailableBooks());

lib.borrowBook(2222);
lib.listAvailableBooks();
console.log('----------------------------------');

lib.returnBook(2222);
lib.listAvailableBooks();
// console.log('----------------------------------');
// lib.addBook(book4);
// console.log(lib.listAvailableBooks());

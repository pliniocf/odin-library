'use strict';

const books = [];

//----Funções----//
function Book(tittle, author, pagesNumber, haveRead) {
  this.tittle = tittle;
  this.author = author;
  this.pagesNumber = pagesNumber;
  this.haveRead = haveRead;
  this.info = () => `${this.tittle} by ${this.author}, ${this.pagesNumber} pages, ${this.haveRead ? 'read' : 'not read yet'}.`
}

function addBook() {
  books.push(new Book('Dragões de Éter', 'Raphael Draccon', '250', true));
  console.log(books);
}
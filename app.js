const myLibrary = [];

function Book(author, title, pages, isRead = false) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayLibrary() {
  const main = document.getElementById("main");
}

function createBookCard(book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("bookCard");

  const titleDiv = document.createElement("div");
  const bookCardTitle = document.createElement("h2");
  const hr = document.createElement("hr");
  bookCardTitle.classList.add("bookCard__title");
  bookCardTitle.innerText = book.title;
  titleDiv.appendChild(bookCardTitle);
  titleDiv.appendChild(hr);

  const bookCardData = document.createElement("div");
  bookCardData.classList.add("bookCard__data");

  const authorLabel = document.createElement("p");
  authorLabel.innerText = "Author:";

  const author = document.createElement("p");
  author.innerText = book.author;

  const pagesLabel = document.createElement("p");
  pagesLabel.innerText = "Pages:";

  const pages = document.createElement("p");
  pages.innerText = book.pages;

  const label = document.createElement("label");
  label.setAttribute("for", "bookCard__data__isChecked");
  label.innerText = "Have Read?";

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("name", "bookCard__data__isChecked");
  input.setAttribute("id", "bookCard__data__isChecked");

  bookCardData.appendChild(authorLabel);
  bookCardData.appendChild(author);
  bookCardData.appendChild(pagesLabel);
  bookCardData.appendChild(pages);
  bookCardData.appendChild(label);
  bookCardData.appendChild(input);

  bookCard.appendChild(titleDiv);
  bookCard.appendChild(bookCardData);

  const main = document.getElementById("main");
  main.appendChild(bookCard);
}

const book = new Book("Dan", "Sample Title", 123);
createBookCard(book);

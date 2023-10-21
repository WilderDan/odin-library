const myLibrary = [];
let currentBookId = 0;

const dialog = document.getElementById("dialog");
const dialogClose = document.getElementById("dialog__close");
const addBookBtn = document.getElementById("addBook");

addBookBtn.addEventListener("click", (e) => {
  dialog.showModal();
});

window.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = e.target[0].value;
  const author = e.target[1].value;
  const pages = e.target[2].value;
  const isRead = e.target[3].checked;

  const book = new Book(author, title, pages, isRead, ++currentBookId);
  addBookToLibrary(book);
  displayLibrary();

  const form = document.getElementById("form");
  dialog.close();
  form.reset();
});

dialogClose.addEventListener("click", (e) => {
  dialog.close();
});

function Book(author, title, pages, isRead, id) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.isRead = isRead;
  this.id = id;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayLibrary() {
  const library = document.getElementById("library");
  removeAllChildren(library);

  for (let book of myLibrary) {
    const bookCard = createBookCard(book);
    library.appendChild(bookCard);
  }
}

function createBookCard(book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("bookCard");

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("bookCard__titleDiv");
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
  if (book.isRead) input.setAttribute("checked", true);
  input.addEventListener("click", (e) => {
    toggleBookRead(book.id);
  });

  bookCardData.appendChild(authorLabel);
  bookCardData.appendChild(author);
  bookCardData.appendChild(pagesLabel);
  bookCardData.appendChild(pages);
  bookCardData.appendChild(label);
  bookCardData.appendChild(input);

  const deleteIcon = document.createElement("img");
  deleteIcon.setAttribute("src", "./icons/delete.svg");
  deleteIcon.setAttribute("alt", "delete icon");
  deleteIcon.addEventListener("click", (e) => {
    removeBook(book.id);
    displayLibrary();
  });

  bookCard.appendChild(titleDiv);
  bookCard.appendChild(bookCardData);
  bookCard.appendChild(deleteIcon);

  return bookCard;
}

function removeAllChildren(node) {
  while (node.firstChild) node.removeChild(node.lastChild);
}

function toggleBookRead(id) {
  let index = myLibrary.findIndex((book) => book.id === id);
  let copyBook = { ...myLibrary[index] };
  copyBook.isRead = !copyBook.isRead;
  myLibrary.splice(index, 1, copyBook);
}

function removeBook(id) {
  let index = myLibrary.findIndex((book) => book.id === id);
  myLibrary.splice(index, 1);
}

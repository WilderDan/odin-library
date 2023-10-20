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

  for (let book of myLibrary) {
    const bookCard = createBookCard(book);
    main.appendChild(bookCard);
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

  bookCardData.appendChild(authorLabel);
  bookCardData.appendChild(author);
  bookCardData.appendChild(pagesLabel);
  bookCardData.appendChild(pages);
  bookCardData.appendChild(label);
  bookCardData.appendChild(input);

  bookCard.appendChild(titleDiv);
  bookCard.appendChild(bookCardData);

  return bookCard;
}

const book1 = new Book("First Last", "Interesting Title", 123, true);
const book2 = new Book("Something", "Lorem", 250, false);
const book3 = new Book(
  "Really long author title pages text horizontaljfjhasdgfhsdagfhjgasdhjfgdashjfgghjdsagfhadsgfhjadsgfhjdsagfhjagsdfjhgasdkfgdsakjhgfkjhasdgfjhgadsjkfgadsjkfgdsak",
  "ipsuasdfjhsadfjhgadshfgsadjhgfjhsadg fasdgf ahsdgf hjdsagfhjadgshfgadshjfghasdgfhjasdgfhjasdgfkjgsadhm",
  2587523465972436578234758243965782346579342654329
);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
displayLibrary();

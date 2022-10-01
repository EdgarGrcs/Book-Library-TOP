let myLibrary = [];
const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", addBook);

function Book(title, author, numberPages, status, url) {
  this.title = title;
  this.author = author;
  this.numberPages = numberPages;
  this.status = status;
  this.url = url;
}

function addBookToLibrary(bookObject) {
  myLibrary.push(bookObject);
}

function removeBook(book) {
  myLibrary = myLibrary.filter((book) => book !== title);
  loopArray(myLibrary);
}



// This function loops through an array which stores book objects and
// binds them to the DOM by iterating over the array with a while loop

function addBookCard(book) {
  const bookShelfDiv = document.querySelector(".book-shelf");
  const div = document.createElement("div");
  const titleDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const numPagesDiv = document.createElement("div");
  const statusDiv = document.createElement("div");
  const readButton = document.createElement("button");
  const removeButton = document.createElement("button");
  const removeButtonImage = document.createElement("img");
  const statusAndRemove = document.createElement("div");

  const bookBlockLeft = document.createElement("div");
  const bookBlockRight = document.createElement("div");
  const imageDiv = document.createElement("img");

  div.classList.add("book-block");

  bookBlockLeft.classList.add("book-block-left");
  imageDiv.classList.add("imageDiv");
  bookBlockRight.classList.add("book-block-right");

  div.setAttribute("id", myLibrary.indexOf(book));
  titleDiv.classList.add("title");
  authorDiv.classList.add("author");
  numPagesDiv.classList.add("numPages");

  if (book.status) {
    statusDiv.classList.add("read-status");
  } else {
    statusDiv.classList.add("notRead-status");
  }

  statusAndRemove.classList.add("statusAndRemoveDiv");
  readButton.classList.add("statusButton");
  removeButton.classList.add("remove-button");

  removeButton.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(book), 1);
    loopArray(myLibrary);
  });
  removeButtonImage.classList.add("removeButtonImage");

  removeButtonImage.setAttribute("src", "/bin.png");
  titleDiv.textContent = `"${book.title}"`;
  authorDiv.textContent = book.author;
  numPagesDiv.textContent = book.numberPages + " " + "pages";
  statusDiv.textContent = book.status === false ? "not read" : "read";
  readButton.textContent = "READ/UNREAD";
  imageDiv.setAttribute("src", book.url);

  readButton.addEventListener("click", () => {
    book.status = !book.status;
    loopArray();
  });

  bookBlockLeft.appendChild(imageDiv);
  bookBlockRight.appendChild(titleDiv);
  bookBlockRight.appendChild(authorDiv);
  bookBlockRight.appendChild(numPagesDiv);
  bookBlockRight.appendChild(statusDiv);
  statusAndRemove.appendChild(readButton);
  removeButton.appendChild(removeButtonImage);
  statusAndRemove.appendChild(removeButton);
  bookBlockRight.appendChild(statusAndRemove);
  div.appendChild(bookBlockLeft);
  div.appendChild(bookBlockRight);
  bookShelfDiv.appendChild(div);
}

function addBook() {
  event.preventDefault();
  const form = document.querySelector(".form");
  const imageUrl = document.querySelector("#imageLink").value;
  console.log(imageUrl);

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const numPages = document.querySelector("#numPages").value;
  const status = document.querySelector("#status");

  const book = new Book(
    title,
    author,
    numPages,
    status.checked ? true : false,
    imageUrl
  );
  document.getElementById("form").reset();
  addBookToLibrary(book);
  loopArray(myLibrary);
}

function loopArray(array) {
  const bookShelf = document.querySelector(".book-shelf");
  const bookBlock = document.querySelectorAll(".book-block");
  bookBlock.forEach((book) => bookShelf.removeChild(book));

  for (let book of myLibrary) {
    addBookCard(book);
  }
}



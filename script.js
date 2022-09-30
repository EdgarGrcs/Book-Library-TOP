
/**
 * To Do:
 * Understand the remove function and how the id of the book is connected to the DOM
 * Remove vertical gap between Book divs when there are multiple rows of books
 * Align checkmark with read status in the modal
 */

const book1 = new Book("Deep Work","Cal Newport",221,false);
const book2 = new Book("Total Recall","Cal Newport",221,false);

let myLibrary = [];

function Book(title,author,numberPages,status,url){
    this.title = title
    this.author = author
    this.numberPages = numberPages
    this.status = status;
    this.url = url;
}

function addBookToLibrary(bookObject) {
    myLibrary.push(bookObject);
 }


function removeBook(book){
  myLibrary = myLibrary.filter((book) => book !== title )
  loopArray(myLibrary);
 
}

const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click",addBook);


// This function loops through an array which stores book objects and
// binds them to the DOM by iterating over the array with a while loop

function addBookCard(book){

    const bookShelfDiv = document.querySelector(".book-shelf"); 
    const div = document.createElement("div");
    const titleDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const numPagesDiv = document.createElement("div");
    const statusDiv = document.createElement("div");
    const readButton = document.createElement("button");
    const removeButton = document.createElement("button");
    
    const bookBlockLeft = document.createElement("div");
    const bookBlockRight = document.createElement("div");
    const imageDiv = document.createElement("img");


    div.classList.add("book-block");

    
    bookBlockLeft.classList.add("book-block-left");
    imageDiv.classList.add("imageDiv");
    bookBlockRight.classList.add("book-block-right");

    div.setAttribute("id",myLibrary.indexOf(book));
    titleDiv.classList.add("title");
    authorDiv.classList.add("author");
    numPagesDiv.classList.add("numPages");
    
    if (book.status){
      statusDiv.classList.add("read-status");
    } else {
      statusDiv.classList.add("notRead-status");
    }

   
    readButton.classList.add("statusButton");
    removeButton.classList.add("remove-button");
    removeButton.addEventListener("click",() => {
      myLibrary.splice(myLibrary.indexOf(book),1);
      loopArray(myLibrary);
        });

    titleDiv.textContent = `${book.title}`;
    authorDiv.textContent = book.author;
    numPagesDiv.textContent = book.numberPages;
    statusDiv.textContent = (book.status === false ? "not read" : "read");
    readButton.textContent = "READ/UNREAD";
    removeButton.textContent = "Remove";
    imageDiv.setAttribute("src",book.url);

    readButton.addEventListener("click",() => {
      book.status = !book.status;
      loopArray();
    })

    bookBlockLeft.appendChild(imageDiv);
    bookBlockRight.appendChild(titleDiv);
    bookBlockRight.appendChild(authorDiv);
    bookBlockRight.appendChild(numPagesDiv);
    bookBlockRight.appendChild(statusDiv);
    bookBlockRight.appendChild(readButton);
    bookBlockRight.appendChild(removeButton);
    div.appendChild(bookBlockLeft);
    div.appendChild(bookBlockRight);
    bookShelfDiv.appendChild(div);



     
  /*  div.appendChild(titleDiv);
    div.appendChild(authorDiv);
    div.appendChild(numPagesDiv);
    div.appendChild(statusDiv);
    div.appendChild(readButton);
    div.appendChild(removeButton);
    bookShelfDiv.appendChild(div); */ 
}

function changeReadStatus() {




}


function addBook() {
  event.preventDefault();

  const imageUrl = document.querySelector("#imageLink").value;
  console.log(imageUrl);

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const numPages = document.querySelector("#numPages").value;
  const status = document.querySelector("#status");

  const book = new Book(title,author,numPages,status.checked ? true : false,imageUrl);
  addBookToLibrary(book);
  loopArray(myLibrary);


}

function loopArray(array){

  const bookShelf = document.querySelector(".book-shelf");
  const bookBlock = document.querySelectorAll(".book-block");
  bookBlock.forEach(book => bookShelf.removeChild(book));

  for (let book of myLibrary){
    addBookCard(book);
  }
}


loopArray(myLibrary);
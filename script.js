
/**
 * To Do:
 * Implement modal that uses forms to take in user input and store it in a book object
 * implement a function that removes a book by the press of a button
 * Implement a function that changes the status of the book from "read" to "not read"
 */

const book1 = new Book("Deep Work","Cal Newport",221,false);
const book2 = new Book("Total Recall","Cal Newport",221,false);

let myLibrary = [];

function Book(title,author,numberPages,status){
    this.title = title
    this.author = author
    this.numberPages = numberPages
    this.status = status;
}

function addBookToLibrary(bookObject) {
    myLibrary.push(bookObject);
 }


function removeBook(book){
  myLibrary = myLibrary.filter((book) => book !== title )
  console.log(myLibrary);
  console.log("hello there");
 
}


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
        
        div.classList.add("book-block");
        titleDiv.classList.add("title");
        authorDiv.classList.add("author");
        numPagesDiv.classList.add("numPages");
        statusDiv.classList.add("read-status");
        readButton.classList.add("status");
        removeButton.classList.add("remove-button");
        removeButton.addEventListener("click",removeBook);

        titleDiv.textContent = `${book.title}`;
        authorDiv.textContent = book.author;
        numPagesDiv.textContent = book.numberPages;
        statusDiv.textContent = (book.status === false ? "not read" : "read");
        readButton.textContent = "READ/UNREAD";
        removeButton.textContent = "Remove";
     
        div.appendChild(titleDiv);
        div.appendChild(authorDiv);
        div.appendChild(numPagesDiv);
        div.appendChild(statusDiv);
        div.appendChild(readButton);
        div.appendChild(removeButton);
        bookShelfDiv.appendChild(div);

}


function loopArray(array){

  for (let book of myLibrary){
    addBookCard(book);
  }
}

addBookToLibrary(book1);
addBookToLibrary(book2);
loopArray(myLibrary);
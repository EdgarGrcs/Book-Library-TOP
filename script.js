// add Function that takes user input on book,
// and creates an object which it then inserts into array
// write function that loops through array and displays each book on the page


const book1 = new Book("Deep Work","Cal Newport",221,false);
const book2 = new Book("Models","Mark Manson",190,true);
const book3 = new Book("Total recall","Arnold Schwarzenegger",455,true);

const myLibrary = [];

function Book(title,author,numberPages,status){
    this.title = title
    this.author = author
    this.numberPages = numberPages
    this.status = status;
}


function addBookToLibrary(bookObject) {
myLibrary.push(bookObject);
}



function loopArray(array){

    const ul = document.querySelector(".book-shelf"); 
    const statusButton = document.querySelector(".status");
    const removeButton = document.querySelector(".remove-button")

   
    let i = 0;
    while (i < array.length){
       
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
        statusDiv.classList.add("status");
        readButton.classList.add("status");
        removeButton.classList.add("remove-button");

        titleDiv.textContent = array[i].title;
        authorDiv.textContent = array[i].author;
        numPagesDiv.textContent = array[i].numberPages;
        statusDiv.textContent = (array[i].status === false ? "not read" : "read");
        readButton.textContent = "READ/UNREAD";
        removeButton.textContent = "Remove from library";
     
      
      
        div.appendChild(titleDiv);
        div.appendChild(authorDiv);
        div.appendChild(numPagesDiv);
        div.appendChild(statusDiv);
        div.appendChild(readButton);
        div.appendChild(removeButton);
        ul.appendChild(div);
      i++;
    }

}


addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
loopArray(myLibrary);




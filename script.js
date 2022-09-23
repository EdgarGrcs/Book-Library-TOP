// add Function that takes user input on book,
// and creates an object which it then inserts into array
// write function that loops through array and displays each book on the page




const div = document.createElement=("div");




let myLibrary = [];

function Book(title,author,numberPages,status){
    this.title = title
    this.author = author
    this.numberPages = numberPages
    this.status = status;
}





const book1 = new Book("Deep Work","Cal Newport",221,false);



function addBookToLibrary(bookObject) {
myLibrary.push(bookObject);
}



function loopArray(array){

    let i = 0;
    
    while (i < array.length){
        array[i].title;
        array[i].author;
        array[i].numberPages;
        array[i].status;
    }

}

console.log(myLibrary);




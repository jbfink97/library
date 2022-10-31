let myLibarary = [];

function Book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

Book.prototype.info = function(){
    let infoString;
    if (this.readStatus.toLowerCase() == 'n' || this.readStatus.toLowerCase() == 'no'){
        infoString = this.title + ' by ' + this.author + ', ' + this.pages + ' pages, not read yet';
    } else {
        infoString = this.title + ' by ' + this.author + ', ' + this.pages + ' pages, has been read';
    }
    return infoString;
}


function addBookToLibrary(){
    //
}


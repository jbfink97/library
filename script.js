window.addEventListener('load', () => {



    class Book {
        constructor(title, author, pages, read) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.read = read;
        }
    }

    let myLibrary = [];
    let newBook;
    const submitBtn = document.getElementById('submitBtn');
    const container = document.getElementById('formModal');
    const modal = new bootstrap.Modal(container);
    const bookGrid = document.querySelector('.book-grid');
    let bookForm = document.querySelector('form');

    function addBookToLibrary() {
        const title = `Title: "${document.getElementById('title').value}"`;
        const author = `Author: ${document.getElementById('author').value}`;
        const pages = `${document.getElementById('pages').value} pages`;
        const read = document.getElementById('readStatus').checked ? "Read" : "Not Read";
        newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);
        document.getElementById('bookForm').reset();
        updateVisual();
    }

    function updateVisual() {
        books = document.querySelectorAll('.book');
        if (books.length > 0) {
            books.forEach(book => bookGrid.removeChild(book));
        }

        for (let i = 0; i < myLibrary.length; i++) {
            createCard(myLibrary[i]);
        }
    }

    function createCard(bookObject) {
        const bookDiv = document.createElement('div');
        const titleDiv = document.createElement('div');
        const authDiv = document.createElement('div');
        const pageDiv = document.createElement('div');
        const removeBtn = document.createElement('button');
        const readBtn = document.createElement('button');

        bookDiv.classList.add('book');

        titleDiv.classList.add('title');
        titleDiv.textContent = bookObject.title;
        bookDiv.appendChild(titleDiv);

        authDiv.classList.add('author');
        authDiv.textContent = bookObject.author;
        bookDiv.appendChild(authDiv);

        pageDiv.classList.add('pages');
        pageDiv.textContent = bookObject.pages;
        bookDiv.appendChild(pageDiv);

        readBtn.classList.add('readBtn');
        readBtn.textContent = bookObject.read;
        bookDiv.appendChild(readBtn);

        removeBtn.classList.add('removeBtn');
        removeBtn.textContent = 'Remove';
        bookDiv.appendChild(removeBtn);

        bookGrid.appendChild(bookDiv);

        readBtn.addEventListener('click', () => {
            if (readBtn.textContent == 'Read') {
                readBtn.textContent = 'Not Read';
            } else {
                readBtn.textContent = 'Read';
            }
        })

        removeBtn.addEventListener('click', () => {
            myLibrary.splice(myLibrary.indexOf(bookObject), 1);
            updateVisual();
        })
    }

    submitBtn.addEventListener('click', (e) => {
        if (bookForm.checkValidity()) {
            e.preventDefault();
            addBookToLibrary();
            modal.hide();
        }
    });
})
// filepath: /c:/Users/gmmcd/Desktop/project/public/storage.js
const initialData = [
    {
        "language": "English",
        "pageName": "HomePage",
        "userName": "John Doe",
        "translation": "Welcome to the homepage!"
    },
    {
        "language": "Spanish",
        "pageName": "HomePage",
        "userName": "Jane Doe",
        "translation": "¡Bienvenido a la página principal!"
    }
];

function initializeStorage() {
    if (!localStorage.getItem('pages')) {
        localStorage.setItem('pages', JSON.stringify(initialData));
    }
}

function getPages() {
    return JSON.parse(localStorage.getItem('pages'));
}

function addPage(page) {
    const pages = getPages();
    pages.push(page);
    localStorage.setItem('pages', JSON.stringify(pages));
}

document.addEventListener('DOMContentLoaded', initializeStorage);
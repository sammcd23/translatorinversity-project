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
        "translation": "¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!¡Bienvenido a la página principal!"
    },
    {
        "language": "English",
        "pageName": "Example",
        "userName": "Joe",
        "translation": "Testing testing testing"
    }
];

const storageVersion = '2.0'; // Increment this version when you change initialData

function initializeStorage() {
    const currentVersion = localStorage.getItem('storageVersion');
    if (currentVersion !== storageVersion) {
        localStorage.setItem('pages', JSON.stringify(initialData));
        localStorage.setItem('storageVersion', storageVersion);
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
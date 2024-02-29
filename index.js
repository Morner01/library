
let library = [];
const addBook = (name1, author1, year1, genre1, pagesCount1) => {
    let book = {
        name: name1,
        author: author1,
        year: year1,
        genre: genre1,
        pagesCount: pagesCount1,
    };
    library.push(book);
}
const findBooksByAuthor = (author1) => {
    for (let i = 0; i < library.length; i++) {
        if (library[i].author == author1) {
            console.log(library[i]);
        }
    }
}
const filterBooksByGenre = (genre1) => {
    for (let i = 0; i < library.length; i++) {
        if (library[i].genre == genre1) {
            console.log(library[i]);
        }
    }
}
const genreReport = (genre1) => {
    let genres = new Set();
    for (const book of library) {
        genres.add(book.genre);
    }
    genres.forEach((elem) => {
        let count = 0;
        for (let j = 0; j < library.length; j++) {
            if (library[j].genre == elem) {
                count++;
            }
        }
        console.log(elem + " : " + count);
    })
}
const averagePagesReport = () => {
    let countBooks = library.length;
    let countPages = 0;
    for (const item of library) {
        countPages += item.pagesCount;
    }
    return countPages / countBooks;
}
const removeBook = (name1) => {
    for (let i = 0; i < library.length; i++) {
        if (library[i].name == name1) {
            library.splice(i, 1);
        }
    }
}
console.log(addBook("Хоббит", "Дж. Р. Р. Толкиен", 1937, "Фэнтези", 310));
console.log(addBook("Гарри Поттер и философский камень", "Дж. К. Роулинг", 1997, "Фэнтези", 223));
console.log(addBook("1984", "Джордж Оруэлл", 1949, "Антиутопия", 328));
//console.log(removeBook("1984")); 
//console.log(library);
console.log(findBooksByAuthor("Дж. Р. Р. Толкиен"));
console.log(filterBooksByGenre("Фэнтези"));
console.log(genreReport());
console.log(`Среднее количество страниц: ${averagePagesReport()}`);
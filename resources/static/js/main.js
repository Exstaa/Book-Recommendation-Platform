async function recommendBook(e) {
    e.preventDefault()
    let bookName = document.getElementById("bookname").value;
    let getBookResponse = await fetch(
        "http://localhost:8080/api/books/byTitle/" + bookName
    ).then((response) => {
        return response.json()
    })
    console.log(getBookResponse[0].url)
    let subGenre = getBookResponse[0].genre.split(" ");
    let recommendationResponse = await fetch(
        "http://localhost:8080/api/books/byGenre/" + getBookResponse[0].genre
    ).then((response) => {
        return response.json()
    })
    showBooks(recommendationResponse)
    console.log(recommendationResponse)
}

function showBooks(books) {
    let booksItem = document.getElementById("books");
    booksItem.innerHTML = "";
    for (i = 0; i < books.length; i++) {
        console.log(books[i])
        if (books[i].rating > 4.0 && books[i].title.length < 25) {
            let html = `
          <div class="book">
          <span id="title">Title: ${books[i].title}</span>
          <span id="author">Author: ${books[i].author}</span>
          <span id="rating">Rating: ${books[i].rating}</span>
       </div>
          `
            booksItem.innerHTML += html;
        }
    }
}

function toggleMenu() {
    var x = document.getElementById("navbarLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function toggleMenu() {
    var x = document.getElementById("navbarLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('myModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementsByClassName('close')[0];

    openModalBtn.onclick = function () {
        modal.style.display = 'block';
    }

    closeModalBtn.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});


async function addReview(e) {
    e.preventDefault();
    let reviewer = document.getElementById("name").value;
    let bookName = document.getElementById("book-name").value;
    let review = document.getElementById("review").value;

    let reviewItem = {
        reviewer: reviewer,
        bookName: bookName,
        review: review
    }
    let addReviewResponse = await fetch("http://localhost:8080/api/reviews/add", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reviewItem)
    })
    loadReviews();z
}

async function loadReviews() {
    let reviewsResponse = await fetch(
        "http://localhost:8080/api/reviews/"
    ).then((response) => {
        return response.json()
    })
    let reviewsCon = document.getElementById("reviews-container");
    reviewsCon.innerHTML = "";
    for(i = 0; i<reviewsResponse.length;i++){
        let html = `
        <div class="review">
        <span id="reviewer">Title: ${reviewsResponse[i].reviewer}</span>
        <span id="author">Book Name: ${reviewsResponse[i].bookName}</span>
        <span id="rating">Review: ${reviewsResponse[i].review}</span>
     </div>
        `
        reviewsCon.innerHTML += html;

    }
}

loadReviews()
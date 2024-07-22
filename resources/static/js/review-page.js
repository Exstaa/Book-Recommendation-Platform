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
    loadReviews();
}

async function addComment(e,id){
    e.preventDefault();
    let comment = document.getElementById("comment").value;
    let username = document.getElementById("username").value;
    let commentItem = {
           username: username,
           comment: comment,
           review: {
            id: id
           }
    }
    let addCommentResponse = await fetch("http://localhost:8080/api/comments/add", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(commentItem)
    })
}

async function loadReviews() {
    let reviewsResponse = await fetch(
        "http://localhost:8080/api/reviews/"
    ).then((response) => {
        return response.json()
    })
    let reviewsCon = document.getElementById("reviews-container");
    let commentsCon = document.getElementById("comment-modals");
    reviewsCon.innerHTML = "";
    for(i = 0; i<reviewsResponse.length;i++){
        let html = `
        <div class="review">
        <span id="reviewer">Title: ${reviewsResponse[i].reviewer}</span>
        <span id="author">Book Name: ${reviewsResponse[i].bookName}</span>
        <span id="rating">Review: ${reviewsResponse[i].review}</span>
        <button id="openCommentModal${reviewsResponse[i].id}">Add Comment</button>
     </div>
        `
        reviewsCon.innerHTML += html;

     let commentHtml =  `<div id="commentModal${reviewsResponse[i].id}" class="modal">
        <div class="modal-content">
          <span class="close" id="close">&times;</span>
          <form id="modalForm" onsubmit="addComment(event,${reviewsResponse[i].id})">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="username:" required><br><br>
            <label for="comment">Comment:</label>
            <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Comment:"></textarea><br><br>
            <input type="submit" value="Submit">
          </form>
        </div>
      </div>`

      commentsCon.innerHTML += commentHtml;

    /*  document.getElementById("openCommentModal"+reviewsResponse[i].id).addEventListener("click", function(){
        const modal = document.getElementById('commentModal'+ reviewsResponse[i].id);
        const openModalBtn = document.getElementById('openCommentModal'+ reviewsResponse[i].id);
        const closeModalBtn = document.getElementById('close');
    
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
      }) */


    }

}



loadReviews()
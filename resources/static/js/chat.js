let messageCount = 0;
let usernameLocalStorage = localStorage.getItem("username");



const scrollableDiv = document.getElementById('chat');

window.onload = function () {
  isLoggedIn()
}

function scrollToBottom() {
  scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
}

function enterUsername() {
  localStorage.setItem("username", document.getElementById("username-input").value)
  isLoggedIn();
}

async function sendMessage(e) {
  e.preventDefault()
  let message = document.getElementById("chat-message").value;
  let messageItem = {
    senderUsername: usernameLocalStorage,
    message: message
  }
  let sendMessageResponse = await fetch("http://localhost:8080/api/messages/addMessage", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(messageItem)
  })
  document.getElementById("chat-message").value = "";
}

function isLoggedIn() {
  if (usernameLocalStorage == null) {
    document.getElementById("chat-container").style.display = "none"
    document.getElementById("username-container").style.display = "block";
  } else {
    document.getElementById("chat-container").style.display = "block"
    document.getElementById("username-container").style.display = "none";
  }
}

setInterval(async function () {
  let chatElement = document.getElementById("chat");
  let getAllMessages = await fetch("http://localhost:8080/api/messages/getMessages"
  ).then((response) => {
    return response.json()
  })
  for (i = messageCount; i < getAllMessages.length; i++) {
    messageCount = messageCount + 1;
    let html = `
     <span>${getAllMessages[i].senderUsername}: ${getAllMessages[i].message}</span>
     `
    chatElement.innerHTML += html;
    scrollToBottom()
  }
  //console.log(getAllMessages)
}, 1500)
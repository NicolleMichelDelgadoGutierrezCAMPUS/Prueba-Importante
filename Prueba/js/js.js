let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let name = form.elements.name.value;
  let username = form.elements.email.value;
  let email = form.elements.email.value;
  let password = form.elements.password.value;

  let formData = {
    name: name,
    username: username,
    email: email,
    password: password
  };

  let data = JSON.parse(localStorage.getItem("formData")) || [];
  data.push(formData);
  localStorage.setItem("formData", JSON.stringify(data));

  form.reset();

  showMessages();
});

function showMessages() {
  let data = JSON.parse(localStorage.getItem("formData")) || [];

  let messagesList = document.querySelector("#messages-list");
  messagesList.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let message = data[i];

    let messageItem = document.createElement("li");
    messageItem.innerHTML = "<strong>Nombre:</strong> " + message.name + "<br>" +
                             "<strong>Correo electrónico:</strong> " + message.username + "<br>" +
                             "<strong>Asunto:</strong> " + message.email + "<br>" +
                             "<strong>Mensaje:</strong> " + message.message + "<br>";
    messagesList.appendChild(messageItem);
  }
}

showMessages();



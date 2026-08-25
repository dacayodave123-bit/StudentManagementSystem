const button = document.getElementById("btn");
const button2 = document.getElementById("greet");
const button3 = document.querySelector("#changeBtn");
const message = document.getElementById("message");

function sayHello() {
    alert("hello");
}

function greetUser() {
    alert("Welcome!");
}

function sayHii() {
    alert("Hiii!");
}

button.addEventListener("click", sayHii);

button2.addEventListener("dblclick", greetUser);

button3.addEventListener("dblclick", function() {
    message.textContent = "Welcome to Event Driven Programming!";
    message.style.color = "dark green";
    console.log(event);
    button {
    background-color: #2f71d3b9;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #2c1cb71e;
}
});
const button = document.getElementById("btn");

button.addEventListener("click", function() {
    window.location.href = "page2.html";
});
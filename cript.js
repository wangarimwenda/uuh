let buttons = document.querySelectorAll(".myButtons");


const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButtons";
document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myButtons"); 



buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
event.target.remove()  });
   

});


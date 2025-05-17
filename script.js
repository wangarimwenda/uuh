const myButtons = document.getElementById("myButtons");
const myH1 = document.getElementById("myH1");








myH1.addEventListener("click", (event) => {
if (event.target.classList.contains("disabled")) {
    event.target.textContent = "Whyyy? Okay then, don't click the submit button";
    
    }
else 
{
    event.target.classList.replace("enabled", "disabled");
}
});



myH1.classList.add("enabled");
myButtons.classList.add("enabled");

myButtons.addEventListener("mouseout", (event) => {
    event.target.classList.add("hover");
});

myButtons.addEventListener("mousever", (event) => {
    event.target.classList.remove("hover");
});

myButtons.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("hover");
});
myButtons.addEventListener("mouseout", (event) => {
    event.target.classList.toggle("hover");
});
myButtons.addEventListener("click", (event) => {
    event.target.classList.replace("enabled", "disabled");
});

myButtons.classList.add("enabled");
myButtons.addEventListener("click", (event) => {
if (event.target.classList.contains("disabled")) {
    event.target.textContent = "Wah, you don't listen now,do you?";
    }
else 
{
    event.target.classList.replace("enabled", "disabled");
}
});


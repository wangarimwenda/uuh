let buttons = document.querySelectorAll(".myButtons");


buttons.forEach((button) => {

    button.classList.add("enabled");


});

buttons.forEach((button) => {

    button.addEventListener("mouseover", (event) => {
        event.target.classList.toggle("hover");
    });
    button.addEventListener("mouseout", (event) => {
        event.target.classList.toggle("hover");
    });


});



buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.target.classList.contains("disabled")) {
            event.target.textContent = "I GIVE UP!";
        }
        else {
            event.target.classList.replace("enabled", "disabled");
        }
    });
});

const myp = document.getElementById("myp");




myp.addEventListener("click", (event) => {
if (event.target.classList.contains("disabled")) {
    event.target.textContent = "Whyyy? Okay, don't click the submit button";
    
    }
else 
{
    event.target.classList.replace("enabled", "disabled");
}
});

myp.classList.add("enabled");

myp.addEventListener("mouseover", (event) => {
    myp.textContent = "DOOOON'T";
});
myp.addEventListener("mouseout", (event) => {
    myp.textContent = " FINAL WARNING, DON'T CLICK HERE😐";
});
myp.addEventListener("click", (event) => {
    myp.textContent = "Okay then, rebel🤨";
});
function myFunction(button) {
  var x = document.getElementById("myTopnav");
  button.classList.toggle("change");
  if (x.className === "topnav") {
    x.className += " responsive";
    document.getElementById("navList").style.display = "block";
  } else {
    x.className = "topnav";
    document.getElementById("navList").style.display = "none";
  }
}

//Smooth scrolling with links

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

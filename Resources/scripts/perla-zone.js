document.addEventListener("DOMContentLoaded", function(event) { 
  function myFunction(button) {
    var x = document.getElementById("myTopnav");
    var b = document.getElementById("button");
    if (x.className === "topnav") {
      x.className += " responsive";
      b.className += " change";
      document.body.style.overflow = "scroll";
      document.getElementById("mySections").style.display = "none";
      document.getElementById("footer").style.display = "none";
      document.getElementById("navList").style.display = "block";
    } else {
      x.className = "topnav";
      b.classList.remove("change");
      document.body.style.overflow = "scroll";
      document.getElementById("mySections").style.display = "block";
      document.getElementById("footer").style.display = "grid";
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
  
});
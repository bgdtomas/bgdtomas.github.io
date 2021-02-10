// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("faq");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex - 1].style.display = "block";
// }

var acc = document.getElementsByClassName("collapsibleButton");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// //----------------------------------------------------------------

var slideIndexGallery = 1;
showSlidesGallery(slideIndexGallery);

// Next/previous controls
function plusSlidesGallery(n) {
  if (screen.width <= 600) {
    showSlidesGallery((slideIndexGallery += n));
  }
}

// Thumbnail image controls
function currentSlideGallery(n) {
  showSlidesGallery((slideIndexGallery = n));
}

function showSlidesGallery(n) {
  var i;
  var slides = document.getElementsByClassName("galleryImgs");
  if (n > slides.length) {
    slideIndexGallery = 1;
  }
  if (n < 1) {
    slideIndexGallery = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexGallery - 1].style.display = "block";
}

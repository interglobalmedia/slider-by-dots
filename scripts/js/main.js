document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 1;
  showSlideDivs(slideIndex);

  function addSlideDivs(n) {
    showSlideDivs((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlideDivs((slideIndex = n));
  }

  function showSlideDivs(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.querySelectorAll(".dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  const buttonLeft = document.getElementById("left");
  const buttonRight = document.getElementById("right");

  buttonLeft.addEventListener("click", () => {
    addSlideDivs(-1);
  });

  buttonRight.addEventListener("click", () => {
    addSlideDivs(1);
  });

  // variables and event listeners for dots
  const dot1 = document.querySelector("span:nth-of-type(1)");
  const dot2 = document.querySelector("span:nth-of-type(2)");
  const dot3 = document.querySelector("span:nth-of-type(3)");
  const dot4 = document.querySelector("span:nth-of-type(4)");
  const dot5 = document.querySelector("span:nth-of-type(5)");

  dot1.addEventListener("click", () => {
    currentSlide(1);
  });
  dot2.addEventListener("click", () => {
    currentSlide(2);
  });
  dot3.addEventListener("click", () => {
    currentSlide(3);
  });
  dot4.addEventListener("click", () => {
    currentSlide(4);
  });
  dot5.addEventListener("click", () => {
    currentSlide(5);
  });
});

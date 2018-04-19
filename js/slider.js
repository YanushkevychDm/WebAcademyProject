// slider
;(function slider() {
  var controls = document.querySelectorAll('.buttons__controls'),
      slides = document.querySelectorAll('#slides .slide'),
      currentSlide = 0,
      slideInterval = void 0,
      playing = false,
      pauseButton = document.getElementById('pause'),
      next = document.getElementById('next'),
      previous = document.getElementById('previous');

  function nextSlide() {
      goToSlide(currentSlide + 1);
  }

  function previousSlide() {
      goToSlide(currentSlide - 1);
  }

  function goToSlide(n) {
      slides[currentSlide].className = 'slide';
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].className = 'slide showing';
  }

  function pauseSlideshow() {
      pauseButton.innerHTML = 'pause'; // play character
      playing = false;
      clearInterval(slideInterval);
  }

  function playSlideshow() {
      pauseButton.innerHTML = 'play_arrow';
      playing = true;
      nextSlide();
      slideInterval = setInterval(nextSlide, 3000);
  }

  pauseButton.onclick = function () {
      if (playing) {
          pauseSlideshow();
      } else {
          playSlideshow();
      }
  };

  next.onclick = function () {
      pauseSlideshow();
      nextSlide();
  };

  previous.onclick = function () {
      pauseSlideshow();
      previousSlide();
  };
})();
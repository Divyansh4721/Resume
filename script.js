{
  let navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
  let interval;

  for (let i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
      event.preventDefault();
      let targetSectionID = this.textContent.trim().toLowerCase();
      console.log(this.textContent);
      let targetSection = document.getElementById(targetSectionID);
      console.log(targetSection);

      interval = setInterval(function () {
        scrollVertically(targetSection);
      }, 20);
    });
  }

  function scrollVertically(targetSection) {
    let targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSection.id == 'contact') {
      if (targetSectionCoordinates.top <= 200) {
        clearInterval(interval);
        return;
      }
    }
    else if (targetSectionCoordinates.top <= 0) {
      clearInterval(interval);
      return;
    }
    window.scrollBy(0, 50);
  }
}
{
  let progressBars = document.querySelectorAll(".skill-progress > div");

  function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
  }

  for (let bar of progressBars) {
    initialiseBar(bar);
  }

  function fillBar(bar) {

    let currentWidth = 0;
    let targetWidth = bar.getAttribute("data-bar-width");
    let interval = setInterval(function () {
      if (currentWidth >= targetWidth) {
        clearInterval(interval);
        return;
      }
      currentWidth++;
      bar.style.width = currentWidth + '%';
    }, 5);

  }

  function checkScroll() {

    for (let bar of progressBars) {
      let barCoordinates = bar.getBoundingClientRect();
      if ((bar.getAttribute("data-visited") == "false") &&
        (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
        bar.setAttribute("data-visited", true);
        fillBar(bar);
      } else if (barCoordinates.top > window.innerHeight) {
        bar.setAttribute("data-visited", false);
        initialiseBar(bar);
      }

    }
  }

  window.addEventListener("scroll", checkScroll);
}

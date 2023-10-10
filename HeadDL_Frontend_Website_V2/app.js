
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const parallaxImage = document.querySelector('.a3');
    parallaxImage.style.transform = 'translate3d(0,' + scrolled * 0.2 + 'px, 0)';
  });

  window.addEventListener('scroll', function() {
    const parallaxImage = document.querySelector('.bb1');
    const imageBottom = parallaxImage.offsetTop + parallaxImage.offsetHeight;
    const windowBottom = window.scrollY + window.innerHeight;

    // Check if the bottom of the image is visible on the screen
    if (imageBottom > window.scrollY && parallaxImage.offsetTop < windowBottom) {
        const scrolled = window.scrollY;
        const distance = scrolled - parallaxImage.offsetTop;
        const parallaxValue = distance * 0.1;
        parallaxImage.style.transform = 'translate3d(0,' + parallaxValue + 'px, 0)';
    }
});

window.addEventListener('scroll', function() {
    const parallaxImage = document.querySelector('.cc2');
    const imageBottom = parallaxImage.offsetTop + parallaxImage.offsetHeight;
    const windowBottom = window.scrollY + window.innerHeight;

    // Check if the bottom of the image is visible on the screen
    if (imageBottom > window.scrollY && parallaxImage.offsetTop < windowBottom) {
        const scrolled = window.scrollY;
        const distance = scrolled - (parallaxImage.offsetTop - window.innerHeight * 0.1); // Adjust the starting position by subtracting 10% of the window height
        const parallaxValue = distance * 0.1;
        parallaxImage.style.transform = 'translate3d(0,' + parallaxValue + 'px, 0)';
    }
});

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}






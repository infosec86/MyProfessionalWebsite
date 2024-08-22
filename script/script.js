document.addEventListener('scroll', function() {
    const scrollBox = document.getElementById('scroll-box');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    // Hide the box once you've scrolled down past its initial position
    if (scrollPosition > windowHeight / 2) {
        scrollBox.classList.add('hide');
    } else {
        scrollBox.classList.remove('hide');
    }
});

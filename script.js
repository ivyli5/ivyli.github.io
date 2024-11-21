// Scroll-to-Top Function
window.onscroll = function () {
    const scrollButton = document.querySelector('.scroll-top');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

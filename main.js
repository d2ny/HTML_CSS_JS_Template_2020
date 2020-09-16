document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
})
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-columns', {delay: 500});
ScrollReveal().reveal('.columns-banner-one', {delay: 500});
ScrollReveal().reveal('.columns-banner-two', {delay: 500});

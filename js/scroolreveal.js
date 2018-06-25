window.sr = ScrollReveal();

sr.reveal('.navbar',{
    duration:2000,
    origin:'left'
});
sr.reveal('.header-content-left',{
    duration:2000,
    origin:'top',
    distance:'300px'
});
sr.reveal('.header-content-right',{
    duration:2000,
    origin:'right',
    distance:'300px'
});
sr.reveal('.header-btn',{
    duration:2000,
    origin:'top',
    delay:1000
});

sr.reveal('#carouselExampleSlidesOnly',{
    duration:2000,
    origin:'top',
    delay:1000
});

sr.reveal('#testimonial',{
    duration:2000,
    origin:'left',
    distance:'300px',
    viewFactor:0.2
});
sr.reveal('.up',{
    duration:2000,
    origin:'right',
    delay:1000
});


/*smooth scrolling*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


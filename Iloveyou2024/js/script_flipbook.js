document.addEventListener('DOMContentLoaded', function () {
    function loadApp() {
        $('.flipbook').turn({
            width: 872,
            height: 550,
            elevation: 50,
            gradients: true,
            autoCenter: true
        });
    }
    yepnope({
        test: Modernizr.csstransforms,
        yep: ['../js/turnjs/turn.min.js'],
        nope: ['../js/turnjs/turn.html4.min.js'],
        both: ['../css/style_flipbook.css'],
        complete: loadApp
    });
    setInterval(createHeartFountainLeft, 180);
    setInterval(createHeartFountainRight, 180);
});

function createHeartFountainLeft() {
    const heartContainer = document.getElementById('heart-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 10 + 'vw';
    heart.style.width = Math.random() * 60 + 20 + 'px';
    heart.style.height = Math.random() * 60 + 20 + 'px';
    heartContainer.appendChild(heart);
    var bottom = 0;
    var opacity = 1;

    setInterval(() => {
        bottom += 50;
        opacity -= 0.12
        heart.style.bottom = bottom + 'px';
        heart.style.opacity = opacity;
    }, 100);

    setTimeout(() => {
        heartContainer.removeChild(heart);
    }, 2000);
}

function createHeartFountainRight() {
    const heartContainer = document.getElementById('heart-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.right = Math.random() * 10 + 'vw';
    heart.style.width = Math.random() * 60 + 20 + 'px';
    heart.style.height = Math.random() * 60 + 20 + 'px';
    heartContainer.appendChild(heart);
    var bottom = 0;
    var opacity = 1;

    setInterval(() => {
        bottom += 50;
        opacity -= 0.12
        heart.style.bottom = bottom + 'px';
        heart.style.opacity = opacity;
    }, 100);

    setTimeout(() => {
        heartContainer.removeChild(heart);
    }, 2000);
}

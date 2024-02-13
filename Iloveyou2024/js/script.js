function createHeart() {
    const heartContainer = document.getElementById('heart-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.width = Math.random() * 60 + 20 + 'px';
    heart.style.height = Math.random() * 60 + 20 + 'px';
    heartContainer.appendChild(heart);
    var bottom = 0;

    setInterval(() => {
        bottom += 50;
        heart.style.bottom = bottom + 'px';
        heart.style.opacity = 1;
    }, 100);

    setTimeout(() => {
        heartContainer.removeChild(heart);
    }, 2000);
}

document.addEventListener('DOMContentLoaded', function () {
    var logoSec = document.getElementById("logo_sec");
    logoSec.addEventListener('click', function () {
        setInterval(createHeart, 200);
        moveTrain();
    });
});

function moveTrain() {
    var train = document.getElementById("train");
    var engine = document.getElementsByClassName('train_engine')[0];
    console.log("in move train");
    var left = -12950;
    console.log("engine Left at start " + left);
    var tes = 0;
    setInterval(() => {
        left += 30;
        var bhogis = train.children;
        var bhogisCount = train.childElementCount;
        for (var i = 0; i < bhogisCount; i++) {
            var l = bhogis[i].style.left + "";
            var lSub = l.substring(0, l.length - 2);
            var lNum = Number(lSub);
            // console.log("l : " + l);
            // console.log("lsub : " + lSub);
            // console.log("lnum : " + lNum);
            // console.log("bhogis[i].style.left : " + bhogis[i].style.left);
            bhogis[i].style.left = (left + 30) + "px";
        }
    }, 200);
}

let slideIndex = 0;
startHeartFountain();
showParagraphs();

function showParagraphs() {
    const paragraphs = document.querySelectorAll("#story p");
    let delay = 1000;
    paragraphs.forEach((p, index) => {
        setTimeout(() => {
            displayLetterByLetter(p.id, p.textContent);
            p.textContent = '';
            p.style.display = "block";
            if (index == 6) {
                document.getElementById("greeting").style.display = "none";
                document.getElementById("last_img").style.display = "block";
            }
        }, delay);
        delay += p.textContent.length * 100 + 2000; // Adjust timing based on length of paragraph
    });
}

function displayLetterByLetter(elementId, text) {
    let i = 0;
    const interval = setInterval(() => {
        document.getElementById(elementId).textContent += text.charAt(i);
        i++;
        if (i > text.length) {
            setTimeout(() => {
                document.getElementById(elementId).style.display = "none";
            }, 1000);
            clearInterval(interval);
        }
    }, 100); // Speed of letters appearing
}

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = 0 + 'px';
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Hearts fall at different speeds
    document.body.appendChild(heart);

    // Remove heart after it falls to keep the DOM clean
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Call this function where you want the hearts to start, for example, right after the slideshow ends
function startHeartFountain() {
    setInterval(createHeart, 100); // Adjust timing for more/less frequent hearts
}

const images = [
    'url("../images/rom_back7.jpg")',
    'url("../images/rom_back10.jpg")'
];

let currentImage = 0;

function changeBackgroundImage() {
    currentImage = (currentImage + 1) % images.length;
    document.body.style.backgroundImage = images[currentImage];
}

function playMusic() {
    document.getElementById("valentine_audio").play();
}

setInterval(changeBackgroundImage, 2000);
playMusic();

document.getElementById('yesBtn').addEventListener('click', function () {
    displayLovingMessage();
});

document.getElementById('noBtn').addEventListener('click', function () {
    displayReconsiderMessage();
});

function displayLovingMessage() {
    const questionSection = document.getElementById('question');
    const responseSection = document.getElementById('response');
    questionSection.style.display = 'none';
    responseSection.innerHTML = '<h2>Nak telsey nen antey nik istam ani, I love you too! 😘</h2>';
    responseSection.classList.remove('hidden');
}

function displayReconsiderMessage() {
    const questionSection = document.getElementById('question');
    const responseSection = document.getElementById('response');
    questionSection.style.display = 'none';
    responseSection.innerHTML = `<p>Oh no! Are you sure? 😢</p><a href="index.html"><button>Let me think ❤️</button></a><button onclick='displayModal("choiceModal");'>Still a No... 😢</button>`;
    responseSection.classList.remove('hidden');
}

function displayPicture() {
    const responseSection = document.getElementById('response');
    responseSection.innerHTML = '<p>Your phone is hacked, here is a pic from your phone! 😄</p><video controls autoplay loop><source src="video.mp4" type="video/mp4"></video><p>I love you anyhow 😛 Hehehe</p>';
}

document.getElementById('modalYes').addEventListener('click', function () {
    window.location.href = 'index.html'; // Navigate to index.html or any desired page
});

document.getElementById('modalNo').addEventListener('click', function () {
    closeModal('choiceModal');
    displayModal('countdownModal');
    startCountdown(4, 'countdown', function () {
        closeModal('countdownModal');
        displayPicture();
    });
});

function displayModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('hidden');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('hidden');
}

function startCountdown(duration, elementId, callback) {
    var timer = duration, seconds;
    var display = document.getElementById(elementId);
    var countdownInterval = setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        display.textContent = seconds;

        if (--timer < 0) {
            clearInterval(countdownInterval);
            callback();
        }
    }, 1000);
}

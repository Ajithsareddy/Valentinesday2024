document.addEventListener('DOMContentLoaded', function () {
    const noButton = document.getElementById('no_btn');
    const buttonGroup = document.getElementById('button_group');

    noButton.addEventListener('mouseover', function () {
        const maxX = buttonGroup.clientWidth - noButton.clientWidth;
        const maxY = buttonGroup.clientHeight - noButton.clientHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noButton.parentElement.style.left = randomX + 'px';
        noButton.parentElement.style.top = randomY + 'px';
    });
    noButton.addEventListener('mouseenter', function () {
        const maxX = buttonGroup.clientWidth - noButton.clientWidth;
        const maxY = buttonGroup.clientHeight - noButton.clientHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noButton.parentElement.style.left = randomX + 'px';
        noButton.parentElement.style.top = randomY + 'px';
    });
    noButton.addEventListener('mousemove', function () {
        const maxX = buttonGroup.clientWidth - noButton.clientWidth;
        const maxY = buttonGroup.clientHeight - noButton.clientHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noButton.parentElement.style.left = randomX + 'px';
        noButton.parentElement.style.top = randomY + 'px';
    });
});

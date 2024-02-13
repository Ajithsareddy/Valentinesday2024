function hideIntro() {
    var element = document.getElementById("intro");
    element.style.display = 'none';
    unhideImage();
}
function unhideImage() {
    var header = document.getElementsByTagName('header')[0];
    var element = document.getElementById("her_img");
    element.style.display = 'block';
    header.style.display = 'none';
    setTimeout(() => {
        document.getElementById("more_flattery_p1").style.display = 'block';
    }, 1500);
    setTimeout(() => {
        document.getElementById("more_flattery_p1").style.display = 'none';
        document.getElementById("more_flattery_p2").style.display = 'block';
    }, 7000);
    setTimeout(() => {
        document.getElementById("more_flattery_a").style.display = 'block';
    }, 7000);
}
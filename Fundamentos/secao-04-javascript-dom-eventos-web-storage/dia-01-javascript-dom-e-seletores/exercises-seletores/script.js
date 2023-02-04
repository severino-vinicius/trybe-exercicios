function changeHeaderBgColor(r, g, b) {
    document.getElementById('header-container').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
changeHeaderBgColor(0, 176, 104);

function changeEmergencyTasksColor(r, g, b) {
    document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
changeEmergencyTasksColor(255,160,132);

function changeNoEmergencyTasksColor(r, g, b) {
    document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
changeNoEmergencyTasksColor(249,220,93);

// function changeH3Color(r, g, b) {
//     document.getElementsByTagName('h3')[0].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//     document.getElementsByTagName('h3')[1].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// }
// changeH3Color(165,0,241);

function changeH3Color(elemento, local, r, g, b) {
    document.getElementsByTagName(`${elemento}`)[`${local}`].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
changeH3Color('h3', 0, 165, 0, 241);
changeH3Color('h3', 1, 165, 0, 241);
changeH3Color('h3', 2, 34,36,38);
changeH3Color('h3', 3, 34,36,38);
changeH3Color('footer', 0, 0,53,51);

var toggleButton1 = document.getElementById('toggle-skills');
var skills1 = document.getElementById('skills');
toggleButton1.addEventListener('click', function () {
    if (skills1.style.display === 'none') {
        skills1.style.display = 'block';
    }
    else {
        skills1.style.display = 'none';
    }
});

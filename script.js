var toggleButton = document.getElementById('skills-button');
var skillsList = document.getElementById('skills-list');
toggleButton.addEventListener('click', function () {
    skillsList.style.display = skillsList.style.display === 'none' ? 'block' : 'none';
});

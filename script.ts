const toggleButton = document.getElementById('skills-button') as HTMLButtonElement;
const skillsList = document.getElementById('skills-list') as HTMLUListElement;

toggleButton.addEventListener('click', () => {
  skillsList.style.display = skillsList.style.display === 'none' ? 'block' : 'none';
});
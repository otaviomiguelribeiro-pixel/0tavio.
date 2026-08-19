const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Recupera a preferência salva no navegador
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  htmlElement.setAttribute('data-theme', savedTheme);
  themeToggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  // Troca o ícone do botão
  themeToggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});
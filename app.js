// Ждем, пока DOM полностью загрузится
document.addEventListener('DOMContentLoaded', () => {
  // Пример 1: приветственное сообщение
  alert('Добро пожаловать на мой сайт!');

  // Переключатель темы
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  // Проверка на предыдущий выбор темы в LocalStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.className = savedTheme;
  }

  toggleButton.addEventListener('click', () => {
    if (body.className === 'dark-theme') {
      body.className = '';
      localStorage.setItem('theme', '');
    } else {
      body.className = 'dark-theme';
      localStorage.setItem('theme', 'dark-theme');
    }
  });
});

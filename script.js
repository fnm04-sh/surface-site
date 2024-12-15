// Найти аудио-элемент
const song = document.getElementById('preorder-song');

// Найти кнопку
const preorderButton = document.querySelector('.hero-btn');

// Добавить обработчик клика
preorderButton.addEventListener('click', () => {
  // Запустить песню
  song.play();
  alert("🎵 Enjoy the vibes while you wait for your Superfluous Pro!");
});

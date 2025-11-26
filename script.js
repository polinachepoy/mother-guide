<script>
  const colors = [
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 
    '#FF69B4', '#00CED1', '#FFD700', '#ADFF2F'
  ];

  function createButterfly() {
    const container = document.getElementById('butterflies');
    const butterfly = document.createElement('div');
    butterfly.className = 'butterfly';

    // Случайное начальное положение: по краю окна
    const startSide = Math.random() < 0.5 ? 'left' : 'right';
    if (startSide === 'left') {
      butterfly.style.left = '0px';
    } else {
      butterfly.style.left = (window.innerWidth - 40) + 'px';
    }
    butterfly.style.top = Math.random() * (window.innerHeight - 40) + 'px';

    // Установка случайных конечных координат
    const endX = startSide === 'left' ? (window.innerWidth - 40) + 'px' : '0px';
    const endY = Math.random() * (window.innerHeight - 40) + 'px';

    // Установим CSS переменные для анимации
    butterfly.style.setProperty('--endX', endX);
    butterfly.style.setProperty('--endY', endY);

    // Случайный цвет бабочки (если используем одно изображение, можно изменить через CSS)
    // Для простоты используем один изображение, цвет можно задать через filter или SVG

    // Добавляем бабочку
    container.appendChild(butterfly);

    // Запускаем анимацию (уже задана через CSS keyframes)

    // Удаляем бабочку после окончания анимации
    setTimeout(() => {
      if (butterfly.parentNode) {
        butterfly.parentNode.removeChild(butterfly);
      }
    }, 20000); // равно продолжительности анимации
  }

  // Создавать бабочек каждые 300-700 мс
  setInterval(createButterfly, 400);
</script>

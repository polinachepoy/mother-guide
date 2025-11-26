// Получаем контекст канвы для диаграммы
const ctx = document.getElementById('resultChart').getContext('2d');

// Элемент для отображения текстовых результатов
const voteResultContainer = document.getElementById('voteResult');

// Изначальные результаты
let voteResults = {
  "1": 0, // 1 ребенок
  "2": 0, // 2 ребенка
  "3": 0  // 3 или более
};

// Загрузка результатов из localStorage
function loadResults() {
  const storedResults = localStorage.getItem('voteResults');
  if (storedResults) {
    voteResults = JSON.parse(storedResults);
  }
}

// Сохранение результатов в localStorage
function saveResults() {
  localStorage.setItem('voteResults', JSON.stringify(voteResults));
}

// Перерисовка диаграммы
let myChart; // глобальный график

function drawChart() {
  if (myChart) {
    myChart.destroy();
  }
  myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['1 ребёнок', '2 ребёнка', '3 или более'],
      datasets: [{
        label: 'Количество голосов',
        data: [
          voteResults["1"],
          voteResults["2"],
          voteResults["3"]
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)', 
          'rgba(54, 162, 235, 0.2)', 
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)', 
          'rgba(54, 162, 235, 1)', 
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          precision: 0
        }
      }
    }
  });
}

// Обновление текстового отображения результатов
function updateResultText() {
  let resultText = `
    - 1 ребёнок: ${voteResults["1"]}
    - 2 ребёнка: ${voteResults["2"]}
    - 3 или более: ${voteResults["3"]}
  `;
  if (voteResultContainer) {
    voteResultContainer.innerText = resultText;
  }
}

// Инициализация при загрузке страницы
loadResults();
drawChart();
updateResultText();

// Обработка формы голосования
const voteForm = document.querySelector('.vote-form');
if (voteForm) {
  voteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const selected = document.querySelector('input[name="children"]:checked');
    if (selected) {
      const value = selected.value;
      // Обновить результат
      if (voteResults.hasOwnProperty(value)) {
        voteResults[value]++;
        saveResults();
        drawChart();
        updateResultText();
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Находим элемент с id="titlearea"
  var titleArea = document.getElementById("titlearea");

  // Добавляем обработчик события click к этому элементу
  titleArea.addEventListener('click', function() {
    // Переход на страницу index.html
    window.location.href = 'index.html';
  });

  // Делаем курсор в виде руки, чтобы показать, что элемент кликабельный
  titleArea.style.cursor = 'pointer';
});
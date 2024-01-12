var checkbox = document.getElementById("modal-checkbox-form");
var label = document.querySelector('label[for="modal-checkbox-form"]');

checkbox.style = "";

// Удаляем стили по умолчанию для чекбокса (если они есть)
checkbox.style = "";

// Добавляем свои стили для чекбокса
checkbox.style.backgroundColor = "#839AA9"; // Например, синий фон
checkbox.style.color = "#fff"; // И белый текст

// Добавляем свои стили для метки
label.style.backgroundColor = "#839AA9"; // Например, синий фон
label.style.color = "#fff"; // И белый текст

// // Добавляем обработчик события на изменение состояния чекбокса
// checkbox.addEventListener("change", function () {
//   if (checkbox.checked) {
//     // Если чекбокс выбран, изменяем стили
//     label.style.backgroundColor = "#839AA9"; // Например, синий фон
//     label.style.color = "#fff"; // И белый текст
//   } else {
//     // Если чекбокс не выбран, можно вернуть стили по умолчанию
//     label.style.backgroundColor = "";
//     label.style.color = "";
//   }
// });

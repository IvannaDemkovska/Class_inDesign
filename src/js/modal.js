var modalButtons = document.querySelectorAll('.js-open-modal'),
  overlay = document.querySelector('.js-overlay-modal'),
  closeButtons = document.querySelectorAll('.js-modal-close');

/* Перебираем массив кнопок */
modalButtons.forEach(function (item) {
  /* Назначаем каждой кнопке обработчик клика */
  item.addEventListener('click', function (e) {
    /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
    e.preventDefault();

    /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
    var modalId = this.getAttribute('data-modal'),
      modalElem = document.querySelector(
        '.modal[data-modal="' + modalId + '"]'
      );

    /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
    modalElem.classList.add('active');
    overlay.classList.add('active');
  }); // end click
}); // end foreach

closeButtons.forEach(function (item) {
  item.addEventListener('click', function (e) {
    var parentModal = this.closest('.modal');

    parentModal.classList.remove('active');
    overlay.classList.remove('active');
  });
}); // end foreach

document.body.addEventListener(
  'keyup',
  function (e) {
    var key = e.keyCode;

    if (key == 27) {
      document.querySelector('.modal.active').classList.remove('active');
      document.querySelector('.overlay').classList.remove('active');
    }
  },
  false
);

overlay.addEventListener('click', function () {
  document.querySelector('.modal.active').classList.remove('active');
  this.classList.remove('active');
});

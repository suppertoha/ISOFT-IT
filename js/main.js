//! Запустит код только после полной загрузки страницы
window.addEventListener('load', function () {
  //! Часы header реальное время
  function realTime() {
    // создаем const clock в которую поместим часы
    const clock = document.querySelector('#clock');

    // Для того чтобы часы показывали не текущее время один раз, а постоянно с периодичностью в 1 секунду поместим код в функцию и с помощью метода setInterval(time, 1000) будем каждый раз обновлять фу-ию через 1000ms
    function time() {
      // создаем const date в которую поместим объект Date() в этом объекте храниться вся информациия о дате и времени
      const date = new Date();
      // получаем часы минуты и секунды с помощью трех методов и помещаем их в переменную. Делаем проверку елси значение в переменной меньше 10, то подставим ноль плюс текущее значение, если оно false то ноль неподставляем
      let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
      let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
      let sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

      // c помощью innerHTML выведем часы в clock
      clock.innerHTML = `${hours}:${min}:${sec}`;
      
    }

    setInterval(time, 1000);
  }
  // вызов функции
  realTime();

  //! Передаем значение input в текст
  function passingInputValue() {
    // получам в const inputElemtnt input в который будем вводить текст
    const inputElemtnt = document.querySelector('.input-text');

    // получам в const titleElement тот элемент куда выведем значение которое введет пользователь
    let titleElement = document.querySelector('.block__title');

    // положим в const массив
    const textInput=[]
    
    // вешаем слушатиль события keydown который сработает при нажатии любой клавиши
    inputElemtnt.addEventListener('keydown', (event) => {
      // пишем условие при котором будет отправляться значение value только по клику на enter e нее же код кнопки 13
      if (event.key === 'Enter' || event.keyCode === 13) {

        // запушим значение value в массив
        textInput.push(inputElemtnt.value)
        console.log(textInput)

        // пройдем по массиву циклом и получим каждый элемент массива
        for (let i = 0; i < textInput.length; i++) {
          
          // метод join() вернет строку в которую добавим кавычки и запятую, полжим это в переменную
          let stringSplit = '"' + textInput.join('","') + '"';
        // c помощью метода innerText меняем содержимое текста
          titleElement.innerText = `Новый текст:  ${stringSplit}  `;
        }
      }
    });
  }
  // вызов функции
  passingInputValue();

  //! slider
  function sliderStart() {
    // начальное положение слайдера
    let offset = 0;

    const sliderElement = document.querySelector('.slider__items');
    const sliderItemElement = document.querySelector('#active');
    const prewButton = document.querySelector('.prew');
    const nextButton = document.querySelector('.next');
    const scrollElement = document.querySelector('.slider__scroll-item')
    const buttonBack = document.querySelector('.slider__back')

    // кнопка next
    nextButton.addEventListener('click', function () {
      // по клику будем добавлять по 100
      offset += 100;
      // проверка на конец слайдера если будет пролистано 900 то слайдер вернет в начальное положение
      if (offset > 900) {
        offset=0
      }

      if (scrollElement > 900) {
        offset=0
      }

      // добавляем в стили пролистывани на 100px
      sliderElement.style.left = -offset + 'px';

      // скролл ползунка
      scrollElement.style.left = offset + 'px';

    });

    // кнопка prew
    prewButton.addEventListener('click', function () {
      offset -= 100;
      if (offset < 0) {
        offset=900
      }

      if (scrollElement > 0) {
        offset=900
      }
      sliderElement.style.left = -offset + 'px';

        // скролл ползунка всерху
      scrollElement.style.left = offset + 'px';
    
    });

    // возвращаем слайдер и ползонок в нулевое положение 
    buttonBack.addEventListener('click', () => {
      sliderElement.style.left = 0
      scrollElement.style.left=0
    })

    // добавляем и удираем класс active
    sliderItemElement.addEventListener('click', function () {
      sliderElement.classList.toggle('active')
    })

  

  }

  // вызов функции
  sliderStart();
});

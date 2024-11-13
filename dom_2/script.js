//Сохранение и удаление данных не делал
const data = [
  { title: 'qwe', description: 'rewrewr', done: false },
  { title: 'test', description: 'test123', done: true },
];
const ul = document.querySelector('#task_list');
let filterKey = 'Все';
loadData(filterKey);

//loadData принимает ключ для фильтрации и вызывается везде для обновления состояния
function loadData(filterStyle) {
  ul.innerHTML = '';
  let currentData = [];
  console.log(data);

  if (filterStyle === 'Все') {
    currentData = data;
  } else if (filterStyle === 'Сделанные') {
    currentData = data.filter((item) => item.done === true);
  } else if (filterStyle === 'Несделанные') {
    currentData = data.filter((item) => item.done === false);
  }

  currentData.forEach((item, index) => {
    const li = document.createElement('li');
    li.classList.add('task_item');
    li.addEventListener('click', function () {
      item.done = !item.done;
      li.classList.toggle('task_item__n-active');
      loadData(filterKey);
    });
    if (item.done) {
      li.classList.add('task_item__n-active');
    }

    const h4 = document.createElement('h4');
    h4.textContent = item.title;

    const p = document.createElement('p');
    p.textContent = item.description;

    const button = document.createElement('button');
    button.classList.add('btn');
    button.textContent = 'Удалить';

    button.addEventListener('click', function (event) {
      event.stopPropagation();
      data.splice(index, 1);
      loadData(filterKey);
      //   li.remove();
    });
    li.appendChild(h4);
    li.appendChild(p);
    li.appendChild(button);
    ul.appendChild(li);
  });
}
function addTask(elem, event) {
  event.preventDefault();

  const form = elem.closest('#task_form');
  const title = form.querySelector('#title').value;
  const description = form.querySelector('#description').value;
  createNewTask({ title, description });
}

function createNewTask({ title, description }) {
  if (title === '' && description === '') {
    alert('Пустая строка');
  } else {
    data.push({ title, description, done: false });
    // console.log(data);
    loadData(filterKey);
  }
}
//В фильтрации опираюсь на содержимое li (Все Сделанные Несделанные)
function taskFilter(elem) {
  const ul = elem.closest('#filter_list');

  const ulList = ul.querySelectorAll('.filter_item');

  ulList.forEach((item) => {
    item.classList.remove('filter_item__active');
  });
  elem.classList.add('filter_item__active');
  //   console.log(elem.textContent, '----------------');
  filterKey = elem.textContent;
  loadData(filterKey);
}

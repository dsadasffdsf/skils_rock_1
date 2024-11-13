const ul = document.querySelector('#user_list');
const carousel = document.querySelector('#carousel');
let transformValue = 0;
let totalImg = 0;
let currentImg = 0;
loadUsers();
setInterval(toRight, 3000);

async function fetchUsers() {
  try {
    const res = await fetch('https://randomuser.me/api/?results=10').then((response) => {
      return response.json();
    });
    return res.results;
  } catch (e) {
    console.log(e);
    throw new Error('Не удалось загрузить пользователей');
  }
}
async function loadUsers() {
  try {
    const userList = await fetchUsers();
    console.log(userList);
    ul.innerHTML = '';
    userList.forEach((element) => {
      const li = document.createElement('li');
      li.classList.add('user_item');

      const img = document.createElement('img');
      // console.log(element.picture.medium);

      img.src = element.picture.medium;

      const h4 = document.createElement('h4');
      h4.textContent = element.name.first;
      const h3 = document.createElement('h3');
      h3.textContent = element.email;
      const div = document.createElement('div');

      div.appendChild(h4);
      div.appendChild(h3);
      li.appendChild(img);
      li.appendChild(div);
      ul.appendChild(li);
    });
    carouselHandler(userList);
  } catch (e) {
    // alert(e.message);
    alert('Не удалось загрузить пользователей');
  }
}
//Генерация картинок в карусель
function carouselHandler(arr) {
  const imgList = arr.map((item) => item.picture.large);
  totalImg = imgList.length;
  imgList.forEach((element) => {
    const img = document.createElement('img');
    img.classList.add('w-[128px]');

    img.src = element;
    carousel.appendChild(img);
  });
}

// Прокрутка карусели
function toRight() {
  if (currentImg < totalImg - 1) {
    transformValue -= 128;
    currentImg += 1;
  } else {
    currentImg = 0;
    transformValue = 0;
  }
  carousel.style.transform = `translateX(${transformValue}px)`;
  // console.log(currentImg, totalImg);
}
function toLeft() {
  if (currentImg > 0) {
    transformValue += 128;
    currentImg -= 1;
  } else {
    transformValue = -(totalImg - 1) * 128;
    currentImg = totalImg - 1;
  }
  carousel.style.transform = `translateX(${transformValue}px)`;
  // console.log(currentImg, totalImg);
}

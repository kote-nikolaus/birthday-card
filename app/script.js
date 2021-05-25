const formName = document.getElementById('name');
const formAge = document.getElementById('age');
const button = document.getElementById('form-button');
const form = document.getElementById('form');
const body = document.getElementById('body');
const balloons = document.getElementById('balloons-wrapper');
const gifts = document.getElementById('gifts-wrapper');
const cake = document.getElementById('cake');


button.addEventListener('click', congratulate);

function congratulate(e) {
  e.preventDefault();
  if (formName.value !== '' && formAge.value !== '') {
    form.classList.remove('active');
    body.classList.add('second');
    body.classList.remove('first');
    balloons.classList.add('active');
    setTimeout(hideBalloons, 9900);
    setTimeout(function() {
      showMessage(formName.value);
    }, 10500);
    setTimeout(showBar, 13000);
    setTimeout(function() {
      showAge(formAge.value);
    }, 16000);
    setTimeout(showGifts, 17000);
    setTimeout(showCake, 19500);
  }
}

function hideBalloons() {
  balloons.classList.remove('active');
}

function showMessage(name) {
  let message = document.createElement('div');
  message.className = 'message';
  message.innerHTML = `<div class='message-name'>С днем рождения,</div>
  <div class='message-name'>${name}!</div>`;
  body.appendChild(message);
}

function showBar() {
  let bar = document.createElement('div');
  bar.className = 'bar';
  body.appendChild(bar);
  setTimeout(function() {
    bar.classList.add('bar-width');
  }, 2000);
}

function showAge(age) {
    let ageNumber = document.createElement('div');
    ageNumber.className = 'age';
    ageNumber.innerHTML = `<div class='message-age'>${age}</div>`;
    body.appendChild(ageNumber);
}

function showGifts() {
    gifts.classList.add('active');
}

function showCake() {
  cake.classList.add('active');
}

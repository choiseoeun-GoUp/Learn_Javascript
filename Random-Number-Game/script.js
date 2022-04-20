const MaxInput = document.querySelector("#Number-form input");
const UserInput = document.querySelector("#User-form input");
const ResultView = document.querySelector(".resultView");
const RandomView = document.querySelector(".randomView");
const btn = document.querySelector(".playBtn");

function random(e) {
  e.preventDefault();
  const MaxNumber = MaxInput.value;
  const UserNumber = UserInput.value;
  localStorage.setItem(MaxNumber, MaxNumber);
  localStorage.setItem(UserNumber, UserNumber);
  const savedMaxNumber = localStorage.getItem(MaxNumber);
  const savedUserNumber = localStorage.getItem(UserNumber);
  const randomNumber = Math.ceil(Math.random() * savedMaxNumber);
  RandomView.innerHTML = `<p> 당신이 고른 숫자는 <strong>${savedUserNumber}</strong>입니다. 랜덤 숫자는 <strong>${randomNumber}</strong>입니다.</p>`;
  comparisonNumber(savedUserNumber, randomNumber);
}

function comparisonNumber(savedUserNumber, randomNumber) {
  if (savedUserNumber > randomNumber) {
    ResultView.innerHTML = `<p>틀렸습니다.</p>`;
  } else if (savedUserNumber < randomNumber) {
    ResultView.innerHTML = `<p>틀렸습니다.</p>`;
  } else {
    ResultView.innerHTML = `<p>맞았습니다.</p>`;
  }
}

btn.addEventListener("click", random);

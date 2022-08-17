const enterHour = document.querySelector('.enter-time__hour');
const enterMinute = document.querySelector('.enter-time__minute');
const resultHour = document.querySelector('.result-time__hour');
const resultMinute = document.querySelector('.result-time__minute');
const btnResult = document.querySelector('.confirm__btn');
const warning = document.querySelector('.label-warning');

btnResult.addEventListener('click', function () {
  if (Number(enterHour.value) > 0) {
    resultHour.textContent = Number(enterHour.value) + 2;
    if (Number(enterMinute.value) > 0) {
      resultMinute.textContent = Number(enterMinute.value);
    } else {
      resultMinute.textContent = '';
    }
  } else {
    warning.textContent = "Enter Dublin's time";
  }
})
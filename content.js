let intervalFunc;

function checkClarinModalVisibility() {
  let tryCount = 0;
  let arrayOfModals = document.querySelectorAll('.modal-pase');
  let lockedElement = document.querySelector('.lock');

  if (tryCount === 5) {
    return;
  }

  if (arrayOfModals.length) {
    arrayOfModals.forEach((blocker) => blocker.remove());
    lockedElement.style.opacity = '1';
    lockedElement.classList.remove('lock');
    return clearInterval(intervalFunc);
  }

  tryCount++;
}

if (window.location.host.indexOf("clarin.com") !== -1) {
  console.log('Diarios Sin Interrupciones, Running!');
  intervalFunc = setInterval(checkClarinModalVisibility, 1000);
}
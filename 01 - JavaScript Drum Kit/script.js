const keyPress = (keyCode) => {
  const audio = document.querySelector(`audio[data-key='${keyCode}'`);
  const key = document.querySelector(`div[data-key='${keyCode}'`);

  if (!audio) {
    return;
  }

  audio.currentTime = 0;
  audio.play();

  key.classList.add('playing');
}

window.addEventListener('keydown', () => {
  keyPress(event.keyCode);
});

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', (event) => {
  if (event.propertyName !== 'transform') {
    return;
  }

  key.classList.remove('playing');
}));
import './style.css';

const playAudio = audio => {
  if (!audio) {
    return;
  }

  audio.currentTime = 0;
  audio.play();
}

const keyPress = key => {
  if (!key) {
    return;
  }

  key.classList.add('playing');
}

window.addEventListener('keydown', event => {
  const key = document.querySelector(`div[data-key='${event.keyCode}'`);
  const audio = document.querySelector(`audio[data-key='${event.keyCode}'`);

  keyPress(key);
  playAudio(audio);
});

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('click', event => {
  const keycode = key.getAttribute('data-key');
  const audio = document.querySelector(`audio[data-key='${keycode}'`);

  keyPress(key);
  playAudio(audio);
}));

keys.forEach(key => key.addEventListener('transitionend', event => {
  if (event.propertyName !== 'transform') {
    return;
  }

  key.classList.remove('playing');
}));
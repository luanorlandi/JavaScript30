import './style.css';
import pathAudioStart from './sounds/omewa-no-speak-start.wav';
import pathAudioLoop from './sounds/omewa-no-speak-loop.wav';

const MAX_VIEW_WIDTH = 66.5;
const MIN_VIEW_WIDTH = 17;
const MAX_RGB_VALUE = 255;
const MAX_INTERVAL = 300;
const MIN_VALUE_START_SOUND = 140;
const INTERVAL_MULTIPLIER = MAX_INTERVAL / MAX_RGB_VALUE;

const audioStart = new Audio(pathAudioStart);
const audioLoop = new Audio(pathAudioLoop);

const swapColors = () => {
  const bodyStyle = getComputedStyle(document.body);
  const backgroundColor = bodyStyle.getPropertyValue('--backgroundColor');
  const textColor = bodyStyle.getPropertyValue('--textColor');

  document.documentElement.style.setProperty('--backgroundColor', textColor);
  document.documentElement.style.setProperty('--textColor', backgroundColor);
}

const loopSwap = () => {
  const input = document.querySelector('.slider input');
  const timeout = INTERVAL_MULTIPLIER * (MAX_RGB_VALUE - input.value);

  if (timeout !== MAX_INTERVAL) {
    swapColors();
  }

  return setTimeout(loopSwap, timeout);
}

const playAudio = () => {
  audioStart.addEventListener('ended', () => {
    audioLoop.loop = true;
    audioLoop.play();
  });

  audioStart.play();
}

const handleSlider = (event) => {
  const input = document.querySelector('.slider input');
  const overlay = document.querySelector('.slider .overlay');
  let width;
  
  if (event.target.value < MIN_VALUE_START_SOUND) {
    width = MIN_VIEW_WIDTH + MAX_VIEW_WIDTH * event.target.value / MAX_RGB_VALUE;
  } else {
    width = 100;
    input.value = input.max;
    input.disabled = true;
    input.style.setProperty('visibility', 'hidden');
    input.removeEventListener('input', handleSlider);
    playAudio();
  }

  overlay.style.setProperty('left', `${width}vw`);
}

loopSwap();
const input = document.querySelector('.slider input');
input.addEventListener('input', handleSlider);

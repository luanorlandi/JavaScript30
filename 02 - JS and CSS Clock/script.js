import pathAudio1 from './sounds/1.mp3';
import pathAudio2 from './sounds/2.mp3';
import './style.css';

const START_DEGREE = 90;

const rotateElement = (element, degree) => {
  const trasitionDuration = degree == START_DEGREE ? 0 : 0.1;
  element.style.transitionDuration = `${trasitionDuration}s`;

  element.style.transform = `rotate(${degree}deg)`;
}

const setSecondHand = (date) => {
  const hand = document.querySelector('.second-hand');
  const degree = date.getSeconds() / 60 * 360 + START_DEGREE;
  rotateElement(hand, degree);
}

const setMinuteHand = (date) => {
  const hand = document.querySelector('.minute-hand');
  const degree = date.getMinutes() / 60 * 360 + START_DEGREE;
  rotateElement(hand, degree);
}

const setHourHand = (date) => {
  const hand = document.querySelector('.hour-hand');
  const degree = date.getHours() / 12 * 360 + START_DEGREE;
  rotateElement(hand, degree);
}

const setDate = () => {
  const now = new Date();

  setSecondHand(now);
  setMinuteHand(now);
  setHourHand(now);
}

function* playTick() {
  const audioFirst = new Audio(pathAudio1);
  const audioSecond = new Audio(pathAudio2);

  while (true) {
    audioFirst.currentTime = 0;
    audioFirst.play();
    yield;
    
    audioSecond.currentTime = 0;
    audioSecond.play();
    yield;
  }
}

const tick = playTick();

setInterval(() => {
  setDate();
  tick.next();
}, 1000);
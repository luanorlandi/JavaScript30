import pathAudio1 from './sounds/vitas-ahahah.wav';
import pathAudio2 from './sounds/vitas-hahaha.wav';
import pathAudioMinute from './sounds/vitas-blblbl.wav';
import './style.css';

const START_DEGREE = 90;
const MINUTE_CHANGE = 0;

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

const setDate = (date) => {
  setSecondHand(date);
  setMinuteHand(date);
  setHourHand(date);
}

const playTick = (date) => {
  const seconds = date.getSeconds();

  if (seconds === MINUTE_CHANGE) {
    const audioMinute = new Audio(pathAudioMinute);
    audioMinute.play();
  } else if (seconds % 2) {
    const audioFirst = new Audio(pathAudio1);
    audioFirst.play();
  } else {
    const audioSecond = new Audio(pathAudio2);
    audioSecond.play();
  }
}

setInterval(() => {
  const now = new Date();

  setDate(now);
  playTick(now);
}, 1000);
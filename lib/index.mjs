// TODO: Add logging, with daily report

import EventEmitter from 'events';

const myEmitter = new EventEmitter();

let sessionMin = 25 * 60 * 1000;
let breakMin = 5 * 60 * 1000;

function fn1() {
  myEmitter.emit('break', 'It\'s time for a break');
  setTimeout(fn2, breakMin);
  return myEmitter;
}

function fn2() {
  myEmitter.emit('work', 'it\'s time to work');
  setTimeout(fn1, sessionMin)
  return myEmitter;
}

const pomodoro = {
  init: ({ sessionMin, breakMin, multiplier }) => {
    sessionMin = sessionMin * 60 * 1000 * (multiplier||1);
    breakMin = breakMin * 60 * 1000 * (multiplier||1);

    console.log(`Initial timer started! ${sessionMin/1000/60} minutes`);
    setTimeout(fn1, sessionMin)
    return myEmitter
  }
}

export default pomodoro
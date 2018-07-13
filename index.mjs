import pomodoro from './lib';
import program from 'commander';
import notifier from 'node-notifier';

notifier.notify({
  title: 'My awesome title',
  message: 'Hello from node, Mr. User!'
},);

program
  .option('-s, --sessionMin <n>', 'Session duration in minutes', parseInt)
  .option('-b, --breakMin <n>', 'Break duration in minutes', parseInt)
  .option('-m, --multiplier <n>', 'Use 2 to double the length', parseInt)
  .parse(process.argv);
  
pomodoro
  .init({
    sessionMin: program.sessionMin || 25,
    breakMin: program.breakMin || 5,
    multiplier: program.multiplier || 1,
  })
  .on('work', () => {
    // Turn Philips Hue green
    console.log('work');
  })
  .on('break', () => {
    // Turn Philips Hue red
    console.log('break');
  });

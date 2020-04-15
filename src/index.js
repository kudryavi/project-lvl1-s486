import readlyneSync from 'readline-sync';

export default () => {
  const userName = readlyneSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

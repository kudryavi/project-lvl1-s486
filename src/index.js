import readlyneSync from 'readline-sync';

export const greetUser = () => {
  const userName = readlyneSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getRandomNumber = () => {
  return Math.floor(Math.random() * Math.floor(1000));
};

export const checkForEven = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
  const userName = greetUser();
  for (let i = 1; i <= 3; i += 1) {
    const randomNum = getRandomNumber();
    const answerUser = readlyneSync.question(`Question: ${randomNum} `);
    console.log(`Your answer: ${answerUser}`);

    if ((randomNum % 2 === 0 && answerUser === 'yes') || (randomNum % 2 !== 0 && answerUser === 'no')) {
      console.log('Correct');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was ${randomNum % 2 === 0 ? 'yes' : 'no'}.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

import readlyneSync from 'readline-sync';

export const greetUser = () => {
    const userName = readlyneSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
}
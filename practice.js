const prompt = require('prompt-sync')();

const numberCalculator = function(firstNumber, operator, secondNumber) {
    let result = 0;
    try {
        if (isNaN(firstNumber) || isNaN(secondNumber) ) {
            throw new SyntaxError("Input is incorrect!");
        }
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
        switch(operator) {
            case '+':
            result = firstNumber + secondNumber;
            console.log(`Your result is: ${result}`);
            break;
            case '-':
                result = firstNumber - secondNumber;
                console.log(`Your result is: ${result}`);
            break;
            case '*':
                result = firstNumber * secondNumber;
                console.log(`Your result is: ${result}`);
            break;
            case '/':
                result = firstNumber - secondNumber;
                console.log(`Your result is: ${result}`);
            break;
            default:
            console.log(`Hey there, your operator ${operator} is not here!`);

        }

      } catch (e) {
        console.error(e.message);
      }
};

const firstNumber = prompt('First number: ');
const operator = prompt('Operator: ');
const secondNumber = prompt('Second number: ');
numberCalculator(firstNumber, operator, secondNumber);

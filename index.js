#! /usr/bin/env node
import inquirer from "inquirer"; //Importing the Inquirer code from inquirer Package
import chalk from "chalk";
let answer = await inquirer.prompt([
    {
        message: `\nEnter the First Number: `,
        type: `number`,
        name: "firstNumber",
    },
    {
        message: `\nEnter the Second Number: `,
        type: `number`,
        name: "secondNumber",
    },
    {
        message: `\nSeelct the Operation which you want to perform:`,
        type: `list`,
        name: "operation",
        choices: [`Addition`, `Subtraction`, `Multiplication`, `Division`, `Exponential`, `Modulus`],
    },
]);
//Conditional statement for User Input
if (answer.operation === "Addition") {
    let Addition = answer.firstNumber + answer.secondNumber;
    console.log(`\nYour Answer is: ${Addition}`);
}
else if (answer.operation === "Subtraction") {
    let Subtraction = answer.firstNumber - answer.secondNumber;
    console.log(`\nYour Answer is: ${Subtraction}`);
}
else if (answer.operation === "Multiplication") {
    let Multiplication = answer.firstNumber * answer.secondNumber;
    console.log(`\nYour Answer is: ${Multiplication}`);
}
else if (answer.operation === "Division") {
    let Division = answer.firstNumber / answer.secondNumber;
    console.log(`\nYour Answer is: ${Division}`);
}
else if (answer.operation === "Modulus") {
    let Modulus = answer.firstNumber % answer.secondNumber;
    console.log(`\nYour Answer is: ${Modulus}`);
}
else if (answer.operation === "Exponential") {
    let Exponential = answer.firstNumber ** answer.secondNumber;
    console.log(`\nYour Answer is: ${Exponential}`);
}
else {
    console.log(chalk.redBright(`Please Select a Valid Operator!`));
}
console.log(chalk.bold.yellowBright(`\n\nThankyou for using this Calculator!✨ `));

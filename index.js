#! /usr/bin/env node
//SHABANG//
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to perform operation",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Multipication", "Division"],
    },
]);
//conditional statement//
if (answer.Operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.Operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.Operator === "Multipication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.Operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select valid Operator");
}

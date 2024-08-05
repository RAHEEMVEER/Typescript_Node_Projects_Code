#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function quizApp() {
    console.log(chalk.green.bold.italic(`\n\tWELLCOME TO MY QUIZ APP!!!\n`));
    let score = 0;
    // MCQS INQUIRER PROMPTS
    let mcqsInput = await inquirer.prompt([
        // MCQS = 1
        {
            name: "ques1",
            type: "list",
            choices: ["Java Style", "Just Script", "JavaScript", "TypeScript"],
            message: "WHAT DOES JS STAND FOR ?",
        },
        // MCQS = 2
        {
            name: "ques2",
            type: "list",
            choices: ["push()", "add()", "append()", "insert()"],
            message: "Which method is used to add an element to the end of an array in JavaScript?",
        },
        // MCQS = 3
        {
            name: "ques3",
            type: "list",
            choices: [
                "It's a superset of JavaScript",
                "It's a subset of JavaScript",
                "It's a completely different language from JavaScript",
                "It's an extension of Java",
            ],
            message: "Which of the following is true about TypeScript?",
        },
        // MCQS = 4
        {
            name: "ques4",
            type: "list",
            choices: ["No type", "Any type", "Null type", "Undefined type"],
            message: 'In TypeScript, what does the "any" type represent?',
        },
        // MCQS = 5
        {
            name: "ques5",
            type: "list",
            choices: ["func", "function", "def", "fn"],
            message: "Which keyword is used to define a function in JavaScript?",
        },
        // MCQS = 6
        {
            name: "ques6",
            type: "list",
            choices: ["==", "===", "=", "!=="],
            message: "Which operator is used for strict equality in JavaScript?",
        },
        // MCQS = 7
        {
            name: "ques7",
            type: "list",
            choices: ["//", "#", "/*", "////"],
            message: "Which symbol is used for single-line comments in JavaScript?",
        },
        // MCQS = 8
        {
            name: "ques8",
            type: "list",
            choices: ["Interfaces", "Classes", "Generics", "Arrow functions"],
            message: "Which of the following is a feature of TypeScript but not JavaScript?",
        },
        // MCQS = 9
        {
            name: "ques9",
            type: "list",
            choices: ["TypeSecure", "TypeScript", "Python", "Javascript"],
            message: "What does TS stand for?",
        },
        // MCQS = 10
        {
            name: "ques10",
            type: "list",
            choices: ["var", "let", "const", "All of the above"],
            message: "Which keyword is used to declare variables in JavaScript?",
        },
    ]);
    let result = await inquirer.prompt([
        {
            name: "result",
            type: "list",
            choices: ["VIEW RESULT:"],
            message: "\n\nIF YOU WANT TO VIEW YOUR RESULTS, PRESS 'VIEW RESULTS' ELSE PRESS 'EXIT'",
        },
    ]);
    if (result.result === "VIEW RESULT:") {
        // MCQS ANSWERS CONDITIONS
        //===================================(MCQS NUM 1 CONDITION)=====================================
        if (mcqsInput.ques1 === "JavaScript") {
            console.log(chalk.yellow.bold.italic("\n\t\t   MCQS 1:"));
            console.log(chalk.red.bold(`\t===========================`));
            console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
            console.log(chalk.red.bold(`\t===========================\n`));
            score = score + 1;
        }
        else {
            console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 1"));
            console.log(chalk.yellow.bold(`\t===========================================`));
            console.log(chalk.red.bold.italic(`\t        YOU CHOOSE: ${mcqsInput.ques1}`) +
                chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "JavaScript"`));
            console.log(chalk.yellow.bold(`\t===========================================`));
        }
        //===================================(MCQS NUM 2 CONDITION)=====================================
        if (mcqsInput.ques2 === "push()") {
            console.log(chalk.yellow.bold.italic("\t\t   MCQS 2:"));
            console.log(chalk.red.bold(`\t===========================`));
            console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
            console.log(chalk.red.bold(`\t===========================\n`));
            score = score + 1;
        }
        else {
            console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 2"));
            console.log(chalk.yellow.bold(`\t===========================================`));
            console.log(chalk.red.bold.italic(`\t        YOU CHOOSE: ${mcqsInput.ques2}`) +
                chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "push()"`));
            console.log(chalk.yellow.bold(`\t===========================================`));
        }
        //===================================(MCQS NUM 3 CONDITION)=====================================
        if (mcqsInput.ques3 === "It's a superset of JavaScript") {
            console.log(chalk.yellow.bold.italic("\t\t   MCQS 3:"));
            console.log(chalk.red.bold(`\t===========================`));
            console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
            console.log(chalk.red.bold(`\t===========================\n`));
            score = score + 1;
        }
        else {
            console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 3"));
            console.log(chalk.yellow.bold(`\t=======================================================`));
            console.log(chalk.red.bold.italic(`\t   YOU CHOOSE: ${mcqsInput.ques3}`) +
                chalk.green.bold.italic(`\n\tBUT CORRECT ANSWER IS: "It's a superset of JavaScript"`));
            console.log(chalk.yellow.bold(`\t=======================================================`));
        }
        //===================================(MCQS NUM 4 CONDITION)=====================================
        if (mcqsInput.ques4 === "Any type") {
            console.log(chalk.yellow.bold.italic("\t\t   MCQS 4:"));
            console.log(chalk.red.bold(`\t===========================`));
            console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
            console.log(chalk.red.bold(`\t===========================\n`));
            score = score + 1;
        }
        else {
            console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 4"));
            console.log(chalk.yellow.bold(`\t===========================================`));
            console.log(chalk.red.bold.italic(`\t        YOU CHOOSE: ${mcqsInput.ques4}`) +
                chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "Any type"`));
            console.log(chalk.yellow.bold(`\t===========================================`));
        }
        //===================================(MCQS NUM 5 CONDITION)=====================================
        if (mcqsInput.ques5 === "function") {
            console.log(chalk.yellow.bold.italic("\t\t   MCQS 5:"));
            console.log(chalk.red.bold(`\t===========================`));
            console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
            console.log(chalk.red.bold(`\t===========================\n`));
            score = score + 1;
        }
        else {
            console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 5"));
            console.log(chalk.yellow.bold(`\t===========================================`));
            console.log(chalk.red.bold.italic(`\t        YOU CHOOSE: ${mcqsInput.ques5}`) +
                chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "function"`));
            console.log(chalk.yellow.bold(`\t===========================================`));
        }
        //===================================(MCQS NUM 6 CONDITION)=====================================
        if (mcqsInput.ques6 === "===") {
            console.log(chalk.yellow.bold.italic("\t\t   MCQS 6:"));
            console.log(chalk.red.bold(`\t===========================`));
            console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
            console.log(chalk.red.bold(`\t===========================\n`));
            score = score + 1;
        }
        else {
            console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 6"));
            console.log(chalk.yellow.bold(`\t===========================================`));
            console.log(chalk.red.bold.italic(`\t        YOU CHOOSE: ${mcqsInput.ques6}`) +
                chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "==="`));
            console.log(chalk.yellow.bold(`\t===========================================`));
        }
        //===================================(MCQS NUM 7 CONDITION)=====================================
        if (mcqsInput.ques7 === "//") {
            console.log(chalk.yellow.bold.italic("\t\t   MCQS 7:"));
            console.log(chalk.red.bold(`\t===========================`));
            console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
            console.log(chalk.red.bold(`\t===========================\n`));
            score = score + 1;
        }
        else {
            console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 7"));
            console.log(chalk.yellow.bold(`\t===========================================`));
            console.log(chalk.red.bold.italic(`\t        YOU CHOOSE: ${mcqsInput.ques7}`) +
                chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "//"`));
            console.log(chalk.yellow.bold(`\t===========================================`));
        }
        //===================================(MCQS NUM 8 CONDITION)=====================================
        if (mcqsInput.ques8 === "Interfaces") {
            console.log(chalk.yellow.bold.italic("\t\t   MCQS 8:"));
            console.log(chalk.red.bold(`\t===========================`));
            console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
            console.log(chalk.red.bold(`\t===========================\n`));
            score = score + 1;
        }
        else {
            console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 8"));
            console.log(chalk.yellow.bold(`\t===========================================`));
            console.log(chalk.red.bold.italic(`\t        YOU CHOOSE: ${mcqsInput.ques8}`) +
                chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "Interfaces"`));
            console.log(chalk.yellow.bold(`\t===========================================`));
        }
        //===================================(MCQS NUM 9 CONDITION)=====================================
        if (mcqsInput.ques9 === "TypeScript") {
            console.log(chalk.yellow.bold.italic("\t\t   MCQS 9:"));
            console.log(chalk.red.bold(`\t===========================`));
            console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
            console.log(chalk.red.bold(`\t===========================\n`));
            score = score + 1;
        }
        else {
            console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 9"));
            console.log(chalk.yellow.bold(`\t===========================================`));
            console.log(chalk.red.bold.italic(`\t        YOU CHOOSE: ${mcqsInput.ques9}`) +
                chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "TypeScript"`));
            console.log(chalk.yellow.bold(`\t===========================================`));
        }
        //===================================(MCQS NUM 10 CONDITION)=====================================
        if (mcqsInput.ques10 === "All of the above") {
            console.log(chalk.yellow.bold.italic("\t\t   MCQS 10:"));
            console.log(chalk.red.bold(`\t===========================`));
            console.log(chalk.green.bold.italic("\t     CORRECT ANSWER"));
            console.log(chalk.red.bold(`\t===========================\n`));
            score = score + 1;
        }
        else {
            console.log(chalk.blue.bold.italic("\n\t\t       MCQS => 10"));
            console.log(chalk.yellow.bold(`\t===========================================`));
            console.log(chalk.red.bold.italic(`\t        YOU CHOOSE: ${mcqsInput.ques10}`) +
                chalk.green.bold.italic(`\n\t    BUT CORRECT ANSWER IS: "All of the above"`));
            console.log(chalk.yellow.bold(`\t===========================================`));
        }
        // SCORE COLOR CHANGE CONDITION
        if (score <= 5) {
            console.log(chalk.green.bold.italic(`\n\tYOUR TOTAL SCORE IS:`) +
                chalk.red.bold.italic(` ${score}`) +
                chalk.green.bold.italic(`/10`));
        }
        else {
            console.log(chalk.yellow.bold.italic(`\n\tYOUR TOTAL SCORE IS:`) +
                chalk.green.bold.italic(` ${score}`) +
                chalk.yellow.bold.italic(`/10`));
        }
    }
}
quizApp();

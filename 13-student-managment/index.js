#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let userInfo = {
    name: "",
    studentId: "",
    age: "",
    balance: "",
};
console.log(chalk.yellow(`\n\t\t============================================================`));
console.log(chalk.green.italic.bold(`\t\t        "WELLCOME TO STUDENT EDUCATION SYSTEM APP"`));
console.log(chalk.yellow(`\t\t============================================================\n`));
let userInput = await inquirer.prompt([
    {
        name: "userName",
        message: "ENTER YOUR NAME:",
        type: "string",
    },
]);
while (userInput.userName.length < 4) {
    console.log(chalk.yellow(`\n\t\t============================================================`));
    console.log(chalk.red.italic.bold `\t\t         NAME MUST BE AT LEAST 4 CHARACTERS LONG`);
    console.log(chalk.yellow(`\t\t============================================================\n`));
    userInput = await inquirer.prompt([
        {
            name: "userName",
            message: "ENTER YOUR NAME:",
            type: "string",
        },
    ]);
}
userInfo.name = userInput.userName;
let userInput_2 = await inquirer.prompt([
    {
        name: "userRollNumber",
        message: "ENTER YOUR ROLL NUMBER. MAKE SURE YOUR ROLL NUMBER STARTS WITHOUT 0:",
        type: "string",
    },
]);
while (userInput_2.userRollNumber.length < 5) {
    console.log(chalk.yellow(`\n\t\t============================================================`));
    console.log(chalk.red.italic
        .bold `\t\t      ROLL NUMBER MUST BE AT LEAST 5 CHARACTERS LONG`);
    console.log(chalk.yellow(`\t\t============================================================\n`));
    userInput_2 = await inquirer.prompt([
        {
            name: "userRollNumber",
            message: "ENTER YOUR ROLL NUMBER. MAKE SURE YOUR ROLL NUMBER STARTS WITHOUT 0:",
            type: "string",
        },
    ]);
}
userInfo.studentId = userInput_2.userRollNumber;
let userInput_3 = await inquirer.prompt([
    {
        name: "userAge",
        message: "ENTER YOUR AGE:",
        type: "string",
    },
]);
while (userInput_3.userAge <= 10) {
    console.log(chalk.green(`\n\t\t===============================================================`));
    console.log(chalk.red.italic
        .bold `\t\t    SORRY YOU ARE NOT ELIGIBLE TO ENROLL IN THIS COURSE.\n\t\t    BECAUSE WE CAN SELECT ONLY STUDENTS AGE 11 AND ABOVE`);
    console.log(chalk.green(`\t\t===============================================================\n`));
    userInput_3 = await inquirer.prompt([
        {
            name: "userAge",
            message: "ENTER YOUR AGE:",
            type: "string",
        },
    ]);
}
userInfo.age = userInput_3.userAge;
let userInput_4 = await inquirer.prompt([
    {
        name: "userBalance",
        message: "ENTER YOUR BANK BALANCE:",
        type: "string",
    },
]);
while (userInput_4.userBalance < 3000) {
    console.log(chalk.green(`\n\t\t==================================================================`));
    console.log(chalk.red.italic
        .bold `\t\t        SORRY YOU ARE NOT ELIGIBLE TO ENROLL IN THIS COURSE.\n\t\t BECAUSE WE CAN SELECT ONLY STUDENTS WITH BANK BALANCE ABOVE 3000`);
    console.log(chalk.green(`\t\t==================================================================\n`));
    userInput_4 = await inquirer.prompt([
        {
            name: "userBalance",
            message: "ENTER YOUR BANK BALANCE:",
            type: "string",
        },
    ]);
}
userInfo.balance = userInput_4.userBalance;
let input_2 = await inquirer.prompt([
    {
        name: "courses",
        type: "list",
        choices: [
            "CLOUD APPLIED GENERATIVE AI: FEES => 15000",
            "GRAPHIC DESIGNING:           FEES => 5000",
            "WEB DEVELOPMENT:             FEES => 8000",
            "CIT COURSE:                  FEES => 3000",
            "CYBERSECURITY:               FEES => 10000",
            "DATA SCIENCE:                FEES => 12000",
            "SOFTWARE DEVELOPMENT:        FEES => 14000",
        ],
        message: "WHICH COMPUTER COARSE WILL YOU SELECT ?",
    },
    {
        type: "list",
        choices: [
            "PAY COARSE FEES",
            "VIEW YOUR BALANCE",
            "SHOW YOUR STATUS",
            "EXIT",
        ],
        name: "requirements",
        message: "SELECT YOUR FEES REQUIREMENTS ?",
    },
]);
// ======================================(CONDITIONS)============================================
if (input_2.requirements === "PAY COARSE FEES") {
    let payment = await inquirer.prompt([
        {
            name: "money",
            type: "number",
            message: "ENTER YOUR COARSE FEE AMOUNT YOU WANT TO SELECT.",
        },
    ]);
    if ((input_2.courses === "CLOUD APPLIED GENERATIVE AI: FEES => 15000" &&
        payment.money === 15000) ||
        (input_2.courses === "GRAPHIC DESIGNING:           FEES => 5000" &&
            payment.money === 5000) ||
        (input_2.courses === "WEB DEVELOPMENT:             FEES => 8000" &&
            payment.money === 8000) ||
        (input_2.courses === "CIT COURSE:                  FEES => 3000" &&
            payment.money === 3000) ||
        (input_2.courses === "CYBERSECURITY:               FEES => 10000" &&
            payment.money === 10000) ||
        (input_2.courses === "DATA SCIENCE:                FEES => 12000" &&
            payment.money === 12000) ||
        (input_2.courses === "SOFTWARE DEVELOPMENT:        FEES => 14000" &&
            payment.money === 14000)) {
        if (userInfo.balance >= payment.money) {
            console.log(chalk.yellow(`\n\t\t    ==================================================`));
            console.log(chalk.green.italic.bold(`\t\t\t      PAYMENT IS SUCCESS FULLY PAID`));
            console.log(chalk.yellow(`\t\t    ==================================================\n`));
            console.log(chalk.blue(`\t\t==============================================================`));
            console.log(chalk.red.italic.bold(`\t\t    AFTER DEPOSITING THE FEES YOUR BALANCE IS THIS: ${userInfo.balance - payment.money}`));
            console.log(chalk.blue(`\t\t==============================================================\n`));
        }
        else if (userInfo.balance < payment.money) {
            console.log(chalk.yellow(`\n\t\t    ==================================================`));
            console.log(chalk.red.italic.bold(`\t\t\t   SORRY YOU DON'T HAVE ENOUGH MONEY.`));
            console.log(chalk.red.italic.bold(`\t\t\t         YOUR BALANCE IS: ` + userInfo.balance));
            console.log(chalk.yellow(`\t\t    ==================================================\n`));
        }
    }
    else {
        console.log(chalk.yellow(`\n\t\t==============================================================`));
        console.log(chalk.red.italic.bold(`\t\t        YOU HAVE MADE WRONG PAYMENT FOR THE COURSE,\n\t\t     SO PLEASE MAKE PAYMENT FOR THE COARSE YOU SELECTED.`));
        console.log(chalk.yellow(`\t\t==============================================================\n`));
    }
}
else if (input_2.requirements === "VIEW YOUR BALANCE") {
    console.log(chalk.yellow(`\t\t=====================================================`));
    console.log(chalk.green.italic.bold(`\t\t\t   YOUR CURRENT BALANCE IS: ${userInfo.balance}`));
    console.log(chalk.yellow(`\t\t=====================================================\n`));
}
else if (input_2.requirements === "SHOW YOUR STATUS") {
    console.log(chalk.yellow(`\n=========================================================================`));
    console.log(chalk.green.italic.bold(`HERE'S YOUR STATUS MEANS YOUR INFORMATION ONES YOU PROVIDED US IN INPUT.`));
    console.log(chalk.yellow(`=========================================================================\n`));
    console.log(chalk.yellow(`HERE'S YOUR NAME: ${userInfo.name}\nYOUR ROLL NUMBER: ${userInfo.studentId}\nYOUR AGE IS: ${userInfo.age}\nYOUR BANK BALANCE: ${userInfo.balance}
                        `));
    console.log(chalk.yellow(`=========================================================================\n`));
}
else if (input_2.requirements === "EXIT") {
    console.log(chalk.yellow(`\n\t\t======================================`));
    console.log(chalk.green.italic.bold(`\t\t     THANKS FOR USING CREATOR BY :`));
    console.log(chalk.green.italic.bold(`\t\t          ==> "RAHEEM VEER"`));
    console.log(chalk.yellow(`\t\t======================================\n`));
}
//----------------------------------------------------( PROJECT END)----------------------------------------------------
//===============================================================
// HOW TO ADD ANY USER DATA IN INQUIRER PROMPT
// HERE IS EXAMPLE OF HOW TO ADD USER DATA IN INQUIRER PROMPT
//===============================================================
// let student = {
//   name: "",
//   studentId: "",
//   balance: 10000,
// };
// let input = await inquirer.prompt([
//   {
//     name: "username",
//     type: "input",
//     message: "ENTER YOUR NAME:",
//   },
//   {
//     name: "id",
//     type: "input",
//     message: "ENTER YOUR ROLL NUMBER:",
//   },
// ]);
// student.name = input.username;
// student.studentId = input.id;
// console.log(
//   `Hello ${student.name} your roll number is ${student.studentId} and your balance is ${student.balance}`
// );

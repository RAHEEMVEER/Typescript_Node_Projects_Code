#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let password = "myConverter";
let contiue = true;
let pass = await inquirer.prompt([
    {
        name: "myPass",
        type: "password",
        message: "ENTER THE PASSWORD",
    },
]);
if (pass.myPass === password) {
    console.log(chalk.green(`\t\t=========================================`));
    console.log(chalk.green(`\t\t\t   PASSWORD IS MATCHED`));
    console.log(chalk.green(`\t\t=========================================\n`));
    while (contiue) {
        const currencies = {
            USD: 1,
            PAK: 277.95,
            SAUDI: 3.75,
            IND: 83.61,
            BANG: 109.69,
            TURK: 32.36,
        };
        let input = await inquirer.prompt([
            {
                name: "from",
                type: "list",
                choices: ["USD", "PAK", "SAUDI", "IND", "BANG", "TURK"],
                message: "CURRENT CURRENCY TO.",
            },
            {
                name: "amount",
                type: "number",
                message: "ENTER YOUR AMOUNT",
            },
            {
                name: "to",
                type: "list",
                choices: ["USD", "PAK", "SAUDI", "IND", "BANG", "TURK"],
                message: "CHANGE CURRENCY FROM.",
            },
        ]);
        let from = currencies[input.from];
        let amount = input.amount;
        let to = currencies[input.to];
        let basedAmount = amount / from;
        let convertCurrency = basedAmount * to;
        let roundValue = Math.round(convertCurrency);
        console.log(chalk.green(`\n\t\tCONVERT AMOUNT IS HERE:`) +
            chalk.blue(`  "${convertCurrency}"\n`) +
            chalk.yellow(`\t\tAFTER ROUNDING OFF YOUR AMOUNT IS THIS:`) +
            chalk.magenta(` "${roundValue}"\n`));
        let wantCotinue = await inquirer.prompt([
            {
                name: "cont",
                type: "confirm",
                message: "DO YOU WANT TO CONTINUE ?",
            },
        ]);
        if (wantCotinue.cont !== contiue) {
            console.log(chalk.green(`\n\t\tTHANKS FOR USING CREATOR BYE ${chalk.yellow(`RAHEEM VEER.`)}\n`));
            break;
        }
    }
}
else if (pass.myPass !== password) {
    console.log(chalk.red(`\t\t=========================================`));
    console.log(chalk.red(`\t\t\t  PASSWORD IS NOT MATCHED`));
    console.log(chalk.red(`\t\t=========================================\n`));
    console.log(chalk.yellow(`\t\t ${chalk.red(`"NOTE":`)}  YOU HAVE ${chalk.green(3)} CHANCES TO ACCESS CURRENCY CONVERTER.
            \t      IF YOU MISSED ALL CHANCES THE PROGRAM WILL BE CLOSED:\n`));
    let chance = 3;
    for (let i = 1; i <= 3; i++) {
        pass = await inquirer.prompt([
            {
                name: "myPass",
                type: "password",
                message: "ENTER THE PASSWORD",
            },
        ]);
        if (i === 1) {
            console.log(chalk.green(`\n\t\tYOU HAVE ${chalk.yellow(chance - 1)} CHANCE TO ACCESS CURRENCY CONVERTER:\n`));
        }
        else if (i === 2) {
            console.log(chalk.green(`\n\t\tYOU HAVE ${chalk.red(chance - 2)} CHANCE TO ACCESS CURRENCY CONVERTER:\n`));
        }
        else if (i === 3) {
            console.log(chalk.red(`\n\t\tYOU DON'T HAVE ANY CHANCE.`));
            console.log(chalk.green(`\t\t\t"GOOD BYE !!!"`));
        }
    }
}

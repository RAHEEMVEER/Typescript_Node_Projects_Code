#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let continueWork = true;
let listArray = [];

while (continueWork) {
  let userOptions = await inquirer.prompt([
    {
      name: "option",
      message: "WHAT YOU WANT TO DO ?",
      type: "list",
      choices: [
        "DISPLAY YOUR LIST:",
        "ADD YOUR LIST:",
        "DELET ANY LIST:",
        "EXIT THE PROGRAM:",
      ],
    },
  ]);

  if (userOptions.option === "ADD YOUR LIST:") {
    let userList = await inquirer.prompt([
      {
        name: "list",
        type: "input",
        message: "WRITE YOUR LIST YOU WANT TO ADD.",
      },
    ]);
    listArray.push(userList.list);
    console.log(
      chalk.yellow(`\n\t\t"${userList.list}".`) +
        chalk.green(`  <= ADDED IN THE LIST:\n`)
    );
  } else if (userOptions.option === "DISPLAY YOUR LIST:") {
    if (listArray >= [0]) {
      console.log(
        chalk.yellow(
          `\n\t\t=======================================================`
        )
      );
      console.log(chalk.yellow(`\t\t\t\t\tTO DO LIST\n`));
      listArray.forEach((val, index) => {
        console.log(chalk.yellow(`\t\t${index}: ${val}`));
      });

      console.log(
        chalk.yellow(
          `\n\t\t=======================================================\n`
        )
      );
    } else if (listArray < [0]) {
      console.log(
        chalk.green(`\n" YOU DON'T HAVE ANY LIST.
        FIRST YOU CAN ADD YOUR LIST THEN BACK TO DISPLAY OPTION: "\n`)
      );
    }
  } else if (userOptions.option === "DELET ANY LIST:") {
    let indexDel = await inquirer.prompt([
      {
        name: "index",
        type: "number",
        message: "ENTER LIST INDEX YOU WANT TO DLETE ?",
      },
    ]);
    if (indexDel.index >= 0 && indexDel.index <= listArray.length) {
      let deletedItem = listArray.splice(indexDel.index, 1);
      console.log(
        chalk.red(`\n\t"${deletedItem}"`) +
          chalk.yellow(`  <= REMOVE FROM LIST\n`)
      );
    } else {
      console.log(chalk.red(`\n\t\t"INDEX NOT FOUND"\n`));
    }
  } else if (userOptions.option === "EXIT THE PROGRAM:") {
    console.log(
      chalk.green(
        `\t=========================================================`
      ) + chalk.yellow(`===============`)
    );
    console.log(
      chalk.green(
        `\t   THANKS FOR USING THIS TODO-LIST PROGRAM CREATOR BY: =>`
      ) + chalk.yellow(` "RAHEEM VEER"`)
    );
    console.log(
      chalk.green(
        `\t=========================================================`
      ) + chalk.yellow(`===============`)
    );
    break;
  }
}

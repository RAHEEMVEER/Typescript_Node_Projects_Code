

import inquirer from "inquirer";
import chalk from "chalk";

async function drivingLicence() {
  let wantToContinue = true; // WHILE LOOP VERIABLE
  // WHILE LOOP
  while (wantToContinue) {
    // INPUT FOR PROGRAMMING CHOICE
    let input = await inquirer.prompt([
      {
        name: "choices",
        type: "list",
        choices: ["LICESNCE OFFICE:", "EXIT PROGRAM:"],
        message: "WHAT DO YOU WANT TO DO?",
      },
    ]);
    // IF STATEMENT
    if (input.choices === "LICESNCE OFFICE:") {
      // USER NAME INQUIRER
      let userName = await inquirer.prompt([
        {
          name: "name",
          type: "string",
          message: "ENTER YOUR NAME.",
        },
      ]);
      //USER EMPTY NAME LOOP
      while (userName.name === "") {
        userName = await inquirer.prompt([
          {
            name: "name",
            type: "string",
            message: "ENTER YOUR NAME.",
          },
        ]);
        if (userName.name === "") {
          console.log(chalk.red.bold.italic(`\n\tENTER YOUR NAME FIRST\n`));
        }
      }
      // USER AGE INQUIRER
      let userAge = await inquirer.prompt([
        {
          name: "age",
          type: "number",
          message: "ENTER YOUR AGE.",
        },
      ]);
      //USER AGE IF STATEMENT
      if (userAge.age >= 18) {
        console.log(
          chalk.green.bold.italic(
            `\n\t${userName.name.toUpperCase()}: YOU ARE ELIGIBLE FOR A DRIVING LICENSE.\n`
          )
        );
      } else {
        console.log(
          chalk.red.bold.italic(
            `\n\tYOU MUST BE 18 OR ABOVE TO GET A LICENCE.\n`
          )
        );
      }
      if (userAge.age >= 18) {
        console.log(
          chalk.yellow.bold.italic(
            `\t   YOU NEED TO CLEAR YOUR DRIVING TEST FIRST.\n\t   YOUR TEST IS BASE ON MCQS HERE'S YOUR 3 MCQS.\n\t   YOU CAN CLEAR ALL MCQS TO GET DRIVING LICENSE.\n`
          )
        );
        // USER MCQS INQUIRER
        let mcqs = await inquirer.prompt([
          {
            name: "mcq1",
            type: "list",
            choices: [
              "PASSPORT:",
              "BIRTH CERTIFICATE:",
              "UTILITY BILL:",
              "CERTIFICATE OF EMPLOYMENT:",
            ],
            message:
              "WHICH OF THE FOLLOWING DOCUMENTS IS TYPICALLY REQUIRED TO OBTAIN A DRIVING LICENSE?",
          },
          {
            name: "mcq2",
            type: "list",
            choices: [
              "16 YEARS OLD:",
              "18 YEARS OLD:",
              "21 YEARS OLD:",
              "25 YEARS OLD:",
            ],
            message:
              "IN MOST COUNTRIES, AT WHAT AGE ARE INDIVIDUALS TYPICALLY ELIGIBLE TO APPLY FOR A LEARNER'S DRIVING LICENSE?",
          },
          {
            name: "mcq3",
            type: "list",
            choices: [
              "WRITTEN TEST:",
              "PHYSICAL FITNESS TEST:",
              "IQ TEST:",
              "BLOOD TEST:",
            ],
            message:
              "WHAT TYPE OF TEST IS COMMONLY REQUIRED TO OBTAIN A DRIVING LICENSE?",
          },
        ]);
        if (
          mcqs.mcq1 === "PASSPORT:" &&
          mcqs.mcq2 === "16 YEARS OLD:" &&
          mcqs.mcq3 === "WRITTEN TEST:"
        ) {
          console.log(
            chalk.green.bold.italic(
              `\n\tYOU CLEAR ALL MCQS CONGRATS YOU GET A DRIVING LICENSE.\n`
            )
          );
        } else {
          console.log(
            chalk.red.bold.italic(
              `\n\tYOU DONT CLEAR ALL MCQS TRY AGAIN LATER\n`
            )
          );
          wantToContinue = false;
        }
      }
    } else if (input.choices === "EXIT PROGRAM:") {
      console.log(
        chalk.yellow.bold.italic(`\n\tTHANKS FOR USING THIS PROGRAM.`)
      );
      console.log(
        chalk.yellow.bold.italic(`  CREATOR BY ==> `) +
          chalk.green.bold.italic(`RAHEEM VEER.\n`)
      );
      break;
    }
  }
}
drivingLicence();

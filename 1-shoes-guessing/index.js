import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green.bold.italic("\n\tHERE IS THE LIST OF COMPANY."));
console.log(["CR7 SHOES", "NIKE SHOES", "JORDAN SHOES", "ADIDAS SHOES"]);
while (true) {
    let userInput = await inquirer.prompt([
        {
            name: "userShoes",
            type: "string",
            message: "GUESS THE RIGHT NAME IN INPUT.",
        },
    ]);
    let compSuggest = ["CR7 SHOES", "NIKE SHOES", "JORDAN SHOES", "ADIDAS SHOES"];
    let randomSuggest = Math.floor(Math.random() * compSuggest.length);
    let compValue = compSuggest[randomSuggest];
    if (userInput.userShoes === compValue) {
        console.log(chalk.green.bold.italic(`\n YOU GUESS RIGHT COMPANY NAME.
    AND COMPUTER CHOOSE IS :${compValue}\n`));
    }
    else {
        console.log(chalk.red.bold.italic(`\n YOU CHOOSE WRONG COMPANY NAME.
    COMPUTER CHOOSE ${compValue}.\n`));
    }
}

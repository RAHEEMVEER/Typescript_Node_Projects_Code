#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const accounts: User[] = [];
const userAccountNumbers: number[] = [];

class Bank {
  accountNumber: number;
  constructor(accNum: number) {
    this.accountNumber = accNum;
  }
}

class UserAccounts extends Bank {
  constructor(accNum: number) {
    super(accNum);
  }

  createUserAccount(addUser: User) {
    accounts.push(addUser);
  }

  removeUserAccount(remUser: User) {
    const userIndex = accounts.findIndex(
      (user) => user.accountNumber === remUser.accountNumber
    );
    if (userIndex !== -1) {
      accounts.splice(userIndex, 1);
      console.log(
        chalk.red.bold.italic(
          `\n\tUSER WITH ACCOUNT NUMBER: ${remUser.accountNumber} HAS BEEN REMOVE FROM BANK\n.`
        )
      );
    } else {
      console.log(
        chalk.red.bold.italic(
          `\n\tUSER WITH ACCOUNT NUMBER: ${remUser.accountNumber} NOT FOUND\n`
        )
      );
    }
  }
}

class User extends Bank {
  name: string;
  age: number;
  cnicNumber: number;
  gender: string;
  balance: number = 0;
  constructor(
    name: string,
    age: number,
    cnicNum: number,
    gender: string,
    accountNumber: number
  ) {
    super(accountNumber);
    this.cnicNumber = cnicNum;
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  depositMoney(money: number) {
    this.balance += money;
  }
  withdrawMoney(money: number) {
    this.balance -= money;
  }
}

async function main() {
  async function addUserBank() {
    let userDetail = await inquirer.prompt([
      {
        name: "Name",
        type: "input",
        message: "ENTER YOUR NAME: ",
      },
      {
        name: "age",
        type: "number",
        message: "ENTER YOUR AGE: ",
      },
      {
        name: "cnic",
        type: "number",
        message: "ENTER YOUR CNIC NUMBER: ",
      },
      {
        name: "gender",
        type: "list",
        choices: ["MALE:", "FEMALE:", "OTHER:"],
        message: "SELECT YOUR GENDER:",
      },
    ]);

    let randomAccountNumber = Math.floor(Math.random() * 107261);
    userAccountNumbers.push(randomAccountNumber);

    const account = new UserAccounts(randomAccountNumber);
    const user = new User(
      userDetail.Name,
      userDetail.age,
      userDetail.cnic,
      userDetail.gender,
      randomAccountNumber
    );
    account.createUserAccount(user);
    console.log(
      chalk.green.bold.italic(`\nTHIS ACCOUNT HAS ADDED ON BANK SUCCESFULLY`)
    );

    console.log(
      chalk.yellow.bold.italic(
        `\n\t\tUSER NAME: ${user.name.toUpperCase()}\n\t\tUSER AGE: ${
          user.age
        }\n\t\tUSER CNIC NUMBER: ${user.cnicNumber}\n\t\tUSER GENDER: ${
          user.gender
        }\n\t\tUSER ACCOUNT NUMBER: ${user.accountNumber}\n`
      )
    );
  }

  async function viewAllAccounts() {
    if (accounts.length === 0) {
      console.log(chalk.red.bold.italic(`\n\tACCOUNTS NOT FOUND IN BANK.\n`));
    } else {
      console.log(
        chalk.yellow.bold.italic(
          `\n\t  TOTAL ACCOUNT IN HBL BANK IS: ${accounts.length}`
        )
      );
      console.log(chalk.magenta.bold.italic(`\nALL PERSON'S ACCOUNT:`));
      for (let details of accounts) {
        console.log(
          chalk.green.bold.italic(
            `\n\t\tPERSON NAME IS: ${details.name.toUpperCase()}\n\t\tTHEIR AGE IS: ${
              details.age
            }\n\t\tTHEIR CNIC NUMBER IS: ${
              details.cnicNumber
            }\n\t\tTHEIR GENDER IS: ${
              details.gender
            }\n\t\tTHEIR ACCOUNT NUMBER IS: ${
              details.accountNumber
            }\n\t\tTHEIR BALANCE IS: ${details.balance}\n`
          )
        );
      }

      let foundSpecificAccount = await inquirer.prompt([
        {
          name: "specific",
          type: "confirm",
          message: "DO YOU WANT TO GET SPECIFIC PERSON ACCOUNT?" + "\n",
        },
      ]);

      if (foundSpecificAccount.specific) {
        let viewUser = await inquirer.prompt([
          {
            name: "view",
            type: "list",
            choices: userAccountNumbers,
            message: "SELECT ACCOUNT NUMBER YOU WANT TO VIEW?",
          },
        ]);
        let foundUser = accounts.find(
          (user) => user.accountNumber === viewUser.view
        );
        if (foundUser) {
          console.log(
            chalk.green.bold.italic(
              `\n\t\tPERSON NAME IS: ${foundUser.name}\n\t\tTHEIR AGE IS: ${foundUser.age}\n\t\tTHEIR CNIC NUMBER IS: ${foundUser.cnicNumber}\n\t\tTHEIR GENDER IS: ${foundUser.gender}\n\t\tTHEIR ACCOUNT NUMBER IS: ${foundUser.accountNumber}\n\t\tTHEIR BALANCE IS: ${foundUser.balance}\n`
            )
          );
        } else {
          console.log(
            chalk.red.bold.italic(
              `\n\t\tUSER ACCOUNT NOT FOUND IN OUR DATA BASE.\n`
            )
          );
        }
      }
    }
  }

  async function removeUserBank() {
    if (accounts.length === 0) {
      console.log(
        chalk.red.bold.italic(
          `\n\tHBL BANK DON'T HAVE ANY PERSON ACCOUNT TO REMOVE.\n`
        )
      );
    } else {
      let remAccountNumber = await inquirer.prompt([
        {
          name: "removeAccount",
          type: "list",
          choices: userAccountNumbers,
          message: `SELECT ACCOUNT NUMBER YOU WANT TO REMOVE FROM BANK?`,
        },
      ]);

      let remUser = accounts.find(
        (user) => user.accountNumber === remAccountNumber.removeAccount
      );
      if (remUser) {
        const account = new UserAccounts(remUser.accountNumber);
        account.removeUserAccount(remUser);
        userAccountNumbers.splice(
          userAccountNumbers.indexOf(remUser.accountNumber),
          1
        );
      }
    }
  }
  async function depositMoney() {
    let addMoney = await inquirer.prompt([
      {
        name: "deposit",
        type: "number",
        message: "HOW MUCH MONEY YOU WANT TO DEPOSIT: ",
      },
    ]);

    if (userAccountNumbers.length === 0) {
      console.log(chalk.red.bold.italic(`\n\t\tACCOUNT NOT FOUND IN BANK.\n`));
    } else {
      let depositFromAccount = await inquirer.prompt([
        {
          name: "accNum",
          type: "list",
          choices: userAccountNumbers,
          message: "SELECT ACCOUNT NUMBER YOU WANT TO DEPOSIT MONEY",
        },
      ]);
      let userAccount = accounts.find(
        (acc) => acc.accountNumber === depositFromAccount.accNum
      );

      if (userAccount) {
        userAccount.depositMoney(addMoney.deposit);
        console.log(
          chalk.green.bold.italic(
            `\n\t"${addMoney.deposit}" HAS BEEN DEPOSITED TO ACCOUNT NUMBER: ${userAccount.accountNumber}.\n\tCURRENT BALANCE IS BALANCE IS: ${userAccount.balance}\n`
          )
        );
      }
    }
  }
  async function withdrawMoney() {
    let withdrawMoney = await inquirer.prompt([
      {
        name: "withdraw",
        type: "number",
        message: "HOW MUCH MONEY YOU WANT WITHDRAW: ",
      },
    ]);

    if (userAccountNumbers.length === 0) {
      console.log(chalk.red.bold.italic(`\n\t\tACCOUNT NOT FOUND IN BANK.\n`));
    } else {
      let withdrawFromAccount = await inquirer.prompt([
        {
          name: "accNum",
          type: "list",
          choices: userAccountNumbers,
          message: "SELECT ACCOUNT NUMBER YOU WANT TO WITHDRAW MONEY?",
        },
      ]);
      let userAccount = accounts.find(
        (acc) => acc.accountNumber === withdrawFromAccount.accNum
      );

      if (userAccount) {
        if (userAccount.balance < withdrawMoney.withdraw) {
          console.log(
            chalk.red.bold.italic(
              `\n\t${userAccount.accountNumber} ACCOUNT NUMBER HAS DON'T ENOUGH BALANCE ACCORDING TO YOUR DEMAND.\n`
            )
          );
        } else {
          userAccount.withdrawMoney(withdrawMoney.withdraw);
          console.log(
            chalk.red.bold.italic(
              `\n\t${withdrawMoney.withdraw}: IS WITHDRAW ON HIS ACCOUNT NUMBER: ${userAccount.accountNumber}\n\tNEW BALANCE IS: ${userAccount.balance}\n`
            )
          );
        }
      }
    }
  }
  let isContinue = true;
  while (isContinue) {
    const options = await inquirer.prompt([
      {
        name: "option",
        type: "list",
        message: "HEY ADMIN WHAT YOU WANT TO DO?",
        choices: [
          "CREATE USER ACCOUNT IN BANK:",
          "VIEW ALL USER ACCOUNTS:",
          "REMOVE USER ACCOUNT FROM BANK:",
          "DEPOSIT MONEY TO BANK:",
          "WITHDRAW MONEY FROM BANK:",
        ],
      },
    ]);

    switch (options.option) {
      case "CREATE USER ACCOUNT IN BANK:":
        await addUserBank();
        break;
      case "VIEW ALL USER ACCOUNTS:":
        await viewAllAccounts();
        break;
      case "REMOVE USER ACCOUNT FROM BANK:":
        await removeUserBank();
        break;
      case "DEPOSIT MONEY TO BANK:":
        await depositMoney();
        break;
      case "WITHDRAW MONEY FROM BANK:":
        await withdrawMoney();
        break;
    }
  }
}
main();

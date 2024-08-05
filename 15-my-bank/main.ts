#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

interface BankAccount {
  accountNumber: number;
  balance: number;
  deposit: (amount: number) => void;
  withdraw: (amount: number) => void;
  checkBalance: () => void;
}
class Bank implements BankAccount {
  accountNumber: number;
  balance: number;
  constructor(accountNumber: number, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amount: number) {
    this.balance += amount;
  }
  withdraw(amount: number) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(
        chalk.green.bold.italic(
          `\n\t${amount} RS: HAS SUCCESSFULLY WITHDRAWN.\t\n`
        )
      );
    } else {
      console.log(
        chalk.red.bold.italic(
          "\n\tYOU DON'T HAVE ENOUGH MONEY TO WITHDRAW.\t\n"
        )
      );
    }
  }
  checkBalance() {
    return this.balance;
  }
}

class Coustomer extends Bank {
  name: string;
  age: number;
  gender: string;
  mobileNum: number;
  constructor(
    name: string,
    age: number,
    gender: string,
    mobileNum: number,
    accountNumber: number,
    balance: number
  ) {
    super(accountNumber, balance);
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.mobileNum = mobileNum;
  }
}
const CoustomerAccounts: Coustomer[] = [
  new Coustomer("RAHEEM", 19, "MALE", 3243499604, 56251, 10000),
  new Coustomer("ESHAL", 21, "FEMALE", 3428291919, 92624, 5000),
  new Coustomer("SHAMSHER", 34, "MALE", 3299281601, 82625, 500),
  new Coustomer("KAFEEL", 18, "MALE", 3528282710, 72514, 800),
  new Coustomer("FAREEHA", 23, "FEMALE", 3927251126, 326215, 600),
];
async function Main() {
  console.log(chalk.yellow.bold.italic(`\n\tWELLCOME TO MY BANK PROGRAM.\t\n`));

  let isContinue: boolean = true;

  while (isContinue) {
    let accountNumber: Coustomer | undefined;

    while (!accountNumber) {
      let AskAccountNumber = await inquirer.prompt([
        {
          name: "accountNum",
          type: "number",
          message: "ENTER YOUR ACCOUNT NUMBER: ",
        },
      ]);

      accountNumber = CoustomerAccounts.find(
        (account) => account.accountNumber === AskAccountNumber.accountNum
      );

      if (!accountNumber) {
        console.log(
          chalk.red.bold.italic("\n\tACCOUNT NOT FOUND. PLEASE TRY AGAIN.\t\n")
        );
      } else {
        console.log(
          chalk.yellow.bold.italic(
            `\n\tWELCOME TO BANK: "${accountNumber.name}"\n`
          )
        );
      }
    }

    let BankAccount = new Bank(
      accountNumber.accountNumber,
      accountNumber.balance
    );

    let options: string[] = [
      "DEPOSIT MONEY: ",
      "WITHDRAW MONEY: ",
      "CHECK BALANCE: ",
      "EXIT: ",
    ];

    while (true) {
      let choices = await inquirer.prompt([
        {
          name: "choice",
          type: "list",
          choices: options,
          message: "WHAT DO YOU WANT TO DO ?",
        },
      ]);

      switch (choices.choice) {
        case "DEPOSIT MONEY: ":
          console.log(chalk.red.bold.italic("NOTE: \n"));
          console.log(
            chalk.red.bold.italic(
              `\t(1):A TAX OF 10 RUPEES WILL BE APPLIED ON DEPOSITS OF 1000 RS OR MORE.`
            )
          );
          console.log(
            chalk.red.bold.italic(
              `\t(2):A TAX OF 100 RUPEES WILL BE APPLIED ON DEPOSITS OF 10000 RS OR MORE.\n`
            )
          );

          let depositMoney = await inquirer.prompt([
            {
              name: "deposit",
              type: "number",
              message: "PLEASE ENTER AMOUNT YOU WANT TO DEPOSIT: ",
            },
          ]);
          if (depositMoney.deposit >= 1000 && depositMoney.deposit < 10000) {
            BankAccount.balance -= 10;
          } else if (depositMoney.deposit >= 10000) {
            BankAccount.balance -= 100;
          }
          BankAccount.deposit(depositMoney.deposit);
          console.log(
            chalk.green.bold.italic(
              `\n\t${depositMoney.deposit} RS: DEPOSIT IN YOUR ACCOUNT.\t\n`
            )
          );
          break;
        case "WITHDRAW MONEY: ":
          let withdrawAmount = await inquirer.prompt([
            {
              name: "withdraw",
              type: "number",
              message: "ENTER AMOUNT YOU WANT TO WITHDRAW: ",
            },
          ]);
          BankAccount.withdraw(withdrawAmount.withdraw);
          break;
        case "CHECK BALANCE: ":
          let balance = BankAccount.checkBalance();
          console.log(
            chalk.magentaBright.bold.italic(
              `\n\tYOUR CURRENT BALANCE IS: ${balance} RS\t\n`
            )
          );
          break;
        case "EXIT: ":
          isContinue = false;
          console.log(
            chalk.green.bold.italic(
              `\n\tTHANKS FOR USING CREATOR BY "RAHEEM".\t\n`
            )
          );
          break;
        default:
          console.log(
            chalk.red.bold.italic("\n\tINVALID CHOICE. PLEASE TRY AGAIN.\t\n")
          );
          break;
      }

      if (!isContinue) break;
    }
  }
}

Main();

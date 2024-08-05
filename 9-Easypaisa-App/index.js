#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function easyApp() {
    let pin = "7865";
    let passwordInput = await inquirer.prompt([
        {
            name: "pass",
            type: "password",
            message: "ENTER EASY PAISA PASSWORD:",
        },
    ]);
    if (passwordInput.pass === pin) {
        console.log(chalk.yellow.italic.bold(`\n\t\t       ==========================`));
        console.log(chalk.green.italic.bold(`\t\t          PASSWORD IS CORRECT:`));
        console.log(chalk.yellow.italic.bold(`\t\t       ==========================`));
        console.log(chalk.green.italic.bold(`\t\t========================================`));
        console.log(chalk.yellow.italic.bold(`\t\t      WELLCOME TO EASY PAISA APP:`));
        console.log(chalk.green.italic.bold(`\t\t========================================\n`));
        let easyPaisaBalance = 100000;
        let continueProgram = true;
        while (continueProgram) {
            //===================================================(FIRST STEP)=========================================================
            let input = await inquirer.prompt({
                name: "choice",
                type: "list",
                choices: [
                    "CHECK-BALANCE:",
                    "ADD-MONEY:",
                    "MONEY-TRANSFER:",
                    "DONATION:",
                    "UTILITY BILLS:",
                    "EXIT:",
                ],
                message: "WHAT YOU WILL SELECT?",
            });
            if (input.choice === "CHECK-BALANCE:") {
                console.log(chalk.green.italic.bold(`\n\t\t=====================================================`));
                console.log(chalk.blue.italic.bold(`\t\t    YOUR CURRENT BALANCE IN EASYPAISA IS: `) + chalk.yellow.italic(`${easyPaisaBalance}`));
                console.log(chalk.green.italic.bold(`\t\t=====================================================\n`));
                //===================================================(SECOND STEP)=========================================================
            }
            else if (input.choice === "ADD-MONEY:") {
                let input2 = await inquirer.prompt([
                    {
                        name: "amount",
                        type: "number",
                        message: "HOW MUCH MONEY YOU WANT TO ADD IN YOUR EASY PAISA ACCOUNT ?",
                    },
                ]);
                console.log(chalk.green.italic.bold(`\n\t\t===============================================`));
                console.log(chalk.yellow.italic.bold(`\t\t   NOW YOUR BALANCE IN EASYPAISA IS: `) + chalk.blue.italic(`${easyPaisaBalance + input2.amount}`));
                console.log(chalk.green.italic.bold(`\t\t===============================================\n`));
                easyPaisaBalance = easyPaisaBalance + input2.amount;
                //===================================================(THIRD STEP)=========================================================
            }
            else if (input.choice === "MONEY-TRANSFER:") {
                let input3 = await inquirer.prompt([
                    {
                        name: "receiver",
                        type: "input",
                        message: "ENTER RECEIVER ACCOUNT NAME ?",
                    },
                ]);
                while (input3.receiver.length < 4) {
                    console.log(chalk.blue.italic.bold(`\n\t\t===============================================`));
                    console.log(chalk.red.italic.bold(`\t\t   PLEASE ENTER RECEIVER ACCOUNT NAME ABOVE: 4`));
                    console.log(chalk.blue.italic.bold(`\t\t===============================================\n`));
                    input3 = await inquirer.prompt([
                        {
                            name: "receiver",
                            type: "input",
                            message: "ENTER RECEIVER ACCOUNT NAME ?",
                        },
                    ]);
                }
                //===================================================(FORTH STEP)=========================================================
                let input4 = await inquirer.prompt([
                    {
                        name: "receiver_account_number",
                        type: "input",
                        message: "ENTER RECEIVER ACCOUNT NUMBER NATIONALTIY CODE +92 ?",
                    },
                ]);
                while (input4.receiver_account_number.length < 11) {
                    console.log(chalk.yellow.italic.bold(`\n\t\t====================================================================`));
                    console.log(chalk.red.italic.bold(`\t\t  ACCORDING TO NATIONALITY +92. THE NUMBER SHOULD BE IN 11 DIGITS.`));
                    console.log(chalk.yellow.italic.bold(`\t\t====================================================================\n`));
                    input4 = await inquirer.prompt([
                        {
                            name: "receiver_account_number",
                            type: "input",
                            message: "ENTER RECEIVER ACCOUNT NUMBER NATIONALTIY CODE +92 ?",
                        },
                    ]);
                }
                //===================================================(FIVTH STEP)=========================================================
                let input5 = await inquirer.prompt([
                    {
                        name: "receiver_amount",
                        type: "number",
                        message: "ENTER AMOUNT YOU WANT TO TRANSFER ?",
                    },
                ]);
                if (input5.receiver_amount > easyPaisaBalance) {
                    console.log(chalk.green.italic.bold(`\n\t\t==========================================================`));
                    console.log(chalk.yellow.italic.bold(`\t\t     YOU HAVE `) +
                        chalk.red.italic.bold(`${input5.receiver_amount - easyPaisaBalance}`) +
                        chalk.yellow.italic.bold(` RS LESS FOR TRANSFER AMOUNT.`));
                    console.log(chalk.green.italic.bold(`\t\t==========================================================\n`));
                }
                else {
                    console.log(`YOU TRANSFERRED ${input5.receiver_amount} TO ${input3.receiver} ACCOUNT NUMBER IS: ${input4.receiver_account_number}`);
                    easyPaisaBalance = easyPaisaBalance - input5.receiver_amount;
                }
                //===================================================(SIXTH STEP)=========================================================
            }
            else if (input.choice === "DONATION:") {
                let input6 = await inquirer.prompt([
                    {
                        name: "donation",
                        type: "list",
                        choices: [
                            "JDC FOUNDATION:",
                            "AL-KHIDMAT FOUNDATION:",
                            "EDHI FOUNDATION:",
                        ],
                        message: "SELECT ORGANIZATION YOU WANT TO DONATE YOUR MONEY:",
                    },
                ]);
                //===================================================(SEVENTH STEP)=========================================================
                if (input6.donation === "JDC FOUNDATION:") {
                    let input6_1 = await inquirer.prompt([
                        {
                            name: "jdc",
                            type: "list",
                            choices: [
                                "FOR ORPHAN CHILDS:",
                                "FOR HUNGRY PEOPLES:",
                                "TO BUILT A FREE HOSPITALS:",
                                "TO BUILT A FREE SCHOOLS:",
                            ],
                            message: "SELECT JDC DONATION TYPES YOU WANT TO DONATE.",
                        },
                    ]);
                    //===================================================(EIGTH STEP)=========================================================
                    if (input6_1.jdc === "FOR ORPHAN CHILDS:") {
                        let orphanChild = await inquirer.prompt({
                            name: "orphan_child",
                            type: "number",
                            message: "HOW MUCH MONEY YOU WANT TO DONATE FOR ORPHAN CHILD ?",
                        });
                        if (orphanChild.orphan_child > easyPaisaBalance) {
                            console.log(chalk.green.italic.bold(`\n\t\t============================================================`));
                            console.log(chalk.blue.italic.bold(`\t\t  YOU HAVE `) +
                                chalk.red.italic.bold(`${orphanChild.orphan_child - easyPaisaBalance}`) +
                                chalk.blue.italic.bold(` RS LESS FOR ORPHAN CHILD DONATION.`));
                            console.log(chalk.green.italic.bold(`\t\t============================================================\n`));
                        }
                        else {
                            console.log(chalk.yellow.italic.bold(`\n\t\t========================================================================`));
                            console.log(chalk.green.italic.bold(`\t\t                         YOU DONATE `) +
                                chalk.red.italic.bold(`${orphanChild.orphan_child}`) +
                                chalk.green.italic.bold(` RS:\n\t\t      THANKS FOR YOUR DONATION TO JDC FOUNDATION FOR ORPHAN CHILD.`));
                            console.log(chalk.yellow.italic.bold(`\t\t========================================================================\n`));
                            easyPaisaBalance = easyPaisaBalance - orphanChild.orphan_child;
                        }
                        //===================================================(NINGTH STEP)=========================================================
                    }
                    else if (input6_1.jdc === "FOR HUNGRY PEOPLES:") {
                        let hungryPeoples = await inquirer.prompt({
                            name: "hungry_peoples",
                            type: "number",
                            message: "HOW MUCH MONEY YOU WANT TO DONATE FOR HUNGRY PEOPLES ?",
                        });
                        if (hungryPeoples.hungry_peoples > easyPaisaBalance) {
                            console.log(chalk.green.italic.bold(`\n\t\t============================================================`));
                            console.log(chalk.blue.italic.bold(`\t\t  YOU HAVE `) +
                                chalk.red.italic.bold(`${hungryPeoples.hungry_peoples - easyPaisaBalance}`) +
                                chalk.blue.italic.bold(` RS LESS FOR HUNGRY PEOPLES DONATION.`));
                            console.log(chalk.green.italic.bold(`\t\t============================================================\n`));
                        }
                        else {
                            console.log(chalk.yellow.italic.bold(`\n\t\t========================================================================`));
                            console.log(chalk.green.italic.bold(`\t\t                         YOU DONATE `) +
                                chalk.red.italic.bold(`${hungryPeoples.hungry_peoples}`) +
                                chalk.green.italic.bold(` RS:\n\t\t      THANKS FOR YOUR DONATION TO JDC FOUNDATION FOR HUNGRY PEOPLES.`));
                            console.log(chalk.yellow.italic.bold(`\t\t========================================================================\n`));
                            easyPaisaBalance =
                                easyPaisaBalance - hungryPeoples.hungry_peoples;
                        }
                        //   //===================================================(TENTH STEP)=========================================================
                    }
                    else if (input6_1.jdc === "TO BUILT A FREE HOSPITALS:") {
                        let builtHospital = await inquirer.prompt({
                            name: "hospitals",
                            type: "number",
                            message: "HOW MUCH MONEY YOU WANT TO DONATE TO BUILT FREE HOSPITALS ?",
                        });
                        if (builtHospital.hospitals > easyPaisaBalance) {
                            console.log(chalk.green.italic.bold(`\n\t\t============================================================`));
                            console.log(chalk.blue.italic.bold(`\t\t  YOU HAVE `) +
                                chalk.red.italic.bold(`${builtHospital.hospitals - easyPaisaBalance}`) +
                                chalk.blue.italic.bold(` RS LESS TO BUILT FREE HOSPITAL DONATION.`));
                            console.log(chalk.green.italic.bold(`\t\t============================================================\n`));
                        }
                        else {
                            console.log(chalk.yellow.italic.bold(`\n\t\t========================================================================`));
                            console.log(chalk.green.italic.bold(`\t\t                         YOU DONATE `) +
                                chalk.red.italic.bold(`${builtHospital.hospitals}`) +
                                chalk.green.italic.bold(` RS:\n\t\t      THANKS FOR YOUR DONATION TO JDC FOUNDATION FOR HOSPITALS.`));
                            console.log(chalk.yellow.italic.bold(`\t\t========================================================================\n`));
                            easyPaisaBalance = easyPaisaBalance - builtHospital.hospitals;
                        }
                        //===================================================(ELEVENTH STEP)=========================================================
                    }
                    else if (input6_1.jdc === "TO BUILT A FREE SCHOOLS:") {
                        let builtSchool = await inquirer.prompt({
                            name: "schools",
                            type: "number",
                            message: "HOW MUCH MONEY YOU WANT TO DONATE TO BUILT FREE SCHOOLS ?",
                        });
                        if (builtSchool.schools > easyPaisaBalance) {
                            console.log(chalk.green.italic.bold(`\n\t\t============================================================`));
                            console.log(chalk.blue.italic.bold(`\t\t  YOU HAVE `) +
                                chalk.red.italic.bold(`${builtSchool.schools - easyPaisaBalance}`) +
                                chalk.blue.italic.bold(` RS LESS TO BUILT FREE SCHOOLS DONATION.`));
                            console.log(chalk.green.italic.bold(`\t\t============================================================\n`));
                        }
                        else {
                            console.log(chalk.yellow.italic.bold(`\n\t\t========================================================================`));
                            console.log(chalk.green.italic.bold(`\t\t                         YOU DONATE `) +
                                chalk.red.italic.bold(`${builtSchool.schools}`) +
                                chalk.green.italic.bold(` RS:\n\t\t      THANKS FOR YOUR DONATION TO JDC FOUNDATION FOR SCHOOLS.`));
                            console.log(chalk.yellow.italic.bold(`\t\t========================================================================\n`));
                            easyPaisaBalance = easyPaisaBalance - builtSchool.schools;
                        }
                    }
                    //===================================================(TWELTH STEP)=========================================================
                }
                else if (input6.donation === "AL-KHIDMAT FOUNDATION:") {
                    let alKhidmat = await inquirer.prompt([
                        {
                            name: "service",
                            type: "list",
                            choices: [
                                "IT SERVICES:",
                                "AIDS OR FOODS FOR GAZA:",
                                "HELP POOR PEOPLES:",
                            ],
                            message: "SELECT FOR AL-KHIDMAT DONATION TYPES YOU WANT TO DONATE.",
                        },
                    ]);
                    //===================================================(THIRTENTH STEP)=========================================================
                    if (alKhidmat.service === "IT SERVICES:") {
                        let itFund = await inquirer.prompt([
                            {
                                name: "it",
                                type: "number",
                                message: "HOW MUCH MONEY YOU WANT TO DONATE FOR IT EDUCATION.",
                            },
                        ]);
                        if (itFund.it > easyPaisaBalance) {
                            console.log(chalk.green.italic.bold(`\n\t\t============================================================`));
                            console.log(chalk.blue.italic.bold(`\t\t      YOU HAVE `) +
                                chalk.red.italic.bold(`${itFund.it - easyPaisaBalance}`) +
                                chalk.blue.italic.bold(` RS LESS FOR IT  DONATION.`));
                            console.log(chalk.green.italic.bold(`\t\t============================================================\n`));
                        }
                        else {
                            console.log(chalk.yellow.italic.bold(`\n\t\t========================================================================`));
                            console.log(chalk.green.italic.bold(`\t\t                      YOU DONATE `) +
                                chalk.red.italic.bold(`${itFund.it}`) +
                                chalk.green.italic.bold(` RS:\n\t\t   THANKS FOR YOUR DONATION TO AL-KHIDMAT FOUNDATION FOR IT EDUCATION.`));
                            console.log(chalk.yellow.italic.bold(`\t\t========================================================================\n`));
                            easyPaisaBalance = easyPaisaBalance - itFund.it;
                        }
                        //===================================================(FORTENTH STEP)=========================================================
                    }
                    else if (alKhidmat.service === "AIDS OR FOODS FOR GAZA:") {
                        let gazaFund = await inquirer.prompt([
                            {
                                name: "gaza",
                                type: "number",
                                message: "HOW MUCH MONEY YOU WANT TO DONATE FOR PALESTINE GAZA PEOPLES.",
                            },
                        ]);
                        if (gazaFund.gaza > easyPaisaBalance) {
                            console.log(chalk.green.italic.bold(`\n\t\t============================================================`));
                            console.log(chalk.blue.italic.bold(`\t\t        YOU HAVE `) +
                                chalk.red.italic.bold(`${gazaFund.gaza - easyPaisaBalance}`) +
                                chalk.blue.italic.bold(` RS LESS FOR GAZE PEAOPLE HELP.`));
                            console.log(chalk.green.italic.bold(`\t\t============================================================\n`));
                        }
                        else {
                            console.log(chalk.yellow.italic.bold(`\n\t\t========================================================================`));
                            console.log(chalk.green.italic.bold(`\t\t                         YOU DONATE `) +
                                chalk.red.italic.bold(`${gazaFund.gaza}`) +
                                chalk.green.italic.bold(` RS:\n\t\t    THANKS FOR YOUR DONATION TO AL-KHIDMAT FOUNDATION FOR GAZA FUND.`));
                            console.log(chalk.yellow.italic.bold(`\t\t========================================================================\n`));
                            easyPaisaBalance = easyPaisaBalance - gazaFund.gaza;
                        }
                        //===================================================(FIVTENTH STEP)=========================================================
                    }
                    else if (alKhidmat.service === "HELP POOR PEOPLES:") {
                        let poorPeople = await inquirer.prompt([
                            {
                                name: "poorPeop",
                                type: "number",
                                message: "HOW MUCH MONEY YOU WANT TO DONATE FOR POOR PEOPLES.",
                            },
                        ]);
                        if (poorPeople.poorPeop > easyPaisaBalance) {
                            console.log(chalk.green.italic.bold(`\n\t\t============================================================`));
                            console.log(chalk.blue.italic.bold(`\t\t      YOU HAVE `) +
                                chalk.red.italic.bold(`${poorPeople.poorPeop - easyPaisaBalance}`) +
                                chalk.blue.italic.bold(` RS LESS FOR HELP POOR PEOPLE.`));
                            console.log(chalk.green.italic.bold(`\t\t============================================================\n`));
                        }
                        else {
                            console.log(chalk.yellow.italic.bold(`\n\t\t========================================================================`));
                            console.log(chalk.green.italic.bold(`\t\t                     YOU DONATE `) +
                                chalk.red.italic.bold(`${poorPeople.poorPeop}`) +
                                chalk.green.italic.bold(` RS:\n\t\t  THANKS FOR YOUR DONATION TO AL-KHIDMAT FOUNDATION FOR HELP POOR PEOPLE.`));
                            console.log(chalk.yellow.italic.bold(`\t\t========================================================================\n`));
                            easyPaisaBalance = easyPaisaBalance - poorPeople.poorPeop;
                        }
                    }
                    //===================================================(SIXTENTH STEP)=========================================================
                }
                else if (input6.donation === "EDHI FOUNDATION:") {
                    let edhi = await inquirer.prompt([
                        {
                            name: "service",
                            type: "list",
                            choices: [
                                "FUNDS FOR PATIENTS:",
                                "FUNDS FOR AMBULANCES:",
                                "FUNDS FOR OLD AGE HOME:",
                            ],
                            message: "SELECT FOR AL-KHIDMAT DONATION TYPES YOU WANT TO DONATE.",
                        },
                    ]);
                    //===================================================(SEVENTENTH STEP)=========================================================
                    if (edhi.service === "FUNDS FOR PATIENTS:") {
                        let patient = await inquirer.prompt({
                            name: "fund",
                            type: "number",
                            message: "HOW MUCH MONEY YOU WANT TO DONATE FOR PATIENTS?",
                        });
                        if (patient.fund > easyPaisaBalance) {
                            console.log(chalk.green.italic.bold(`\n\t\t============================================================`));
                            console.log(chalk.blue.italic.bold(`\t\t         YOU HAVE `) +
                                chalk.red.italic.bold(`${patient.fund - easyPaisaBalance}`) +
                                chalk.blue.italic.bold(` RS LESS FOR PATIENTS FUND.`));
                            console.log(chalk.green.italic.bold(`\t\t============================================================\n`));
                        }
                        else {
                            console.log(chalk.yellow.italic.bold(`\n\t\t========================================================================`));
                            console.log(chalk.green.italic.bold(`\t\t                      YOU DONATE `) +
                                chalk.red.italic.bold(`${patient.fund}`) +
                                chalk.green.italic.bold(` RS:\n\t\t   THANKS FOR YOUR DONATION TO AL-KHIDMAT FOUNDATION FOR PATIENTS FUND.`));
                            console.log(chalk.yellow.italic.bold(`\t\t========================================================================\n`));
                            easyPaisaBalance = easyPaisaBalance - patient.fund;
                        }
                        //===================================================(EIGHTENTH STEP)=========================================================
                    }
                    else if (edhi.service === "FUNDS FOR AMBULANCES:") {
                        let ambulance = await inquirer.prompt({
                            name: "fund",
                            type: "number",
                            message: "HOW MUCH MONEY YOU WANT TO DONATE FOR FREE AMBULANCE ?",
                        });
                        if (ambulance.fund > easyPaisaBalance) {
                            console.log(chalk.green.italic.bold(`\n\t\t============================================================`));
                            console.log(chalk.blue.italic.bold(`\t\t         YOU HAVE `) +
                                chalk.red.italic.bold(`${ambulance.fund - easyPaisaBalance}`) +
                                chalk.blue.italic.bold(` RS LESS FOR FREE AMBULANCE FUND.`));
                            console.log(chalk.green.italic.bold(`\t\t============================================================\n`));
                        }
                        else {
                            console.log(chalk.yellow.italic.bold(`\n\t\t========================================================================`));
                            console.log(chalk.green.italic.bold(`\t\t                         YOU DONATE `) +
                                chalk.red.italic.bold(`${ambulance.fund}`) +
                                chalk.green.italic.bold(` RS:\n\t\t   THANKS FOR YOUR DONATION TO AL-KHIDMAT FOUNDATION FOR AMBULANCE FUND.`));
                            console.log(chalk.yellow.italic.bold(`\t\t========================================================================\n`));
                            easyPaisaBalance = easyPaisaBalance - ambulance.fund;
                        }
                        //===================================================(NINTENTH STEP)=========================================================
                    }
                    else if (edhi.service === "FUNDS FOR OLD AGE HOME:") {
                        let oldAge = await inquirer.prompt({
                            name: "fund",
                            type: "number",
                            message: "HOW MUCH MONEY YOU WANT TO DONATE FOR OLD AGE HOME?",
                        });
                        if (oldAge.fund > easyPaisaBalance) {
                            console.log(chalk.green.italic.bold(`\n\t\t============================================================`));
                            console.log(chalk.blue.italic.bold(`\t\t           YOU HAVE `) +
                                chalk.red.italic.bold(`${oldAge.fund - easyPaisaBalance}`) +
                                chalk.blue.italic.bold(` RS LESS FOR OLDAGE HOME FUND.`));
                            console.log(chalk.green.italic.bold(`\t\t============================================================\n`));
                        }
                        else {
                            console.log(chalk.yellow.italic.bold(`\n\t\t========================================================================`));
                            console.log(chalk.green.italic.bold(`\t\t                 YOU DONATE `) +
                                chalk.red.italic.bold(`${oldAge.fund}`) +
                                chalk.green.italic.bold(` RS:\n\t\t THANKS FOR YOUR DONATION TO AL-KHIDMAT FOUNDATION FOR OLDAGE HOME FUND.`));
                            console.log(chalk.yellow.italic.bold(`\t\t========================================================================\n`));
                            easyPaisaBalance = easyPaisaBalance - oldAge.fund;
                        }
                    }
                }
                //===================================================(TWENTY STEP)=========================================================
            }
            else if (input.choice === "UTILITY BILLS:") {
                let billsChoice = await inquirer.prompt([
                    {
                        name: "bills",
                        type: "list",
                        choices: [
                            "ELECTRICITY BILL:",
                            "GAS BILL:",
                            "WATER BILL:",
                            "INTERNET BILL:",
                        ],
                        message: "SELECT UTILITY BILLS TYPES:",
                    },
                ]);
                //===================================================(TWENTY ONE STEP)=========================================================
                if (billsChoice.bills === "ELECTRICITY BILL:") {
                    let electricity = await inquirer.prompt([
                        {
                            name: "bill",
                            type: "number",
                            message: "ENTER YOUR ELECTRICITY BILL AMOUNT YOU WANT TO PAY.",
                        },
                    ]);
                    if (electricity.bill > easyPaisaBalance) {
                        console.log(chalk.green.italic.bold(`\n\t\t==================================================`));
                        console.log(chalk.blue.italic.bold(`\t\t   YOU HAVE `) +
                            chalk.red.italic.bold(`${electricity.bill - easyPaisaBalance}`) +
                            chalk.blue.italic.bold(` RS LESS FOR ELECTRICITY BILL.`));
                        console.log(chalk.green.italic.bold(`\t\t==================================================\n`));
                    }
                    else {
                        console.log(chalk.yellow.italic.bold(`\n\t\t=======================================`));
                        console.log(chalk.green.bold.italic(`\t\t     PAYMENT SUCCESFULLY PAID:`));
                        console.log(chalk.yellow.italic.bold(`\t\t=======================================\n`));
                        easyPaisaBalance = easyPaisaBalance - electricity.bill;
                    }
                }
                else if (billsChoice.bills === "GAS BILL:") {
                    let gas = await inquirer.prompt([
                        {
                            name: "bill",
                            type: "number",
                            message: "ENTER YOUR GAS BILL AMOUNT YOU WANT TO PAY.",
                        },
                    ]);
                    if (gas.bill > easyPaisaBalance) {
                        console.log(chalk.green.italic.bold(`\n\t\t==================================================`));
                        console.log(chalk.blue.italic.bold(`\t\t    YOU HAVE `) +
                            chalk.red.italic.bold(`${gas.bill - easyPaisaBalance}`) +
                            chalk.blue.italic.bold(` RS LESS FOR GAS BILL.`));
                        console.log(chalk.green.italic.bold(`\t\t==================================================\n`));
                    }
                    else {
                        console.log(chalk.yellow.italic.bold(`\n\t\t=======================================`));
                        console.log(chalk.green.bold.italic(`\t\t     PAYMENT SUCCESFULLY PAID:`));
                        console.log(chalk.yellow.italic.bold(`\t\t=======================================\n`));
                        easyPaisaBalance = easyPaisaBalance - gas.bill;
                    }
                }
                else if (billsChoice.bills === "WATER BILL:") {
                    let water = await inquirer.prompt([
                        {
                            name: "bill",
                            type: "number",
                            message: "ENTER YOUR WATER BILL AMOUNT YOU WANT TO PAY.",
                        },
                    ]);
                    if (water.bill > easyPaisaBalance) {
                        console.log(chalk.green.italic.bold(`\n\t\t==================================================`));
                        console.log(chalk.blue.italic.bold(`\t\t    YOU HAVE `) +
                            chalk.red.italic.bold(`${water.bill - easyPaisaBalance}`) +
                            chalk.blue.italic.bold(` RS LESS FOR WATER BILL.`));
                        console.log(chalk.green.italic.bold(`\t\t==================================================\n`));
                    }
                    else {
                        console.log(chalk.yellow.italic.bold(`\n\t\t=======================================`));
                        console.log(chalk.green.bold.italic(`\t\t     PAYMENT SUCCESFULLY PAID:`));
                        console.log(chalk.yellow.italic.bold(`\t\t=======================================\n`));
                        easyPaisaBalance = easyPaisaBalance - water.bill;
                    }
                }
                else if (billsChoice.bills === "INTERNET BILL:") {
                    let internet = await inquirer.prompt([
                        {
                            name: "bill",
                            type: "number",
                            message: "ENTER YOUR INTERNET WIFI FEE AMOUNT YOU WANT TO PAY.",
                        },
                    ]);
                    if (internet.bill > easyPaisaBalance) {
                        console.log(chalk.green.italic.bold(`\n\t\t==================================================`));
                        console.log(chalk.blue.italic.bold(`\t\t    YOU HAVE `) +
                            chalk.red.italic.bold(`${internet.bill - easyPaisaBalance}`) +
                            chalk.blue.italic.bold(` RS LESS FOR WATER BILL.`));
                        console.log(chalk.green.italic.bold(`\t\t==================================================\n`));
                    }
                    else {
                        console.log(chalk.yellow.italic.bold(`\n\t\t=======================================`));
                        console.log(chalk.green.bold.italic(`\t\t     PAYMENT SUCCESFULLY PAID:`));
                        console.log(chalk.yellow.italic.bold(`\t\t=======================================\n`));
                        easyPaisaBalance = easyPaisaBalance - internet.bill;
                    }
                }
            }
            else if (input.choice === "EXIT:") {
                console.log(chalk.red.italic.bold(`\n\t\t=============================================`));
                console.log(chalk.green.italic.bold(`\t\t          CREATOR BY "RAHEEM VEER:"`) +
                    chalk.yellow.italic.bold(`\n\t\t      THANKS FOR USING EASY PAISA APP.`));
                console.log(chalk.red.italic.bold(`\t\t=============================================\n`));
                continueProgram = false;
                break;
            }
        }
    }
    else {
        console.log(chalk.green.italic.bold(`\n\t\t======================================================`));
        console.log(chalk.red.italic.bold(`\t\t  EASYPAISA PASSWORD IS INCORRECT: PLEASE TRY AGAIN!!!`));
        console.log(chalk.green.italic.bold(`\t\t======================================================\n`));
    }
}
easyApp();

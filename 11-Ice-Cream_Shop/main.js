#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function icecreamShop() {
    let items = {
        flavours: ["STRAWBERRY", "CHOCOLATE", "VANILLA", "MANGO"],
        dryFruits: ["BADAM", "KAJU", "PISTA", "KISHMISH"],
        layers: ["CHOCOLATE-LAYER", "STRAWBERRY-LAYER", "MANGO-LAYER"],
        holder: ["CONE", "CUP", "STICK"],
    };
    console.log(chalk.yellow.bold("\n\tDEAR COUSTOMER PLEASE SELECT ICE-CREAM FLAVOUR.\n"));
    items.flavours.forEach((val, index) => {
        console.log(chalk.blue.bold(`${index}`) + chalk.green.bold(`: ${val}`));
    });
    let creamFlavours = await inquirer.prompt([
        {
            name: "flavour",
            type: "number",
            message: "TYPE GIVEN FLAVOUR INDEX NUMBER YOU WANT.",
        },
    ]);
    while (creamFlavours.flavour > items.flavours.length - 1) {
        console.log(chalk.red.bold("\tPLEASE TYPE VALID FLAVOURS ITEM NUMBER.\n"));
        creamFlavours = await inquirer.prompt([
            {
                name: "flavour",
                type: "number",
                message: "TYPE GIVEN FLAVOUR INDEX NUMBER YOU WANT.",
            },
        ]);
    }
    console.log(chalk.yellow.bold("\n\tDEAR COUSTOMER PLEASE SELECT DRY FRUITS.\n"));
    items.dryFruits.forEach((val, index) => {
        console.log(chalk.blue.bold(`${index}`) + chalk.green.bold(`: ${val}`));
    });
    let dry = await inquirer.prompt([
        {
            name: "dry",
            type: "number",
            message: "TYPE GIVEN DRY-FRUITS INDEX NUMBER YOU WANT.",
        },
    ]);
    while (dry.dry > items.dryFruits.length - 1) {
        console.log(chalk.red.bold("\tPLEASE TYPE VALID DRY FRUITS ITEM NUMBER.\n"));
        dry = await inquirer.prompt([
            {
                name: "dry",
                type: "number",
                message: "TYPE GIVEN DRY-FRUITS INDEX NUMBER YOU WANT.",
            },
        ]);
    }
    console.log(chalk.yellow.bold("\n\tDEAR COUSTOMER PLEASE SELECT YOUR FAVORITE LAYER.\n"));
    items.layers.forEach((val, index) => {
        console.log(chalk.blue.bold(`${index}`) + chalk.green.bold(`: ${val}`));
    });
    let layers = await inquirer.prompt([
        {
            name: "layer",
            type: "number",
            message: "TYPE GIVEN LAYER INDEX NUMBER YOU WANT.",
        },
    ]);
    while (layers.layer > items.layers.length - 1) {
        console.log(chalk.red.bold("\tPLEASE TYPE VALID LAYERS ITEM NUMBER.\n"));
        layers = await inquirer.prompt([
            {
                name: "layer",
                type: "number",
                message: "TYPE GIVEN LAYER INDEX NUMBER YOU WANT.",
            },
        ]);
    }
    console.log(chalk.yellow.bold("\n\tDEAR COUSTOMER PLEASE SELECT HOLDER.\n"));
    items.holder.forEach((val, index) => {
        console.log(chalk.blue.bold(`${index}`) + chalk.green.bold(`: ${val}`));
    });
    let holder = await inquirer.prompt([
        {
            name: "hold",
            type: "number",
            message: "TYPE GIVEN HOLDER INDEX NUMBER YOU WANT.",
        },
    ]);
    while (holder.hold > items.holder.length - 1) {
        console.log(chalk.red.bold("\tPLEASE TYPE VALID HOLDER ITEM NUMBER.\n"));
        holder = await inquirer.prompt([
            {
                name: "hold",
                type: "number",
                message: "TYPE GIVEN LAYER INDEX NUMBER YOU WANT.",
            },
        ]);
    }
    let getInput1 = items.flavours[creamFlavours.flavour];
    let getInput2 = items.dryFruits[dry.dry];
    let getInput3 = items.layers[layers.layer];
    let getInput4 = items.holder[holder.hold];
    console.log(chalk.yellow.bold(`\nYOUR GIVEN ORDER IS:`) +
        chalk.green.bold(`\n> ${getInput1} <\n> ${getInput2} <\n> ${getInput3} <\n`));
    return new Promise((resolve, reject) => {
        console.log(chalk.yellow.bold("THE ICE-CREAM YOU ORDERED IS BEING PREPARING....\n"));
        let isShop = true;
        if (isShop) {
            setTimeout(() => {
                console.log(chalk.blue.bold.italic(`ADD `) +
                    chalk.green.bold.italic(`"${getInput1}"`) +
                    chalk.blue.bold.italic(` FLAVOUR IN ICE-CREAM.`));
                setTimeout(() => {
                    console.log(chalk.blue.bold.italic(`ADD `) +
                        chalk.green.bold.italic(`"${getInput2}"`) +
                        chalk.blue.bold.italic(` IN ICE-CREAM.`));
                    setTimeout(() => {
                        console.log(chalk.blue.bold.italic(`ADD `) +
                            chalk.green.bold.italic(`"${getInput3}"`) +
                            chalk.blue.bold.italic(` IN ICE-CREAM.`));
                        setTimeout(() => {
                            console.log(chalk.blue.bold.italic(`WE ARE PUTTING THE ICE-CREAM INTO `) +
                                chalk.green.bold.italic(`"${getInput4}"`));
                            setTimeout(() => {
                                resolve(chalk.green.bold.italic("\n\tYOUR ICE-CREAM IS READY."));
                            }, 3000);
                        }, 3000);
                    }, 3000);
                }, 3000);
            }, 5000);
        }
        else {
            reject(chalk.red.bold.italic("THE SHOP IS CLOSED YOU WILL ALSO COME TOMORROW."));
        }
    });
}
async function getData() {
    try {
        let data = await icecreamShop();
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}
getData();

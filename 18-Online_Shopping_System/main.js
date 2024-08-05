#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Product class to manage product details
let Items = [];
class Product {
    category;
    id;
    name;
    model;
    description;
    price;
    constructor(category, id, name, model, description, price) {
        this.category = category;
        this.id = id;
        this.name = name;
        this.model = model;
        this.description = description;
        this.price = price;
    }
}
// User class to manage user details and authentication
class User {
    name;
    email;
    password;
    address;
    phoneNumber;
    constructor(name, email, password, address, phoneNumber) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
}
// Cart class to manage shopping cart operations
class Cart {
    userEmail;
    userName;
    products = [];
    totalPrice = 0;
    constructor(userEmail, userName) {
        this.userEmail = userEmail;
        this.userName = userName;
    }
    addToCart(productId, price) {
        this.products.push({ productId, price });
        this.totalPrice += price;
        console.log(chalk.green.bold.italic(`\n\tPRODUCT WITH ID ${productId} ADDED TO CART.\n`));
    }
    viewCart() {
        if (this.products.length === 0) {
            console.log(chalk.red.bold.italic(`\n\tYOUR CART IS EMPTY.😫\n`));
        }
        else {
            console.log(chalk.yellow.bold.italic(`\n\tCART CONTENTS:\n`));
            this.products.forEach((p) => {
                const product = Items.find((item) => item.id === p.productId);
                if (product) {
                    console.log(chalk.green.bold.italic(`\tPRODUCT ID: ${p.productId}, NAME: ${product.name}, PRICE: ${product.price}`));
                }
            });
            console.log(chalk.magentaBright.bold.italic(`\tTOTAL PRICE: ${this.totalPrice}\n`));
        }
    }
}
await inquirer.prompt([
    {
        name: "login",
        type: "list",
        choices: ["LOGIN."],
        message: "PRESS LOGIN TO ENTER WEBSITE.",
    },
]);
let userEmailPass = await inquirer.prompt([
    {
        name: "email",
        type: "input",
        message: "ENTER YOUR EMAIL",
    },
    {
        name: "pass",
        type: "input",
        message: "ENTER YOUR PASSWORD FOR THE WEBSITE.",
    },
]);
console.log(chalk.yellow.bold.italic("\n\tSIGN IN PROCESS PLEASE WAIT.........."));
setTimeout(() => {
    console.log(chalk.green.bold.italic("\n\tWELLCOME TO PRIME DEALS WEBSITE.\n"));
    async function foo() {
        let cart = new Cart(userEmailPass.email);
        while (true) {
            let optionForUser = await inquirer.prompt([
                {
                    name: "option",
                    type: "list",
                    choices: ["PURCHASE ITEMS", "VIEW CART", "EXIT"],
                    message: "WHAT DO YOU WANT TO DO?",
                },
            ]);
            switch (optionForUser.option) {
                case "PURCHASE ITEMS":
                    await purchasing(cart);
                    break;
                case "VIEW CART":
                    cart.viewCart();
                    break;
                case "EXIT":
                    console.log(chalk.yellow.bold.italic("\n\tBYE BYE.😉\n"));
                    return;
            }
        }
    }
    foo();
    async function purchasing(cart) {
        Items.push(new Product("LAPTOP", 202, "HP", "SPECTRE x360", "VERSATILE, STYLISH, INNOVATIVE", 80000), new Product("LCD", 101, "SAMSUNG", "NU6900", "ULTRA HD RESOLUTION", 52000), new Product("LAPTOP", 201, "DELL", "XPS 15", "HIGH PERFORMANCE, RELIABLE", 52000), new Product("SMART PHONE", 301, "IPHONE", "15 PRO MAX", "PREMIUM DESIGN, PERFORMANCE", 410000), new Product("LAPTOP", 203, "LENOVO", "ThinkPad X1 CARBON", "DURABLE, EFFICIENT, AFFORDABLE", 48000), new Product("SMART PHONE", 302, "SAMSUNG", "S24 ULTRA", "EXCEPTIONAL ZOOM CAPABILITY", 280000), new Product("SMART PHONE", 303, "OPPO", "RENO 10 PRO", "SLEEK, FEATURE-RICH, AFFORDABLE", 120000));
        let isContinue = true;
        while (isContinue) {
            const myList = ["LCD", "LAPTOP", "SMART PHONE"];
            const items = await inquirer.prompt([
                {
                    name: "items",
                    type: "list",
                    choices: myList,
                    message: "WHICH CATEGORY ITEM YOU WANT TO PURCHASE?",
                },
            ]);
            let getCategoryItem = Items.filter((categories) => categories.category === items.items);
            let getCategoryItemString = getCategoryItem
                .map((item) => chalk.green.bold.italic(`\n\tCategory: ${item.category}\n\tID: ${item.id}\n\tName: ${item.name}\n\tModel: ${item.model}\n\tDescription: ${item.description}\n\tPrice: ${item.price}\n`))
                .join("\t\n");
            console.log(getCategoryItemString);
            let askForPurchaseItem = await inquirer.prompt([
                {
                    name: "ask",
                    type: "list",
                    choices: ["PURCHASE ITEM", "SEE MORE ITEMS"],
                    message: "WHAT DO YOU WANT TO DO?",
                },
            ]);
            if (askForPurchaseItem.ask === "PURCHASE ITEM") {
                const productId = await inquirer.prompt([
                    {
                        name: "id",
                        type: "list",
                        choices: getCategoryItem.map((category) => ({
                            name: `${category.name} ${category.model}`,
                            value: category.id,
                        })),
                        message: "SELECT ITEM YOU WANT TO PURCHASE.",
                    },
                ]);
                const selectedProduct = getCategoryItem.find((item) => item.id === productId.id);
                if (selectedProduct) {
                    cart.addToCart(selectedProduct.id, selectedProduct.price);
                }
                let nextStep = await inquirer.prompt([
                    {
                        name: "nextStep",
                        type: "list",
                        choices: ["CONTINUE SHOPPING", "VIEW CART"],
                        message: "WHAT DO YOU WANT TO DO NEXT?",
                    },
                ]);
                if (nextStep.nextStep === "VIEW CART") {
                    cart.viewCart();
                    let buyItems = await inquirer.prompt([
                        {
                            name: "buy",
                            type: "confirm",
                            message: "DO YOU WANT TO PURCHASE YOUR SELECTED ITEM.",
                        },
                    ]);
                    if (buyItems.buy) {
                        let validAmount = false;
                        while (!validAmount) {
                            let money = await inquirer.prompt([
                                {
                                    name: "amount",
                                    type: "number",
                                    message: "PLEASE PAY TOTAL AMOUNT OF YOUR SELECTED ITEM.",
                                },
                            ]);
                            if (money.amount === cart.totalPrice) {
                                validAmount = true;
                                console.log(chalk.green.bold.italic(`\n\t${cart.totalPrice} PAID SUCCESSFULLY`));
                                console.log(chalk.yellow.bold.italic(`\tPLEASE SHARE YOUR DETAILS SO WE CAN SEND YOUR SELECTED ITEMS ONLINE.\n`));
                                let userDetails = await inquirer.prompt([
                                    {
                                        name: "userName",
                                        type: "input",
                                        message: "ENTER YOUR NAME.",
                                    },
                                    {
                                        name: "userAdress",
                                        type: "input",
                                        message: "ENTER YOUR CURRENT ADDRESS.",
                                    },
                                    {
                                        name: "userNum",
                                        type: "input",
                                        message: "ENTER YOUR MOBILE NUMBER.",
                                    },
                                ]);
                                let userData = new User(userDetails.userName, userEmailPass.email, userEmailPass.pass, userDetails.userAdress, userDetails.userNum);
                                console.log(chalk.magentaBright.bold.italic(`\n\tCOUSTOMER NAME: ${userData.name}\n\tCOUSTOMER EMAIL: ${userEmailPass.email + "@gmail.com"}\n\tCOUSTOMER ADDRESS: ${userData.address}\n\tCOUSTOMER PHONE NUMBER: ${userData.phoneNumber}`));
                                console.log(chalk.green.bold.italic("\n\tTHANKS FOR SHOPPING SEE YOU IN NEXT TIME."));
                                console.log(chalk.green.bold.italic(`\tYOUR ORDER WILL BE DELIVERED TO YOU WITH IN 3 DAYS.\n`));
                                process.exit();
                            }
                            else {
                                console.log(chalk.red.bold.italic(`\n\tPLEASE PAY THE VALID AMOUNT.\n`));
                            }
                        }
                    }
                }
            }
            else {
                continue;
            }
        }
    }
}, 5000);

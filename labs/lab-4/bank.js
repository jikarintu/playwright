const readline = require('readline-sync');

const bankAccount1 = {
    accountNumber: '11111',
    rountingNumber: '001',
    balance: 1000
};

const bankAccount2 = JSON.parse(JSON.stringify(bankAccount1));
bankAccount2.accountNumber = '77777';

const bankAccounts = [bankAccount1, bankAccount2];
bankApp();

function bankApp() {
    let isInteracting = true;
    while (isInteracting) {
        printTheAppMenu();
        const userOption = getUserOption();

        switch (userOption) {
            case 1:
                const foundBankAccount = findBankAccount();
                if (foundBankAccount.accountNumber) {
                    const { accountNumber, balance } = foundBankAccount;
                    console.log(`accountNumber: ${accountNumber}, balance: ${balance}`);
                } else {
                    console.log('Account not found');
                }
                break;
            case 2:
                updateBalance();
                break;
            case 0:
                isInteracting = false;
                break;
            default:
                console.log('Wrong option\n');
                break;
        }
        console.log('Exit the program');
    }
}

// Support function
function printTheAppMenu() {
    console.log(`
=== Banking application===
1. Find an account
2. Update balance
0. Exit the program`);

}

function getUserOption() {
    return Number(readline.question('Please select an option: '));
}

function findBankAccount() {
    let foundBankAccount = {};
    const inputAccountNumber = readline.question('Please enter account number: ');
    for (const bankAccount of bankAccounts) {
        if (bankAccount.accountNumber === inputAccountNumber) {
            foundBankAccount = bankAccount;
            break;
        }
    }
    return foundBankAccount;
}


function updateBalance() {
    const MAX_ALLOWED_ATTEMP = 3;
    let attemps = 0;
    do {
        const foundBankAccount = findBankAccount();
        const isNotFound = foundBankAccount.accountNumber === undefined;
        if (isNotFound) {
            console.log(`Attemp time: ${attemps + 1}`);

            attemps++
        } else {
            const { balance } = foundBankAccount;
            console.log(`Your balance is : ${balance}`);
            const expectedWithdrawMoney = Number(readline.question('Please input withdraw amount: '));
            if (expectedWithdrawMoney > balance) {
                console.log('Insufficient balance!');

            } else {
                console.log('Succeed!');
                foundBankAccount.balance = balance - expectedWithdrawMoney;
                attemps = MAX_ALLOWED_ATTEMP;
            }
        }
    } while (attemps < MAX_ALLOWED_ATTEMP)
}
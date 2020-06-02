// readline is a nodejs built in module
import readline from "readline"
// chalk is a third party module, installed via npm install chalk
import chalk from "chalk"

const rl = readline.createInterface({
    // read from user input
    input: process.stdin,
    // write to console
    output: process.stdout
});

// prompt user
rl.question(chalk.yellow("Erste Zahl: "), input1 => {
    const zahl1 = Number(input1)

    rl.question(chalk.yellow("Zweite Zahl: "), input2 => {
        const zahl2 = Number(input2)

        rl.question(chalk.yellow("Operator: "), op => {
            switch(op){
                case "+": 
                    console.log(chalk.green(zahl1 + zahl2))
                    break
                case "*":
                    console.log(chalk.green(zahl1 * zahl2))
                break
                default:
                    console.log(chalk.red("Ungültige Eingabe"))
            }

            // quit input stream
            rl.close()
        })
    })
})

// handle CTRL + C
rl.on("close", () => {
    // \n ist ein Zeilenumbruch
    console.log(chalk.grey("\nSchade, du hast wohl zu wenig Geduld heute!"))
    // quit process with success (0)
    process.exit(0)
})
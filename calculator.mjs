// readline is a nodejs built in module
import readline from "readline"

const rl = readline.createInterface({
    // read from user input
    input: process.stdin,
    // write to console
    output: process.stdout
});

// prompt user
rl.question("Erste Zahl: ", input1 => {
    const zahl1 = Number(input1)

    rl.question("Zweite Zahl: ", input2 => {
        const zahl2 = Number(input2)

        rl.question("Operator: ", op => {
            switch(op){
                case "+": 
                    console.log(zahl1 + zahl2)
                    break
                case "*":
                    console.log(zahl1 * zahl2)
                break
                default:
                    console.log("Ungültige Eingabe")
            }

            // quit input stream
            rl.close()
        })
    })
})

// handle CTRL + C
rl.on("close", () => {
    // quit process with success (0)
    process.exit(0)
})
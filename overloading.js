function display(value) {
    if (typeof value === "string") {
        console.log(`String: ${value}`);
    } else if (typeof value === "number") {
        console.log(`Number: ${value}`);
    } else {
        console.log("Unsupported type");
    }
}

display("Hello"); // Output: String: Hello
display(42);
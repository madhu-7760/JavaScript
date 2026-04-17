
function add() {
    const a = 4;
    const b = 5;
    const c = a + b;

    document.write(`The output is ${c}`);
}

add();

function greet(name){
    return `Hello, ${name}!`;

}
console.log(greet("Alice"));
console.log(greet("Bob"));

function add() {
    document.getElementById("demo").innerHTML = "Hello World";
}

add();
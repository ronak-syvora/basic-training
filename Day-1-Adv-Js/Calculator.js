function Calculator(){
    this.a = 0;
    this.b = 0;

    this.read = function(){
        this.a = Number(prompt("Enter first number: "));
        this.b = Number(prompt("Enter second number: "));
    };

    this.sum = function(){
        return this.a + this.b;
    };
    this.mul = function(){
        return this.a * this.b;
    };
}

const calc = new Calculator();
calc.read();
console.log(calc.sum());
console.log(calc.mul()); 


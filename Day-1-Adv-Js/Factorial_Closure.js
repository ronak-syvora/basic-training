const myFunction = () => {
    let num = 5;
    const childFunction = () => {
        let fact = 1;
       for(let i = 1; i <= num; i++){
        fact = fact * i;
       }
       console.log(`Your factorial is: ${fact}`);   
    }
    return childFunction;
}
const factorialFunction = myFunction();
factorialFunction();

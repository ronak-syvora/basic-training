let str = "Ronak";
let char = str.charAt(0);
if(char>="A" && char<="Z"){
    console.log("UpperCase");
}
else{
    console.log("LowerCase");   
    str.charAt(0).toUpperCase();
}
console.log(str);
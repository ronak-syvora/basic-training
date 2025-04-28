const deepCopy = (obj) =>{
    let copy = {}
    for(key in obj){
        if(obj[key] === "object"){
            copy[key] = deepCopy(obj[key])
        }
        else{
            copy[key] = obj[key]
        }
    }
    return copy;
}

const student = {
    name: "Ronak",
    course: {
        cname: "MCA",
        section: "Integrated"
    },
    greet: function(){
        console.log("Hello");
    }
}

let copy = deepCopy(student)
console.log(copy);

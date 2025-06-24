const container2 = document.querySelectorAll(".container2 div");
let Pname = document.querySelector("#Pname");
let Pnum = document.querySelector("#Pnum");
let btn = document.querySelector(".btn");
let inP = document.querySelector("#inpuNa");
let inPN = document.querySelector("#inpuNu");


class Person {
    constructor(name, num) {
        console.log("This is constractor");
        this.name = name;
        this.num = num;
    }

    printP() {
        console.log("Your name is ",this.name, "Your num is",this.num);
        // Pname.innerText = this.name;
        // Pnum.innerText = this.num;
    }
};

class Child extends Person {
    constructor(name, num) {
        super(name, num);
        super.printP();
    }
    printC() {
        super.printP();
    }
};

btn.addEventListener("click", (evt) => {
    evt.preventDefault();

    let x = new Child(inP.value, inPN.value);
    
    let newdiv = document.createElement("div");
    newdiv.innerText = x.name;
    newdiv.value = x.name;
    Pname.append(newdiv);
    
    let newdiv2 = document.createElement("div");
    newdiv2.innerText = x.num;
    newdiv2.value = x.num;
    Pnum.append(newdiv2);

    inP.value = "";
    inPN.value = "";
});


import Dell from './dell.js';

// // Class
// class Computer{
//     constructor(name){
//         this.name = name;
//     }
//     run(){
//         console.log("I am writing the code");
//     }
// }



// Inheritance
// class Dell extends Computer{
//     constructor(name, company){
//         super(name);
//         this.company = company;
//     }
//     login(){
//         console.log("My laptop's company is " + this.company);
//     }
// }

const myLaptop = new Dell("Me", "Dell");  // Object
myLaptop.run();
myLaptop.login();
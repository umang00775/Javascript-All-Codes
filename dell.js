
import {Computer} from './computer.js';

class Dell extends Computer{
    constructor(name, company){
        super(name);
        this.company = company;
    }
    login(){
        console.log("My laptop's company is " + this.company);
    }
}

export default Dell; //Another way to export
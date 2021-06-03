import { LightningElement } from 'lwc';

export default class GettersDemo extends LightningElement {
    Names=["Rakesh","Kumar"]
    Num1=10;
    num2=20;

    //Explessions are not Allowed in the LWC Template
    //Using values like this need to be called Whenever the Names list is Updated 
    //Name=Names[0];
    get Name(){
        return this.Names[0].toUpperCase()+" "+this.Names[1].toUpperCase();
    }
    get mul(){
        return this.Num1*this.num2;
    }
}
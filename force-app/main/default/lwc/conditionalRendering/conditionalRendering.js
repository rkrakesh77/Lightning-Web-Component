import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isVisible=false
    handleClick(){
        this.isVisible=true
    }
    name='rakesh';
    changeHandler(event){
        this.name=event.target.value;
        
    }
    get getterMethod(){
        
        return this.name=='hello'
    }
}
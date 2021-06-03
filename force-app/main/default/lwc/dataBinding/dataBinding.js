import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    WrittenText="Nothing";
    ChangeData(event){
        this.WrittenText=event.target.value;
    }
}
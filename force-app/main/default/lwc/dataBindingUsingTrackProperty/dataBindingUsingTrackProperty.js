import { LightningElement ,track} from 'lwc';

export default class DataBindingUsingTrackProperty extends LightningElement {
    //One way to track the Properties of the Object
    @track Address={
        City:"Patna",
        State:"Bihar",
        Country:"India"
    };
    ChangeData(event){
        this.Address.City=event.target.value;
        //Second way to track without using @track on Address
        //this.Address={...this.Address,"City":event.target.value}
    }
}
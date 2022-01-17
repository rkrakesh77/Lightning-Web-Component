import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email';

export default class ContactCreator extends LightningElement {
    ObjectApiName= CONTACT_OBJECT;
    fields=[FirstName,LastName,Email];
    handleSuccess(event){
        const ToastEvent=new ShowToastEvent({
            title:'Contact Created',
            message:'Contact Created'+ event.detail.id,
            variant:'success'
        });
        this.dispatchEvent(ToastEvent);
    }

}
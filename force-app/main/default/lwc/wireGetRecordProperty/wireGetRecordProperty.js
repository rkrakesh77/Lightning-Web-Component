import { LightningElement, api, wire } from 'lwc';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class WireGetRecordProperty extends LightningElement {
    @api recordId;
    @wire(getRecord, { recordId: '$recordId', fields: [ACCOUNT_NAME_FIELD, INDUSTRY_FIELD] })
    account;
    handle() {
        console.log(this.account.data);
        //alert(getFieldValue(this.account.data,INDUSTRY_FIELD))
        alert(this.recordId);
    }
}
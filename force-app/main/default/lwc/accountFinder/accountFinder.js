import { LightningElement, wire } from 'lwc';
import queryAccountsByRevenue from '@salesforce/apex/AccountListControllerLwc.queryAccountsByRevenue';

export default class AccountFinder extends LightningElement {
    AnnualRevenue=null;
    handlechange(event){
        this.AnnualRevenue=event.detail.value;
    }
    reset(){
        this.AnnualRevenue=null;
    }
    @wire(queryAccountsByRevenue,{annualRevenue: '$AnnualRevenue'})
    accounts;
}
import { LightningElement, wire } from 'lwc';
import getLeadList from '@salesforce/apex/listaContasController.getLeadList';

export default class ApexWireMethodToProperty extends LightningElement {
    @wire(getLeadList) leads;
}
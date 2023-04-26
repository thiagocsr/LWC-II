import { LightningElement, api } from 'lwc';

export default class Retornalead extends LightningElement {

    @api ide;
    @api nome;
    @api cpf;
    @api phone;
    @api email;
    @api status;

}
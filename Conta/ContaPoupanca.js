import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(saldoInicial,cliente,agencia){
        super('poupanca',saldoInicial,cliente,agencia);
    }
    sacar(){
        const taxa=1.02;
       return this._sacar(valor,taxa);
    }
}
import { Conta } from "./Conta.js";

//Uma Classe
export class ContaCorrente extends Conta {
    static numeroDeContas=0;
        //Método construtor
        constructor(cliente,agencia){
           //contador de contas
           super('corrente',0,cliente,agencia);
           //contador de contas
            ContaCorrente.numeroDeContas+=1;
         }
         //sobreescrevendo o comportamento de sacar
         sacar(valor){
            let taxa = 1.1;
            return this._sacar(valor,taxa);
        }
    }
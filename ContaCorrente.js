import { cliente } from "./Cliente.js";

//Uma Classe
export class ContaCorrente {
    agencia;
    _cliente;

    set cliente(novoValor){
        if (novoValor instanceof cliente) {
            this._cliente = novoValor;
        }
      
    }
    get cliente(){
        return this.cliente;
    }
    
    _saldo=0;
    get saldo(){
        return this.saldo;
    }
    
    //Um método  
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;

        } 
    }
      //Um método    
        depositar(valor){
            if(valor <= 0){
                return;           
        }
            this._saldo += valor;  
    }
    //Um método
     transferir(valor,conta){
        const valorSacado=this.sacar(valor);
        conta.depositar(valorSacado);

     }
}
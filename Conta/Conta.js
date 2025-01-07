
//classe abstrata
export class Conta{
    constructor(tipo,saldoInicial, cliente, agencia) {
       if(this.constructor==Conta){
        throw new Error ("Você não deveria instanciar um objeto do tipo conta Diretamente");
       }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        this._tipo=tipo;
    }
    //metodo abstrado
    sacar(valor) {
        throw new Error('O Metodo Sacar da Conta é abstrato')
    }
    _sacar(valor,taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor) {
        if (valor <= 100) {
            return;
        }
        this._saldo += valor;
    }

    tranferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}
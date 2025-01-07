//Uma classe
export class cliente {
    //metodo construtor
    constructor(nome,cpf,senha){
        this.nome=nome;
        this._cpf = cpf;
        this._senha=senha;
    }
    autenticar(){
        return true;
    }
       get cpf(){
       return this._cpf;
    }
    autenticar(){
        return true;
    }
}
import {cliente} from "./Cliente.js";
import{ContaCorrente}from "./ContaCorrente.js"
//Um objeto
const cliente1= new cliente()
 cliente1.nome= "Rogerio"
 cliente1.cpf=12356

//Um objeto
 const contaCorrente1 = new ContaCorrente();
 contaCorrente1.agencia=1001;
 contaCorrente1.depositar(500);
 contaCorrente1.cliente= cliente1;


 const contaCorrente2 = new ContaCorrente();
 contaCorrente2.agencia=1500;
 contaCorrente2.depositar(1000);
 contaCorrente2.sacar(200);
 contaCorrente2.cliente="Paulo";
 contaCorrente2.transferir(300,contaCorrente1);
 console.log(contaCorrente2,contaCorrente1);


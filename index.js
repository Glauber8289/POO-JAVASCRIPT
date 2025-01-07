import {cliente} from "./Cliente.js";
import { SistemaAutenticacao } from "./SistemadeAutenticacao.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";

const diretor =  new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente =  new Gerente("Ricardo",  5000, 12378945601);
gerente.cadastrarSenha("123");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");

console.log(gerenteEstaLogado, diretorEstaLogado);



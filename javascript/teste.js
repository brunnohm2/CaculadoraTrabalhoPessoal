import Calculadora from './calculadora.js';
class Tabela extends Calculadora{
    constructor(){
        super()
    }
    criarElemento(nome){
        let elemento = document.createElement(nome)
        return elemento
    }
    addElementoFilho(elementoFilho){
    }
}
let teste = new Tabela


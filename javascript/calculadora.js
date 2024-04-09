import Utils from "./utilities.js"
export default class Calculadora{
    constructor(){
        this._producao = 1654
        this._linhaValor = 17.5
        this._tempoOperacional = 8.04
        this._taxaDeOperacao = 95.49
        this._defeitos = 7
        this._tempoDeOperacao = 8.42
        this._taxaDeDefeitos = 99.58
        this._mediaPorHora = 196.44
        this._tempoDeOperacaoPorPessoa = 16.84
        this._taxaDeOperacao2 = 0
        this._taxaDeDefeitos2 = 0 
        this._mediaPorHora2 = 0
        this._tempoDeOperacaoPorPessoa2 = 0
        this._taxaDeOperacaoF = 0
        this._taxaDeDefeitosF = 0
        this._mediaPorHoraF = 0 
        this._tempoDeOperacaoPorPessoaF = 0
    }
    set producao(value)                 {this._producao         = Number(value)}
    set linhaValor(value)               {this._linhaValor       = Number(value)}
    set tempoOperacional(value)         {this._tempoOperacional = Number(value)}
    set tempoDeOperacao(value)          {this._tempoDeOperacao  = Number(value)}
    set defeitos(value)                 {this._defeitos         = Number(value)}
    set taxaDeOperacao(value)           {this._taxaDeOperacao   = Number(value)}
    set taxaDeDefeitos(value)           {this._taxaDeDefeitos   = Number(value)}
    set mediaPorHora(value)             {this._mediaPorHora     = Number(value)}
    set tempoDeOperacaoPorPessoa(value) {this._tempoDeOperacaoPorPessoa = Number(value)}
    set taxaDeOperacao2(value)          {this._taxaDeOperacao2  = Number(value)}
    set taxaDeDefeitos2(value)          {this._taxaDeDefeitos2  = Number(value)}
    set mediaPorHora2(value)            {this._mediaPorHora2    = Number(value)}
    set tempoDeOperacaoPorPessoa2(value){this._tempoDeOperacaoPorPessoa2 = Number(value)}
    set taxaDeOperacaoF(value)          {this._taxaDeOperacaoF  = Number(value)}
    set taxaDeDefeitosF(value)          {this._taxaDeDefeitosF  = Number(value)}
    set mediaPorHoraF(value)            {this._mediaPorHoraF    = Number(value)}
    set tempoDeOperacaoPorPessoaF(value){this._tempoDeOperacaoPorPessoaF = Number(value)}
    
    get producao()                  {return this._producao}
    get linhaValor()                {return this._linhaValor}
    get tempoOperacional()          {return this._tempoOperacional}
    get tempoDeOperacao()           {return this._tempoDeOperacao}
    get defeitos()                  {return this._defeitos}
    get taxaDeOperacao()            {return this._taxaDeOperacao}
    get taxaDeDefeitos()            {return this._taxaDeDefeitos}
    get mediaPorHora()              {return this._mediaPorHora}
    get tempoDeOperacaoPorPessoa()  {return this._tempoDeOperacaoPorPessoa}
    get taxaDeOperacao2()           {return this._taxaDeOperacao2}
    get taxaDeDefeitos2()           {return this._taxaDeDefeitos2}
    get mediaPorHora2()             {return this._mediaPorHora2}
    get tempoDeOperacaoPorPessoa2() {return this._tempoDeOperacaoPorPessoa2}
    get taxaDeOperacaoF()           {return this._taxaDeOperacaoF}
    get taxaDeDefeitosF()           {return this._taxaDeDefeitosF}
    get mediaPorHoraF()             {return this._mediaPorHoraF}
    get tempoDeOperacaoPorPessoaF() {return this._tempoDeOperacaoPorPessoaF}

    calcTempoOperacional(){this.tempoOperacional = Utils.autoNumDecimal((this.producao*this.linhaValor)/3600)}
    calcTaxaDeOperacao(){this.taxaDeOperacao = Utils.porcentagem(this.tempoOperacional,this.tempoDeOperacao)}
    calcTaxaDeDefeitos(){this.taxaDeDefeitos = Utils.porcentagem(this.producao,(this.producao+this.defeitos))}
    calcMediaPorHora(){this._mediaPorHora = Utils.autoNumDecimal(this.producao/this.tempoDeOperacao)}
    calcTempoDeOperacaoPorPessoa(){
        if(this._linhaValor == 26.5 || this._linhaValor == 20.3 || this._linhaValor == 17.5 || this._linhaValor == 21 ){
            this.tempoDeOperacaoPorPessoa = 2*this.tempoDeOperacao
            return
        }
        this._tempoDeOperacaoPorPessoa = 1*this._tempoDeOperacao
    }
    calcTaxaDeOperacaoF(){this.taxaDeOperacaoF = Utils.media(this.taxaDeOperacao, this.taxaDeOperacao2)}
    calcTaxaDeDefeitosF(){this.taxaDeDefeitosF = Utils.media(this.taxaDeDefeitos, this.taxaDeDefeitos2)}
    calcMediaPorHoraF(){this.mediaPorHoraF = Utils.media(this.mediaPorHora, this.mediaPorHora2)}
    calcTempoDeOperacaoPorPessoaF(){this.tempoDeOperacaoPorPessoaF = Utils.autoNumDecimal(this.tempoDeOperacaoPorPessoa + this.tempoDeOperacaoPorPessoa2)}
    calcOptions(){
        let minutos = 0.25
        let inicio = 4.17
        let max = 40 
        for(let i =0; i< max; i++){
            let valor = calculo1(quantidade.value, multiplicador.value)
            valor = porcentagem(valor, inicio)
            if(valor<=100){
                let option = window.document.createElement('option')
                option.text = `${inicio} (${valor}%)`
                option.value = inicio
                tempo.appendChild(option)
            }
            inicio += minutos
        }
    }
}

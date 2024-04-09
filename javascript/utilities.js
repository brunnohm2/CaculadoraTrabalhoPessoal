export default class Utils{
    /**
     * 
     * @param {*} valor1 Menor Valor
     * @param {*} valor2 Maior Valor
     * @returns Retorna a porcentagem não formatado
     */
    static porcentagem(valor1, valor2){
        valor1 = Number(valor1)
        valor2 = Number(valor2)
        return this.autoNumDecimal((valor1/valor2)*100)
    }
    /**
     * 
     * @param {*} valor1 Primeiro valor
     * @param {*} valor2 Segundo Valor
     * @returns Retorna a média não formatada
     */
    static media(valor1, valor2){
        valor1 = Number(valor1)
        valor2 = Number(valor2)
        return this.autoNumDecimal((valor1+valor2)/2)
    }
    /**
     * Determina as casas decimais de um número
     * @param {*} valor Valor para formatar
     * @returns Retorna o valor formatado
     */
    static autoNumDecimal(valor){
        if(Number.isInteger(valor))return valor.toFixed(0)
        return valor.toFixed(2)
    }
    /**
     * Converte texto para número
     * @param {*} valor Valor a ser convertido 
     * @returns Retorna o valor convertido para número
     */
}
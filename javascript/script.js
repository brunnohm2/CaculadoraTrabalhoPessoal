let quantidade      = window.document.querySelector('input#quantidade')
let tempo           = window.document.querySelector('select#tempo')
let multiplicador   = window.document.querySelector('select#multiplicador')
let descarte        = window.document.querySelector('input#descarte')
let trabalhadores   = window.document.querySelector('select#trabalhadores')

let tabQuantidade           = window.document.querySelector('td#tabQuantidade')
let tabCalc1                = window.document.querySelector('td#tabCalc1')
let tabTempo                = window.document.querySelector('td#tabTempo')
let tabCalc2                = window.document.querySelector('td#tabCalc2')
let tabDescarte             = window.document.querySelector('td#tabDescarte')
let tabDescartePercentual   = window.document.querySelector('td#tabDescartePercentual')
let tabMediaPorHora         = window.document.querySelector('td#tabMediaPorHora')
let tabCalc3                = window.document.querySelector('td#tabCalc3')


function calculo1(a, b){
    a = Number(a)
    b = Number(b)

    return ((a*b)/3600).toFixed(2)
}
function porcentagem(a, b){
    a = Number(a)
    b = Number(b)

    return ((a/b)*100).toFixed(2)
}
function porcentagem2(a, b){
    a = Number(a)
    b = Number(b)

    return ((a/(b+a))*100).toFixed(2)
}
function media(a, b){
    return (a/b).toFixed(2)
}
function gerarOptionTempo(){
    if(!Number(quantidade.value)>0) return
    if(!Number(multiplicador.value) != 0) return

    tempo.innerHTML = ''
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
function dadosTabela(){
    tabQuantidade.innerHTML = quantidade.value
    tabCalc1.innerHTML = calculo1(Number(quantidade.value),Number(multiplicador.value))
    tabTempo.innerHTML = tempo.value
    tabCalc2.innerHTML = porcentagem(Number(tabCalc1.innerHTML), Number(tabTempo.innerHTML))+'%'
    tabDescarte.innerHTML = descarte.value
    tabDescartePercentual.innerHTML = porcentagem2(Number(quantidade.value), Number(descarte.value))+'%'
    tabMediaPorHora.innerHTML = media(Number(quantidade.value), Number(tempo.value))
    tabCalc3.innerHTML = Number(tempo.value)*Number(trabalhadores.value)
}

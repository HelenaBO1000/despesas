const despesaList = []

/**
 * Função construtora de objetos despesa
 * @param {*} desc 
 * @param {*} valor 
 */
const Despesa = function(desc="Não informado"
    , valor=0) {
    this.descricao = desc
    this.valor = valor
}
/**
 * Adiciona uma nova despesa no array Despesas
 */
const criarDespesa = () => {
//1.1 Nova Despesa no array despesas
    const descricao = document.querySelector("#descricao").value
    const valor = parseFloat(document.querySelector("#valor").value)
    const despesaNova = new Despesa(descricao, valor)
    despesaList.push(despesaNova)
}

const carregarLista = () => {
    const lista = document.querySelector("#lista")
    lista.innerHTML = ""
    despesaList.forEach(despesa => {
        const div = document.createElement("div")
        div.classList.add("item")
        // adicionar o texto da descricao e valor
        div.textContent = `${despesa.descricao}
                        - R$${despesa.valor}`
        // adicionar o elemento novo no div lista
        lista.appendChild(div)
    })
}

const gerarEstatisticas = () => {
    console.log(despesaList)
    const totalDeGastos = despesaList.reduce((total, despesa) =>{
        return total + despesa.valor
    }, 0)
    console.log(totalDeGastos)
    const valores = despesaList.map(despesa => despesa.valor)

    const maiorGasto = Math.max(...valores)

    const menorGasto = Math.min(...valores)

    const mediaGasto = (totalDeGastos / despesaList.length).toFixed(2)

    const qtdAcimaCem = valores.filter(item => item > 100).length

    const perc = despesaList.map(percen =>{
        const per = `${((percen.valor) / totalDeGastos) * 100}%`
        return new Despesa(percen.descricao, per)
    })
}

const validarDespesa = () =>{
    const valuu = parseFloat(document.querySelector("#valor").value)
    const correto
    if(valuu >0 && valuu!=NaN && valuu!=null) return correto = 1
    else {return correto = 0}
}

// 1. Ao clicar no btnAdicionar
const btn = document.querySelector("#btnAdicionar")
btn.addEventListener("click", ()=> {
    if(validarDespesa() == 1){
    //criar um objeto despesa e adicionar no array
    criarDespesa()
    //adicionar os elementos da lista no html
    carregarLista()
    //gerar estatísticas
    gerarEstatisticas()}
    else(console.log("Valor Inválido"))
})

/*
1.1 Nova Despesa no array despesas
1.2 Adicionar despesa na lista
1.3 Gerar estatística

 */
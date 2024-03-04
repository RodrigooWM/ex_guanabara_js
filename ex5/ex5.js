let num = document.querySelector('input#add')
let list = document.querySelector('select#lista')
let res = document.querySelector('div#res')
//Análise de dados a partir de um array (logo abaixo)
let valor = []

function isNumber(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
function inList(n,l){
    if(l.indexOf(Number(n)) != -1 ){
        return true
    } else{ 
        return false
    }
}

function adicionar(){
    if(isNumber(num.value) && !inList(num.value, valor)){
        valor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
        //Essa linha abaixo faz a mensagem no final ser apagada ao adicionarmos um novo elemento
        res.innerHTML=''
    }
    else{
        window.alert('O número é incorreto ou já foi adicionado!')
    }
    //o comando abaixo faz o input apagar sozinho após adicioná-lo à lista
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valor.length == 0) {
        window.alert('Adicionar valores antes de finalizar!')
    } else {
        let tot = valor.length
        let maior = valor[0]
        let menor = valor[0]
        let soma = 0
        let media = 0
        for (let pos in valor){
            soma += valor[pos]            
            if (valor[pos] > maior)            
                maior = valor[pos]
            if (valor[pos] < menor ) 
                menor = valor[pos]            
        }
        media = (soma/tot)
        res.innerHTML= ''
        res.innerHTML += `<p>Total de elementos: ${tot}.</p>`
        res.innerHTML += `<p>Maior valor: ${maior}.</p>`
        res.innerHTML += `<p>Menor valor: ${menor}.</p>`
        res.innerHTML += `<p>Soma dos valores: ${soma}.</p>`
        res.innerHTML += `<p>Média: ${media.toFixed([2])}.</p>`
    }
}


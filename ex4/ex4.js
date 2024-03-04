function tabuada(){
    let n1 = window.document.getElementById('t1')
    let resultado = window.document.getElementById('res')
    if(n1.value.length == 0){
        window.alert('dados incorretos')
    }
    
    else{
        let v1 = Number(n1.value)
        let contador = 1
        //A linha abaixo faz com que a mensagem 'digite um número acima...', que está no html, desapareça.
        resultado.innerHTML=''
        while(contador <=10){
            let item = document.createElement('option')
            item.text=`${v1} x ${contador} = ${v1*contador}`
            //Essa linha abaixo só vai ter sentido para outras linguagens de programação
            item.value = `resultado${contador}`
            resultado.appendChild(item)
            contador++

        }
    }
    
}
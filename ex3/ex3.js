function rodar() {
    let inicio = document.getElementById('ini').value
    let final = document.getElementById('fim').value
    let pulo = document.getElementById('pas').value
    let res = document.getElementById('res')
    if (inicio.length == 0 || final == 0 || pulo == 0) {
        window.alert('ERRO NO CODIGO')
    }
    else {
        res.innerHTML = "Contagem: "
        let a = Number(inicio)
        let b = Number(final)
        let c = Number(pulo)
        if (a > b) {
            for (let contador = a; contador >= b; contador -= c) {
                res.innerHTML += ` ${contador} \u{1F911}`
            }
        }
        else {
            //Exemplo feito com as 3 estruturas de repetição:
            /*
            let contador = a
        do {
            contador -= c
            res.innerHTML += ` ${contador} \u{1F911}`
        }
        while (contador>=b)
        res.innerHTML += `\u{1F6A9}`
        }
       
            */

            
            
            for(let contador = a;contador <= b ; contador += c)
            {
                res.innerHTML += ` ${contador} \u{1F970}`
            }
            
            /*
             let contador = a
             while(contador <= b){
                 contador += c
                 res.innerHTML += ` ${contador} `
             }
             */
            /*
            let contador = a
            do {
                contador += c
                res.innerHTML += ` ${contador} \u{1F911}`
            }
            while (contador <= b)
            res.innerHTML += `\u{1F6A9}`
        */
        }
    }

}

function verificador() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value == 0 || Number(fano.value) > ano) {
        window.alert(`Dados incorretos. Tente novamente.`);
    }
    else {
        //é preciso buscar o input radio através do nome, pois só será marcada uma opção (masculino ou feminino)
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        //criando uma img no documento (abaixo)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 4) {
                //bb
                img.setAttribute('src', 'imagem/bbmenino.png')
            }
            else if (idade < 12) {
                //criança
                img.setAttribute('src', 'imagem/criançamenino.png')
            }
            else if (idade < 20) {
                //jovem
                img.setAttribute('src', 'imagem/jovemmenino.png')
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagem/adultomenino.png')
            }
            else {
                //velho carcumido
                img.setAttribute('src', 'imagem/veio.png')
            }
        }

        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 4) {
                //bb
                img.setAttribute('src', 'imagem/bbmenina.png')
            }

            else if (idade < 12) {
                //criança
                img.setAttribute('src', 'imagem/criançamenina.png')
            }
            else if (idade < 20) {
                //jovem
                img.setAttribute('src', 'imagem/jovemmenina.png')
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagem/adultomenina.png')
            }
            else {
                //velho carcumido
                img.setAttribute('src', 'imagem/veia.png')
            }
        }
        //comando abaixo para alterar a posição do texto que irá aparecer no lugar do "res"
        res.style.textAlign = 'center'
        res.innerHTML = `Essa pessoa é ${genero} e tem ${idade} anos de idade <br>`
        res.appendChild(img)
        //após esse último comando, percebemos que o img é filho da div res.
    }
}
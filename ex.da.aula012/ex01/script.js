function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[erro] tente novamente')
    } else {
        
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/bebe-m.jpg')

            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso.jpg')
                
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/bebe-f.jpg')

            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-f.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-f.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosa.jpg')
                
            }
        }
        res.innerHTML = 'Detectamos ' + gênero + ' com ' + idade + ' anos.'
        res.appendChild(img)
    }
}
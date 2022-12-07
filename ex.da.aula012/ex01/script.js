function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
   var hora = data.getHours()
   
    msg.innerHTML = 'Agora são ' + hora + ' horas.'
    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = 'imagens/manhã.jpg'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = 'Bom dia'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#b9846e'
        msg.innerHTML = 'Boa tarde'
    } else {
        // boa noite
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#515151'
        msg.innerHTML = 'Boa noite'
    }
}

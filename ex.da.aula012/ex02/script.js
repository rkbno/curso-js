function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
   var hora = data.getHours()
   
    
    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = 'imagens/manhã.jpg'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = '<h1>Bom dia</h1>'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#b9846e'
        msg.innerHTML = '<h1>Boa tarde</h1>'
    } else {
        // boa noite
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#515151'
        msg.innerHTML = '<h1>Boa noite</h1>'
    }
}

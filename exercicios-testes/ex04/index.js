function verificar () {
    
    var txth = document.querySelector('input#txthora') 
    var res = document.querySelector('div#res')
    var h = txth.value

    res.innerHTML = '<p>Agora são ' + h + ' horas.</p>'
    if (h <= 12) {
        res.innerHTML = 'Bom dia'
    } else if (h <= 18) {
        res.innerHTML = 'Boa tarde'
    } else if (h <= 24) {
        res.innerHTML = 'Boa noite'
    } 
}
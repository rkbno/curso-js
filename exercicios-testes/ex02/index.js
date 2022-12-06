function calcular() {
    var txtv = document.querySelector('input#txtvel')
    var res = document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = '<p>Sua velocidade é de ' + vel + ' Km/h </p>'
    if (vel > 80) {
        res.innerHTML += '<strong>Você foi MULTADO</strong>'
    }
} 


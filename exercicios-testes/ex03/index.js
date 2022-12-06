function consultar (){
    var txtp = document.querySelector('input#txtpais')
    var res = document.querySelector('div#res')
    var p = txtp.value
    res.innerHTML = ' Você reside em ' + p + '.'
    if (p == 'brasil' || p == 'Brasil') {
        res.innerHTML += '<p>Logo você é brasileiro</p>'
    } else { res.innerHTML += '<p>Logo você é estrageiro </p>'
    }
}
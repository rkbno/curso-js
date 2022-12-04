function somar() {
    var ta1 = document.getElementById('txta1')
    var ta2 = document.querySelector('input#txta2')
    var resul = document.getElementById('resul')
    var a1 = Number(ta1.value)
    var a2 = Number(ta2.value)
    var s = a1 + a2
    resul.innerHTML = 'A soma entre ' + a1 + ' e ' + a2 + ' é igual a  ' + s
}



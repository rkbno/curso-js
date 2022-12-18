function verificar() {
    var txti = document.querySelector('input#txtinicio')
    var txtf = document.querySelector('input#txtfim')
    var txtp = document.querySelector('input#txtpasso')
    
    var res = txti + txtf
    res.innerHTML = 'O Valor é' + res
}
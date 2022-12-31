function isNumero(n) {
 if (Number(n) >= 1 && Number(n) <= 100) {
    return true
 } else {
    return false
 }
}

function inLista(n, 1) {
    if (length.indexOf(Number(n)) != -1) {
        return true 
        } else {
            return false
        }
    }



function adicionar() {
    var num = document.querySelector('input#fnum')
    var lista = document.querySelector('select#flista')
    var res = document.querySelector('div#res')
    var valores = []

    if (isNumero(num.value) && !inLista(num.value, valores)) {
        alert('tudo ok!')
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }

}


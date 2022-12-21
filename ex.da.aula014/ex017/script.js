function tabuada() {
    var num = document.querySelector('input#txtn')
    var tab = document.querySelector('input#seltab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = 'n * c'
            tab.appendChild(item)
            c++
        }
    }
   }
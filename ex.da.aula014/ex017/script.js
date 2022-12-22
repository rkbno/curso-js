function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1 ; c <= 10 ; c++) {
            let item = window.document.createElement('option')
            item.text = n + ' x ' + c + ' = ' + n*c
            tab.appendChild(item)
            
        }
        
            
    }
   }
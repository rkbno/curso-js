let valores = [8, 1, 2, 5, 3, 4]
valores.sort()
/*
for ( var pos = 0; pos < valores.length; pos++) {
    console.log('A possição ' + pos+ ' tem o valor ' + valores[pos])
} */

for(let pos in valores) {
    console.log('A posição ' + pos + ' tem o valor ' + valores[pos])
}
function tabuada(){
    let num = document.getElementById('idnum')
    let tab = document.getElementById('idtab')
    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        let n = Number(num.value)
        var c = 0
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('Option') //Criando elemento
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}
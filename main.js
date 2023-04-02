function comparar() {
    let n1 = window.document.querySelector('input#number1')
    let n2 = window.document.querySelector('input#number2')
    let res = window.document.getElementById("res")
    let na = Number(n1.value)
    let nb = Number(n2.value)
    if(nb > na) {
        res.innerHTML = "Parabéns, o valor B é maior que o valor A"
        res.style.background = "green"
    } 
    else {
        res.innerHTML = "O valor A é maior que o valor B, tente novamente"
        res.style.background = "red"
    }
}


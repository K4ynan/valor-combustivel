function calcular() {
    var etanol = Number(document.getElementById('etanol').value)
    var gasolina = Number(document.getElementById('gasolina').value)

    var calculo = etanol / gasolina

    if (calculo < 0.7) {
        document.getElementById('resultado').innerHTML = `<p> Seu resultado deu ${calculo}, Abasteça com Etanol`
    }
    else if (calculo > 0.7) {
        document.getElementById('resultado').innerHTML = `<p>Seu resultado deu ${calculo}, Abasteça com Gasolina`
    }
}
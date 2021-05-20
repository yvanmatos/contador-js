const botaoReset = document.getElementById("reiniciar")
const dias = document.getElementById("dias")
const horas = document.getElementById("horas")
const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos")
const alerta = document.getElementById("alerta")

const estaRodando = false

const tempoRestante = () => {
    let dataUsuario = new Date(JSON.parse(sessionStorage.getItem('data')));
    let dataLocal = dataUsuario.toLocaleDateString('en-US')
    let dataAtual = new Date();

    console.log(dataAtual)
    console.log(dataUsuario)

    if(dataUsuario.getTime() < dataAtual.getTime()) {
        alerta.innerHTML = "Insira uma data futura"
        clearInterval(tempoRestante)
        return
    }

    let diferenca = dataUsuario.getTime() - dataAtual.getTime()

    let diasT = Math.floor((diferenca / 1000 / 60 / 60 / 24))
    let horasT = Math.floor((diferenca / 1000 / 60 / 60) % 24)
    let minutosT = Math.floor((diferenca / 1000 / 60) % 60)
    let segundosT = Math.floor((diferenca / 1000) % 60)


    dias.innerHTML = diasT
    horas.innerHTML = horasT
    minutos.innerHTML = minutosT
    segundos.innerHTML = segundosT

    if (diferenca < 0) {
        clearInterval(tempoRestante)
        
        dias.innerHTML = "00"
        horas.innerHTML = "00"
        minutos.innerHTML = "00"
        segundos.innerHTML = "00"
        alerta.innerHTML = "Reinicie o contador!"
    }
        
}

setInterval(tempoRestante, 1000)


botaoReset.addEventListener('click', () => {
    window.location = "index.html"
})

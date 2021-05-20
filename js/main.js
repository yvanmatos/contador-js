const botaoIniciar = document.getElementById("iniciar")

botaoIniciar.addEventListener('click', () => {
    if(!document.getElementById("data").value) {
        alert("Insira uma data válida")
    } else {
        let data = document.querySelector("#data").value
        let dataBR = data.split('/')

        function trocarData (arr, from, to) {
            arr.splice(to, 0, arr.splice(from, 1)[0])
            return arr
        }

        let dataUS = trocarData(dataBR, 1, 0).join('/')


        let dateStorage = JSON.stringify(new Date(dataUS))
        sessionStorage.setItem('data', dateStorage)
        window.location = "contador.html"
    }
})
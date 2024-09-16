function carro() {
    const modelo = document.getElementById("modelo").value
    const marca = document.getElementById("marca").value


const carro = {

    modelo : modelo,
    marca : marca
}

  localStorage.setItem("carro", JSON.stringify(carro))
}



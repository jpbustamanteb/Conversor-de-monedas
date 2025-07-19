const tasas = {
    COP: {USD: 0.00025, EUR: 0.00021},
    USD: {COP: 4007, EUR: 0.86},
    EUR: {USD: 1.16, COP: 4677.10}
};

document.getElementById("convertir_btn").addEventListener("click", () => {
    const cantidadInput = document.getElementById("cantidad").value.trim();
    const monedaOrigen = document.getElementById("moneda").value;
    const errorDiv = document.getElementById("error");

    const usdInput = document.getElementById("usd");
    const copInput = document.getElementById("cop");
    const eurInput = document.getElementById("eur")

    //Limpiar errores y resultados
    errorDiv.textContent = "";
    usdInput.value = "";
    copInput.value = "";
    eurInput.value = "";

    // Validaciones
    if (cantidadInput === "") {
    errorDiv.textContent = "Por favor ingrese una cantidad.";
    return;
    }

    const cantidad = parseFloat(cantidadInput);

    if (isNaN(cantidad)) {
        errorDiv.textContent = "La cantidad debe ser un número.";
        return;
    }

    if (cantidad < 0) {
        errorDiv.textContent = "La cantidad no puede ser menor a 0.";
        return;
    }

    // Conversión
    const conversion = tasas[monedaOrigen];

    usdInput.value = (cantidad * (conversion["USD"])).toFixed(2);
    eurInput.value = (cantidad * (conversion["EUR"])).toFixed(2);
    copInput.value = (cantidad * (conversion["COP"])).toFixed(2);

    // Mostrar por consola
    console.log("USD:", usdInput.value);
    console.log("EUR:", eurInput.value);
    console.log("COP:", copInput.value);
});
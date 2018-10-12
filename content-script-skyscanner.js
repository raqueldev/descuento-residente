document.querySelectorAll(".price").forEach(price => {
    var residencePrice = (price.innerHTML.replace("€", "").trim()*0.25)+9.20; //Basic Taxes in Spain 9.20

    price.innerHTML = "desde " + residencePrice.toString() + "€ + tasas";
    price.style.color = "#fff"
    price.style.backgroundColor = "#957aa7"
    price.title = "Precio simulado del descuento de residente"
});


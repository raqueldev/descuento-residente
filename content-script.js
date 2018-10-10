console.log('Simulating discount')

function getDiscount(price) {
	return price-(price*0,25)
}

document.querySelectorAll(".price").forEach(price => {
    price.innerHTML = "aprox " + getDiscount(price.innerHTML.replace("€", "").trim()).toString() + "€";
    price.style.color = "#fff"
    price.style.backgroundColor = "#957aa7"
    price.title = "Precio simulado del descuento de residente"
});
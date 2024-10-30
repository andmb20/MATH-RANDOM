function raffle() {
    const minValue = Math.ceil(document.getElementById("min").value)
    const maxValue = Math.floor(document.getElementById("max").value)

    const putValue = document.querySelector("p")

    const raffleValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    putValue.innerHTML = raffleValue;
}

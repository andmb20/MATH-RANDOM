function raffle() {
    const minValue = Math.ceil(document.getElementById("min").value)
    const maxValue = Math.floor(document.getElementById("max").value)

    const putValue = document.querySelector("p")

    if (minValue < 1 || maxValue > 1000) {
        alert("message: Invalid number, please try again!")
    } else {
        const raffleValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

        putValue.innerHTML = raffleValue;
    }

}

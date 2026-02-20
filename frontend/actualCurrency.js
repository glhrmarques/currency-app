const oneCurrency = document.querySelector("#actualCurrency");

async function currentCurrency() {

    const res = await fetch('https://currency-app-backend.onrender.com/currencies/brl');
    const data = await res.json();
    const rate = data.brl.ars;

    const oneCurrency = document.querySelector("#actualCurrency");
    const amount = 1;

    const result = (amount * rate).toLocaleString("pt-br", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 4
    });

    oneCurrency.textContent = `1 BRL = ${result}`;

};

currentCurrency()
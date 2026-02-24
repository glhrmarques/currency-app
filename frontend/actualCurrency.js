async function currentCurrency() {

    const res = await fetch('https://currency-app-backend.onrender.com/currencies/brl');
    const rate = await res.json();

    const oneCurrency = document.querySelector("#actualCurrency");
    const amount = 1;
    window.oneCurrencyRate = rate;

    const result = (amount * rate).toLocaleString("pt-br", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 4
    });

    oneCurrency.textContent = `1 BRL = ${result}`;

};

currentCurrency()
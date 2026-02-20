const oneCurrency = document.querySelector("#actualCurrency");

async function currentCurrency() {

    const res = await fetch('/currencies/brl');
    const data = await res.json();
    const rate = data.brl.ars;

    const oneCurrency = document.querySelector("#actualCurrency");
    const amount = 1;

    const result = amount * rate.toFixed(2);

    oneCurrency.textContent = `1 BRL = ${result}`;

};

currentCurrency()
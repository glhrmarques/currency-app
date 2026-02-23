const ARSamount = document.querySelector("#ARSamount");
const BRLamount = document.querySelector("#BRLamount");
const submitButton = document.querySelector("#submitButton");

let cleaveARS;
cleaveARS = new Cleave('#ARSamount', {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    numeralDecimalMark: ',',
    delimiter: '.',
    numeralDecimalScale: 2,
    onValueChanged: function () {
      if (cleaveARS) convertARS();
    }
});

async function convertARS() {
    const amount = parseFloat(cleaveARS.getRawValue());

    if (!amount || amount <= 0) {
        BRLamount.value = "";
        return;
    }

    try {
        const res = await fetch("https://currency-app-backend.onrender.com/currencies/ars");
        const rate = await res.json();

        const result = amount * rate;

        BRLamount.value = result.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    } catch (error) {
        console.error(error);
    }
}

// BRL to ARS
let cleaveBRL;
cleaveBRL = new Cleave('#BRLamount', {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    numeralDecimalMark: ',',
    delimiter: '.',
    numeralDecimalScale: 2,
    onValueChanged: function () {
        if (cleaveBRL) convertBRL();
    }
});

async function convertBRL() {
  const amount = parseFloat(cleaveBRL.getRawValue());

  if(!amount || amount <= 0) {
    ARSamount.value = "";
    return
  }

  try {

    const res = await fetch('https://currency-app-backend.onrender.com/currencies/brl');
    const rate = await res.json();

    const result = amount * rate; 

    ARSamount.value = result.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

  } catch(error) {
    console.error(error)
  }

};

//button
submitButton.addEventListener("click", async function(e) {
  e.preventDefault();

  try {
    const response = await fetch('/send-value', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ arsSubmit: ARSamount.value })
    });

  } catch(error) {
    console.error('submit button error', error);
  }
});

convertARS();
convertBRL()
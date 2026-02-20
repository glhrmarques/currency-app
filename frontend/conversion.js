const ARSamount = document.querySelector("#ARSamount");
const BRLamount = document.querySelector("#BRLamount");

const cleaveARS = new Cleave('#ARSamount', {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    numeralDecimalMark: ',',
    delimiter: '.',
    numeralDecimalScale: 2,
    onValueChanged: function () {
      convertARS();
    }
});

async function convertARS() {
    const amount = parseFloat(cleaveARS.getRawValue());

    if (!amount || amount <= 0) {
        BRLamount.value = "";
        return;
    }

    try {
        const res = await fetch("/currencies/ars");
        const data = await res.json();
        const rate = data.ars.brl;

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
const cleaveBRL = new Cleave('#BRLamount', {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    numeralDecimalMark: ',',
    delimiter: '.',
    numeralDecimalScale: 2,
    onValueChanged: function () {
        convertBRL();
    }
});

async function convertBRL() {
  const amount = parseFloat(cleaveBRL.getRawValue());

  if(!amount || amount <= 0) {
    ARSamount.value = "";
    return
  }

  try {

    const res = await fetch('/currencies/brl');
    const data = await res.json();
    const rate = data.brl.ars;

    const result = amount * rate; 

    ARSamount.value = result.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

  } catch(error) {
    console.error(error)
  }

};

convertARS();
convertBRL()
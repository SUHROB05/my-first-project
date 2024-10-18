const qobiq = document.querySelector('.premyeralar');
const chapBtn = document.querySelector('.chap-btn');
const ongBtn = document.querySelector('.ong-btn')

let hozirgiIndex = 0;
const kinoHajmi = document.querySelectorAll('.premyera').length;
const kinoOlchami = 315;
const kinolarSoni = 2.5;

function kinoBloklariniCheksizAylantirish() {
    for (let i = 0; i < kinolarSoni; i++) {
        const clone = qobiq.children[i].cloneNode(true);
        qobiq.appendChild(clone);
    }
}

kinoBloklariniCheksizAylantirish();


function ongBtngaHarakat() {
    if (hozirgiIndex >= kinoHajmi) {
        hozirgiIndex = 0;
        qobiq.style.transition = 'none';
        qobiq.style.transform = `translateX(0px)`;
        setTimeout(() => {
            qobiq.style.transition = 'transform 0.7s ease';
            ongBtngaHarakat();
        }, 0);
    } else {
        hozirgiIndex++;
        qobiq.style.transition = 'transform 0.7s ease';
        qobiq.style.transform = `translateX(-${hozirgiIndex * kinoOlchami}px)`;
    }
}

function chapBtnaHarakat() {
    if (hozirgiIndex <= 0) {
        hozirgiIndex = kinoHajmi;
        qobiq.style.transition = 'none';
        qobiq.style.transform = `translateX(-${hozirgiIndex * kinoOlchami}px)`;
        setTimeout(() => {
            qobiq.style.transition = 'transform 0.7s ease';
            chapBtnaHarakat();
        }, 0);
    } else {
        hozirgiIndex--;
        qobiq.style.transform = `translateX(-${hozirgiIndex * kinoOlchami}px)`;
    }
}



ongBtn.addEventListener('click', ongBtngaHarakat);
chapBtn.addEventListener('click', chapBtnaHarakat);
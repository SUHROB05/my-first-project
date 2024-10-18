// Elementlarni tanlab olamiz
const kinoQobiq2boolim = document.querySelector('.kinolar-2boolim');
const kinoQobiq3boolim = document.querySelector('.kinolar-3boolim');
const chapTugma2boolim = document.querySelector('.chap-btn-2boolim');
const ongTugma2boolim = document.querySelector('.ong-btn-2boolim');
const chapTugma3boolim = document.querySelector('.chap-btn-3boolim');
const ongTugma3boolim = document.querySelector('.ong-btn-3boolim');

// Slayder parametrlarini o'rnatamiz
const kinoElementOlchami = 270; // Har bir kino blokining o'lchami
const korsatiladiganKinolarSoni = 5;   // Ko'rsatiladigan kino bloklari soni

// Kino bloklarini klonlash funksiyasi
function kinolarniKlonlash(kinoQobiq) {
    for (let i = 0; i < korsatiladiganKinolarSoni; i++) {
        const klon = kinoQobiq.children[i].cloneNode(true); // Har bir blokni klonlash
        kinoQobiq.appendChild(klon); // Klonni oxiriga qo'shish
    }
}

// Klonlash funksiyasini chaqiramiz
kinolarniKlonlash(kinoQobiq2boolim);
kinolarniKlonlash(kinoQobiq3boolim);

// O'ng tugmani bosganda ishlaydigan funksiya
function onggaSiljitish(kinoQobiq, joriyIndex) {
    if (joriyIndex >= kinoQobiq.children.length - korsatiladiganKinolarSoni) {
        // Agar so'nggi elementga yetib kelsak, boshidan boshlaymiz
        joriyIndex = 0;
        kinoQobiq.style.transition = 'none'; // O'tishsiz
        kinoQobiq.style.transform = `translateX(0px)`; // Boshidan ko'rsatish
        setTimeout(() => {
            kinoQobiq.style.transition = 'transform 0.7s ease'; // O'tishni qayta yoqamiz
            onggaSiljitish(kinoQobiq, joriyIndex); // Slayderni qayta chaqiramiz
        }, 0);
    } else {
        joriyIndex++; // Indeksni oshiramiz
        kinoQobiq.style.transition = 'transform 0.7s ease'; // O'tish animatsiyasi
        kinoQobiq.style.transform = `translateX(-${joriyIndex * kinoElementOlchami}px)`; // Slayderni harakatlantiramiz
    }
    return joriyIndex;
}

// Chap tugmani bosganda ishlaydigan funksiya
function chapgaSiljitish(kinoQobiq, joriyIndex) {
    if (joriyIndex <= 0) {
        // Agar boshiga yetib kelsak, oxiriga o'tamiz
        joriyIndex = kinoQobiq.children.length - korsatiladiganKinolarSoni;
        kinoQobiq.style.transition = 'none'; // O'tishsiz
        kinoQobiq.style.transform = `translateX(-${joriyIndex * kinoElementOlchami}px)`; // Oxirgi slayderni ko'rsatamiz
        setTimeout(() => {
            kinoQobiq.style.transition = 'transform 0.7s ease'; // O'tishni qayta yoqamiz
        }, 0);
    } else {
        joriyIndex--; // Indeksni kamaytiramiz
        kinoQobiq.style.transform = `translateX(-${joriyIndex * kinoElementOlchami}px)`; // Slayderni harakatlantiramiz
    }
    return joriyIndex;
}

// O'ng tugmaga click hodisasini qo'shamiz
let joriyIndex2boolim = 0;
ongTugma2boolim.addEventListener('click', () => {
    joriyIndex2boolim = onggaSiljitish(kinoQobiq2boolim, joriyIndex2boolim);
});

// Chap tugmaga click hodisasini qo'shamiz
chapTugma2boolim.addEventListener('click', () => {
    joriyIndex2boolim = chapgaSiljitish(kinoQobiq2boolim, joriyIndex2boolim);
});

// O'ng tugmaga click hodisasini qo'shamiz
let joriyIndex3boolim = 0;
ongTugma3boolim.addEventListener('click', () => {
    joriyIndex3boolim = onggaSiljitish(kinoQobiq3boolim, joriyIndex3boolim);
});

// Chap tugmaga click hodisasini qo'shamiz
chapTugma3boolim.addEventListener('click', () => {
    joriyIndex3boolim = chapgaSiljitish(kinoQobiq3boolim, joriyIndex3boolim);
});

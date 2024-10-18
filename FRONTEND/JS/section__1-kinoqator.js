const container = document.querySelector('.kinolar-1boolim'); // Kino bloklari joylashgan container
const prevBtn = document.querySelector('.prev-btn'); // Chap tugma
const nextBtn = document.querySelector('.next-btn'); // O'ng tugma

let currentIndex = 0; // Hozirgi indeks
const totalMovies = document.querySelectorAll('.kino').length; // Jami kino bloklari
const movieWidth = 220; // 200px kino kengligi + 20px margin
const visibleMovies = 5; // Ekranda ko'rinadigan kinolar soni

// Kino bloklarini klonlash orqali cheksiz aylanish yaratish
function cloneMovies() {
    for (let i = 0; i < visibleMovies; i++) {
        const clone = container.children[i].cloneNode(true); // Har bir kino blokini klonlaymiz
        container.appendChild(clone); // Oxiridan yangi kino blokini qo'shish
    }
}

cloneMovies(); // Boshida klonlashni amalga oshiramiz

// Keyingi kino bloklarini ko'rsatish
function slideNext() {
    if (currentIndex >= totalMovies) {
        currentIndex = 0;
        container.style.transition = 'none'; // Animatsiyani olib tashlash
        container.style.transform = `translateX(0px)`; // Boshlanishga qaytarish
        setTimeout(() => {
            container.style.transition = 'transform 0.5s ease'; // Animatsiyani qayta yoqish
            slideNext(); // Keyingi slayderni boshlash
        }, 0);
    } else {
        currentIndex++;
        container.style.transform = `translateX(-${currentIndex * movieWidth}px)`; // Slayderni o'ngga siljitish
    }
}

// Oldingi kino bloklarini ko'rsatish
function slidePrev() {
    if (currentIndex <= 0) {
        currentIndex = totalMovies;
        container.style.transition = 'none'; // Animatsiyani olib tashlash
        container.style.transform = `translateX(-${currentIndex * movieWidth}px)`; // Oxiriga qaytarish
        setTimeout(() => {
            container.style.transition = 'transform 0.5s ease'; // Animatsiyani qayta yoqish
            slidePrev(); // Keyingi slayderni boshlash
        }, 0);
    } else {
        currentIndex--;
        container.style.transform = `translateX(-${currentIndex * movieWidth}px)`; // Slayderni chapga siljitish
    }
}

// Tugmalarni bosganda slayderni harakatga keltirish
nextBtn.addEventListener('click', slideNext);
prevBtn.addEventListener('click', slidePrev);

const fixedText = "Hi, I'm "; // Bagian teks statis
const nameText = "Manarul Hidayat"; // Bagian teks yang akan di-random
const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"; // Karakter acak
const speed = 50; // Kecepatan antara huruf
const element = document.getElementById("typeEffect");

let displayText = Array(nameText.length).fill(""); // Placeholder kosong untuk nama

// Fungsi utama menjalankan efek
async function startRandomTyping() {
    element.textContent = fixedText; // Tampilkan teks statis
    for (let i = 0; i < nameText.length; i++) {
        await randomizeChar(i); // Efek random tiap huruf
        displayText[i] = nameText[i]; // Tetapkan huruf final
        element.textContent = fixedText + displayText.join("");
    }
}

// Fungsi random huruf per karakter
function randomizeChar(index) {
    return new Promise((resolve) => {
        let iteration = 0;
        const interval = setInterval(() => {
            displayText[index] = randomChars[Math.floor(Math.random() * randomChars.length)];
            element.textContent = fixedText + displayText.join("");
            iteration++;

            if (iteration > 2) { // Kurangi angka ini agar efek lebih cepat
                clearInterval(interval);
                resolve();
            }
        }, 20); // Kurangi waktu delay agar lebih cepat
    });
}

// Jalankan efek setelah halaman dimuat
window.onload = () => {
    element.textContent = "";
    startRandomTyping();
};
// Eksekusi efek setelah halaman dimuat
window.onload = () => {
    element.textContent = ""; // Kosongkan teks awal
    startRandomTyping();
};

const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
});

//PARTICLE JS
particlesJS("particles-js", {
    particles: {
        number: { value: 120, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.7, random: false },
        size: { value: 4, random: true },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.5 , width: 1 },
        move: { enable: true, speed: 2.9, direction: "none", random: false, straight: false, out_mode: "out" }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "grab" },
        },
        modes: {
            grab: { distance: 140, line_linked: { opacity: 1 } }, // Jarak garis
        }
    },
    retina_detect: true
});

const showAnim = gsap.from('.navbar', { 
    yPercent: -100,
    paused: true,
    duration: 0.2
  }).progress(1);
  
  ScrollTrigger.create({
    start: "top top",
    end: "max",
    markers: false,
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
  });

  TweenLite.to("#whoim", 5, {delay:1.5, scrambleText:{text:"I'M WEB DEVELOPMENT", rightToLeft:true, chars:"lowercase"}})
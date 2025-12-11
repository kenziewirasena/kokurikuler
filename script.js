// 20 Pertanyaan Kuis
const questions = [
    {
        q: "Apa nama tradisi larangan mengambil hasil laut di Raja Ampat?",
        a: "Sasi"
    },
    {
        q: "Tarian tradisional dari Raja Ampat adalah?",
        a: "Wor"
    },
    {
        q: "Alat musik tradisional Papua yang dipukul bernama?",
        a: "Tifa"
    },
    {
        q: "Raja Ampat terkenal memiliki kekayaan alam berupa?",
        a: "Terumbu karang"
    },
    {
        q: "Sasi bertujuan untuk menjaga apa?",
        a: "Ekosistem laut"
    },
    {
        q: "Kerajinan khas Raja Ampat menggunakan bahan?",
        a: "Kayu"
    },
    {
        q: "Tantangan terbesar pelestarian budaya adalah?",
        a: "Modernisasi"
    },
    {
        q: "Raja Ampat terletak di provinsi?",
        a: "Papua Barat"
    },
    {
        q: "Produk populer dari kerang adalah?",
        a: "Perhiasan"
    },
    {
        q: "Nama upacara adat yang sering dilakukan?",
        a: "Wor"
    },
    {
        q: "Siapa yang menjaga tradisi lokal?",
        a: "Masyarakat adat"
    },
    {
        q: "Kain tradisional Papua disebut?",
        a: "Kain timor"
    },
    {
        q: "Sasi dilakukan oleh siapa?",
        a: "Tetua adat"
    },
    {
        q: "Tujuan ukiran kayu Papua?",
        a: "Simbol spiritual"
    },
    {
        q: "Ekosistem unik Raja Ampat adalah?",
        a: "Mangrove"
    },
    {
        q: "Raja Ampat dikenal sebagai surga bagi?",
        a: "Penyelam"
    },
    {
        q: "Cerita adat diwariskan secara?",
        a: "Lisan"
    },
    {
        q: "Ancaman terbesar laut adalah?",
        a: "Eksploitasi"
    },
    {
        q: "Nama pulau utama di Raja Ampat?",
        a: "Waigeo"
    },
    {
        q: "Salah satu hewan khas laut Raja Ampat?",
        a: "Manta ray"
    }
];

// Render kuis
let quizHTML = "";
questions.forEach((item, i) => {
    quizHTML += `
        <div>
            <p><b>${i + 1}. ${item.q}</b></p>
            <input type="text" id="q${i}">
        </div>
    `;
});
document.getElementById("quiz-container").innerHTML = quizHTML;

// Submit kuis
function submitQuiz() {
    let score = 0;
    questions.forEach((item, i) => {
        let userAns = document.getElementById(`q${i}`).value.trim().toLowerCase();
        if (userAns === item.a.toLowerCase()) score++;
    });

    document.getElementById("result").innerHTML =
        `Nilai kamu: <b>${score} / 20</b>`;
}

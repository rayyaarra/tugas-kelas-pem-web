function ubahTeks() {
    const teks = document.getElementById("teks");

    if (teks.innerHTML.includes("Meow!")) {
        teks.innerHTML =
            "Website sederhana yang berisi informasi tentang kucing dan berbagai jenisnya.";
    } else {
        teks.innerHTML =
            "🐱 Meow! Semoga kamu suka dengan Meow House!";
    }
}

async function tampilkanFakta() {
    const fakta = document.getElementById("fakta");

    if (fakta.style.display === "block") {
        fakta.style.display = "none";
    } else {
        fakta.style.display = "block";
        await muatFakta();
    }
}

async function muatFakta() {
    const isiFakta = document.getElementById("isi-fakta");

    isiFakta.textContent = "Sedang mengambil fakta kucing... 🐱";

    try {
        const response = await fetch(
            "https://catfact.ninja/fact"
        );

        if (!response.ok) {
            throw new Error("Gagal mengambil fakta");
        }

        const data = await response.json();

        isiFakta.textContent = "🐾 " + data.fact;
    } catch (error) {
        isiFakta.textContent =
            "Maaf, fakta belum bisa dimuat. Coba lagi, ya!";
        console.error(error);
    }
}
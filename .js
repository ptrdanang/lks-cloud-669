// Poin 5: Implementasi Logging
console.log("Aplikasi LKS Cloud: Inisialisasi Berhasil.");

async function getQuote() {
    console.log("Mencoba mengambil data dari API..."); // Logging Proses
    
    try {
        const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://zenquotes.io/api/random'));
        const data = await response.json();
        const finalData = JSON.parse(data.contents);

        document.getElementById('quote-text').innerText = `"${finalData[0].q}"`;
        document.getElementById('quote-author').innerText = `- ${finalData[0].a}`;
        
        console.log("Status: Data API Berhasil Dimuat."); // Logging Berhasil
    } catch (error) {
        console.error("Status Error: Gagal mengambil data API.", error); // Logging Error
        document.getElementById('quote-text').innerText = "Gagal memuat data. Periksa koneksi internet.";
    }
}

// Jalankan fungsi saat halaman dimuat
window.onload = getQuote;
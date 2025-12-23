console.log("Aplikasi LKS Cloud: Inisialisasi...");

async function getQuote() {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    
    console.log("Status: Mengambil data API...");

    try {
        // Menggunakan API dari ZenQuotes (sering digunakan di lomba)
        const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://zenquotes.io/api/random'));
        const data = await response.json();
        const finalData = JSON.parse(data.contents);

        quoteText.innerText = `"${finalData[0].q}"`;
        quoteAuthor.innerText = `- ${finalData[0].a}`;
        
        console.log("Status: Data API Berhasil Dimuat."); 
    } catch (error) {
        console.error("Status Error: Koneksi API gagal.", error);
        
        // JIKA GAGAL, Tampilkan pesan ini (Agar tidak kosong/stuck)
        quoteText.innerText = "Koneksi sedang tidak stabil, silakan segarkan halaman.";
        quoteAuthor.innerText = "- Sistem LKS";
    }
}

window.onload = getQuote;
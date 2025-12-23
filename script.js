// Poin 5: Logging (Pasti muncul di Console jika script berhasil terpanggil)
console.log("Script Berhasil Dimuat!");

async function getQuote() {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    
    console.log("Sedang mengambil data API...");

    try {
        // Menggunakan API AllOrigins agar tidak terkena blokir (CORS)
        const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://zenquotes.io/api/random'));
        const data = await response.json();
        const finalData = JSON.parse(data.contents);

        quoteText.innerText = `"${finalData[0].q}"`;
        quoteAuthor.innerText = `- ${finalData[0].a}`;
        
        console.log("Data API Berhasil Muncul!"); 
    } catch (error) {
        console.error("Gagal mengambil API:", error);
        // Fallback jika internet mati/error
        quoteText.innerText = "Koneksi internet diperlukan untuk fitur ini.";
        quoteAuthor.innerText = "- Sistem LKS";
    }
}

// Jalankan fungsi
getQuote();
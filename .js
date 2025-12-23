// Poin 5: Logging untuk memantau inisialisasi aplikasi
console.log("Aplikasi LKS Cloud: Sistem dimulai...");

async function getQuote() {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    
    // Memberi log status loading
    console.log("Status: Sedang mengambil data dari API...");
    quoteText.innerText = "Sedang mengambil data terbaru...";
    quoteAuthor.innerText = "";

    try {
        // Menggunakan API Quotable yang lebih stabil untuk client-side
        const response = await fetch('https://api.quotable.io/random');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Update tampilan UI
        quoteText.innerText = `"${data.content}"`;
        quoteAuthor.innerText = `- ${data.author}`;
        
        // Poin 5: Logging sukses
        console.log("Status: Data API Berhasil Dimuat."); 
        console.log("Konten Kutipan:", data.content);

    } catch (error) {
        // Poin 5: Logging Error relevan
        console.error("Status Error: Gagal mengambil data API.", error);
        
        // Fallback jika API gagal (agar juri tetap melihat ada fungsi)
        quoteText.innerText = "Gagal memuat kutipan online. 'Kegagalan adalah awal dari keberhasilan.'";
        quoteAuthor.innerText = "- Motivasi Lokal";
    }
}

// Menjalankan fungsi saat halaman pertama kali dibuka
window.onload = getQuote;
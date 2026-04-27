// Ganti dengan API Key kamu!
const API_KEY = "Masukan API KEY disini!!!";

fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
        console.log("Ini daftar nama model AI yang aktif dan bisa kamu pakai:");
        data.models.forEach(m => {
            if (m.supportedGenerationMethods && m.supportedGenerationMethods.includes("generateContent")) {
                console.log(`👉 ${m.name.replace('models/', '')}`);
            }
        });
    })
    .catch(err => console.error("Gagal ngecek:", err));
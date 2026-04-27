const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { GoogleGenerativeAI } = require("@google/generative-ai");

// 1. GANTI TEKS DI BAWAH DENGAN API KEY
const genAI = new GoogleGenerativeAI("Masukan API KEY disini");

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Bot WhatsApp sudah aktif! Mode Otomatis ON.');
});

client.on('message', async msg => {
    // 1. DAFTAR KONTAK (Tambahkan Kontak Disini)
    const daftarKontak = {
        "XXXXXX@lid": "Pacar",
        "XXXXXX@lid": "Teman 1",
        "XXXXXX@lid": "Teman 2"
    };

    // 2. CEK APAKAH ID PENGIRIM ADA DI DAFTAR
    if (daftarKontak[msg.from]) {
        console.log(`[LOG] Chat masuk dari ${daftarKontak[msg.from]}! AI menyusun balasan...`);
        
        try {
            // Cari Model yang ingin digunakan di cek-model.js
            const model = genAI.getGenerativeModel({ model: "Pilih model AI dan masukan disini" }); 
            
            // Sesuaikan prompt supaya AI tahu siapa yang dia balas
            const promptContext = `
                Kamu adalah asisten WhatsApp-ku. Sedang ada pesan masuk dari ${daftarKontak[msg.from]}: "${msg.body}".
                
                Tugasmu membuat 1-2 kalimat balasan dengan struktur:
                1. Reaksi singkat yang nyambung dengan isi chat dia.
                2. Minta maaf lagi repot banget, jadi HP belum bisa balas dulu.
                3. Bilang nanti pasti dikabarin lagi kalau udah santai.
                
                ATURAN GAYA BAHASA:
                - Gunakan bahasa Indonesia/Sunda santai (aku-kamu). 
                - Sesuaikan nada: Kalau sahabat, bisa lebih akrab.
                
                ATURAN FORMAT MUTLAK:
                Tulis HANYA kalimat balasanmu di dalam tag [BALASAN] dan [/BALASAN].
            `;

            const result = await model.generateContent(promptContext);
            let balasanMentah = result.response.text();

            let balasanFinal = "";
            const cocok = balasanMentah.match(/\[BALASAN\]([\s\S]*?)\[\/BALASAN\]/i);

            if (cocok && cocok[1] && cocok[1].trim().length > 5) {
                balasanFinal = cocok[1].trim(); 
                balasanFinal = balasanFinal.replace(/^["']|["']$/g, '');
            } else {
                balasanFinal = "Iya nih, maaf ya lagi repot banget, nanti kalau udah santai aku kabarin lagi!";
            }

            setTimeout(() => {
                msg.reply(balasanFinal);
            }, 4000);

            console.log(`[SUKSES] Pesan terkirim ke ${daftarKontak[msg.from]}`);

        } catch (error) {
            console.error("Upss, ada error:", error);
        }
    }
});

client.initialize();
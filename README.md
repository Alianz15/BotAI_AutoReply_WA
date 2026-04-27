# BotAI_AutoReply_WA

Bot WhatsApp otomatis berbasis AI yang dirancang untuk memberikan balasan cerdas, kontekstual, dan natural. Bot ini menggunakan **Google Gemini API** sebagai "otak" untuk memproses pesan dan **whatsapp-web.js** untuk integrasi ke WhatsApp.

## Fitur Utama
* **AI Contextual Response:** Balasan dibuat oleh AI agar terasa seperti diketik manusia.
* **Smart Filtering:** Menggunakan sistem *tagging* `[BALASAN]` untuk memastikan AI hanya mengirim teks yang sudah terfilter.
* **Natural Delay:** Dilengkapi fitur jeda waktu agar interaksi terasa lebih organik.
* **Privacy-First:** Memungkinkan kamu memisahkan data konfigurasi agar tidak bocor ke publik.

## 🛠 Tech Stack
* [Node.js](https://nodejs.org/)
* [whatsapp-web.js](https://wwebjs.dev/)
* [Google Generative AI (Gemini)](https://aistudio.google.com/)

## Cara Instalasi

1. **Clone repository ini:**
   ```bash
   git clone [https://github.com/Alianz15/BotAI_AutoReply_WA.git](https://github.com/USERNAME-KAMU/BotAI_AutoReply_WA.git)
   cd BotAI_AutoReply_WA

## Install dependencies:

* Buka terminal lalu masukan perintah berikut
" npm install "

2. **Konfigurasi:**
Buka file index.js dan sesuaikan variabel berikut:

* genAI = new GoogleGenerativeAI("YOUR_API_KEY"): Ganti dengan API Key milikmu.

* const nomorTarget = "ID_LID_ORANG_LAIN_DISINI": Masukkan ID WhatsApp target (bisa didapatkan melalui log terminal saat bot dijalankan).

## Jalankan Bot:

* Bash
" node index.js "
Scan QR code yang muncul di terminal menggunakan WhatsApp kamu.

Keamanan & Privasi
Jangan pernah membagikan file sesi (.wwebjs_auth) atau API Key pribadi kepada pihak lain.

Proyek ini tidak menyimpan data percakapan di server pihak ketiga; semua proses terjadi secara lokal di perangkatmu.

Disclaimer
Bot ini dibuat untuk tujuan edukasi dan pengembangan pribadi. Harap gunakan dengan bijak dan patuhi Ketentuan Layanan WhatsApp.

Dibuat dengan ❤️ untuk efisiensi komunikasi.


---

# 📧 Panduan Instalasi Website OTP Email Generator

## 🎯 Tentang Website Ini

Website OTP Email Generator adalah tema Hugo yang memungkinkan Anda menerima dan menampilkan kode OTP email secara otomatis, mirip dengan generator.email. Website ini khusus dibuat untuk email **stephaniestudio@motionisme.io**.

## ✨ Fitur Utama

- ✅ **Generator OTP Otomatis** - Menghasilkan kode OTP 6 digit
- ✅ **Email Khusus** - Hanya mendukung stephaniestudio@motionisme.io
- ✅ **Desain Modern** - Interface bersih dan responsif
- ✅ **Multi-bahasa** - Bahasa Indonesia dan Inggris
- ✅ **Mobile Friendly** - Bekerja sempurna di semua perangkat
- ✅ **Kompatibel Micro.blog** - Siap upload ke micro.blog

## 📁 Struktur File

```
website-otp/
├── README.md                    # Dokumentasi utama
├── LICENSE                      # Lisensi MIT
├── config.json                  # Konfigurasi tema
├── theme.toml                   # Metadata tema Hugo
├── plugin.json                  # Konfigurasi plugin micro.blog
├── index.html                   # File test untuk development
├── layouts/                     # Template Hugo
│   ├── index.html              # Halaman beranda
│   ├── otp.html                # Halaman generator OTP
│   ├── _default/
│   │   ├── baseof.html         # Template dasar
│   │   ├── single.html         # Template artikel
│   │   └── list.html           # Template daftar
│   └── partials/
│       ├── header.html         # Header website
│       └── footer.html         # Footer website
├── static/                      # Aset statis
│   ├── css/
│   │   └── main.css            # Stylesheet utama
│   ├── js/
│   │   └── otp.js              # JavaScript OTP generator
│   └── version.txt             # Informasi versi
└── i18n/                       # File terjemahan
    ├── id.json                 # Bahasa Indonesia
    └── en.json                 # Bahasa Inggris
```

## 🚀 Cara Instalasi di Micro.blog

### Langkah 1: Persiapan File
1. Download semua file dari folder ini
2. Pastikan struktur folder sesuai dengan yang tertera di atas

### Langkah 2: Upload ke Micro.blog
1. Buka https://micro.blog/account/themes/
2. Klik tombol "Upload Theme" atau "Add Theme"
3. Upload semua file dengan struktur folder yang sama
4. Atau zip semua file dan upload file zip

### Langkah 3: Aktivasi Tema
1. Setelah upload berhasil, masuk ke pengaturan blog Anda
2. Pilih tema "OTP Email Generator" dari daftar tema
3. Klik "Activate" atau "Aktifkan"
4. Tunggu beberapa menit hingga tema aktif

### Langkah 4: Testing
1. Buka website blog Anda
2. Navigasi ke halaman `/otp`
3. Masukkan email: `stephaniestudio@motionisme.io`
4. Klik "Generate OTP"
5. Kode OTP 6 digit akan muncul

## 🔧 Kustomisasi

### Mengubah Email yang Didukung
Edit file `static/js/otp.js` pada baris:
```javascript
const expectedEmail = "stephaniestudio@motionisme.io";
```
Ganti dengan email yang Anda inginkan.

### Mengubah Panjang OTP
Edit file `static/js/otp.js` pada baris:
```javascript
const otpLength = 6;
```
Ganti angka 6 dengan panjang yang diinginkan.

### Mengubah Warna dan Styling
Edit file `static/css/main.css` untuk mengubah:
- Warna tema (cari `#007acc` untuk warna biru utama)
- Font (saat ini menggunakan Inter dari Google Fonts)
- Layout dan spacing

### Menambah Bahasa Baru
1. Buat file baru di folder `i18n/` (contoh: `i18n/es.json` untuk Spanyol)
2. Copy isi dari `i18n/en.json`
3. Terjemahkan semua teks ke bahasa yang diinginkan

## 🧪 Testing Lokal

Untuk test di komputer lokal sebelum upload:

1. Buka file `index.html` di browser
2. Atau gunakan server lokal:
   ```bash
   # Jika punya Python
   python -m http.server 8000
   
   # Jika punya Node.js
   npx serve .
   ```
3. Buka http://localhost:8000

## 📱 Fitur Responsif

Website ini sudah dioptimalkan untuk:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (320px - 767px)

## 🔒 Keamanan

- Validasi email di sisi client
- Tidak ada koneksi ke server eksternal
- Kode OTP dihasilkan secara lokal
- Tidak menyimpan data pengguna

## 🐛 Troubleshooting

### Problem: OTP tidak muncul
**Solusi:**
1. Pastikan email yang dimasukkan persis: `stephaniestudio@motionisme.io`
2. Cek console browser untuk error JavaScript
3. Pastikan file `static/js/otp.js` ter-load dengan benar

### Problem: Styling tidak muncul
**Solusi:**
1. Pastikan file `static/css/main.css` ter-load
2. Cek path file CSS di `layouts/_default/baseof.html`
3. Clear cache browser

### Problem: Tema tidak muncul di micro.blog
**Solusi:**
1. Pastikan semua file ter-upload dengan struktur yang benar
2. Cek file `theme.toml` dan `config.json`
3. Tunggu beberapa menit untuk propagasi
4. Contact support micro.blog jika masih bermasalah

## 📞 Support

Jika mengalami masalah:
1. Cek dokumentasi ini terlebih dahulu
2. Periksa console browser untuk error
3. Pastikan semua file ter-upload dengan benar
4. Test di browser yang berbeda

## 📄 Lisensi

Tema ini menggunakan lisensi MIT. Anda bebas menggunakan, memodifikasi, dan mendistribusikan sesuai kebutuhan.

## 🎉 Selamat!

Website OTP Email Generator Anda sudah siap digunakan! 

Akses halaman OTP di: `https://yourblog.micro.blog/otp`

---

**Dibuat dengan ❤️ untuk kemudahan akses OTP email**

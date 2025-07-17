# Website OTP Email Generator

Website ini adalah tema Hugo yang dapat menerima dan menampilkan kode OTP email, mirip dengan generator.email.

## Fitur Utama

- **Penerima OTP Email**: Masukkan email "stephaniestudio@motionisme.io" untuk mendapatkan kode OTP
- **Antarmuka Modern**: Desain bersih dengan tipografi yang baik
- **Responsif**: Bekerja di desktop dan mobile
- **Multi-bahasa**: Mendukung berbagai bahasa melalui file i18n
- **Kompatibel Hugo**: Siap upload ke micro.blog

## Cara Menggunakan

1. Upload semua file ke micro.blog themes
2. Buka halaman `/otp` di website Anda
3. Masukkan email: stephaniestudio@motionisme.io
4. Klik "Generate OTP" untuk mendapatkan kode

## Struktur File

- `layouts/` - Template HTML
- `static/` - CSS, JavaScript, dan aset lainnya
- `i18n/` - File terjemahan
- `config.json` - Konfigurasi tema

## Kustomisasi

Anda dapat mengubah email yang diharapkan di file `static/js/otp.js` pada baris:
```javascript
const expectedEmail = "stephaniestudio@motionisme.io";
```

## Instalasi

1. Download semua file
2. Upload ke https://micro.blog/account/themes/
3. Aktifkan tema di pengaturan blog Anda

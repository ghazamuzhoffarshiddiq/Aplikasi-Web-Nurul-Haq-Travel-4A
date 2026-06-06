# Nurul Haq Travel Information System

## Deskripsi Proyek

Nurul Haq Travel Information System adalah aplikasi berbasis web yang dikembangkan untuk membantu proses pengelolaan layanan perjalanan pada Nurul Haq Travel. Sistem ini memungkinkan pelanggan untuk melihat informasi paket perjalanan, melakukan pemesanan secara online, mengunggah bukti pembayaran, dan memantau status pemesanan. Selain itu, admin dapat mengelola data pelanggan, paket perjalanan, transaksi, serta laporan secara terintegrasi.

Proyek ini dikembangkan sebagai bagian dari tugas mata kuliah Rekayasa Perangkat Lunak (RPL).

---

## Tujuan Proyek

- Mempermudah pelanggan dalam memperoleh informasi paket perjalanan.
- Mempermudah proses pemesanan paket perjalanan secara online.
- Membantu admin dalam mengelola data pelanggan dan transaksi.
- Menyediakan laporan yang akurat untuk mendukung pengambilan keputusan manajemen.

---

## Fitur Utama

### Pelanggan
- Registrasi akun
- Login akun
- Melihat daftar paket perjalanan
- Melihat detail paket perjalanan
- Melakukan pemesanan paket
- Mengunggah bukti pembayaran
- Melihat status pemesanan

### Admin
- Login admin
- Mengelola data paket perjalanan
- Mengelola data pelanggan
- Memverifikasi pembayaran
- Mengelola data pemesanan
- Melihat laporan transaksi

---

## Stakeholder

### Pelanggan
Pengguna yang melakukan pemesanan paket perjalanan melalui sistem.

### Admin
Pengguna yang bertugas mengelola data sistem dan melakukan verifikasi pembayaran.

### Manajemen
Pihak yang memanfaatkan laporan dan statistik sistem untuk mendukung pengambilan keputusan.

---

## Teknologi yang Digunakan

### Frontend
- HTML
- CSS
- JavaScript
- Bootstrap

### Backend
- PHP
- Laravel

### Database
- MySQL

### Tools Pendukung
- Visual Studio Code
- XAMPP
- Git
- GitHub

---

## Arsitektur Sistem

Sistem menggunakan arsitektur 3-Tier Architecture yang terdiri dari:

### Presentation Layer
Menampilkan antarmuka pengguna dan menerima input dari pengguna.

### Application Layer
Memproses logika bisnis seperti autentikasi, pemesanan, dan verifikasi pembayaran.

### Data Layer
Menyimpan seluruh data sistem pada database MySQL.

Diagram sederhana:

Client (Browser)
↓
Presentation Layer (HTML, CSS, JavaScript)
↓
Application Layer (PHP/Laravel)
↓
Database Layer (MySQL)

---

## Alur Sistem

1. Pengguna melakukan registrasi akun.
2. Pengguna login ke sistem.
3. Pengguna melihat daftar paket perjalanan.
4. Pengguna memilih paket perjalanan yang diinginkan.
5. Pengguna melakukan pemesanan.
6. Sistem menyimpan data pemesanan.
7. Pengguna mengunggah bukti pembayaran.
8. Admin melakukan verifikasi pembayaran.
9. Sistem memperbarui status pemesanan.
10. Pengguna dapat melihat status pemesanan.

---

## Struktur Modul Sistem

```text
Nurul-Haq-Travel
│
├── Authentication
│   ├── Login
│   └── Register
│
├── Customer
│   ├── Paket Perjalanan
│   ├── Detail Paket
│   ├── Pemesanan
│   ├── Pembayaran
│   └── Status Pemesanan
│
├── Admin
│   ├── Dashboard
│   ├── Kelola Paket
│   ├── Kelola Pelanggan
│   ├── Verifikasi Pembayaran
│   └── Laporan
│
└── Database
    ├── Users
    ├── Paket
    ├── Pemesanan
    └── Pembayaran
```

## Kebutuhan Sistem

### Perangkat Lunak
- Windows 10/11
- XAMPP
- Visual Studio Code
- Google Chrome atau browser modern lainnya

### Database
- MySQL

---

## Instalasi

1. Clone repository.

```bash
git clone https://github.com/username/nurul-haq-travel.git
```

2. Pindahkan proyek ke folder `htdocs` pada XAMPP.

3. Jalankan Apache dan MySQL melalui XAMPP.

4. Import database ke MySQL.

5. Jalankan aplikasi melalui browser.

```text
http://localhost/nurul-haq-travel
```

---

## Tim Pengembang

**Ghaza Muzhoffar Shiddiq**  
NIM: 2403015096  
Kelas: 4A Teknik Informatika

**Fudhel**  
NIM: 2403015005  
Kelas: 4A Teknik Informatika

**Rian Septiana**  
NIM: 2403015066  
Kelas: 4A Teknik Informatika

**Muhammad Sultan Fauzan**  
NIM: 2403015051  
Kelas: 4A Teknik Informatika

**Muhammad Shaffan Jaizurahman**  
NIM: 2403015108  
Kelas: 4A Teknik Informatika

---

## Lisensi

Proyek ini dibuat untuk keperluan akademik dan pembelajaran pada mata kuliah Rekayasa Perangkat Lunak (RPL).

© 2026 Nurul Haq Travel Information System

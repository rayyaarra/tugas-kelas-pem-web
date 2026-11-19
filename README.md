# 🐱 Meow House

**Meow House** merupakan website yang menyediakan informasi seputar kucing, mulai dari pengenalan kucing, berbagai jenis ras kucing, hingga fakta-fakta unik tentang kucing. Website ini dibuat menggunakan HTML, CSS, dan JavaScript serta dilengkapi dengan integrasi API.

## 📌 Fitur Website

1. **Home**  
   Menampilkan halaman utama yang berisi sambutan dan pengenalan singkat mengenai website Meow House.

2. **Interaksi JavaScript**  
   Menyediakan tombol interaktif yang dapat digunakan pengguna untuk melihat perubahan teks pada halaman Home.

3. **Jenis-Jenis Kucing**  
   Menampilkan informasi mengenai tiga jenis ras kucing, yaitu:
   - Persia
   - British Shorthair
   - Siamese

4. **Integrasi API**  
   Menggunakan Cat Fact Ninja API untuk mengambil dan menampilkan fakta unik tentang kucing.

5. **Navigasi Halaman**  
   Memudahkan pengguna berpindah antara halaman Home dan Jenis-Jenis Kucing.

## 🛠️ Teknologi yang Digunakan

- **HTML** – Membuat struktur halaman website.
- **CSS** – Mengatur tampilan dan desain website.
- **JavaScript** – Membuat interaksi dan menjalankan fungsi website.
- **Cat Fact Ninja API** – Mengambil data fakta unik tentang kucing.

## 💻 Penerapan HTML, CSS, JavaScript, API

### 1. HTML (HyperText Markup Language)

HTML digunakan untuk membangun struktur halaman website Meow House. Penerapannya terdapat pada halaman Home dan Jenis-Jenis Kucing, yang mencakup bagian navigasi, judul, teks informasi, gambar, dan tombol interaktif.

### 2. CSS (Cascading Style Sheets)

CSS digunakan untuk mengatur tampilan website agar lebih menarik dan nyaman dilihat. Pengaturan meliputi warna, jenis dan ukuran tulisan, tata letak, jarak antar elemen, serta desain tombol dan kartu informasi kucing.

### 3. JavaScript

JavaScript digunakan untuk memberikan fungsi interaktif pada website. Salah satu penerapannya adalah tombol pada halaman Home yang dapat mengubah teks sambutan ketika diklik. JavaScript juga digunakan untuk menjalankan fungsi pengambilan fakta kucing dari API.

### 4. API (Application Programming Interface)

Website Meow House menggunakan **Cat Fact Ninja API** untuk mengambil fakta unik tentang kucing. Data diperoleh melalui proses `fetch()`, kemudian diolah dalam format JSON dan ditampilkan pada halaman website.

URL API: https://catfact.ninja/fact

## 📸 Dokumentasi Website

### 1. Halaman Home

Menampilkan halaman utama website Meow House yang berisi sambutan dan pengenalan singkat mengenai kucing.

![Halaman Home](dokumentasi/home.png)

### 2. Implementasi JavaScript

Menunjukkan keberhasilan fungsi JavaScript melalui tombol interaktif yang dapat mengubah teks pada halaman Home.

![Implementasi JavaScript](<dokumentasi/home js.png>)

### 3. Halaman Jenis-Jenis Kucing

Menampilkan informasi mengenai tiga jenis ras kucing, yaitu Persia, British Shorthair, dan Siamese.

![Halaman Jenis Kucing](<dokumentasi/jenis jenis kucing.png>)

### 4. Implementasi API

Menunjukkan keberhasilan integrasi API dalam mengambil dan menampilkan fakta unik tentang kucing.

![Implementasi API](dokumentasi/API.png)

## 📂 Struktur Project

```text
web kucing/
│
├── dokumentasi/
│   ├── API.png
│   ├── home js.png
│   ├── home.png
│   └── jenis jenis kucing.png
│
├── images/
│
├── index.html
├── cats.html
├── style.css
├── script.js
└── README.md
```

## 🚀 Cara Menjalankan Website

1. Clone repository:

   ```bash
   git clone https://github.com/rayyaarra/tugas-kelas-pem-web.git
   ```

2. Buka folder project menggunakan Visual Studio Code.
3. Jalankan file `index.html` menggunakan ekstensi Live Server.
4. Website akan terbuka secara otomatis melalui browser.

## 🌐 API yang Digunakan

**Cat Fact Ninja API**

API ini digunakan untuk memperoleh fakta-fakta unik mengenai kucing.

URL: https://catfact.ninja/fact

## 👩‍💻 Pengembang

Project Meow House dibuat untuk memenuhi tugas mata kuliah Pemrograman Web.
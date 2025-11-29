# Agus Dzuriana - Portfolio Website

Website portfolio personal yang menampilkan profil, pengalaman, dan project-project yang telah saya kerjakan.

## Tentang Project Ini

Portfolio ini dibuat sebagai final project dari **Fundamental Web Mini Bootcamp** di **Hacktiv8**. Website ini dibangun menggunakan:

- **HTML** - Struktur halaman web
- **Tailwind CSS** - Styling dan responsive design
- **JavaScript** - Interaktivitas dan animasi

## Fitur

- **Responsive Design** - Tampilan optimal di semua ukuran layar (desktop, tablet, mobile)
- **Scroll Animations** - Animasi fade-in saat scroll untuk pengalaman visual yang menarik
- **Mobile Menu** - Hamburger menu untuk navigasi di perangkat mobile
- **Contact Form** - Integrasi dengan Email dan WhatsApp
- **Project Showcase** - Menampilkan project dengan filter kategori

## Struktur File

### index.html
File utama yang menjadi entry point website. File ini menggunakan sistem **HTML Include** untuk memuat section-section secara terpisah menggunakan atribut `data-include`.

### Folder `sections/`
Berisi file-file HTML yang dipisah per section untuk kemudahan maintenance:
- **nav.html** - Navigasi bar dengan logo, menu, dan tombol Hire Me
- **hero.html** - Section pembuka dengan nama, deskripsi, social links, dan CTA buttons
- **about.html** - Section tentang saya, statistik pengalaman, dan skill cards
- **experience.html** - Timeline pengalaman bootcamp
- **projects.html** - Showcase project dengan filter kategori
- **contact.html** - Form kontak dengan integrasi Email dan WhatsApp
- **footer.html** - Footer dengan logo, deskripsi, social links, dan navigasi

### Folder `js/`
Berisi file JavaScript dengan beberapa fitur:

**script.js** mencakup:
- **HTML Include System** - Memuat file HTML terpisah ke dalam `index.html`
- **Scroll Animations** - Mengaktifkan animasi fade-in saat elemen masuk viewport
- **Scroll Spy** - Mengupdate URL hash dan highlight menu sesuai section yang sedang dilihat
- **Mobile Menu Toggle** - Membuka/menutup hamburger menu di mobile
- **Project Filter** - Memfilter project berdasarkan kategori (All, Frontend, Database)
- **Contact Form Functions** - Mengirim pesan via Email atau WhatsApp

## Kontak

- **Email**: agusdzuriana@gmail.com
- **LinkedIn**: [Agus Dzuriana Poetra](https://linkedin.com/in/agus-dzuriana-poetra-604ab8102/)
- **GitHub**: [@agusdputraa](https://github.com/agusdputraa)
- **Instagram**: [@agusdputraa](https://instagram.com/agusdputraa)


## Live Preview
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://agusdzuriana.vercel.app/)

---
## Portfolio Reference

![Portfolio Reference](reference.png)

const puppeteer = require('puppeteer');

(async () => {
  // Inisialisasi browser Puppeteer
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigasi ke halaman yang akan di-scrapping
  await page.goto('https://www.example.com');

  // Memilih elemen HTML dengan class tertentu menggunakan page.$()
  const element = await page.$('.left');

  // Memilih semua elemen HTML dengan class tertentu menggunakan page.$$()
  // const elements = await page.$$('.single-blog-box');

  // Melakukan operasi lain pada elemen yang telah dipilih
  if (element) {
    const textContent = await element.textContent();
    console.log('Konten elemen:', textContent);
  }

  // if (elements.length > 0) {
  //   for (let i = 0; i < elements.length; i++) {
  //     const textContent = await elements[i].textContent();
  //     console.log('Konten elemen', i + 1, ':', textContent);
  //   }
  // }

  // Menutup browser
  await browser.close();
})();

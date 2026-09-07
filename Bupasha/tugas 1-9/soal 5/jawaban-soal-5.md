# Soal 5 (Tertulis)

**Soal:** Jelaskan dengan kata-katamu sendiri fungsi dari masing-masing tiga bagian pada
`for` (inisialisasi, kondisi, increment/decrement), disertai contoh sederhana.

## Jawaban

Perulangan `for` punya tiga bagian di dalam tanda kurung, dipisahkan oleh titik koma (`;`):

```ts
for (let i: number = 1; i <= 5; i++) {
    hasil += i + "<br>";
}
```

### 1. Inisialisasi — `let i: number = 1`

Bagian ini dijalankan **satu kali saja di awal**, sebelum perulangan mulai berputar.
Gunanya untuk menyiapkan variabel penghitung (counter) beserta nilai awalnya.
Pada contoh di atas, saya membuat variabel `i` bertipe `number` dan mengisinya dengan 1,
artinya hitungannya dimulai dari angka 1.

Kalau saya tulis `let i: number = 5`, maka perulangan akan mulai menghitung dari 5.

### 2. Kondisi — `i <= 5`

Bagian ini adalah syarat yang **diperiksa setiap kali sebelum satu putaran dijalankan**.
Selama hasil pemeriksaannya `true`, isi perulangan dijalankan lagi. Begitu hasilnya `false`,
perulangan langsung berhenti.

Pada contoh di atas, selama nilai `i` masih kurang dari atau sama dengan 5, perulangan
terus berjalan. Jadi angka yang tercetak adalah 1, 2, 3, 4, 5. Saat `i` sudah menjadi 6,
kondisi `6 <= 5` bernilai `false`, sehingga perulangan berhenti.

Kalau kondisinya saya tulis `i < 5` (tanpa tanda sama dengan), hasilnya cuma 1 sampai 4 —
inilah yang disebut kesalahan *off-by-one*.

### 3. Increment / Decrement — `i++`

Bagian ini dijalankan **setiap kali satu putaran selesai**, gunanya untuk mengubah nilai
counter supaya perulangan bergerak maju menuju kondisi berhenti.

`i++` artinya `i = i + 1`, jadi nilainya naik satu setiap putaran: 1 → 2 → 3 → 4 → 5 → 6.
Kalau saya pakai `i--` (decrement), nilainya justru turun satu setiap putaran, seperti
pada perulangan hitung mundur.

Bagian ini **wajib ada dan wajib benar**. Kalau lupa menulis `i++`, nilai `i` akan terus
bernilai 1 selamanya, kondisi `i <= 5` tidak pernah menjadi `false`, dan program akan
mengalami *infinite loop* (perulangan tanpa henti).

### Ringkasan alur

| Urutan | Bagian | Kapan dijalankan |
|---|---|---|
| 1 | Inisialisasi `let i = 1` | sekali saja di awal |
| 2 | Kondisi `i <= 5` | setiap kali sebelum satu putaran |
| 3 | Isi perulangan | kalau kondisi bernilai `true` |
| 4 | Increment `i++` | setiap kali satu putaran selesai, lalu kembali ke langkah 2 |

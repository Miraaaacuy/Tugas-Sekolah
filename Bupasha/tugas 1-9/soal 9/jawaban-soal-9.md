# Soal 9 (Tertulis)

**Soal:** Jelaskan dengan kata-katamu sendiri, kapan sebaiknya kamu memilih `while`
dibanding `for`.

## Jawaban

Sebenarnya `for` dan `while` sama-sama perulangan dan bisa saling menggantikan — buktinya
pada Soal 8 saya menulis program yang sama dua kali, satu memakai `for` dan satu memakai
`while`, dan hasilnya persis sama. Yang membedakan adalah **kapan masing-masing terasa
paling pas dipakai**.

### Pilih `for` kalau jumlah putarannya sudah pasti

`for` cocok dipakai saat saya **sudah tahu dari awal berapa kali** perulangan harus
berjalan. Contohnya mencetak angka 1 sampai 10, menampilkan tabel perkalian 1 sampai 10,
atau menampilkan nomor absen 30 siswa. Jumlahnya jelas, tinggal dihitung.

Enaknya, `for` menaruh ketiga bagian (inisialisasi, kondisi, increment) dalam satu baris,
jadi kodenya lebih ringkas dan kecil kemungkinan lupa menulis `i++`.

### Pilih `while` kalau jumlah putarannya belum pasti

`while` lebih pas dipakai saat saya **tidak tahu berapa kali** perulangan akan berjalan, dan
berhentinya hanya bergantung pada sebuah kondisi yang nilainya bisa berubah-ubah.

Contoh nyatanya:

- **Nyawa pemain dalam sebuah gim** — `while (nyawa > 0)`. Saya tidak tahu pemain akan
  bertahan berapa putaran; perulangan berhenti sendiri saat nyawanya habis.
- **Meminta user memasukkan password sampai benar** — diulang terus selama password
  masih salah, bisa satu kali, bisa lima kali.
- **Membaca data sampai habis** — diulang selama masih ada data berikutnya.

Kalau kasus seperti ini dipaksakan memakai `for`, kodenya justru jadi aneh karena bagian
"berapa kali" pada `for` tidak bisa diisi angka apa pun.

### Kesimpulan singkat

> Pakai **`for`** kalau saya bisa menjawab pertanyaan "berapa kali?" sejak awal.
> Pakai **`while`** kalau saya hanya bisa menjawab "sampai kapan?".

Satu hal yang harus selalu diingat saat memakai `while`: **wajib ada baris di dalam blok
yang mengubah nilai variabel kondisinya** (misalnya `i++` atau `nyawa--`). Kalau lupa,
kondisinya tidak pernah menjadi `false` dan program akan terjebak *infinite loop*.

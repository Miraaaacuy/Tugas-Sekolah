# Perulangan `for` dan `while` di TypeScript

Latihan Mandiri **Pertemuan 10** — Materi Ajar Minggu 5–6, DDPPLG Kelas X, halaman 5 dari 16.

**Isi tugas:** 7 soal praktik (12 poin masing-masing) + 2 soal tertulis, yaitu soal 5 dan 9 (8 poin masing-masing). Total 100 poin.

📄 Penjelasan lengkap konsep dan pembahasan tiap soal ada di **[Penjelasan Tugas Perulangan.docx](Penjelasan%20Tugas%20Perulangan.docx)** (17 halaman).

## Daftar Soal

### [Soal 1](soal%201) — Mencetak angka 1 sampai N

Minta user memasukkan angka N lewat `prompt()`, lalu `for` mencetak 1 sampai N.

File: [`input-for.ts`](soal%201/input-for.ts) · Contoh: input `5` → `1 2 3 4 5`

### [Soal 2](soal%202) — Angka genap saja

Mencetak angka genap dari 2 sampai batas, memakai `i += 2` supaya angka ganjil otomatis terlewat.

File: [`angka-genap.ts`](soal%202/angka-genap.ts) · Contoh: input `10` → `2 4 6 8 10`

### [Soal 3](soal%203) — Hitung mundur

Perulangan `for` mundur (`i--`) dari angka user ke 1, diakhiri "Selamat Tahun Baru!" di luar blok perulangan.

File: [`hitung-mundur.ts`](soal%203/hitung-mundur.ts) · Contoh: input `5` → `5 4 3 2 1` + `Selamat Tahun Baru!`

### [Soal 4](soal%204) — Tabel perkalian

Perulangannya tetap 1 sampai 10 (tabel perkalian memang selalu 10 baris); yang berubah dari input user adalah angka pengalinya.

File: [`tabel-perkalian.ts`](soal%204/tabel-perkalian.ts) · Contoh: input `3` → `1 x 3 = 3` … `10 x 3 = 30`

### [Soal 5](soal%205/jawaban-soal-5.md) — *(Tertulis)* Tiga bagian pada `for`

Penjelasan fungsi inisialisasi, kondisi, dan increment/decrement beserta contohnya.

File: [`jawaban-soal-5.md`](soal%205/jawaban-soal-5.md)

### [Soal 6](soal%206) — Mencetak 1 sampai batas dengan `while`

Isi programnya sama dengan Soal 1, tapi inisialisasi dipindah ke atas dan `i++` ditulis manual di dalam blok.

File: [`perulangan-while.ts`](soal%206/perulangan-while.ts) · Contoh: input `5` → sama persis dengan Soal 1

### [Soal 7](soal%207) — Program percobaan dengan `while`

Mencetak "Percobaan ke-N" sebanyak jumlah percobaan maksimal yang dimasukkan user.

File: [`tebak-angka.ts`](soal%207/tebak-angka.ts) · Contoh: input `3` → `Percobaan ke-1` … `Percobaan ke-3`

### [Soal 8](soal%208) — Mengubah program `for` menjadi `while`

Program Soal 1 ditulis ulang dalam dua versi yang menghasilkan output identik. Dipisah ke dua halaman HTML karena keduanya memakai nama variabel global yang sama.

File: [`versi-for.ts`](soal%208/versi-for.ts) dan [`versi-while.ts`](soal%208/versi-while.ts)

### [Soal 9](soal%209/jawaban-soal-9.md) — *(Tertulis)* Kapan memilih `while` dibanding `for`

Intinya: pakai `for` kalau bisa menjawab "berapa kali?", pakai `while` kalau hanya bisa menjawab "sampai kapan?".

File: [`jawaban-soal-9.md`](soal%209/jawaban-soal-9.md)

## Cara Menjalankan

Tiap folder soal praktik berisi tiga file: kode TypeScript (`.ts`), hasil kompilasinya (`.js`), dan halaman HTML untuk membukanya di browser.

1. Buka folder soalnya di terminal.
2. Kompilasi file TypeScript-nya:
   ```
   npx tsc namafile.ts
   ```
   Kalau tidak ada pesan error, file `.js` sudah terbentuk.
3. Buka `index.html` di browser — klik dua kali, atau lewat **Live Server** di VS Code.
4. Kotak dialog `prompt()` muncul. Ketik angkanya, tekan OK, hasilnya langsung tampil di halaman.

Khusus Soal 8, kompilasi dijalankan satu per satu (`npx tsc versi-for.ts` lalu `npx tsc versi-while.ts`), dan `index-for.html` serta `index-while.html` dibuka di dua tab berdampingan untuk dibandingkan.

## Catatan tentang `as HTMLElement`

Contoh di materi menulis pengambilan elemen seperti ini:

```ts
const output = document.getElementById("output");
```

TypeScript versi 7 memakai mode strict secara bawaan dan menolak baris itu dengan `error TS18047: 'output' is possibly 'null'`. Karena itu di semua file ditambahkan `as HTMLElement` di akhir baris:

```ts
const output = document.getElementById("output") as HTMLElement;
```

Selebihnya kode tetap sama persis dengan contoh di materi. Pada TypeScript versi lama, bagian `as HTMLElement` boleh dihapus.

## Pola yang Dipakai di Semua Soal

Semua soal praktik memakai pola yang sama seperti contoh di materi:

- Input diambil dengan `prompt()`, lalu dikonversi dengan `Number(...)` karena hasil `prompt()` selalu bertipe `string` (atau `null` kalau dibatalkan).
- Anotasi tipe ditulis eksplisit: `: string | null`, `: number`, `: string`.
- Hasil tiap putaran dikumpulkan dulu ke satu variabel `hasil` dengan pemisah `<br>`.
- Baru ditampilkan **sekali saja** setelah perulangan selesai lewat `output.innerHTML` — bukan `console.log`, dan bukan `innerHTML +=` di dalam perulangan.

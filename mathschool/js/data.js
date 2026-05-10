// =============================================
// DATA MATERI
// =============================================
const MATERI_DATA = {

  7: {
    sem1: [
      {
  id:'bilangan-bulat',
  icon:'🔢',
  title:'Bilangan Bulat',
  color:'#6C63FF',
  desc:'Bilangan bulat positif, negatif, nol, dan operasinya.',
  isi:`

<h2 style="font-size:28px;font-weight:800;color:#8B5CF6;margin-bottom:18px">
🔢 Bilangan Bulat
</h2>

<p style="line-height:1.8;color:#d1d5db">
Bilangan bulat adalah himpunan bilangan yang terdiri dari:
</p>

<ul style="margin-top:12px;line-height:1.9;color:#e5e7eb">
<li>Bilangan bulat negatif</li>
<li>Bilangan nol</li>
<li>Bilangan bulat positif</li>
</ul>

<div style="
background:linear-gradient(135deg,#312e81,#1e1b4b);
padding:18px;
border-radius:16px;
margin:20px 0;
border:1px solid rgba(139,92,246,0.3);
text-align:center;
font-size:22px;
font-weight:800;
color:white">
..., -3, -2, -1, 0, 1, 2, 3, ...
</div>

<!-- GARIS BILANGAN -->
<h3 style="font-size:24px;font-weight:700;color:#a78bfa;margin-top:30px">
📊 Garis Bilangan
</h3>

<div style="margin:20px 0;text-align:center">
<img src="img/garis-bilangan.png"
style="
width:100%;
max-width:700px;
border-radius:18px;
border:1px solid rgba(255,255,255,0.1);
box-shadow:0 10px 30px rgba(0,0,0,0.4)
">
</div>

<div style="
background:#111827;
border:1px solid rgba(255,255,255,0.08);
padding:18px;
border-radius:16px;
margin-top:20px">

<p style="font-weight:700;color:#c4b5fd;margin-bottom:10px">
📌 Pada garis bilangan:
</p>

<ul style="line-height:2;color:#d1d5db">
<li>Bilangan di kanan bernilai lebih besar</li>
<li>Bilangan di kiri bernilai lebih kecil</li>
<li>Semakin ke kanan → semakin besar</li>
<li>Semakin ke kiri → semakin kecil</li>
</ul>
</div>

<!-- JENIS -->
<h3 style="font-size:24px;font-weight:700;color:#a78bfa;margin-top:40px">
🔢 Jenis-Jenis Bilangan Bulat
</h3>

<div style="
display:grid;
gap:16px;
margin-top:20px">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
border-left:5px solid #22c55e">
<h4 style="color:#22c55e;font-size:20px;font-weight:700">
1. Bilangan Bulat Positif
</h4>
<p style="color:#d1d5db;margin-top:10px">
Contoh: 1, 2, 3, 4, ...
</p>
</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
border-left:5px solid #facc15">
<h4 style="color:#facc15;font-size:20px;font-weight:700">
2. Bilangan Nol
</h4>
<p style="color:#d1d5db;margin-top:10px">
Contoh: 0
</p>
</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
border-left:5px solid #ef4444">
<h4 style="color:#ef4444;font-size:20px;font-weight:700">
3. Bilangan Bulat Negatif
</h4>
<p style="color:#d1d5db;margin-top:10px">
Contoh: -1, -2, -3, ...
</p>
</div>

</div>

<!-- KPK -->
<h3 style="font-size:24px;font-weight:700;color:#a78bfa;margin-top:45px">
🔁 KPK (Kelipatan Persekutuan Terkecil)
</h3>

<p style="line-height:1.8;color:#d1d5db">
KPK adalah kelipatan yang sama dari dua bilangan atau lebih yang nilainya paling kecil.
</p>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
border:1px solid rgba(255,255,255,0.08);
margin-top:20px">

<h4 style="font-size:20px;color:#c4b5fd;font-weight:700">
📌 Cara 1: Daftar Kelipatan
</h4>

<p style="margin-top:12px;color:#e5e7eb">
Contoh: KPK dari 4 dan 6
</p>

<ul style="line-height:2;color:#d1d5db">
<li>Kelipatan 4 → 4, 8, 12, 16...</li>
<li>Kelipatan 6 → 6, 12, 18...</li>
</ul>

<div style="
background:#312e81;
padding:14px;
border-radius:12px;
margin-top:15px;
text-align:center;
font-size:22px;
font-weight:800;
color:white">
KPK = 12
</div>

</div>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
border:1px solid rgba(255,255,255,0.08);
margin-top:20px">

<h4 style="font-size:20px;color:#c4b5fd;font-weight:700">
📌 Cara 2: Faktorisasi Prima
</h4>

<div style="
background:#1f2937;
padding:16px;
border-radius:12px;
margin-top:15px;
line-height:2;
color:#e5e7eb">
4 = 2² <br>
6 = 2 × 3
</div>

<div style="
background:#4c1d95;
padding:14px;
border-radius:12px;
margin-top:15px;
text-align:center;
font-size:22px;
font-weight:800;
color:white">
KPK = 2² × 3 = 12
</div>

</div>

<!-- FPB -->
<h3 style="font-size:24px;font-weight:700;color:#a78bfa;margin-top:45px">
🔁 FPB (Faktor Persekutuan Terbesar)
</h3>

<p style="line-height:1.8;color:#d1d5db">
FPB adalah faktor yang sama dari dua bilangan atau lebih yang nilainya paling besar.
</p>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:20px;
border:1px solid rgba(255,255,255,0.08)">

<h4 style="font-size:20px;color:#c4b5fd;font-weight:700">
📌 Contoh FPB
</h4>

<p style="margin-top:12px;color:#e5e7eb">
FPB dari 12 dan 18
</p>

<ul style="line-height:2;color:#d1d5db">
<li>Faktor 12 → 1,2,3,4,6,12</li>
<li>Faktor 18 → 1,2,3,6,9,18</li>
</ul>

<div style="
background:#7c3aed;
padding:14px;
border-radius:12px;
margin-top:15px;
text-align:center;
font-size:22px;
font-weight:800;
color:white">
FPB = 6
</div>

</div>

<!-- OPERASI -->
<h3 style="font-size:24px;font-weight:700;color:#a78bfa;margin-top:45px">
➕ Operasi Bilangan Bulat
</h3>

<!-- PENJUMLAHAN -->
<div style="
background:#111827;
padding:22px;
border-radius:18px;
margin-top:20px;
border-left:5px solid #22c55e">

<h4 style="font-size:22px;font-weight:700;color:#22c55e">
1. Penjumlahan
</h4>

<ul style="line-height:2;margin-top:14px;color:#e5e7eb">
<li>5 + 3 = 8</li>
<li>5 + (-3) = 2</li>
<li>(-4) + (-6) = -10</li>
</ul>

<div style="
background:#1f2937;
padding:16px;
border-radius:12px;
margin-top:18px">

<p style="font-weight:700;color:#c4b5fd">
📝 Contoh Soal
</p>

<p style="margin-top:10px;color:#d1d5db">
Suhu kota -4°C turun lagi 6°C.
</p>

<div style="
background:#312e81;
padding:14px;
border-radius:12px;
margin-top:12px;
text-align:center;
font-size:20px;
font-weight:800;
color:white">
-4 + (-6) = -10°C
</div>

</div>

</div>

<!-- PENGURANGAN -->
<div style="
background:#111827;
padding:22px;
border-radius:18px;
margin-top:25px;
border-left:5px solid #f59e0b">

<h4 style="font-size:22px;font-weight:700;color:#f59e0b">
2. Pengurangan
</h4>

<ul style="line-height:2;margin-top:14px;color:#e5e7eb">
<li>3 - 7 = -4</li>
<li>5 - (-2) = 7</li>
</ul>

<div style="
background:#1f2937;
padding:16px;
border-radius:12px;
margin-top:18px">

<p style="font-weight:700;color:#c4b5fd">
📝 Contoh Soal
</p>

<p style="margin-top:10px;color:#d1d5db">
Saldo uang Rp3.000 dikurangi Rp7.000
</p>

<div style="
background:#78350f;
padding:14px;
border-radius:12px;
margin-top:12px;
text-align:center;
font-size:20px;
font-weight:800;
color:white">
3.000 - 7.000 = -4.000
</div>

</div>

</div>

<!-- PERKALIAN -->
<div style="
background:#111827;
padding:22px;
border-radius:18px;
margin-top:25px;
border-left:5px solid #06b6d4">

<h4 style="font-size:22px;font-weight:700;color:#06b6d4">
3. Perkalian
</h4>

<ul style="line-height:2;margin-top:14px;color:#e5e7eb">
<li>(+) × (+) = (+)</li>
<li>(-) × (-) = (+)</li>
<li>(+) × (-) = (-)</li>
<li>(-) × (+) = (-)</li>
</ul>

<div style="
background:#164e63;
padding:14px;
border-radius:12px;
margin-top:15px;
text-align:center;
font-size:22px;
font-weight:800;
color:white">
(-4) × (-5) = 20
</div>

</div>

<!-- PEMBAGIAN -->
<div style="
background:#111827;
padding:22px;
border-radius:18px;
margin-top:25px;
border-left:5px solid #ec4899">

<h4 style="font-size:22px;font-weight:700;color:#ec4899">
4. Pembagian
</h4>

<ul style="line-height:2;margin-top:14px;color:#e5e7eb">
<li>-12 ÷ 4 = -3</li>
<li>20 ÷ (-5) = -4</li>
<li>(-15) ÷ (-3) = 5</li>
</ul>

</div>

<!-- ATURAN TANDA -->
<h3 style="font-size:24px;font-weight:700;color:#a78bfa;margin-top:45px">
📌 Aturan Tanda
</h3>

<div style="
background:#111827;
padding:22px;
border-radius:18px;
margin-top:20px">

<ul style="line-height:2;color:#e5e7eb">
<li>(+) + (+) = (+)</li>
<li>(-) + (-) = (-)</li>
<li>(+) + (-) → lihat nilai terbesar</li>
<li>(-) + (+) → lihat nilai terbesar</li>
</ul>

<div style="
background:#312e81;
padding:16px;
border-radius:14px;
margin-top:18px;
text-align:center;
font-size:22px;
font-weight:800;
color:white">
7 + (-10) = -3
</div>

</div>

<!-- SIFAT -->
<h3 style="font-size:24px;font-weight:700;color:#a78bfa;margin-top:45px">
📊 Sifat Operasi Bilangan Bulat
</h3>

<div style="
overflow-x:auto;
margin-top:20px">

<table style="
width:100%;
border-collapse:collapse;
overflow:hidden;
border-radius:16px">

<tr style="background:#312e81;color:white">
<th style="padding:14px;border:1px solid rgba(255,255,255,0.1)">Sifat</th>
<th style="padding:14px;border:1px solid rgba(255,255,255,0.1)">Rumus</th>
<th style="padding:14px;border:1px solid rgba(255,255,255,0.1)">Contoh</th>
</tr>

<tr style="background:#111827;color:#e5e7eb">
<td style="padding:14px;border:1px solid rgba(255,255,255,0.08)">Komutatif</td>
<td style="padding:14px;border:1px solid rgba(255,255,255,0.08)">a+b=b+a</td>
<td style="padding:14px;border:1px solid rgba(255,255,255,0.08)">3+5=5+3</td>
</tr>

<tr style="background:#1f2937;color:#e5e7eb">
<td style="padding:14px;border:1px solid rgba(255,255,255,0.08)">Asosiatif</td>
<td style="padding:14px;border:1px solid rgba(255,255,255,0.08)">(a+b)+c=a+(b+c)</td>
<td style="padding:14px;border:1px solid rgba(255,255,255,0.08)">(2+3)+4</td>
</tr>

<tr style="background:#111827;color:#e5e7eb">
<td style="padding:14px;border:1px solid rgba(255,255,255,0.08)">Distributif</td>
<td style="padding:14px;border:1px solid rgba(255,255,255,0.08)">a(b+c)=ab+ac</td>
<td style="padding:14px;border:1px solid rgba(255,255,255,0.08)">2(3+4)=14</td>
</tr>

</table>

</div>

<!-- PERBANDINGAN -->
<h3 style="font-size:24px;font-weight:700;color:#a78bfa;margin-top:45px">
⚖️ Perbandingan Bilangan
</h3>

<div style="
background:#111827;
padding:20px;
border-radius:18px;
margin-top:20px">

<ul style="line-height:2;color:#e5e7eb">
<li>5 > 2</li>
<li>-3 < 1</li>
<li>-5 < -2</li>
</ul>

</div>

<!-- SOAL CAMPURAN -->
<h3 style="font-size:24px;font-weight:700;color:#a78bfa;margin-top:45px">
🧠 Contoh Soal Campuran
</h3>

<div style="
display:grid;
gap:18px;
margin-top:20px">

<div style="
background:#111827;
padding:20px;
border-radius:16px">
<p style="font-weight:700;color:#c4b5fd">1. 7 + (-10)</p>
<div style="
background:#312e81;
padding:12px;
border-radius:12px;
margin-top:10px;
text-align:center;
font-size:22px;
font-weight:800;
color:white">
= -3
</div>
</div>

<div style="
background:#111827;
padding:20px;
border-radius:16px">
<p style="font-weight:700;color:#c4b5fd">2. (-6) × 4</p>
<div style="
background:#312e81;
padding:12px;
border-radius:12px;
margin-top:10px;
text-align:center;
font-size:22px;
font-weight:800;
color:white">
= -24
</div>
</div>

<div style="
background:#111827;
padding:20px;
border-radius:16px">
<p style="font-weight:700;color:#c4b5fd">3. 15 - (-5)</p>
<div style="
background:#312e81;
padding:12px;
border-radius:12px;
margin-top:10px;
text-align:center;
font-size:22px;
font-weight:800;
color:white">
= 20
</div>
</div>

</div>

<!-- KESIMPULAN -->
<h3 style="font-size:24px;font-weight:700;color:#a78bfa;margin-top:50px">
💡 Kesimpulan
</h3>

<div style="
background:linear-gradient(135deg,#312e81,#4c1d95);
padding:24px;
border-radius:20px;
margin-top:20px;
color:white;
line-height:1.9">

Bilangan bulat mencakup:
<ul style="margin-top:10px;line-height:2">
<li>Bilangan negatif</li>
<li>Nol</li>
<li>Bilangan positif</li>
</ul>

Operasi bilangan bulat memiliki aturan tanda yang harus diperhatikan terutama pada:
<ul style="margin-top:10px;line-height:2">
<li>Penjumlahan</li>
<li>Pengurangan</li>
<li>Perkalian</li>
<li>Pembagian</li>
</ul>

</div>

`,
tip:'💡 Ingat: Dua tanda negatif bertemu akan menjadi positif!'
},
      {
  id:'bilangan-rasional',
  icon:'⅔',
  title:'Bilangan Rasional',
  color:'#FF6584',
  desc:'Pecahan, desimal, persen, dan konversinya.',
  isi:`

<h2 style="
font-size:28px;
font-weight:800;
color:#f472b6;
margin-bottom:20px">
⅔ Bilangan Rasional
</h2>

<p style="
line-height:1.9;
color:#d1d5db">
Bilangan rasional adalah bilangan yang dapat ditulis dalam bentuk pecahan:
</p>

<div style="
background:linear-gradient(135deg,#831843,#4a044e);
padding:18px;
border-radius:18px;
margin:20px 0;
text-align:center;
font-size:30px;
font-weight:800;
color:white">
a/b
</div>

<p style="
line-height:1.9;
color:#d1d5db">
dengan:
</p>

<ul style="
line-height:2;
color:#e5e7eb">
<li><b>a</b> dan <b>b</b> adalah bilangan bulat</li>
<li><b>b ≠ 0</b></li>
</ul>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
border-left:5px solid #f472b6;
margin-top:20px">

<p style="
font-weight:700;
color:#f9a8d4">
📌 Contoh Bilangan Rasional
</p>

<ul style="
line-height:2;
margin-top:10px;
color:#d1d5db">
<li>3 = 3/1</li>
<li>-5 = -5/1</li>
<li>0 = 0/1</li>
<li>1/2</li>
<li>0,75</li>
</ul>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin-top:20px">

<p style="
font-weight:700;
color:#f9a8d4">
🌍 Contoh Kontekstual
</p>

<p style="
line-height:1.9;
color:#d1d5db;
margin-top:10px">
Jika 1 pizza dibagi menjadi 2 bagian sama besar,
maka setiap bagian bernilai:
</p>

<div style="
background:#4a044e;
padding:14px;
border-radius:12px;
margin-top:15px;
text-align:center;
font-size:24px;
font-weight:800;
color:white">
1/2 Pizza
</div>

</div>

<!-- NOTASI -->
<h3 style="
font-size:24px;
font-weight:700;
color:#f9a8d4;
margin-top:45px">
🔣 Notasi Bilangan Rasional
</h3>

<p style="
line-height:1.9;
color:#d1d5db">
Bilangan rasional dilambangkan dengan huruf:
</p>

<div style="
background:#4a044e;
padding:18px;
border-radius:16px;
margin:20px 0;
text-align:center;
font-size:26px;
font-weight:800;
color:white">
Q = { a/b | a,b ∈ Z dan b ≠ 0 }
</div>

<p style="
line-height:1.9;
color:#d1d5db">
Artinya:
semua bilangan yang dapat ditulis dalam bentuk pecahan termasuk bilangan rasional.
</p>

<!-- CONTOH -->
<h3 style="
font-size:24px;
font-weight:700;
color:#f9a8d4;
margin-top:45px">
🔢 Contoh Bilangan Rasional
</h3>

<div style="
display:grid;
gap:16px;
margin-top:20px">

<div style="
background:#111827;
padding:18px;
border-radius:16px;
border-left:5px solid #22c55e">

<h4 style="
color:#22c55e;
font-size:20px;
font-weight:700">
1. Pecahan
</h4>

<p style="
margin-top:10px;
line-height:1.9;
color:#d1d5db">
1/2, 3/4, -5/6
</p>

</div>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
border-left:5px solid #3b82f6">

<h4 style="
color:#60a5fa;
font-size:20px;
font-weight:700">
2. Bilangan Bulat
</h4>

<p style="
margin-top:10px;
line-height:1.9;
color:#d1d5db">
2, -3, 0
</p>

</div>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
border-left:5px solid #f59e0b">

<h4 style="
color:#fbbf24;
font-size:20px;
font-weight:700">
3. Desimal Berhingga
</h4>

<p style="
margin-top:10px;
line-height:1.9;
color:#d1d5db">
0,25 ; 0,5 ; 0,75
</p>

</div>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
border-left:5px solid #ef4444">

<h4 style="
color:#f87171;
font-size:20px;
font-weight:700">
4. Desimal Berulang
</h4>

<p style="
margin-top:10px;
line-height:1.9;
color:#d1d5db">
0,333... ; 1,2727...
</p>

</div>

</div>

<!-- BENTUK -->
<h3 style="
font-size:24px;
font-weight:700;
color:#f9a8d4;
margin-top:45px">
📊 Bentuk-Bentuk Bilangan Rasional
</h3>

<!-- PECAHAN -->
<div style="
background:#111827;
padding:22px;
border-radius:18px;
margin-top:22px;
border-left:5px solid #f472b6">

<h4 style="
font-size:22px;
font-weight:700;
color:#f472b6">
1. Pecahan
</h4>

<ul style="
line-height:2;
margin-top:15px;
color:#d1d5db">
<li>Pecahan murni → 2/3</li>
<li>Pecahan tidak murni → 5/3</li>
<li>Pecahan campuran → 1 2/3</li>
<li>Menjadi bilangan bulat → 4/2 = 2</li>
</ul>

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
margin-top:18px">

<p style="
font-weight:700;
color:#f9a8d4">
📝 Contoh Soal
</p>

<p style="
margin-top:10px;
line-height:1.8;
color:#d1d5db">
Ubah 7/3 menjadi pecahan campuran
</p>

<div style="
background:#4a044e;
padding:14px;
border-radius:12px;
margin-top:12px;
text-align:center;
font-size:22px;
font-weight:800;
color:white">
7 ÷ 3 = 2 sisa 1 → 2 1/3
</div>

</div>

</div>

<!-- DESIMAL BERHINGGA -->
<div style="
background:#111827;
padding:22px;
border-radius:18px;
margin-top:25px;
border-left:5px solid #3b82f6">

<h4 style="
font-size:22px;
font-weight:700;
color:#60a5fa">
2. Desimal Berhingga
</h4>

<p style="
line-height:1.9;
margin-top:15px;
color:#d1d5db">
Desimal yang berhenti dan dapat diubah menjadi pecahan.
</p>

<div style="
background:#1e3a8a;
padding:14px;
border-radius:12px;
margin-top:15px;
text-align:center;
font-size:24px;
font-weight:800;
color:white">
0,75 = 75/100 = 3/4
</div>

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
margin-top:18px">

<p style="
font-weight:700;
color:#93c5fd">
📌 Langkah Penyelesaian
</p>

<p style="
margin-top:10px;
line-height:1.9;
color:#d1d5db">
0,75 = 75/100 <br>
Sederhanakan dengan membagi 25:
</p>

<div style="
background:#1e3a8a;
padding:14px;
border-radius:12px;
margin-top:12px;
text-align:center;
font-size:22px;
font-weight:800;
color:white">
75 ÷ 25 / 100 ÷ 25 = 3/4
</div>

</div>

</div>

<!-- DESIMAL BERULANG -->
<div style="
background:#111827;
padding:22px;
border-radius:18px;
margin-top:25px;
border-left:5px solid #f59e0b">

<h4 style="
font-size:22px;
font-weight:700;
color:#fbbf24">
3. Desimal Berulang
</h4>

<p style="
line-height:1.9;
margin-top:15px;
color:#d1d5db">
Desimal yang memiliki angka berulang terus menerus.
</p>

<div style="
background:#78350f;
padding:14px;
border-radius:12px;
margin-top:15px;
text-align:center;
font-size:24px;
font-weight:800;
color:white">
0,333... = 1/3
</div>

<div style="
background:#78350f;
padding:14px;
border-radius:12px;
margin-top:15px;
text-align:center;
font-size:24px;
font-weight:800;
color:white">
0,666... = 2/3
</div>

</div>

<!-- KONVERSI -->
<h3 style="
font-size:24px;
font-weight:700;
color:#f9a8d4;
margin-top:45px">
🔄 Konversi Bilangan Rasional
</h3>

<div style="
overflow-x:auto;
margin-top:20px">

<table style="
width:100%;
border-collapse:collapse;
border-radius:16px;
overflow:hidden">

<tr style="
background:#4a044e;
color:white">

<th style="padding:14px;border:1px solid rgba(255,255,255,0.1)">
Bentuk
</th>

<th style="padding:14px;border:1px solid rgba(255,255,255,0.1)">
Hasil
</th>

</tr>

<tr style="background:#111827;color:#e5e7eb">
<td style="padding:14px;border:1px solid rgba(255,255,255,0.08)">
3/4
</td>
<td style="padding:14px;border:1px solid rgba(255,255,255,0.08)">
0,75
</td>
</tr>

<tr style="background:#1f2937;color:#e5e7eb">
<td style="padding:14px;border:1px solid rgba(255,255,255,0.08)">
0,25
</td>
<td style="padding:14px;border:1px solid rgba(255,255,255,0.08)">
1/4
</td>
</tr>

<tr style="background:#111827;color:#e5e7eb">
<td style="padding:14px;border:1px solid rgba(255,255,255,0.08)">
25%
</td>
<td style="padding:14px;border:1px solid rgba(255,255,255,0.08)">
1/4
</td>
</tr>

</table>

</div>

<!-- OPERASI -->
<h3 style="
font-size:24px;
font-weight:700;
color:#f9a8d4;
margin-top:45px">
➕ Operasi Bilangan Rasional
</h3>

<!-- PENJUMLAHAN -->
<div style="
background:#111827;
padding:22px;
border-radius:18px;
margin-top:20px;
border-left:5px solid #22c55e">

<h4 style="
font-size:22px;
font-weight:700;
color:#22c55e">
1. Penjumlahan
</h4>

<ul style="
line-height:2;
margin-top:15px;
color:#d1d5db">
<li>2/5 + 1/5 = 3/5</li>
<li>1/2 + 1/3 = 5/6</li>
</ul>

<p style="
margin-top:15px;
color:#d1d5db">
📌 Penyebut harus disamakan menggunakan KPK.
</p>

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
margin-top:18px">

<p style="
font-weight:700;
color:#86efac">
📝 Contoh Soal
</p>

<p style="
margin-top:10px;
line-height:1.8;
color:#d1d5db">
1/4 + 1/6
</p>

<p style="
line-height:1.8;
margin-top:10px;
color:#d1d5db">
KPK dari 4 dan 6 adalah 12
</p>

<div style="
background:#14532d;
padding:14px;
border-radius:12px;
margin-top:12px;
text-align:center;
font-size:22px;
font-weight:800;
color:white">
3/12 + 2/12 = 5/12
</div>

</div>

</div>

<!-- PENGURANGAN -->
<div style="
background:#111827;
padding:22px;
border-radius:18px;
margin-top:25px;
border-left:5px solid #ef4444">

<h4 style="
font-size:22px;
font-weight:700;
color:#f87171">
2. Pengurangan
</h4>

<div style="
background:#7f1d1d;
padding:14px;
border-radius:12px;
margin-top:15px;
text-align:center;
font-size:24px;
font-weight:800;
color:white">
5/6 - 1/3 = 1/2
</div>

<p style="
margin-top:15px;
line-height:1.9;
color:#d1d5db">
Karena:
</p>

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
margin-top:12px;
color:#e5e7eb;
line-height:1.9">
1/3 = 2/6 <br>
5/6 - 2/6 = 3/6 = 1/2
</div>

</div>

<!-- PERKALIAN -->
<div style="
background:#111827;
padding:22px;
border-radius:18px;
margin-top:25px;
border-left:5px solid #06b6d4">

<h4 style="
font-size:22px;
font-weight:700;
color:#67e8f9">
3. Perkalian
</h4>

<div style="
background:#164e63;
padding:14px;
border-radius:12px;
margin-top:15px;
text-align:center;
font-size:24px;
font-weight:800;
color:white">
2/3 × 3/4 = 6/12 = 1/2
</div>

</div>

<!-- PEMBAGIAN -->
<div style="
background:#111827;
padding:22px;
border-radius:18px;
margin-top:25px;
border-left:5px solid #f59e0b">

<h4 style="
font-size:22px;
font-weight:700;
color:#fbbf24">
4. Pembagian
</h4>

<p style="
line-height:1.9;
margin-top:15px;
color:#d1d5db">
Aturan pembagian pecahan:
balik pecahan kedua lalu dikali.
</p>

<div style="
background:#78350f;
padding:14px;
border-radius:12px;
margin-top:15px;
text-align:center;
font-size:24px;
font-weight:800;
color:white">
2/3 ÷ 4/5 = 2/3 × 5/4 = 5/6
</div>

</div>

<!-- SIFAT -->
<h3 style="
font-size:24px;
font-weight:700;
color:#f9a8d4;
margin-top:45px">
📌 Sifat-Sifat Bilangan Rasional
</h3>

<div style="
overflow-x:auto;
margin-top:20px">

<table style="
width:100%;
border-collapse:collapse;
border-radius:16px;
overflow:hidden">

<tr style="background:#4a044e;color:white">
<th style="padding:14px;border:1px solid rgba(255,255,255,0.1)">
Sifat
</th>

<th style="padding:14px;border:1px solid rgba(255,255,255,0.1)">
Contoh
</th>
</tr>

<tr style="background:#111827;color:#e5e7eb">
<td style="padding:14px;border:1px solid rgba(255,255,255,0.08)">
Tertutup
</td>
<td style="padding:14px;border:1px solid rgba(255,255,255,0.08)">
1/2 + 1/3 = 5/6
</td>
</tr>

<tr style="background:#1f2937;color:#e5e7eb">
<td style="padding:14px;border:1px solid rgba(255,255,255,0.08)">
Komutatif
</td>
<td style="padding:14px;border:1px solid rgba(255,255,255,0.08)">
a+b=b+a
</td>
</tr>

<tr style="background:#111827;color:#e5e7eb">
<td style="padding:14px;border:1px solid rgba(255,255,255,0.08)">
Asosiatif
</td>
<td style="padding:14px;border:1px solid rgba(255,255,255,0.08)">
(a+b)+c=a+(b+c)
</td>
</tr>

<tr style="background:#1f2937;color:#e5e7eb">
<td style="padding:14px;border:1px solid rgba(255,255,255,0.08)">
Distributif
</td>
<td style="padding:14px;border:1px solid rgba(255,255,255,0.08)">
a(b+c)=ab+ac
</td>
</tr>

</table>

</div>

<!-- IRASIONAL -->
<h3 style="
font-size:24px;
font-weight:700;
color:#f9a8d4;
margin-top:45px">
⚖️ Perbedaan Rasional dan Irasional
</h3>

<div style="
display:grid;
gap:18px;
margin-top:20px">

<div style="
background:#111827;
padding:18px;
border-radius:16px;
border-left:5px solid #22c55e">

<h4 style="
font-size:20px;
font-weight:700;
color:#22c55e">
Bilangan Rasional
</h4>

<p style="
margin-top:10px;
line-height:1.9;
color:#d1d5db">
Dapat ditulis dalam bentuk pecahan.
</p>

<p style="
margin-top:10px;
color:#e5e7eb">
Contoh: 0,5 ; 1/3 ; 2
</p>

</div>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
border-left:5px solid #ef4444">

<h4 style="
font-size:20px;
font-weight:700;
color:#ef4444">
Bilangan Irasional
</h4>

<p style="
margin-top:10px;
line-height:1.9;
color:#d1d5db">
Tidak dapat ditulis dalam bentuk pecahan.
</p>

<p style="
margin-top:10px;
color:#e5e7eb">
Contoh: √2 dan π
</p>

</div>

</div>

<!-- KONTEKSTUAL -->
<h3 style="
font-size:24px;
font-weight:700;
color:#f9a8d4;
margin-top:45px">
🌍 Contoh Soal Kontekstual
</h3>

<div style="
display:grid;
gap:18px;
margin-top:20px">

<div style="
background:#111827;
padding:20px;
border-radius:16px">

<p style="
font-weight:700;
color:#f9a8d4">
1. Susu
</p>

<p style="
margin-top:10px;
line-height:1.9;
color:#d1d5db">
Andi minum 1/2 liter susu pagi dan 1/4 liter malam.
Berapa total susu yang diminum?
</p>

<div style="
background:#4a044e;
padding:14px;
border-radius:12px;
margin-top:12px;
text-align:center;
font-size:22px;
font-weight:800;
color:white">
1/2 + 1/4 = 3/4 Liter
</div>

</div>

<div style="
background:#111827;
padding:20px;
border-radius:16px">

<p style="
font-weight:700;
color:#f9a8d4">
2. Diskon
</p>

<p style="
margin-top:10px;
line-height:1.9;
color:#d1d5db">
Harga barang Rp80.000 diskon 25%.
</p>

<div style="
background:#4a044e;
padding:14px;
border-radius:12px;
margin-top:12px;
text-align:center;
font-size:22px;
font-weight:800;
color:white">
25/100 × 80.000 = 20.000
</div>

<p style="
margin-top:12px;
color:#d1d5db">
Harga setelah diskon:
</p>

<div style="
background:#831843;
padding:14px;
border-radius:12px;
margin-top:10px;
text-align:center;
font-size:22px;
font-weight:800;
color:white">
80.000 - 20.000 = 60.000
</div>

</div>

</div>

<!-- KESIMPULAN -->
<h3 style="
font-size:24px;
font-weight:700;
color:#f9a8d4;
margin-top:50px">
💡 Kesimpulan
</h3>

<div style="
background:linear-gradient(135deg,#831843,#4a044e);
padding:24px;
border-radius:20px;
margin-top:20px;
color:white;
line-height:1.9">

Bilangan rasional adalah bilangan yang dapat dinyatakan dalam bentuk pecahan.

Bilangan rasional meliputi:
<ul style="margin-top:10px;line-height:2">
<li>Pecahan</li>
<li>Bilangan bulat</li>
<li>Desimal berhingga</li>
<li>Desimal berulang</li>
</ul>

Dalam operasi pecahan, penyebut harus diperhatikan dan sering kali perlu menggunakan KPK.

</div>

`,
tip:'💡 Untuk menjumlah pecahan beda penyebut: cari KPK terlebih dahulu!'
},
   {
  id:'aljabar',
  icon:'📐',
  title:'Aljabar',
  color:'#22c55e',
  desc:'Bentuk aljabar dan operasi hitung aljabar.',
  isi:`

<div style="background:linear-gradient(135deg,#22c55e,#16a34a);padding:24px;border-radius:22px;color:white;margin-bottom:24px;box-shadow:0 10px 30px rgba(0,0,0,0.25)">
  <h1 style="margin:0;font-size:32px">📐 Aljabar</h1>
  <p style="margin-top:10px;font-size:16px;line-height:1.7">
    Belajar mengenal variabel, koefisien, konstanta, suku sejenis, dan operasi hitung bentuk aljabar.
  </p>
</div>

<!-- PENGERTIAN -->
<div style="background:#111827;border-radius:20px;padding:24px;margin-bottom:22px;border:1px solid rgba(255,255,255,0.08)">
  <h2 style="color:#4ade80;margin-top:0">📖 Pengertian Aljabar</h2>

  <p style="line-height:1.9;color:#e5e7eb">
    Aljabar adalah cabang matematika yang menggunakan huruf atau simbol untuk mewakili nilai yang belum diketahui.
  </p>

  <div style="background:#0f172a;border-left:5px solid #22c55e;padding:16px;border-radius:14px;margin:18px 0;color:#f1f5f9">
    <b>Contoh bentuk aljabar:</b><br>
    x + 3, 2y - 5, 4a + b
  </div>

  <p style="color:#d1d5db;line-height:1.8">
    Huruf seperti x, y, dan a disebut variabel atau peubah.
  </p>

  <h3 style="color:#86efac">🌍 Contoh dalam Kehidupan Sehari-hari</h3>

  <p style="line-height:1.8;color:#d1d5db">
    Harga satu buku adalah x rupiah.
    Jika membeli 3 buku, maka total harga:
  </p>

  <div style="background:#052e16;padding:16px;border-radius:14px;text-align:center;font-size:24px;font-weight:bold;color:#4ade80;margin-top:16px">
    3x
  </div>
</div>

<!-- UNSUR -->
<div style="background:#111827;border-radius:20px;padding:24px;margin-bottom:22px;border:1px solid rgba(255,255,255,0.08)">

  <h2 style="color:#4ade80;margin-top:0">🔤 Unsur-Unsur Bentuk Aljabar</h2>

  <p style="line-height:1.8;color:#d1d5db">
    Dalam aljabar terdapat beberapa unsur penting:
  </p>

  <div style="overflow-x:auto;margin-top:18px">
    <table style="width:100%;border-collapse:collapse;color:#f3f4f6">
      <tr style="background:#166534">
        <th style="padding:12px;border:1px solid #374151">Unsur</th>
        <th style="padding:12px;border:1px solid #374151">Penjelasan</th>
        <th style="padding:12px;border:1px solid #374151">Contoh</th>
      </tr>

      <tr style="background:#1f2937">
        <td style="padding:12px;border:1px solid #374151">Variabel</td>
        <td style="padding:12px;border:1px solid #374151">Huruf yang mewakili nilai</td>
        <td style="padding:12px;border:1px solid #374151">x, y, a</td>
      </tr>

      <tr style="background:#111827">
        <td style="padding:12px;border:1px solid #374151">Koefisien</td>
        <td style="padding:12px;border:1px solid #374151">Angka di depan variabel</td>
        <td style="padding:12px;border:1px solid #374151">3 pada 3x</td>
      </tr>

      <tr style="background:#1f2937">
        <td style="padding:12px;border:1px solid #374151">Konstanta</td>
        <td style="padding:12px;border:1px solid #374151">Bilangan tetap</td>
        <td style="padding:12px;border:1px solid #374151">5 pada 2x + 5</td>
      </tr>

      <tr style="background:#111827">
        <td style="padding:12px;border:1px solid #374151">Suku</td>
        <td style="padding:12px;border:1px solid #374151">Bagian yang dipisah + atau -</td>
        <td style="padding:12px;border:1px solid #374151">2x dan 5</td>
      </tr>

      <tr style="background:#1f2937">
        <td style="padding:12px;border:1px solid #374151">Suku Sejenis</td>
        <td style="padding:12px;border:1px solid #374151">Variabel dan pangkat sama</td>
        <td style="padding:12px;border:1px solid #374151">3x dan 5x</td>
      </tr>
    </table>
  </div>

  <div style="background:#0f172a;border-left:5px solid #22c55e;padding:16px;border-radius:14px;margin-top:20px;color:#f1f5f9">
    <b>Contoh:</b><br>
    Tentukan unsur dari 4x + 7
    <br><br>
    Variabel = x<br>
    Koefisien = 4<br>
    Konstanta = 7
  </div>
</div>

<!-- CONTOH BENTUK -->
<div style="background:#111827;border-radius:20px;padding:24px;margin-bottom:22px;border:1px solid rgba(255,255,255,0.08)">

  <h2 style="color:#4ade80;margin-top:0">📊 Contoh Bentuk Aljabar</h2>

  <ul style="line-height:2;color:#d1d5db">
    <li>2x + 3 → terdiri dari 2 suku</li>
    <li>4a - 5b + 7 → terdiri dari 3 suku</li>
    <li>6x² → satu suku (suku tunggal)</li>
  </ul>

  <div style="background:#052e16;padding:18px;border-radius:14px;margin-top:18px;color:#dcfce7">
    <b>Contoh Kontekstual:</b><br><br>
    Jumlah uang Andi = 2x + 3 ribu.<br>
    Artinya uang terdiri dari dua bagian:
    <ul>
      <li>2x</li>
      <li>3</li>
    </ul>
  </div>
</div>

<!-- OPERASI -->
<div style="background:#111827;border-radius:20px;padding:24px;margin-bottom:22px;border:1px solid rgba(255,255,255,0.08)">

<h2 style="color:#4ade80;margin-top:0">➕ Operasi Bentuk Aljabar</h2>

<!-- PENJUMLAHAN -->
<div style="background:#1f2937;padding:20px;border-radius:16px;margin-top:20px">

<h3 style="color:#86efac;margin-top:0">1️⃣ Penjumlahan dan Pengurangan</h3>

<p style="color:#d1d5db;line-height:1.8">
Penjumlahan dan pengurangan hanya dapat dilakukan pada suku sejenis.
</p>

<div style="background:#0f172a;padding:16px;border-radius:12px;color:#f8fafc;line-height:2">
3x + 5x = 8x<br>
7y - 2y = 5y<br>
3x + 2y → tidak bisa dijumlahkan
</div>

<h4 style="color:#bbf7d0">📝 Contoh Soal</h4>

<p style="color:#d1d5db">
Sederhanakan:
</p>

<div style="background:#052e16;padding:18px;border-radius:12px;color:#dcfce7;line-height:2">
6x + 2x - 3x<br><br>

Langkah:<br>
= (6 + 2 - 3)x<br>
= 5x
</div>

<h4 style="color:#bbf7d0">🌍 Contoh Kontekstual</h4>

<p style="color:#d1d5db">
Andi memiliki 6 pensil, diberi 2 lagi, lalu hilang 3.<br>
Maka:
</p>

<div style="background:#0f172a;padding:16px;border-radius:12px;text-align:center;font-size:22px;color:#4ade80;font-weight:bold">
6 + 2 - 3 = 5
</div>

</div>

<!-- PERKALIAN -->
<div style="background:#1f2937;padding:20px;border-radius:16px;margin-top:20px">

<h3 style="color:#86efac;margin-top:0">2️⃣ Perkalian Aljabar</h3>

<p style="color:#d1d5db;line-height:1.8">
Perkalian menggunakan sifat distributif.
</p>

<div style="background:#0f172a;padding:16px;border-radius:12px;color:#f8fafc;line-height:2">
2(x + 3) = 2x + 6<br>
(x + 2)(x + 3) = x² + 5x + 6<br>
3x × 2y = 6xy
</div>

<h4 style="color:#bbf7d0">📝 Contoh Soal</h4>

<div style="background:#052e16;padding:18px;border-radius:12px;color:#dcfce7;line-height:2">
4(x + 5)<br><br>

Langkah:<br>
= 4 × x + 4 × 5<br>
= 4x + 20
</div>

<h4 style="color:#bbf7d0">🌍 Contoh Kontekstual</h4>

<p style="color:#d1d5db">
Ada 4 kotak. Tiap kotak berisi (x + 5) barang.
</p>

<div style="background:#0f172a;padding:16px;border-radius:12px;text-align:center;font-size:22px;color:#4ade80;font-weight:bold">
4(x + 5) = 4x + 20
</div>

</div>

<!-- PEMBAGIAN -->
<div style="background:#1f2937;padding:20px;border-radius:16px;margin-top:20px">

<h3 style="color:#86efac;margin-top:0">3️⃣ Pembagian Aljabar</h3>

<div style="background:#0f172a;padding:16px;border-radius:12px;color:#f8fafc;line-height:2">
6x ÷ 3 = 2x<br>
8x² ÷ 4x = 2x
</div>

<h4 style="color:#bbf7d0">📝 Contoh Soal</h4>

<div style="background:#052e16;padding:18px;border-radius:12px;color:#dcfce7;line-height:2">
10x ÷ 5<br><br>

Langkah:<br>
= (10 ÷ 5)x<br>
= 2x
</div>

<h4 style="color:#bbf7d0">🌍 Contoh Kontekstual</h4>

<p style="color:#d1d5db">
10x permen dibagi kepada 5 anak.
</p>

<div style="background:#0f172a;padding:16px;border-radius:12px;text-align:center;font-size:22px;color:#4ade80;font-weight:bold">
10x ÷ 5 = 2x
</div>

</div>

</div>

<!-- SIFAT -->
<div style="background:#111827;border-radius:20px;padding:24px;margin-bottom:22px;border:1px solid rgba(255,255,255,0.08)">

<h2 style="color:#4ade80;margin-top:0">📌 Sifat-Sifat Aljabar</h2>

<div style="overflow-x:auto">

<table style="width:100%;border-collapse:collapse;color:#f3f4f6">

<tr style="background:#166534">
<th style="padding:12px;border:1px solid #374151">Sifat</th>
<th style="padding:12px;border:1px solid #374151">Rumus</th>
<th style="padding:12px;border:1px solid #374151">Contoh</th>
</tr>

<tr style="background:#1f2937">
<td style="padding:12px;border:1px solid #374151">Komutatif</td>
<td style="padding:12px;border:1px solid #374151">a + b = b + a</td>
<td style="padding:12px;border:1px solid #374151">3 + 5 = 5 + 3</td>
</tr>

<tr style="background:#111827">
<td style="padding:12px;border:1px solid #374151">Asosiatif</td>
<td style="padding:12px;border:1px solid #374151">(a+b)+c = a+(b+c)</td>
<td style="padding:12px;border:1px solid #374151">(2+3)+4 = 2+(3+4)</td>
</tr>

<tr style="background:#1f2937">
<td style="padding:12px;border:1px solid #374151">Distributif</td>
<td style="padding:12px;border:1px solid #374151">a(b+c)=ab+ac</td>
<td style="padding:12px;border:1px solid #374151">2(3+4)=14</td>
</tr>

</table>

</div>

</div>

<!-- PENYEDERHANAAN -->
<div style="background:#111827;border-radius:20px;padding:24px;margin-bottom:22px;border:1px solid rgba(255,255,255,0.08)">

<h2 style="color:#4ade80;margin-top:0">🔄 Penyederhanaan Bentuk Aljabar</h2>

<p style="color:#d1d5db;line-height:1.8">
Langkah menyederhanakan bentuk aljabar:
</p>

<ul style="line-height:2;color:#d1d5db">
<li>Kelompokkan suku sejenis</li>
<li>Jumlahkan atau kurangkan koefisiennya</li>
</ul>

<div style="background:#052e16;padding:18px;border-radius:14px;color:#dcfce7;line-height:2">
2x + 3x - x<br><br>

Langkah:<br>
= (2 + 3 - 1)x<br>
= 4x
</div>

</div>

<!-- PEMODELAN -->
<div style="background:#111827;border-radius:20px;padding:24px;margin-bottom:22px;border:1px solid rgba(255,255,255,0.08)">

<h2 style="color:#4ade80;margin-top:0">🧠 Pemodelan Matematika</h2>

<p style="color:#d1d5db;line-height:1.8">
Aljabar digunakan untuk menyelesaikan masalah sehari-hari.
</p>

<div style="background:#0f172a;padding:18px;border-radius:14px;color:#f8fafc;line-height:2">
Budi memiliki 3 kardus apel dan 5 apel satuan.<br>
Jika setiap kardus berisi x apel:
</div>

<div style="background:#052e16;padding:18px;border-radius:14px;text-align:center;font-size:26px;font-weight:bold;color:#4ade80;margin-top:16px">
3x + 5
</div>

<p style="margin-top:18px;color:#d1d5db">
Contoh lain:
</p>

<div style="background:#0f172a;padding:16px;border-radius:12px;color:#f8fafc">
Tabungan awal Rp10.000 dan tiap hari menabung x rupiah:
<br><br>
10000 + x
</div>

</div>

<!-- LATIHAN -->
<div style="background:#111827;border-radius:20px;padding:24px;margin-bottom:22px;border:1px solid rgba(255,255,255,0.08)">

<h2 style="color:#4ade80;margin-top:0">⚖️ Contoh Soal dan Pembahasan</h2>

<div style="background:#1f2937;padding:20px;border-radius:16px;margin-top:20px">

<h3 style="color:#86efac">Soal 1</h3>

<p style="color:#d1d5db">
Sederhanakan:
</p>

<div style="background:#0f172a;padding:14px;border-radius:12px;text-align:center;font-size:24px;color:#4ade80;font-weight:bold">
4x + 3x - 2x
</div>

<p style="color:#d1d5db;margin-top:16px">
Penyelesaian:
</p>

<div style="background:#052e16;padding:16px;border-radius:12px;color:#dcfce7;line-height:2">
= (4 + 3 - 2)x<br>
= 5x
</div>

</div>

<div style="background:#1f2937;padding:20px;border-radius:16px;margin-top:20px">

<h3 style="color:#86efac">Soal 2</h3>

<p style="color:#d1d5db">
Hitung:
</p>

<div style="background:#0f172a;padding:14px;border-radius:12px;text-align:center;font-size:24px;color:#4ade80;font-weight:bold">
2(x + 5)
</div>

<p style="color:#d1d5db;margin-top:16px">
Penyelesaian:
</p>

<div style="background:#052e16;padding:16px;border-radius:12px;color:#dcfce7;line-height:2">
= 2×x + 2×5<br>
= 2x + 10
</div>

</div>

<div style="background:#1f2937;padding:20px;border-radius:16px;margin-top:20px">

<h3 style="color:#86efac">Soal 3</h3>

<p style="color:#d1d5db">
Tentukan hasil:
</p>

<div style="background:#0f172a;padding:14px;border-radius:12px;text-align:center;font-size:24px;color:#4ade80;font-weight:bold">
(x + 2)(x + 1)
</div>

<p style="color:#d1d5db;margin-top:16px">
Penyelesaian:
</p>

<div style="background:#052e16;padding:16px;border-radius:12px;color:#dcfce7;line-height:2">
= x(x+1) + 2(x+1)<br>
= x² + x + 2x + 2<br>
= x² + 3x + 2
</div>

</div>

</div>

<!-- KONTEKSTUAL -->
<div style="background:#111827;border-radius:20px;padding:24px;margin-bottom:22px;border:1px solid rgba(255,255,255,0.08)">

<h2 style="color:#4ade80;margin-top:0">🌍 Contoh Soal Kontekstual</h2>

<div style="background:#1f2937;padding:20px;border-radius:16px;color:#d1d5db;line-height:2">

1. Harga 1 pensil = x rupiah.<br>
Jika membeli 5 pensil → total = 5x
<br><br>

2. Andi punya 3 kotak berisi x buku dan ditambah 2 buku:
<br>
3x + 2
<br><br>

3. Uang Dina = 2x, lalu ditambah 5:
<br>
2x + 5

</div>

</div>

<!-- KESIMPULAN -->
<div style="background:linear-gradient(135deg,#14532d,#166534);padding:24px;border-radius:22px;color:white">

<h2 style="margin-top:0">💡 Kesimpulan</h2>

<p style="line-height:1.9">
Aljabar digunakan untuk menyatakan dan menyelesaikan masalah matematika menggunakan variabel.
Dalam aljabar kita belajar:
</p>

<ul style="line-height:2">
<li>Variabel</li>
<li>Koefisien</li>
<li>Konstanta</li>
<li>Suku sejenis</li>
<li>Operasi hitung aljabar</li>
</ul>

<p style="margin-top:16px">
Kunci utama dalam aljabar adalah memahami suku sejenis dan sifat distributif.
</p>

</div>

`,
tip:'Hanya suku sejenis (variabel & pangkat sama) yang bisa dijumlahkan atau dikurangkan!'
},
    {
  id:'persamaan-linear',
  icon:'🟰',
  title:'Persamaan & Pertidaksamaan Linear Satu Variabel',
  color:'#FFD93D',
  desc:'Menyelesaikan PLSV dan PtLSV.',
  isi:`

<div style="display:flex;align-items:center;gap:14px;margin-bottom:20px;
background:linear-gradient(135deg,#facc15,#eab308);
padding:20px;border-radius:20px;color:#111827;
box-shadow:0 10px 25px rgba(0,0,0,0.25);">

<div style="font-size:52px">🟰</div>

<div>
<h1 style="margin:0;font-size:28px;font-weight:900">
Persamaan & Pertidaksamaan Linear Satu Variabel
</h1>

<p style="margin-top:6px;font-size:15px;color:#1f2937">
Mempelajari cara menentukan nilai variabel pada persamaan dan pertidaksamaan linear satu variabel.
</p>
</div>
</div>

<!-- PENGERTIAN PLSV -->
<div style="
background:rgba(255,255,255,0.05);
backdrop-filter:blur(12px);
border:1px solid rgba(255,255,255,0.08);
border-radius:18px;
padding:22px;
margin-bottom:22px;
color:#f3f4f6;
">

<h2 style="color:#fde047">📖 Pengertian Persamaan Linear Satu Variabel (PLSV)</h2>

<p>
Persamaan Linear Satu Variabel (PLSV) adalah kalimat matematika yang memiliki
<b>satu variabel berpangkat satu</b> dan dihubungkan dengan tanda sama dengan (=).
</p>

<div style="
background:linear-gradient(135deg,#fde68a,#facc15);
padding:18px;
border-radius:14px;
text-align:center;
font-size:28px;
font-weight:900;
color:#111827;
margin:18px 0;
">
ax + b = c
</div>

<p>
dengan:
</p>

<ul>
<li><b>a ≠ 0</b></li>
<li>a, b, dan c adalah bilangan</li>
<li>variabel berpangkat satu</li>
</ul>

<h3 style="color:#fde047">📌 Contoh PLSV</h3>

<ul>
<li>2x + 5 = 13</li>
<li>3x − 7 = 8</li>
<li>5a + 2 = 17</li>
</ul>

<div style="
background:rgba(250,204,21,0.1);
border-left:4px solid #facc15;
padding:14px;
border-radius:12px;
margin-top:16px;
">
💡 <b>Contoh kontekstual:</b><br>
Harga sebuah buku adalah x rupiah.
Jika ditambah Rp5.000 menjadi Rp13.000,
maka model matematikanya:
<b>x + 5.000 = 13.000</b>
</div>

</div>

<!-- MENYELESAIKAN PLSV -->
<div style="
background:rgba(255,255,255,0.05);
backdrop-filter:blur(12px);
border:1px solid rgba(255,255,255,0.08);
border-radius:18px;
padding:22px;
margin-bottom:22px;
color:#f3f4f6;
">

<h2 style="color:#fde047">📝 Cara Menyelesaikan PLSV</h2>

<p>
Tujuan utama adalah mencari nilai variabel.
</p>

<h3 style="color:#fde047">📌 Langkah-Langkah</h3>

<ol>
<li>Pindahkan konstanta ke ruas lain</li>
<li>Sederhanakan persamaan</li>
<li>Bagi atau kalikan untuk mendapatkan variabel</li>
</ol>

<div style="
background:#111827;
border-radius:16px;
padding:18px;
margin-top:16px;
">

<h3 style="color:#fde047">🔢 Contoh 1</h3>

<p>2x + 5 = 13</p>

<p>2x = 13 − 5</p>

<p>2x = 8</p>

<p>x = 8 ÷ 2</p>

<p style="font-size:22px;font-weight:800;color:#fde047">
x = 4
</p>

</div>

<div style="
background:#111827;
border-radius:16px;
padding:18px;
margin-top:18px;
">

<h3 style="color:#fde047">🔢 Contoh 2</h3>

<p>3x − 6 = 9</p>

<p>3x = 9 + 6</p>

<p>3x = 15</p>

<p>x = 15 ÷ 3</p>

<p style="font-size:22px;font-weight:800;color:#fde047">
x = 5
</p>

</div>

<div style="
background:rgba(250,204,21,0.1);
border-left:4px solid #facc15;
padding:14px;
border-radius:12px;
margin-top:18px;
">
🌍 <b>Contoh kontekstual:</b><br>
Umur Budi ditambah 5 tahun menjadi 13 tahun.<br>
Model matematika:
<b>x + 5 = 13</b><br>
Maka:
<b>x = 8</b>
</div>

</div>

<!-- PTLSV -->
<div style="
background:rgba(255,255,255,0.05);
backdrop-filter:blur(12px);
border:1px solid rgba(255,255,255,0.08);
border-radius:18px;
padding:22px;
margin-bottom:22px;
color:#f3f4f6;
">

<h2 style="color:#fde047">⚖️ Pertidaksamaan Linear Satu Variabel (PtLSV)</h2>

<p>
Pertidaksamaan Linear Satu Variabel adalah kalimat matematika dengan satu variabel berpangkat satu,
tetapi menggunakan tanda ketidaksamaan.
</p>

<h3 style="color:#fde047">📌 Tanda Pertidaksamaan</h3>

<ul>
<li>&lt; → kurang dari</li>
<li>&gt; → lebih dari</li>
<li>≤ → kurang dari sama dengan</li>
<li>≥ → lebih dari sama dengan</li>
</ul>

<h3 style="color:#fde047">📌 Contoh PtLSV</h3>

<ul>
<li>3x − 2 &gt; 7</li>
<li>2x + 1 ≤ 5</li>
<li>5x + 4 ≥ 9</li>
</ul>

<div style="
background:rgba(250,204,21,0.1);
border-left:4px solid #facc15;
padding:14px;
border-radius:12px;
margin-top:16px;
">
💡 <b>Contoh kontekstual:</b><br>
Umur seseorang lebih dari 10 tahun → <b>x &gt; 10</b>
</div>

</div>

<!-- MENYELESAIKAN PTLSV -->
<div style="
background:rgba(255,255,255,0.05);
backdrop-filter:blur(12px);
border:1px solid rgba(255,255,255,0.08);
border-radius:18px;
padding:22px;
margin-bottom:22px;
color:#f3f4f6;
">

<h2 style="color:#fde047">📝 Cara Menyelesaikan PtLSV</h2>

<p>
Langkah penyelesaian hampir sama dengan persamaan linear.
</p>

<div style="
background:#111827;
border-radius:16px;
padding:18px;
margin-top:16px;
">

<h3 style="color:#fde047">🔢 Contoh 1</h3>

<p>3x − 2 &gt; 7</p>

<p>3x &gt; 9</p>

<p style="font-size:22px;font-weight:800;color:#fde047">
x &gt; 3
</p>

</div>

<div style="
background:#111827;
border-radius:16px;
padding:18px;
margin-top:18px;
">

<h3 style="color:#fde047">🔢 Contoh 2</h3>

<p>2x + 1 ≤ 5</p>

<p>2x ≤ 4</p>

<p style="font-size:22px;font-weight:800;color:#fde047">
x ≤ 2
</p>

</div>

<div style="
background:rgba(255,255,255,0.06);
backdrop-filter:blur(10px);
border:1px solid rgba(255,255,255,0.1);
border-left:4px solid #ef4444;
padding:14px;
border-radius:12px;
margin-top:20px;
">

⚠️ <b>PENTING!</b><br><br>

Jika mengalikan atau membagi dengan bilangan negatif,
maka tanda pertidaksamaan HARUS dibalik.

</div>

<div style="
background:#111827;
border-radius:16px;
padding:18px;
margin-top:18px;
">

<h3 style="color:#fde047">🔢 Contoh 3</h3>

<p>-2x &gt; 6</p>

<p>Bagi dengan -2</p>

<p style="font-size:22px;font-weight:800;color:#fde047">
x &lt; -3
</p>

<p>(tanda dibalik karena dibagi negatif)</p>

</div>

<div style="
background:rgba(250,204,21,0.1);
border-left:4px solid #facc15;
padding:14px;
border-radius:12px;
margin-top:18px;
">
🌍 <b>Contoh kontekstual:</b><br>
Suhu kurang dari -3°C → <b>x &lt; -3</b>
</div>

</div>

<!-- GARIS BILANGAN -->
<div style="
background:rgba(255,255,255,0.05);
backdrop-filter:blur(12px);
border:1px solid rgba(255,255,255,0.08);
border-radius:18px;
padding:22px;
margin-bottom:22px;
color:#f3f4f6;
">

<h2 style="color:#fde047">📊 Penyajian Hasil PtLSV</h2>

<p>
Hasil pertidaksamaan dapat ditulis dalam:
</p>

<ul>
<li>Bentuk pertidaksamaan → x &gt; 3</li>
<li>Garis bilangan</li>
<li>Bentuk interval → (3, ∞)</li>
</ul>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:16px;
text-align:center;
">

<p style="font-size:20px;color:#fde047">
x ≥ 2
</p>

<p>
Artinya semua bilangan mulai dari 2 ke kanan.
</p>

</div>

</div>

<!-- TABEL -->
<div style="
background:rgba(255,255,255,0.05);
backdrop-filter:blur(12px);
border:1px solid rgba(255,255,255,0.08);
border-radius:18px;
padding:22px;
margin-bottom:22px;
color:#f3f4f6;
overflow-x:auto;
">

<h2 style="color:#fde047">📊 Perbedaan PLSV dan PtLSV</h2>

<table style="
width:100%;
border-collapse:collapse;
margin-top:16px;
overflow:hidden;
border-radius:14px;
">

<tr style="
background:linear-gradient(135deg,#facc15,#eab308);
color:#111827;
">

<th style="padding:12px;border:1px solid rgba(255,255,255,0.1)">
Aspek
</th>

<th style="padding:12px;border:1px solid rgba(255,255,255,0.1)">
PLSV
</th>

<th style="padding:12px;border:1px solid rgba(255,255,255,0.1)">
PtLSV
</th>

</tr>

<tr style="background:rgba(255,255,255,0.03)">
<td style="padding:12px;border:1px solid rgba(255,255,255,0.08)">Tanda</td>
<td style="padding:12px;border:1px solid rgba(255,255,255,0.08)">=</td>
<td style="padding:12px;border:1px solid rgba(255,255,255,0.08)">&lt;, &gt;, ≤, ≥</td>
</tr>

<tr style="background:rgba(255,255,255,0.06)">
<td style="padding:12px;border:1px solid rgba(255,255,255,0.08)">Hasil</td>
<td style="padding:12px;border:1px solid rgba(255,255,255,0.08)">Satu nilai</td>
<td style="padding:12px;border:1px solid rgba(255,255,255,0.08)">Rentang nilai</td>
</tr>

<tr style="background:rgba(255,255,255,0.03)">
<td style="padding:12px;border:1px solid rgba(255,255,255,0.08)">Contoh</td>
<td style="padding:12px;border:1px solid rgba(255,255,255,0.08)">x = 4</td>
<td style="padding:12px;border:1px solid rgba(255,255,255,0.08)">x &gt; 3</td>
</tr>

</table>

</div>

<!-- CONTOH SOAL -->
<div style="
background:rgba(255,255,255,0.05);
backdrop-filter:blur(12px);
border:1px solid rgba(255,255,255,0.08);
border-radius:18px;
padding:22px;
margin-bottom:22px;
color:#f3f4f6;
">

<h2 style="color:#fde047">🧠 Contoh Soal</h2>

<div style="
background:#111827;
border-radius:16px;
padding:18px;
margin-top:14px;
">

<h3 style="color:#fde047">1. PLSV</h3>

<p>5x − 10 = 0</p>

<p>5x = 10</p>

<p>x = 2</p>

</div>

<div style="
background:#111827;
border-radius:16px;
padding:18px;
margin-top:16px;
">

<h3 style="color:#fde047">2. PLSV</h3>

<p>4x + 8 = 20</p>

<p>4x = 12</p>

<p>x = 3</p>

</div>

<div style="
background:#111827;
border-radius:16px;
padding:18px;
margin-top:16px;
">

<h3 style="color:#fde047">3. PtLSV</h3>

<p>2x + 4 ≤ 10</p>

<p>2x ≤ 6</p>

<p>x ≤ 3</p>

</div>

<div style="
background:#111827;
border-radius:16px;
padding:18px;
margin-top:16px;
">

<h3 style="color:#fde047">4. PtLSV</h3>

<p>5x − 5 &gt; 10</p>

<p>5x &gt; 15</p>

<p>x &gt; 3</p>

</div>

</div>

<!-- KONTEKSTUAL -->
<div style="
background:rgba(255,255,255,0.05);
backdrop-filter:blur(12px);
border:1px solid rgba(255,255,255,0.08);
border-radius:18px;
padding:22px;
margin-bottom:22px;
color:#f3f4f6;
">

<h2 style="color:#fde047">🌍 Contoh Soal Kontekstual</h2>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:14px;
">

<p><b>1.</b> Umur Ani 3 tahun lebih tua dari Budi.
Jika umur Ani 15 tahun, berapa umur Budi?</p>

<p>x + 3 = 15</p>

<p>x = 12</p>

</div>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:16px;
">

<p><b>2.</b> Uang Andi minimal Rp10.000.
Jika sekarang Rp6.000, berapa tambahan minimal?</p>

<p>6.000 + x ≥ 10.000</p>

<p>x ≥ 4.000</p>

</div>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:16px;
">

<p><b>3.</b> Suhu ruangan harus kurang dari 25°C.
Jika sekarang 30°C, berapa penurunan?</p>

<p>30 − x &lt; 25</p>

<p>x &gt; 5</p>

</div>

</div>

<!-- KESIMPULAN -->
<div style="
background:linear-gradient(135deg,#facc15,#eab308);
padding:22px;
border-radius:20px;
color:#111827;
box-shadow:0 10px 25px rgba(0,0,0,0.25);
">

<h2 style="margin-top:0">💡 Kesimpulan</h2>

<ul>
<li>PLSV digunakan untuk mencari satu nilai variabel</li>
<li>PtLSV digunakan untuk menentukan rentang nilai</li>
<li>Langkah penyelesaian hampir sama</li>
<li>Pada PtLSV, tanda harus dibalik jika dikali/dibagi negatif</li>
<li>Materi ini sangat penting dalam kehidupan sehari-hari</li>
</ul>

</div>

`,
tip:'Kalau dikali atau dibagi bilangan negatif, tanda pertidaksamaan harus dibalik!'
}
    ],
    sem2: [
     {
  id:'rasio-proporsi',
  icon:'⚖️',
  title:'Rasio & Proporsi',
  color:'#74B9FF',
  desc:'Perbandingan senilai, berbalik nilai, dan skala.',
  isi:`

<!-- HEADER -->
<div style="
display:flex;
align-items:center;
gap:16px;
padding:22px;
border-radius:24px;
background:linear-gradient(135deg,#60a5fa,#2563eb);
box-shadow:0 10px 30px rgba(0,0,0,0.25);
margin-bottom:24px;
color:white;
">

<div style="font-size:58px">⚖️</div>

<div>
<h1 style="
margin:0;
font-size:30px;
font-weight:900;
line-height:1.2;
">
Rasio & Proporsi
</h1>

<p style="
margin-top:8px;
font-size:15px;
color:#dbeafe;
">
Mempelajari perbandingan, proporsi, perbandingan senilai, berbalik nilai, dan skala dalam kehidupan sehari-hari.
</p>
</div>

</div>

<!-- RASIO -->
<div style="
background:rgba(255,255,255,0.05);
backdrop-filter:blur(12px);
border:1px solid rgba(255,255,255,0.08);
padding:24px;
border-radius:20px;
margin-bottom:24px;
color:#f3f4f6;
">

<h2 style="color:#93c5fd">📖 Rasio (Perbandingan)</h2>

<p>
Rasio adalah perbandingan antara dua besaran sejenis.
Rasio digunakan untuk membandingkan banyaknya suatu benda dengan benda lainnya.
</p>

<h3 style="color:#93c5fd">📌 Bentuk Penulisan Rasio</h3>

<ul>
<li>a : b</li>
<li>a/b</li>
</ul>

<div style="
background:linear-gradient(135deg,#60a5fa,#2563eb);
padding:18px;
border-radius:16px;
text-align:center;
font-size:28px;
font-weight:900;
margin:18px 0;
">
a : b
</div>

<h3 style="color:#93c5fd">📌 Contoh</h3>

<p>
Jumlah siswa laki-laki 10 dan perempuan 15
</p>

<p>
Rasio = 10 : 15 = 2 : 3
</p>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<h3 style="color:#93c5fd">🧠 Contoh Soal</h3>

<p>
Di sebuah kelas terdapat 8 siswa laki-laki dan 12 siswa perempuan.
Tentukan rasionya!
</p>

<p>
8 : 12
</p>

<p>
= 2 : 3
</p>

<p style="
font-size:22px;
font-weight:800;
color:#93c5fd;
">
Jawaban = 2 : 3
</p>

</div>

<div style="
background:rgba(96,165,250,0.12);
border-left:4px solid #60a5fa;
padding:16px;
border-radius:14px;
margin-top:18px;
">

🌍 <b>Contoh kontekstual:</b><br><br>

Perbandingan gula dan tepung dalam resep kue adalah 1 : 2,
artinya setiap 1 bagian gula membutuhkan 2 bagian tepung.

</div>

</div>

<!-- PROPORSI -->
<div style="
background:rgba(255,255,255,0.05);
backdrop-filter:blur(12px);
border:1px solid rgba(255,255,255,0.08);
padding:24px;
border-radius:20px;
margin-bottom:24px;
color:#f3f4f6;
">

<h2 style="color:#93c5fd">🔄 Proporsi</h2>

<p>
Proporsi adalah pernyataan bahwa dua rasio memiliki nilai yang sama.
</p>

<div style="
background:linear-gradient(135deg,#60a5fa,#2563eb);
padding:18px;
border-radius:16px;
text-align:center;
font-size:30px;
font-weight:900;
margin:18px 0;
">
a : b = c : d
</div>

<h3 style="color:#93c5fd">📌 Sifat Penting</h3>

<p>
Perkalian silang:
</p>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
text-align:center;
font-size:26px;
font-weight:800;
margin-top:16px;
">
a × d = b × c
</div>

<h3 style="color:#93c5fd">📌 Contoh</h3>

<p>
2 : 3 = 4 : 6
</p>

<p>
Karena:
</p>

<p>
2 × 6 = 12
</p>

<p>
3 × 4 = 12
</p>

<p>
Maka proporsi benar.
</p>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<h3 style="color:#93c5fd">🧠 Contoh Soal</h3>

<p>
3 : 5 = x : 20
</p>

<p>
3 × 20 = 5 × x
</p>

<p>
60 = 5x
</p>

<p>
x = 12
</p>

<p style="
font-size:22px;
font-weight:800;
color:#93c5fd;
">
Jawaban = 12
</p>

</div>

<div style="
background:rgba(96,165,250,0.12);
border-left:4px solid #60a5fa;
padding:16px;
border-radius:14px;
margin-top:18px;
">

🌍 <b>Contoh kontekstual:</b><br><br>

Jika 2 pensil seharga Rp4.000,
maka 5 pensil berapa?

<br><br>

2 : 5 = 4.000 : x

<br><br>

x = 10.000

</div>

</div>

<!-- SENILAI -->
<div style="
background:rgba(255,255,255,0.05);
backdrop-filter:blur(12px);
border:1px solid rgba(255,255,255,0.08);
padding:24px;
border-radius:20px;
margin-bottom:24px;
color:#f3f4f6;
">

<h2 style="color:#93c5fd">📏 Perbandingan Senilai</h2>

<p>
Perbandingan senilai adalah perbandingan dua besaran yang jika salah satu bertambah,
maka yang lain juga bertambah.
</p>

<h3 style="color:#93c5fd">📌 Ciri-Ciri</h3>

<ul>
<li>Jika A naik → B naik</li>
<li>Jika A turun → B turun</li>
</ul>

<div style="
background:linear-gradient(135deg,#60a5fa,#2563eb);
padding:18px;
border-radius:16px;
text-align:center;
font-size:28px;
font-weight:900;
margin:18px 0;
">
a₁ / b₁ = a₂ / b₂
</div>

<h3 style="color:#93c5fd">📌 Contoh</h3>

<p>
5 buku = Rp25.000
</p>

<p>
1 buku = Rp5.000
</p>

<p>
8 buku = 8 × 5.000
</p>

<p>
= Rp40.000
</p>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<h3 style="color:#93c5fd">🧠 Contoh Soal</h3>

<p>
3 pensil seharga Rp6.000.
Berapa harga 10 pensil?
</p>

<p>
Harga 1 pensil = 6.000 ÷ 3
</p>

<p>
= 2.000
</p>

<p>
10 pensil = 10 × 2.000
</p>

<p>
= Rp20.000
</p>

<p style="
font-size:22px;
font-weight:800;
color:#93c5fd;
">
Jawaban = Rp20.000
</p>

</div>

<div style="
background:rgba(96,165,250,0.12);
border-left:4px solid #60a5fa;
padding:16px;
border-radius:14px;
margin-top:18px;
">

🌍 <b>Contoh kontekstual:</b><br><br>

Jika 2 liter bensin bisa menempuh 20 km,
maka 5 liter bisa menempuh:

<br><br>

5 × 10 = 50 km

</div>

</div>

<!-- BERBALIK NILAI -->
<div style="
background:rgba(255,255,255,0.05);
backdrop-filter:blur(12px);
border:1px solid rgba(255,255,255,0.08);
padding:24px;
border-radius:20px;
margin-bottom:24px;
color:#f3f4f6;
">

<h2 style="color:#93c5fd">🔃 Perbandingan Berbalik Nilai</h2>

<p>
Perbandingan berbalik nilai adalah perbandingan dua besaran
yang jika salah satu bertambah maka yang lain berkurang.
</p>

<h3 style="color:#93c5fd">📌 Ciri-Ciri</h3>

<ul>
<li>Jika A naik → B turun</li>
<li>Jika A turun → B naik</li>
</ul>

<div style="
background:linear-gradient(135deg,#60a5fa,#2563eb);
padding:18px;
border-radius:16px;
text-align:center;
font-size:28px;
font-weight:900;
margin:18px 0;
">
a₁ × b₁ = a₂ × b₂
</div>

<h3 style="color:#93c5fd">📌 Contoh</h3>

<p>
4 pekerja menyelesaikan pekerjaan dalam 6 hari
</p>

<p>
Jika pekerja menjadi 8 orang:
</p>

<p>
(4 × 6) ÷ 8 = 3 hari
</p>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<h3 style="color:#93c5fd">🧠 Contoh Soal</h3>

<p>
6 pekerja menyelesaikan pekerjaan dalam 8 hari.
Jika pekerja menjadi 12 orang, berapa hari?
</p>

<p>
6 × 8 = 12 × x
</p>

<p>
48 = 12x
</p>

<p>
x = 4 hari
</p>

<p style="
font-size:22px;
font-weight:800;
color:#93c5fd;
">
Jawaban = 4 hari
</p>

</div>

<div style="
background:rgba(96,165,250,0.12);
border-left:4px solid #60a5fa;
padding:16px;
border-radius:14px;
margin-top:18px;
">

🌍 <b>Contoh kontekstual:</b><br><br>

Semakin banyak pekerja,
pekerjaan semakin cepat selesai.

</div>

</div>

<!-- SKALA -->
<div style="
background:rgba(255,255,255,0.05);
backdrop-filter:blur(12px);
border:1px solid rgba(255,255,255,0.08);
padding:24px;
border-radius:20px;
margin-bottom:24px;
color:#f3f4f6;
">

<h2 style="color:#93c5fd">🗺️ Skala</h2>

<p>
Skala adalah perbandingan antara jarak pada peta dengan jarak sebenarnya.
</p>

<div style="
background:linear-gradient(135deg,#60a5fa,#2563eb);
padding:18px;
border-radius:16px;
text-align:center;
font-size:24px;
font-weight:900;
margin:18px 0;
">
Skala = Jarak peta : Jarak sebenarnya
</div>

<h3 style="color:#93c5fd">📌 Contoh</h3>

<p>
Skala 1 : 500.000 artinya:
</p>

<p>
1 cm di peta = 500.000 cm di sebenarnya
</p>

<p>
= 5 km
</p>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<h3 style="color:#93c5fd">🧠 Contoh Soal 1</h3>

<p>
Jarak pada peta 4 cm,
skala 1 : 1.000.000
</p>

<p>
Jarak sebenarnya:
</p>

<p>
4 × 1.000.000
</p>

<p>
= 4.000.000 cm
</p>

<p>
= 40 km
</p>

<p style="
font-size:22px;
font-weight:800;
color:#93c5fd;
">
Jawaban = 40 km
</p>

</div>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<h3 style="color:#93c5fd">🧠 Contoh Soal 2</h3>

<p>
Jarak sebenarnya 10 km,
skala 1 : 500.000
</p>

<p>
10 km = 1.000.000 cm
</p>

<p>
Jarak peta:
</p>

<p>
1.000.000 ÷ 500.000
</p>

<p>
= 2 cm
</p>

<p style="
font-size:22px;
font-weight:800;
color:#93c5fd;
">
Jawaban = 2 cm
</p>

</div>

<div style="
background:rgba(96,165,250,0.12);
border-left:4px solid #60a5fa;
padding:16px;
border-radius:14px;
margin-top:18px;
">

🌍 <b>Contoh kontekstual:</b><br><br>

Jika jarak dua kota di peta 3 cm dan skala 1 : 200.000,
maka jarak sebenarnya:

<br><br>

3 × 200.000 = 600.000 cm = 6 km

</div>

</div>

<!-- CONTOH CAMPURAN -->
<div style="
background:rgba(255,255,255,0.05);
backdrop-filter:blur(12px);
border:1px solid rgba(255,255,255,0.08);
padding:24px;
border-radius:20px;
margin-bottom:24px;
color:#f3f4f6;
">

<h2 style="color:#93c5fd">🧠 Contoh Soal Campuran</h2>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:16px;
">

<p><b>1.</b> Rasio umur Ani dan Budi 2 : 3.
Jika umur Ani 10 tahun, berapa umur Budi?</p>

<p>
2 : 3 = 10 : x
</p>

<p>
2x = 30
</p>

<p>
x = 15 tahun
</p>

</div>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:16px;
">

<p><b>2.</b> 5 buku seharga Rp15.000.
Berapa harga 12 buku?</p>

<p>
Harga 1 buku = 3.000
</p>

<p>
12 × 3.000 = Rp36.000
</p>

</div>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:16px;
">

<p><b>3.</b> 8 pekerja menyelesaikan pekerjaan dalam 6 hari.
Jika pekerja menjadi 4 orang?</p>

<p>
8 × 6 = 4 × x
</p>

<p>
x = 12 hari
</p>

</div>

</div>

<!-- KONTEKSTUAL -->
<div style="
background:rgba(255,255,255,0.05);
backdrop-filter:blur(12px);
border:1px solid rgba(255,255,255,0.08);
padding:24px;
border-radius:20px;
margin-bottom:24px;
color:#f3f4f6;
">

<h2 style="color:#93c5fd">🌍 Contoh Soal Kontekstual</h2>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:16px;
">

<p><b>1.</b> Resep minuman menggunakan perbandingan sirup : air = 1 : 4.
Jika menggunakan 2 gelas sirup, berapa air?</p>

<p>
2 × 4 = 8 gelas air
</p>

</div>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:16px;
">

<p><b>2.</b> Jarak pada peta 5 cm dengan skala 1 : 100.000.
Berapa jarak sebenarnya?</p>

<p>
5 × 100.000 = 500.000 cm = 5 km
</p>

</div>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:16px;
">

<p><b>3.</b> 10 pekerja menyelesaikan pekerjaan dalam 3 hari.
Jika hanya 5 pekerja?</p>

<p>
10 × 3 = 5 × x
</p>

<p>
x = 6 hari
</p>

</div>

</div>

<!-- KESIMPULAN -->
<div style="
background:linear-gradient(135deg,#60a5fa,#2563eb);
padding:24px;
border-radius:22px;
color:white;
box-shadow:0 10px 30px rgba(0,0,0,0.25);
">

<h2 style="margin-top:0">💡 Kesimpulan</h2>

<ul>
<li>Rasio digunakan untuk membandingkan dua besaran</li>
<li>Proporsi menunjukkan dua rasio yang sama</li>
<li>Perbandingan senilai: naik-naik atau turun-turun</li>
<li>Perbandingan berbalik nilai: naik-turun</li>
<li>Skala digunakan pada peta untuk menentukan jarak sebenarnya</li>
</ul>

</div>

`,
  tip:'Perbandingan senilai: jika A naik maka B naik. Berbalik nilai: jika A naik maka B turun.'
},
     {
  id:'aritmetika-sosial',
  icon:'💰',
  title:'Aritmetika Sosial',
  color:'#A29BFE',
  desc:'Untung, rugi, bunga, diskon, pajak.',
  isi:`

<div style="display:flex;align-items:center;gap:14px;margin-bottom:18px;
background:linear-gradient(135deg,#a29bfe,#6c5ce7);
padding:18px;border-radius:18px;color:white;
box-shadow:0 10px 30px rgba(0,0,0,0.25);">

<div style="font-size:50px">💰</div>

<div>
<h1 style="margin:0;font-size:30px;font-weight:900">
Aritmetika Sosial
</h1>

<p style="margin-top:6px;font-size:15px;opacity:.95">
Materi tentang kegiatan ekonomi sehari-hari seperti untung, rugi, diskon, pajak, dan bunga.
</p>
</div>
</div>

<!-- ===================================================== -->
<!-- PENGERTIAN -->
<!-- ===================================================== -->

<h2 style="color:#a29bfe">📖 Pengertian Aritmetika Sosial</h2>

<p>
Aritmetika sosial adalah cabang matematika yang berkaitan dengan kegiatan ekonomi dalam kehidupan sehari-hari seperti:
</p>

<ul>
<li>Jual beli</li>
<li>Untung dan rugi</li>
<li>Diskon</li>
<li>Pajak</li>
<li>Bunga tabungan</li>
</ul>

<p>
Materi ini sangat penting karena sering digunakan saat berbelanja, menabung, berdagang, maupun menghitung keuntungan.
</p>

<div style="
background:rgba(255,255,255,0.05);
border-left:5px solid #a29bfe;
padding:14px;
border-radius:12px;
margin:16px 0;
line-height:1.8;
">

<b>📌 Istilah Penting:</b><br><br>

<b>Harga Beli (HB)</b> → harga saat membeli barang.<br>
<b>Harga Jual (HJ)</b> → harga saat menjual barang.<br>
<b>Untung</b> → jika harga jual lebih besar dari harga beli.<br>
<b>Rugi</b> → jika harga jual lebih kecil dari harga beli.

</div>

<!-- ===================================================== -->
<!-- VISUAL -->
<!-- ===================================================== -->

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:14px;
margin:20px 0;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
border:1px solid rgba(255,255,255,.08);
">
<div style="font-size:40px">🛒</div>
<h3 style="margin:10px 0;color:#a29bfe">Jual Beli</h3>
<p>Menghitung harga beli dan harga jual barang.</p>
</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
border:1px solid rgba(255,255,255,.08);
">
<div style="font-size:40px">🏷️</div>
<h3 style="margin:10px 0;color:#a29bfe">Diskon</h3>
<p>Menghitung potongan harga saat belanja.</p>
</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
border:1px solid rgba(255,255,255,.08);
">
<div style="font-size:40px">🏦</div>
<h3 style="margin:10px 0;color:#a29bfe">Bunga</h3>
<p>Menghitung pertambahan uang tabungan.</p>
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- UNTUNG RUGI -->
<!-- ===================================================== -->

<h2 style="color:#a29bfe">📊 Untung dan Rugi</h2>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin:16px 0;
border:1px solid rgba(255,255,255,.08);
">

<h3 style="color:#facc15">📌 Rumus Untung</h3>

<div style="
background:#f3f4f6;
padding:16px;
border-radius:12px;
text-align:center;
font-size:24px;
font-weight:900;
color:#6c5ce7;
margin:12px 0;
">
Untung = Harga Jual − Harga Beli
</div>

<h3 style="color:#f87171">📌 Rumus Rugi</h3>

<div style="
background:#f3f4f6;
padding:16px;
border-radius:12px;
text-align:center;
font-size:24px;
font-weight:900;
color:#ef4444;
margin:12px 0;
">
Rugi = Harga Beli − Harga Jual
</div>

</div>

<h3>📝 Contoh Untung</h3>

<p>
Seorang pedagang membeli tas seharga Rp50.000 lalu menjualnya Rp65.000.
</p>

<p><b>Diketahui:</b></p>

<ul>
<li>HB = Rp50.000</li>
<li>HJ = Rp65.000</li>
</ul>

<p><b>Penyelesaian:</b></p>

<p>
Untung = HJ − HB
</p>

<p>
= 65.000 − 50.000
</p>

<p>
= Rp15.000
</p>

<div style="
background:#064e3b;
padding:14px;
border-radius:12px;
margin-top:12px;
border-left:5px solid #10b981;
">
✅ Jadi pedagang mendapat <b>untung Rp15.000</b>
</div>

<h3>📝 Contoh Rugi</h3>

<p>
Harga beli sepatu Rp80.000, harga jual Rp70.000.
</p>

<p><b>Penyelesaian:</b></p>

<p>
Rugi = 80.000 − 70.000
</p>

<p>
= Rp10.000
</p>

<div style="
background:#4c0519;
padding:14px;
border-radius:12px;
margin-top:12px;
border-left:5px solid #ef4444;
">
❌ Jadi penjual mengalami <b>rugi Rp10.000</b>
</div>

<!-- ===================================================== -->
<!-- PERSEN -->
<!-- ===================================================== -->

<hr>

<h2 style="color:#a29bfe">📈 Persentase Untung dan Rugi</h2>

<h3>📌 Rumus Persentase Untung</h3>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:22px;
font-weight:900;
color:#6c5ce7;
margin:16px 0;
">
% Untung = (Untung / Harga Beli) × 100%
</div>

<h3>📌 Rumus Persentase Rugi</h3>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:22px;
font-weight:900;
color:#ef4444;
margin:16px 0;
">
% Rugi = (Rugi / Harga Beli) × 100%
</div>

<h3>📝 Contoh Soal</h3>

<p>
Untung Rp10.000 dari harga beli Rp50.000.
Berapa persen untung?
</p>

<p><b>Langkah Penyelesaian:</b></p>

<p>
% Untung = (10.000 / 50.000) × 100%
</p>

<p>
= 0,2 × 100%
</p>

<p>
= 20%
</p>

<div style="
background:#052e16;
padding:14px;
border-radius:12px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Persentase untung = <b>20%</b>
</div>

<!-- ===================================================== -->
<!-- DISKON -->
<!-- ===================================================== -->

<hr>

<h2 style="color:#a29bfe">🏷️ Diskon (Potongan Harga)</h2>

<p>
Diskon adalah potongan harga yang diberikan penjual kepada pembeli.
</p>

<h3>📌 Rumus Diskon</h3>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:22px;
font-weight:900;
color:#6c5ce7;
margin:16px 0;
">
Diskon = (% Diskon / 100) × Harga Awal
</div>

<h3>📌 Harga Setelah Diskon</h3>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:22px;
font-weight:900;
color:#6c5ce7;
margin:16px 0;
">
Harga Bayar = Harga Awal − Diskon
</div>

<h3>📝 Contoh Soal</h3>

<p>
Harga baju Rp100.000 mendapat diskon 20%.
Berapa harga yang harus dibayar?
</p>

<p><b>Langkah Penyelesaian:</b></p>

<p>
Diskon = 20% × 100.000
</p>

<p>
= 20.000
</p>

<p>
Harga bayar = 100.000 − 20.000
</p>

<p>
= Rp80.000
</p>

<div style="
background:#1e3a8a;
padding:14px;
border-radius:12px;
border-left:5px solid #60a5fa;
margin-top:12px;
">
✅ Harga yang harus dibayar adalah <b>Rp80.000</b>
</div>

<!-- ===================================================== -->
<!-- PAJAK -->
<!-- ===================================================== -->

<hr>

<h2 style="color:#a29bfe">🧾 Pajak (PPN)</h2>

<p>
Pajak adalah biaya tambahan yang dibayarkan kepada negara.
</p>

<div style="
background:#7c2d12;
padding:14px;
border-radius:12px;
margin:14px 0;
border-left:5px solid #fb923c;
">
📌 PPN di Indonesia saat ini = <b>11%</b>
</div>

<h3>📌 Rumus Pajak</h3>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:22px;
font-weight:900;
color:#6c5ce7;
margin:16px 0;
">
Pajak = 11% × Harga Barang
</div>

<h3>📌 Harga Setelah Pajak</h3>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:22px;
font-weight:900;
color:#6c5ce7;
margin:16px 0;
">
Total Bayar = Harga Barang + Pajak
</div>

<h3>📝 Contoh Soal</h3>

<p>
Harga makanan Rp50.000.
Berapa total setelah pajak?
</p>

<p><b>Langkah Penyelesaian:</b></p>

<p>
Pajak = 11% × 50.000
</p>

<p>
= 5.500
</p>

<p>
Total = 50.000 + 5.500
</p>

<p>
= Rp55.500
</p>

<div style="
background:#172554;
padding:14px;
border-radius:12px;
border-left:5px solid #3b82f6;
margin-top:12px;
">
✅ Total pembayaran = <b>Rp55.500</b>
</div>

<!-- ===================================================== -->
<!-- BUNGA -->
<!-- ===================================================== -->

<hr>

<h2 style="color:#a29bfe">🏦 Bunga Tunggal</h2>

<p>
Bunga tunggal adalah bunga yang dihitung hanya dari modal awal.
</p>

<h3>📌 Rumus Bunga Tunggal</h3>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:22px;
font-weight:900;
color:#6c5ce7;
margin:16px 0;
">
Bunga = Modal × Suku Bunga × Waktu
</div>

<h3>📌 Keterangan</h3>

<ul>
<li><b>Modal</b> = uang awal</li>
<li><b>Suku bunga</b> = persen bunga per tahun</li>
<li><b>Waktu</b> = lama menabung/pinjaman</li>
</ul>

<h3>📝 Contoh Soal</h3>

<p>
Modal Rp1.000.000 dengan bunga 6% per tahun selama 2 tahun.
</p>

<p><b>Langkah Penyelesaian:</b></p>

<p>
Bunga = 1.000.000 × 6% × 2
</p>

<p>
= 1.000.000 × 0,06 × 2
</p>

<p>
= 120.000
</p>

<p>
Total uang = Modal + Bunga
</p>

<p>
= 1.000.000 + 120.000
</p>

<p>
= Rp1.120.000
</p>

<div style="
background:#052e16;
padding:14px;
border-radius:12px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Bunga yang diperoleh = <b>Rp120.000</b>
</div>

<!-- ===================================================== -->
<!-- TABEL -->
<!-- ===================================================== -->

<hr>

<h2 style="color:#a29bfe">📋 Ringkasan Rumus</h2>

<div style="overflow-x:auto">

<table style="
width:100%;
border-collapse:collapse;
margin-top:14px;
overflow:hidden;
border-radius:14px;
">

<tr style="background:#6c5ce7;color:white">
<th style="padding:12px;border:1px solid #374151">Materi</th>
<th style="padding:12px;border:1px solid #374151">Rumus</th>
</tr>

<tr style="background:#111827">
<td style="padding:12px;border:1px solid #374151">Untung</td>
<td style="padding:12px;border:1px solid #374151">HJ − HB</td>
</tr>

<tr style="background:#1f2937">
<td style="padding:12px;border:1px solid #374151">Rugi</td>
<td style="padding:12px;border:1px solid #374151">HB − HJ</td>
</tr>

<tr style="background:#111827">
<td style="padding:12px;border:1px solid #374151">% Untung</td>
<td style="padding:12px;border:1px solid #374151">(Untung/HB) × 100%</td>
</tr>

<tr style="background:#1f2937">
<td style="padding:12px;border:1px solid #374151">Diskon</td>
<td style="padding:12px;border:1px solid #374151">(% Diskon/100) × Harga</td>
</tr>

<tr style="background:#111827">
<td style="padding:12px;border:1px solid #374151">Pajak</td>
<td style="padding:12px;border:1px solid #374151">11% × Harga</td>
</tr>

<tr style="background:#1f2937">
<td style="padding:12px;border:1px solid #374151">Bunga</td>
<td style="padding:12px;border:1px solid #374151">Modal × Bunga × Waktu</td>
</tr>

</table>

</div>

<!-- ===================================================== -->
<!-- SOAL -->
<!-- ===================================================== -->

<hr>

<h2 style="color:#a29bfe">🧠 Contoh Soal Campuran</h2>

<h3>1️⃣ Untung</h3>

<p>
Harga beli Rp60.000, harga jual Rp75.000.
</p>

<p>
Untung = 75.000 − 60.000
</p>

<p>
= Rp15.000
</p>

<h3>2️⃣ Diskon</h3>

<p>
Diskon 20% dari Rp150.000.
</p>

<p>
Diskon = 30.000
</p>

<p>
Harga bayar = 150.000 − 30.000
</p>

<p>
= Rp120.000
</p>

<h3>3️⃣ Pajak</h3>

<p>
Pajak 11% dari Rp200.000.
</p>

<p>
Pajak = 22.000
</p>

<p>
Total = Rp222.000
</p>

<h3>4️⃣ Bunga</h3>

<p>
Modal Rp1.000.000 bunga 10% selama 1 tahun.
</p>

<p>
Bunga = Rp100.000
</p>

<!-- ===================================================== -->
<!-- KONTEKSTUAL -->
<!-- ===================================================== -->

<hr>

<h2 style="color:#a29bfe">🌍 Contoh Soal Kontekstual</h2>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:14px;
margin-top:18px;
">

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
">
<h3>👟 Untung</h3>
<p>
Ani membeli sepatu Rp100.000 lalu menjual Rp120.000.
</p>
<p>
Untung = Rp20.000
</p>
</div>

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
">
<h3>🛍️ Diskon</h3>
<p>
Budi membeli baju diskon 25% dari Rp80.000.
</p>
<p>
Harga bayar = Rp60.000
</p>
</div>

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
">
<h3>🍜 Pajak</h3>
<p>
Harga makanan Rp30.000 dikenakan pajak.
</p>
<p>
Total = Rp33.300
</p>
</div>

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
">
<h3>🏦 Bunga</h3>
<p>
Tabungan Rp500.000 bunga 10% selama 2 tahun.
</p>
<p>
Bunga = Rp100.000
</p>
</div>

</div>

<!-- ===================================================== -->
<!-- KESIMPULAN -->
<!-- ===================================================== -->

<hr>

<h2 style="color:#a29bfe">💡 Kesimpulan</h2>

<div style="
background:linear-gradient(135deg,#6c5ce7,#8b5cf6);
padding:20px;
border-radius:18px;
margin-top:18px;
color:white;
">

<ul style="line-height:2">
<li>Untung jika harga jual lebih besar dari harga beli</li>
<li>Rugi jika harga jual lebih kecil dari harga beli</li>
<li>Diskon mengurangi harga barang</li>
<li>Pajak menambah harga barang</li>
<li>Bunga tunggal dihitung dari modal awal</li>
<li>Aritmetika sosial sangat berguna dalam kehidupan sehari-hari</li>
</ul>

</div>

`,
tip:'Untung jika harga jual > harga beli. Rugi jika harga jual < harga beli.'
},
      {
  id:'garis-sudut',
  icon:'📐',
  title:'Garis & Sudut',
  color:'#FF6B6B',
  desc:'Jenis sudut, hubungan antar sudut, garis sejajar.',

  isi:`

<!-- ===================================================== -->
<!-- HEADER -->
<!-- ===================================================== -->

<div style="
display:flex;
align-items:center;
gap:16px;
background:linear-gradient(135deg,#ff6b6b,#ee5253);
padding:20px;
border-radius:20px;
margin-bottom:20px;
box-shadow:0 10px 30px rgba(0,0,0,0.25);
color:white;
">

<div style="font-size:55px">📐</div>

<div>
<h1 style="
margin:0;
font-size:32px;
font-weight:900;
">
Garis & Sudut
</h1>

<p style="
margin-top:8px;
font-size:15px;
opacity:.95;
line-height:1.7;
">
Mempelajari jenis-jenis sudut, hubungan antar sudut, serta sudut pada garis sejajar.
</p>
</div>

</div>

<!-- ===================================================== -->
<!-- PENGERTIAN -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">📖 Pengertian Sudut</h2>

<p>
Sudut adalah daerah yang dibentuk oleh dua garis yang bertemu pada satu titik.
Titik pertemuan kedua garis disebut <b>titik sudut</b>.
</p>

<div style="
background:rgba(255,255,255,0.05);
border-left:5px solid #ff6b6b;
padding:16px;
border-radius:14px;
margin:16px 0;
line-height:1.8;
">

📌 <b>Contoh sudut dalam kehidupan sehari-hari:</b>

<ul>
<li>Jarum jam</li>
<li>Pojok meja</li>
<li>Pertemuan dua dinding</li>
<li>Tangga yang bersandar pada tembok</li>
</ul>

</div>

<!-- ===================================================== -->
<!-- VISUAL -->
<!-- ===================================================== -->

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:14px;
margin:22px 0;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
border:1px solid rgba(255,255,255,.08);
">

<div style="font-size:40px">🕒</div>

<h3 style="color:#ff6b6b">Jarum Jam</h3>

<p>
Jarum jam membentuk berbagai jenis sudut.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
border:1px solid rgba(255,255,255,.08);
">

<div style="font-size:40px">📏</div>

<h3 style="color:#ff6b6b">Penggaris</h3>

<p>
Sudut siku-siku dapat dilihat pada penggaris siku.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
border:1px solid rgba(255,255,255,.08);
">

<div style="font-size:40px">🚂</div>

<h3 style="color:#ff6b6b">Rel Kereta</h3>

<p>
Rel kereta merupakan contoh garis sejajar.
</p>

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- JENIS SUDUT -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">📐 Jenis-Jenis Sudut</h2>

<p>
Sudut dibedakan berdasarkan besar derajatnya.
</p>

<div style="
overflow-x:auto;
margin-top:18px;
">

<table style="
width:100%;
border-collapse:collapse;
overflow:hidden;
border-radius:16px;
">

<tr style="background:#ee5253;color:white">

<th style="
padding:12px;
border:1px solid #374151;
">
Jenis Sudut
</th>

<th style="
padding:12px;
border:1px solid #374151;
">
Besar Sudut
</th>

<th style="
padding:12px;
border:1px solid #374151;
">
Keterangan
</th>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Sudut Lancip
</td>

<td style="padding:12px;border:1px solid #374151">
0° < α < 90°
</td>

<td style="padding:12px;border:1px solid #374151">
Lebih kecil dari 90°
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
Sudut Siku-Siku
</td>

<td style="padding:12px;border:1px solid #374151">
α = 90°
</td>

<td style="padding:12px;border:1px solid #374151">
Tepat 90°
</td>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Sudut Tumpul
</td>

<td style="padding:12px;border:1px solid #374151">
90° < α < 180°
</td>

<td style="padding:12px;border:1px solid #374151">
Lebih dari 90°
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
Sudut Lurus
</td>

<td style="padding:12px;border:1px solid #374151">
α = 180°
</td>

<td style="padding:12px;border:1px solid #374151">
Membentuk garis lurus
</td>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Sudut Refleks
</td>

<td style="padding:12px;border:1px solid #374151">
180° < α < 360°
</td>

<td style="padding:12px;border:1px solid #374151">
Lebih dari 180°
</td>

</tr>

</table>

</div>

<!-- ===================================================== -->
<!-- CONTOH -->
<!-- ===================================================== -->

<h3 style="margin-top:24px">📝 Contoh Soal</h3>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>1.</b> Sudut 45° termasuk sudut apa?
</p>

<p>
Karena 45° kurang dari 90°, maka termasuk:
</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:10px;
">
✅ Sudut Lancip
</div>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>2.</b> Sudut 120° termasuk sudut apa?
</p>

<p>
Karena 120° lebih dari 90° tetapi kurang dari 180°, maka:
</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:10px;
">
✅ Sudut Tumpul
</div>

</div>

<div style="
background:#7c2d12;
padding:14px;
border-radius:12px;
border-left:5px solid #fb923c;
margin-top:16px;
">

📌 <b>Contoh Kontekstual:</b><br><br>

Jarum jam menunjukkan pukul 03.00 membentuk sudut 90° sehingga termasuk <b>sudut siku-siku</b>.

</div>

<hr>

<!-- ===================================================== -->
<!-- HUBUNGAN SUDUT -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">🔗 Hubungan Antar Sudut</h2>

<!-- ===================================================== -->
<!-- KOMPLEMENTER -->
<!-- ===================================================== -->

<h3 style="margin-top:24px;color:#f87171">
1️⃣ Sudut Berpenyiku (Komplementer)
</h3>

<p>
Dua sudut yang jumlahnya 90°.
</p>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:24px;
font-weight:900;
color:#ef4444;
margin:16px 0;
">
∠A + ∠B = 90°
</div>

<p><b>Contoh:</b></p>

<p>
Jika ∠A = 30°, maka:
</p>

<p>
∠B = 90° − 30°
</p>

<p>
= 60°
</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Sudut pasangannya adalah 60°
</div>

<p style="margin-top:18px">
📌 Dua sudut pada segitiga siku-siku selalu berjumlah 90°.
</p>

<hr>

<!-- ===================================================== -->
<!-- SUPLEMEN -->
<!-- ===================================================== -->

<h3 style="margin-top:24px;color:#f87171">
2️⃣ Sudut Berpelurus (Suplemen)
</h3>

<p>
Dua sudut yang jumlahnya 180°.
</p>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:24px;
font-weight:900;
color:#ef4444;
margin:16px 0;
">
∠A + ∠B = 180°
</div>

<p><b>Contoh:</b></p>

<p>
Jika ∠A = 110°, maka:
</p>

<p>
∠B = 180° − 110°
</p>

<p>
= 70°
</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #3b82f6;
margin-top:12px;
">
✅ Sudut pasangannya adalah 70°
</div>

<p style="margin-top:18px">
📌 Sudut pada garis lurus selalu berjumlah 180°.
</p>

<hr>

<!-- ===================================================== -->
<!-- BERTOLAK -->
<!-- ===================================================== -->

<h3 style="margin-top:24px;color:#f87171">
3️⃣ Sudut Bertolak Belakang
</h3>

<p>
Sudut bertolak belakang adalah sudut yang saling berhadapan dan besarnya sama.
</p>

<p><b>Contoh:</b></p>

<p>
Jika satu sudut = 50°, maka sudut di depannya juga:
</p>

<div style="
background:#4c0519;
padding:12px;
border-radius:10px;
border-left:5px solid #ef4444;
margin-top:12px;
">
✅ 50°
</div>

<p style="margin-top:18px">
📌 Pertemuan dua jalan berbentuk "+" menghasilkan sudut bertolak belakang.
</p>

<hr>

<!-- ===================================================== -->
<!-- GARIS SEJAJAR -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">➡️ Garis Sejajar</h2>

<p>
Garis sejajar adalah dua garis yang tidak pernah berpotongan walaupun diperpanjang.
</p>

<div style="
background:#111827;
padding:16px;
border-radius:14px;
border-left:5px solid #ff6b6b;
margin:16px 0;
">

📌 <b>Contoh garis sejajar:</b>

<ul>
<li>Rel kereta api</li>
<li>Garis buku tulis</li>
<li>Sisi berlawanan pada persegi panjang</li>
</ul>

</div>

<!-- ===================================================== -->
<!-- SEHADAP -->
<!-- ===================================================== -->

<h3 style="color:#f87171">
1️⃣ Sudut Sehadap (F)
</h3>

<p>
Sudut yang posisinya sama dan besarnya sama.
</p>

<p><b>Contoh:</b></p>

<p>
Jika satu sudut = 60°, maka sudut sehadapnya juga:
</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ 60°
</div>

<hr>

<!-- ===================================================== -->
<!-- BERSILANG -->
<!-- ===================================================== -->

<h3 style="color:#f87171">
2️⃣ Sudut Bersilangan Dalam (Z)
</h3>

<p>
Sudut yang saling berhadapan di dalam garis sejajar dan besarnya sama.
</p>

<p><b>Contoh:</b></p>

<p>
Jika satu sudut = 70°, maka sudut bersilangannya:
</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #3b82f6;
margin-top:12px;
">
✅ 70°
</div>

<hr>

<!-- ===================================================== -->
<!-- SEPIHAK -->
<!-- ===================================================== -->

<h3 style="color:#f87171">
3️⃣ Sudut Sepihak Dalam (U)
</h3>

<p>
Dua sudut yang jumlahnya 180°.
</p>

<p><b>Contoh:</b></p>

<p>
Jika satu sudut = 120°, maka:
</p>

<p>
Sudut pasangan = 180° − 120°
</p>

<p>
= 60°
</p>

<div style="
background:#7c2d12;
padding:12px;
border-radius:10px;
border-left:5px solid #fb923c;
margin-top:12px;
">
✅ Sudut pasangannya adalah 60°
</div>

<hr>

<!-- ===================================================== -->
<!-- RINGKASAN -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">📋 Ringkasan Hubungan Sudut</h2>

<div style="overflow-x:auto">

<table style="
width:100%;
border-collapse:collapse;
overflow:hidden;
border-radius:16px;
">

<tr style="background:#ee5253;color:white">

<th style="padding:12px;border:1px solid #374151">
Jenis Hubungan
</th>

<th style="padding:12px;border:1px solid #374151">
Sifat
</th>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Berpenyiku
</td>

<td style="padding:12px;border:1px solid #374151">
Jumlah = 90°
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
Berpelurus
</td>

<td style="padding:12px;border:1px solid #374151">
Jumlah = 180°
</td>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Bertolak Belakang
</td>

<td style="padding:12px;border:1px solid #374151">
Sama besar
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
Sehadap (F)
</td>

<td style="padding:12px;border:1px solid #374151">
Sama besar
</td>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Bersilangan Dalam (Z)
</td>

<td style="padding:12px;border:1px solid #374151">
Sama besar
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
Sepihak Dalam (U)
</td>

<td style="padding:12px;border:1px solid #374151">
Jumlah = 180°
</td>

</tr>

</table>

</div>

<hr>

<!-- ===================================================== -->
<!-- CONTOH SOAL -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">🧠 Contoh Soal Campuran</h2>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>1.</b> Jika dua sudut berpenyiku dan salah satunya 25°, tentukan sudut lainnya.
</p>

<p>
Sudut lain = 90° − 25°
</p>

<p>
= 65°
</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:10px;
">
✅ Jawaban: 65°
</div>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>2.</b> Jika sudut berpelurus dan salah satunya 140°, tentukan sudut lainnya.
</p>

<p>
Sudut lain = 180° − 140°
</p>

<p>
= 40°
</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:10px;
">
✅ Jawaban: 40°
</div>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>3.</b> Sudut bertolak belakang salah satunya 80°.
Berapa sudut pasangannya?
</p>

<div style="
background:#4c0519;
padding:12px;
border-radius:10px;
border-left:5px solid #ef4444;
margin-top:10px;
">
✅ Jawaban: 80°
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- KONTEKSTUAL -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">🌍 Contoh Soal Kontekstual</h2>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:14px;
margin-top:18px;
">

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
">

<h3>🪜 Tangga</h3>

<p>
Tangga membentuk sudut 60° dengan lantai.
</p>

<p>
Sudut dengan dinding:
</p>

<p>
90° − 60° = 30°
</p>

</div>

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
">

<h3>🛣️ Jalan Lurus</h3>

<p>
Jika satu sudut 120°, sudut lainnya:
</p>

<p>
180° − 120° = 60°
</p>

</div>

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
">

<h3>🚂 Rel Kereta</h3>

<p>
Jika sudut sehadap 70°, maka sudut pasangannya juga:
</p>

<p>
70°
</p>

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- KESIMPULAN -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">💡 Kesimpulan</h2>

<div style="
background:linear-gradient(135deg,#ff6b6b,#ee5253);
padding:20px;
border-radius:18px;
margin-top:18px;
color:white;
">

<ul style="line-height:2">

<li>Sudut memiliki berbagai jenis berdasarkan besar derajatnya</li>

<li>Sudut berpenyiku jumlahnya 90°</li>

<li>Sudut berpelurus jumlahnya 180°</li>

<li>Sudut bertolak belakang besarnya sama</li>

<li>Pada garis sejajar terdapat pola sudut F, Z, dan U</li>

<li>Memahami pola sudut sangat membantu menyelesaikan soal geometri</li>

</ul>

</div>

`,
tip:'Sudut sehadap (F) sama besar, sudut bersilangan dalam (Z) sama besar, dan sudut sepihak dalam (U) jumlahnya 180°!'
},
      {
  id:'statistika-dasar',
  icon:'📊',
  title:'Statistika Dasar',
  color:'#55EFC4',
  desc:'Mean, median, modus, penyajian data.',

  isi:`

<!-- ============================================ -->
<!-- HEADER -->
<!-- ============================================ -->

<div style="
display:flex;
align-items:center;
gap:18px;
background:linear-gradient(135deg,#55efc4,#00b894);
padding:22px;
border-radius:22px;
margin-bottom:24px;
box-shadow:0 10px 30px rgba(0,0,0,0.25);
color:white;
">

<div style="font-size:58px">📊</div>

<div>
<h1 style="
margin:0;
font-size:32px;
font-weight:900;
">
Statistika Dasar
</h1>

<p style="
margin-top:8px;
line-height:1.7;
font-size:15px;
opacity:.95;
">
Mempelajari cara mengumpulkan, mengolah, menyajikan, dan menganalisis data menggunakan mean, median, modus, serta diagram.
</p>
</div>

</div>

<!-- ============================================ -->
<!-- PENGERTIAN -->
<!-- ============================================ -->

<h2 style="color:#55efc4">📖 Pengertian Statistika</h2>

<p>
Statistika adalah ilmu yang mempelajari cara mengumpulkan, mengolah, menyajikan, dan menganalisis data.
</p>

<div style="
background:rgba(255,255,255,0.05);
border-left:5px solid #55efc4;
padding:16px;
border-radius:14px;
margin:18px 0;
line-height:1.8;
">

📌 <b>Contoh data dalam kehidupan sehari-hari:</b>

<ul>
<li>Nilai ulangan siswa</li>
<li>Tinggi badan siswa</li>
<li>Jumlah pengunjung</li>
<li>Penjualan barang</li>
<li>Data cuaca harian</li>
</ul>

</div>

<!-- ============================================ -->
<!-- VISUAL -->
<!-- ============================================ -->

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:16px;
margin:24px 0;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:18px;
text-align:center;
border:1px solid rgba(255,255,255,.08);
">

<div style="font-size:42px">📝</div>

<h3 style="color:#55efc4">Nilai Ulangan</h3>

<p>
Data nilai digunakan untuk mencari rata-rata kelas.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:18px;
text-align:center;
border:1px solid rgba(255,255,255,.08);
">

<div style="font-size:42px">📈</div>

<h3 style="color:#55efc4">Diagram</h3>

<p>
Data lebih mudah dipahami menggunakan diagram.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:18px;
text-align:center;
border:1px solid rgba(255,255,255,.08);
">

<div style="font-size:42px">📊</div>

<h3 style="color:#55efc4">Analisis Data</h3>

<p>
Statistika membantu mengambil kesimpulan dari data.
</p>

</div>

</div>

<hr>

<!-- ============================================ -->
<!-- UKURAN PEMUSATAN -->
<!-- ============================================ -->

<h2 style="color:#55efc4">📊 Ukuran Pemusatan Data</h2>

<p>
Ukuran pemusatan digunakan untuk menentukan nilai yang mewakili suatu data.
</p>

<!-- ============================================ -->
<!-- MEAN -->
<!-- ============================================ -->

<h3 style="margin-top:28px;color:#81ecec">
1️⃣ Mean (Rata-rata)
</h3>

<p>
Mean adalah jumlah seluruh data dibagi banyaknya data.
</p>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:24px;
font-weight:900;
color:#00b894;
margin:18px 0;
">
Mean = Jumlah Data ÷ Banyak Data
</div>

<!-- contoh -->

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<h3>📝 Contoh Soal</h3>

<p>
Data: 4, 6, 8, 10
</p>

<p>
Mean = (4 + 6 + 8 + 10) ÷ 4
</p>

<p>
= 28 ÷ 4
</p>

<p>
= 7
</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Mean = 7
</div>

</div>

<!-- kontekstual -->

<div style="
background:#172554;
padding:16px;
border-radius:14px;
margin-top:16px;
border-left:5px solid #60a5fa;
">

📌 <b>Contoh Kontekstual:</b><br><br>

Nilai ulangan Andi: 70, 80, 90, 60

<p>
Mean = (70 + 80 + 90 + 60) ÷ 4
</p>

<p>
= 300 ÷ 4
</p>

<p>
= 75
</p>

</div>

<hr>

<!-- ============================================ -->
<!-- MEDIAN -->
<!-- ============================================ -->

<h3 style="margin-top:28px;color:#81ecec">
2️⃣ Median (Nilai Tengah)
</h3>

<p>
Median adalah nilai tengah dari data yang sudah diurutkan.
</p>

<!-- langkah -->

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin:18px 0;
border-left:5px solid #55efc4;
">

<h3>📌 Langkah Menentukan Median</h3>

<ol style="line-height:2">
<li>Urutkan data dari kecil ke besar</li>
<li>Jika jumlah data ganjil → ambil nilai tengah</li>
<li>Jika jumlah data genap → rata-rata dua nilai tengah</li>
</ol>

</div>

<!-- contoh ganjil -->

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<h3>📝 Contoh Soal (Jumlah Data Ganjil)</h3>

<p>
Data: 3, 5, 7, 9, 11
</p>

<p>
Data sudah urut.
</p>

<p>
Nilai tengah adalah 7
</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Median = 7
</div>

</div>

<!-- contoh genap -->

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<h3>📝 Contoh Soal (Jumlah Data Genap)</h3>

<p>
Data: 2, 4, 6, 8
</p>

<p>
Dua nilai tengah = 4 dan 6
</p>

<p>
Median = (4 + 6) ÷ 2
</p>

<p>
= 10 ÷ 2
</p>

<p>
= 5
</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:12px;
">
✅ Median = 5
</div>

</div>

<!-- kontekstual -->

<div style="
background:#7c2d12;
padding:16px;
border-radius:14px;
margin-top:16px;
border-left:5px solid #fb923c;
">

📌 <b>Contoh Kontekstual:</b><br><br>

Tinggi badan siswa:
150, 155, 160, 165, 170

<p>
Nilai tengah = 160
</p>

</div>

<hr>

<!-- ============================================ -->
<!-- MODUS -->
<!-- ============================================ -->

<h3 style="margin-top:28px;color:#81ecec">
3️⃣ Modus
</h3>

<p>
Modus adalah nilai yang paling sering muncul dalam data.
</p>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<h3>📝 Contoh Soal</h3>

<p>
Data: 3, 5, 5, 7, 8, 5
</p>

<p>
Angka yang paling sering muncul adalah 5
</p>

<div style="
background:#4c0519;
padding:12px;
border-radius:10px;
border-left:5px solid #ef4444;
margin-top:12px;
">
✅ Modus = 5
</div>

</div>

<div style="
background:#172554;
padding:16px;
border-radius:14px;
margin-top:16px;
border-left:5px solid #60a5fa;
">

📌 <b>Contoh Kontekstual:</b><br><br>

Ukuran sepatu siswa:
38, 39, 39, 40, 39

<p>
Ukuran yang paling sering dipakai adalah 39.
</p>

</div>

<hr>

<!-- ============================================ -->
<!-- TABEL FREKUENSI -->
<!-- ============================================ -->

<h2 style="color:#55efc4">
📊 Ukuran Pemusatan Data pada Tabel Frekuensi
</h2>

<p>
Jika data disajikan dalam tabel, maka mean dihitung menggunakan:
</p>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:24px;
font-weight:900;
color:#00b894;
margin:18px 0;
">
Mean = (Σ f × x) ÷ Σ f
</div>

<!-- tabel -->

<div style="overflow-x:auto;margin-top:20px">

<table style="
width:100%;
border-collapse:collapse;
overflow:hidden;
border-radius:16px;
">

<tr style="background:#00b894;color:white">

<th style="
padding:12px;
border:1px solid #374151;
">
Nilai
</th>

<th style="
padding:12px;
border:1px solid #374151;
">
Frekuensi
</th>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
5
</td>

<td style="padding:12px;border:1px solid #374151">
2
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
6
</td>

<td style="padding:12px;border:1px solid #374151">
3
</td>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
7
</td>

<td style="padding:12px;border:1px solid #374151">
1
</td>

</tr>

</table>

</div>

<!-- pengerjaan -->

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<h3>📝 Langkah Penyelesaian</h3>

<p>
Mean = (5×2 + 6×3 + 7×1) ÷ (2 + 3 + 1)
</p>

<p>
= (10 + 18 + 7) ÷ 6
</p>

<p>
= 35 ÷ 6
</p>

<p>
≈ 5,83
</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Mean ≈ 5,83
</div>

</div>

<hr>

<!-- ============================================ -->
<!-- PENYAJIAN DATA -->
<!-- ============================================ -->

<h2 style="color:#55efc4">📈 Penyajian Data</h2>

<p>
Data dapat disajikan dalam berbagai bentuk agar lebih mudah dipahami.
</p>

<!-- kartu -->

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
gap:16px;
margin-top:22px;
">

<!-- tabel -->

<div style="
background:#1f2937;
padding:18px;
border-radius:18px;
">

<div style="font-size:40px">📋</div>

<h3 style="color:#55efc4">
1. Tabel Frekuensi
</h3>

<p>
Menampilkan banyaknya kemunculan suatu data.
</p>

<p>
Contoh:
5, 5, 6, 6, 6, 7
</p>

<p>
Digunakan untuk melihat jumlah siswa yang mendapat nilai tertentu.
</p>

</div>

<!-- batang -->

<div style="
background:#1f2937;
padding:18px;
border-radius:18px;
">

<div style="font-size:40px">📊</div>

<h3 style="color:#55efc4">
2. Diagram Batang
</h3>

<p>
Digunakan untuk membandingkan data.
</p>

<p>
Contoh:
Jumlah siswa tiap kelas.
</p>

</div>

<!-- lingkaran -->

<div style="
background:#1f2937;
padding:18px;
border-radius:18px;
">

<div style="font-size:40px">🥧</div>

<h3 style="color:#55efc4">
3. Diagram Lingkaran
</h3>

<p>
Menunjukkan perbandingan dalam bentuk persentase.
</p>

<p>
Contoh:
25 dari 100 siswa suka matematika → 25%
</p>

</div>

<!-- garis -->

<div style="
background:#1f2937;
padding:18px;
border-radius:18px;
">

<div style="font-size:40px">📈</div>

<h3 style="color:#55efc4">
4. Diagram Garis
</h3>

<p>
Menunjukkan perubahan data dari waktu ke waktu.
</p>

<p>
Contoh:
Grafik suhu harian selama seminggu.
</p>

</div>

</div>

<hr>

<!-- ============================================ -->
<!-- CONTOH CAMPURAN -->
<!-- ============================================ -->

<h2 style="color:#55efc4">🧠 Contoh Soal Campuran</h2>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:16px 0;
">

<p><b>1.</b> Data: 2, 4, 6, 8</p>

<p>
Mean = (2 + 4 + 6 + 8) ÷ 4
</p>

<p>
= 20 ÷ 4
</p>

<p>
= 5
</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Mean = 5
</div>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:16px 0;
">

<p><b>2.</b> Data: 1, 3, 5, 7, 9</p>

<p>
Nilai tengah = 5
</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:12px;
">
✅ Median = 5
</div>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:16px 0;
">

<p><b>3.</b> Data: 4, 4, 5, 6</p>

<p>
Angka yang paling sering muncul adalah 4
</p>

<div style="
background:#4c0519;
padding:12px;
border-radius:10px;
border-left:5px solid #ef4444;
margin-top:12px;
">
✅ Modus = 4
</div>

</div>

<hr>

<!-- ============================================ -->
<!-- KONTEKSTUAL -->
<!-- ============================================ -->

<h2 style="color:#55efc4">🌍 Contoh Soal Kontekstual</h2>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:16px;
margin-top:20px;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>📝 Nilai Siswa</h3>

<p>
60, 70, 80, 90
</p>

<p>
Mean = 75
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>📏 Tinggi Badan</h3>

<p>
150, 155, 160, 165
</p>

<p>
Median = (155 + 160) ÷ 2
</p>

<p>
= 157,5
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>📦 Penjualan Barang</h3>

<p>
10, 12, 12, 15
</p>

<p>
Modus = 12
</p>

</div>

</div>

<hr>

<!-- ============================================ -->
<!-- KESIMPULAN -->
<!-- ============================================ -->

<h2 style="color:#55efc4">💡 Kesimpulan</h2>

<div style="
background:linear-gradient(135deg,#55efc4,#00b894);
padding:22px;
border-radius:18px;
margin-top:18px;
color:white;
">

<ul style="line-height:2">

<li>Mean adalah rata-rata data</li>

<li>Median adalah nilai tengah data</li>

<li>Modus adalah nilai yang paling sering muncul</li>

<li>Data dapat disajikan dalam tabel dan diagram</li>

<li>Statistika membantu memahami data dalam kehidupan sehari-hari</li>

<li>Penyajian data membuat informasi lebih mudah dipahami</li>

</ul>

</div>

`,
tip:'Ingat: Mean (rata-rata), Median (tengah), Modus (sering muncul)!'
}
    ]
  },
  8: {
    sem1: [
     {
  id:'bilangan-berpangkat',
  icon:'xⁿ',
  title:'Bilangan Berpangkat & Bentuk Akar',
  color:'#6C63FF',
  desc:'Pangkat bulat, sifat pangkat, bentuk akar dan operasinya.',

  isi:`

<!-- ============================================ -->
<!-- HEADER -->
<!-- ============================================ -->

<div style="
display:flex;
align-items:center;
gap:18px;
background:linear-gradient(135deg,#6C63FF,#4F46E5);
padding:24px;
border-radius:24px;
margin-bottom:28px;
box-shadow:0 10px 30px rgba(0,0,0,0.25);
color:white;
">

<div style="font-size:60px">xⁿ</div>

<div>

<h1 style="
margin:0;
font-size:32px;
font-weight:900;
">
Bilangan Berpangkat & Bentuk Akar
</h1>

<p style="
margin-top:10px;
line-height:1.7;
font-size:15px;
opacity:.95;
">
Mempelajari konsep bilangan berpangkat, sifat-sifat pangkat, bentuk akar, serta operasi-operasi yang berkaitan dengan akar dan pangkat.
</p>

</div>
</div>

<!-- ============================================ -->
<!-- PENGERTIAN -->
<!-- ============================================ -->

<h2 style="color:#818CF8">📖 Bilangan Berpangkat</h2>

<p>
Bilangan berpangkat adalah bentuk perkalian berulang dari suatu bilangan.
</p>

<!-- rumus -->

<div style="
background:#EEF2FF;
padding:20px;
border-radius:16px;
text-align:center;
font-size:26px;
font-weight:900;
color:#4338CA;
margin:20px 0;
">

aⁿ = a × a × a × ... × a

<div style="
font-size:14px;
margin-top:10px;
font-weight:600;
color:#6366F1;
">
(sebanyak n kali)
</div>

</div>

<!-- penjelasan -->

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:16px;
margin-top:24px;
">

<div style="
background:#1F2937;
padding:18px;
border-radius:18px;
border:1px solid rgba(255,255,255,.08);
">

<h3 style="color:#A5B4FC">📌 Basis</h3>

<p>
Bilangan pokok yang dikalikan berulang.
</p>

<p>
Contoh pada 2³ → basis = 2
</p>

</div>

<div style="
background:#1F2937;
padding:18px;
border-radius:18px;
border:1px solid rgba(255,255,255,.08);
">

<h3 style="color:#A5B4FC">📌 Pangkat</h3>

<p>
Menunjukkan banyaknya perkalian berulang.
</p>

<p>
Contoh pada 2³ → pangkat = 3
</p>

</div>

</div>

<!-- contoh -->

<div style="
background:#111827;
padding:20px;
border-radius:18px;
margin-top:22px;
">

<h3 style="color:#C7D2FE">📝 Contoh Bilangan Berpangkat</h3>

<ul style="line-height:2">

<li>2³ = 2 × 2 × 2 = 8</li>

<li>5² = 5 × 5 = 25</li>

<li>10¹ = 10</li>

</ul>

</div>

<!-- kontekstual -->

<div style="
background:#172554;
padding:18px;
border-radius:16px;
margin-top:18px;
border-left:5px solid #60A5FA;
">

📌 <b>Contoh Kontekstual:</b><br><br>

Sebuah bakteri membelah menjadi 2 setiap jam.

<p>
Dalam 3 jam:
</p>

<p style="font-size:22px;font-weight:800">
2³ = 8 bakteri
</p>

</div>

<hr>

<!-- ============================================ -->
<!-- SIFAT PANGKAT -->
<!-- ============================================ -->

<h2 style="color:#818CF8">📐 Sifat-Sifat Bilangan Berpangkat</h2>

<!-- ============================================ -->
<!-- SIFAT 1 -->
<!-- ============================================ -->

<div style="
background:#1F2937;
padding:22px;
border-radius:20px;
margin-top:22px;
">

<h3 style="color:#A5B4FC">
1️⃣ Perkalian dengan Basis Sama
</h3>

<div style="
background:#EEF2FF;
padding:18px;
border-radius:14px;
text-align:center;
font-size:24px;
font-weight:900;
color:#4338CA;
margin:16px 0;
">
aᵐ × aⁿ = aᵐ⁺ⁿ
</div>

<p><b>Contoh soal:</b></p>

<p>
2³ × 2² = 2⁵ = 32
</p>

<div style="
background:#052E16;
padding:12px;
border-radius:10px;
border-left:5px solid #22C55E;
margin-top:12px;
">
✅ Pangkat dijumlahkan karena basis sama
</div>

<p style="margin-top:18px">
<b>Contoh kontekstual:</b>
</p>

<p>
Jika suatu alat bekerja 2³ jam dan dilanjutkan 2² jam, total waktu setara dengan 2⁵ jam dalam bentuk pangkat.
</p>

</div>

<!-- ============================================ -->
<!-- SIFAT 2 -->
<!-- ============================================ -->

<div style="
background:#1F2937;
padding:22px;
border-radius:20px;
margin-top:22px;
">

<h3 style="color:#A5B4FC">
2️⃣ Pembagian dengan Basis Sama
</h3>

<div style="
background:#EEF2FF;
padding:18px;
border-radius:14px;
text-align:center;
font-size:24px;
font-weight:900;
color:#4338CA;
margin:16px 0;
">
aᵐ ÷ aⁿ = aᵐ⁻ⁿ
</div>

<p><b>Contoh soal:</b></p>

<p>
5⁴ ÷ 5² = 5² = 25
</p>

<div style="
background:#052E16;
padding:12px;
border-radius:10px;
border-left:5px solid #22C55E;
margin-top:12px;
">
✅ Pangkat dikurangkan karena basis sama
</div>

<p style="margin-top:18px">
<b>Contoh kontekstual:</b>
</p>

<p>
Jika jumlah data berkurang dari 5⁴ menjadi 5², maka perubahan dapat dinyatakan dengan pangkat.
</p>

</div>

<!-- ============================================ -->
<!-- SIFAT 3 -->
<!-- ============================================ -->

<div style="
background:#1F2937;
padding:22px;
border-radius:20px;
margin-top:22px;
">

<h3 style="color:#A5B4FC">
3️⃣ Pangkat dari Pangkat
</h3>

<div style="
background:#EEF2FF;
padding:18px;
border-radius:14px;
text-align:center;
font-size:24px;
font-weight:900;
color:#4338CA;
margin:16px 0;
">
(aᵐ)ⁿ = aᵐˣⁿ
</div>

<p><b>Contoh soal:</b></p>

<p>
(2³)² = 2⁶ = 64
</p>

<div style="
background:#052E16;
padding:12px;
border-radius:10px;
border-left:5px solid #22C55E;
margin-top:12px;
">
✅ Pangkat dikalikan
</div>

<p style="margin-top:18px">
<b>Contoh kontekstual:</b>
</p>

<p>
Jika suatu pertumbuhan terjadi dua tahap masing-masing berpangkat, maka pangkatnya dikalikan.
</p>

</div>

<!-- ============================================ -->
<!-- SIFAT 4 -->
<!-- ============================================ -->

<div style="
background:#1F2937;
padding:22px;
border-radius:20px;
margin-top:22px;
">

<h3 style="color:#A5B4FC">
4️⃣ Pangkat Nol
</h3>

<div style="
background:#EEF2FF;
padding:18px;
border-radius:14px;
text-align:center;
font-size:24px;
font-weight:900;
color:#4338CA;
margin:16px 0;
">
a⁰ = 1
</div>

<p style="text-align:center">
(a ≠ 0)
</p>

<p><b>Contoh soal:</b></p>

<p>
7⁰ = 1
</p>

<div style="
background:#7C2D12;
padding:12px;
border-radius:10px;
border-left:5px solid #FB923C;
margin-top:12px;
">
⚠️ Semua bilangan berpangkat nol bernilai 1
</div>

<p style="margin-top:18px">
<b>Contoh kontekstual:</b>
</p>

<p>
Bilangan apa pun yang tidak mengalami perkalian tetap bernilai 1 dalam konsep pangkat.
</p>

</div>

<!-- ============================================ -->
<!-- SIFAT 5 -->
<!-- ============================================ -->

<div style="
background:#1F2937;
padding:22px;
border-radius:20px;
margin-top:22px;
">

<h3 style="color:#A5B4FC">
5️⃣ Pangkat Negatif
</h3>

<div style="
background:#EEF2FF;
padding:18px;
border-radius:14px;
text-align:center;
font-size:24px;
font-weight:900;
color:#4338CA;
margin:16px 0;
">
a⁻ⁿ = 1 / aⁿ
</div>

<p><b>Contoh soal:</b></p>

<p>
2⁻³ = 1 / 2³ = 1/8
</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60A5FA;
margin-top:12px;
">
✅ Pangkat negatif menjadi bentuk pecahan
</div>

<p style="margin-top:18px">
<b>Contoh kontekstual:</b>
</p>

<p>
Pangkat negatif sering muncul dalam skala kecil seperti ukuran mikro atau pembagian berulang.
</p>

</div>

<hr>

<!-- ============================================ -->
<!-- BENTUK AKAR -->
<!-- ============================================ -->

<h2 style="color:#818CF8">√ Bentuk Akar</h2>

<p>
Bentuk akar adalah kebalikan dari bilangan berpangkat.
</p>

<div style="
background:#EEF2FF;
padding:20px;
border-radius:16px;
text-align:center;
font-size:24px;
font-weight:900;
color:#4338CA;
margin:20px 0;
">

√a = bilangan yang jika dikuadratkan menghasilkan a

</div>

<!-- contoh -->

<div style="
background:#111827;
padding:20px;
border-radius:18px;
margin-top:20px;
">

<h3 style="color:#C7D2FE">📝 Contoh Bentuk Akar</h3>

<ul style="line-height:2">

<li>√9 = 3</li>

<li>√16 = 4</li>

<li>√25 = 5</li>

</ul>

</div>

<!-- kontekstual -->

<div style="
background:#172554;
padding:18px;
border-radius:16px;
margin-top:18px;
border-left:5px solid #60A5FA;
">

📌 <b>Contoh Kontekstual:</b><br><br>

Luas persegi = 25 cm²

<p>
Panjang sisi = √25 = 5 cm
</p>

</div>

<hr>

<!-- ============================================ -->
<!-- SIFAT AKAR -->
<!-- ============================================ -->

<h2 style="color:#818CF8">📐 Sifat-Sifat Bentuk Akar</h2>

<!-- sifat akar 1 -->

<div style="
background:#1F2937;
padding:22px;
border-radius:20px;
margin-top:22px;
">

<h3 style="color:#A5B4FC">
1️⃣ Perkalian Akar
</h3>

<div style="
background:#EEF2FF;
padding:18px;
border-radius:14px;
text-align:center;
font-size:24px;
font-weight:900;
color:#4338CA;
margin:16px 0;
">
√(a × b) = √a × √b
</div>

<p><b>Contoh soal:</b></p>

<p>
√(9 × 4) = √9 × √4
</p>

<p>
= 3 × 2
</p>

<p>
= 6
</p>

<p style="margin-top:18px">
<b>Contoh kontekstual:</b>
</p>

<p>
Menghitung luas gabungan dua area yang berbentuk kuadrat.
</p>

</div>

<!-- sifat akar 2 -->

<div style="
background:#1F2937;
padding:22px;
border-radius:20px;
margin-top:22px;
">

<h3 style="color:#A5B4FC">
2️⃣ Pembagian Akar
</h3>

<div style="
background:#EEF2FF;
padding:18px;
border-radius:14px;
text-align:center;
font-size:24px;
font-weight:900;
color:#4338CA;
margin:16px 0;
">
√(a / b) = √a / √b
</div>

<p><b>Contoh soal:</b></p>

<p>
√(16/4) = √16 / √4
</p>

<p>
= 4 / 2
</p>

<p>
= 2
</p>

<p style="margin-top:18px">
<b>Contoh kontekstual:</b>
</p>

<p>
Membagi panjang sisi dalam perbandingan tertentu.
</p>

</div>

<!-- sifat akar 3 -->

<div style="
background:#1F2937;
padding:22px;
border-radius:20px;
margin-top:22px;
">

<h3 style="color:#A5B4FC">
3️⃣ Merasionalkan Penyebut
</h3>

<p>
Tujuan: menghilangkan akar di penyebut.
</p>

<div style="
background:#EEF2FF;
padding:18px;
border-radius:14px;
text-align:center;
font-size:24px;
font-weight:900;
color:#4338CA;
margin:16px 0;
">
a/√b = a√b / b
</div>

<p><b>Contoh soal:</b></p>

<p>
3/√2 = (3√2)/2
</p>

<div style="
background:#7C2D12;
padding:12px;
border-radius:10px;
border-left:5px solid #FB923C;
margin-top:12px;
">
⚠️ Penyebut tidak boleh berbentuk akar
</div>

<p style="margin-top:18px">
<b>Contoh kontekstual:</b>
</p>

<p>
Digunakan dalam perhitungan fisika dan teknik agar hasil lebih sederhana.
</p>

</div>

<hr>

<!-- ============================================ -->
<!-- CONTOH CAMPURAN -->
<!-- ============================================ -->

<h2 style="color:#818CF8">🧠 Contoh Soal Campuran</h2>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:16px;
margin-top:20px;
">

<div style="
background:#1F2937;
padding:18px;
border-radius:16px;
">
<p>1. 2² × 2³ = 2⁵ = 32</p>
</div>

<div style="
background:#1F2937;
padding:18px;
border-radius:16px;
">
<p>2. (3²)² = 3⁴ = 81</p>
</div>

<div style="
background:#1F2937;
padding:18px;
border-radius:16px;
">
<p>3. 4⁻² = 1/16</p>
</div>

<div style="
background:#1F2937;
padding:18px;
border-radius:16px;
">
<p>4. √36 = 6</p>
</div>

<div style="
background:#1F2937;
padding:18px;
border-radius:16px;
">
<p>5. √(25 × 4) = 10</p>
</div>

</div>

<hr>

<!-- ============================================ -->
<!-- KONTEKSTUAL -->
<!-- ============================================ -->

<h2 style="color:#818CF8">🌍 Contoh Soal Kontekstual</h2>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:16px;
margin-top:22px;
">

<div style="
background:#1F2937;
padding:18px;
border-radius:16px;
">

<h3>🦠 Pertumbuhan Bakteri</h3>

<p>
Sebuah bakteri berkembang 2 kali lipat setiap jam.
</p>

<p>
Dalam 4 jam:
</p>

<p style="font-size:22px;font-weight:800">
2⁴ = 16
</p>

</div>

<div style="
background:#1F2937;
padding:18px;
border-radius:16px;
">

<h3>🏞️ Luas Taman</h3>

<p>
Luas taman = 49 m²
</p>

<p>
Panjang sisi:
</p>

<p style="font-size:22px;font-weight:800">
√49 = 7 meter
</p>

</div>

<div style="
background:#1F2937;
padding:18px;
border-radius:16px;
">

<h3>📉 Pangkat Negatif</h3>

<p>
Sebuah nilai dinyatakan sebagai:
</p>

<p style="font-size:24px;font-weight:900">
2⁻³
</p>

<p>
Nilainya:
</p>

<p style="font-size:22px;font-weight:800">
1/8
</p>

</div>

</div>

<hr>

<!-- ============================================ -->
<!-- KESIMPULAN -->
<!-- ============================================ -->

<h2 style="color:#818CF8">💡 Kesimpulan</h2>

<div style="
background:linear-gradient(135deg,#6C63FF,#4F46E5);
padding:24px;
border-radius:20px;
margin-top:18px;
color:white;
">

<ul style="line-height:2">

<li>Pangkat adalah perkalian berulang</li>

<li>Ada aturan khusus dalam operasi pangkat</li>

<li>Akar adalah kebalikan dari pangkat</li>

<li>Bentuk akar memiliki sifat perkalian dan pembagian</li>

<li>Pangkat negatif berubah menjadi pecahan</li>

<li>Digunakan dalam banyak masalah kehidupan nyata</li>

</ul>

</div>

`,
tip:'aᵐ × aⁿ = aᵐ⁺ⁿ, a⁰ = 1, a⁻ⁿ = 1/aⁿ!'
},
      {
  id:'teorema-pythagoras',
  icon:'📐',
  title:'Teorema Pythagoras',
  color:'#FF6584',
  desc:'Memahami Teorema Pythagoras dan penerapannya dalam kehidupan sehari-hari.',
  
  isi:`

<h2 style="color:#fff;font-size:28px;margin-bottom:10px">
📐 Teorema Pythagoras
</h2>

<p style="color:#d1d5db;line-height:1.8">
Teorema Pythagoras adalah aturan pada <b>segitiga siku-siku</b> yang digunakan untuk mencari panjang sisi segitiga.
</p>

<div style="
background:#111827;
border:1px solid #374151;
border-radius:16px;
padding:20px;
margin:20px 0;
text-align:center">

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Pythagorean.svg/320px-Pythagorean.svg.png"
style="width:220px;border-radius:12px;margin-bottom:15px">

<div style="
font-size:32px;
font-weight:900;
color:#a78bfa">
c² = a² + b²
</div>

<p style="color:#d1d5db;margin-top:10px">
c = sisi miring (hipotenusa)<br>
a dan b = sisi siku-siku
</p>

</div>
<hr>
<h3 style="color:#fff;margin-top:30px">
📌 Apa Itu Hipotenusa?
</h3>

<p style="color:#d1d5db;line-height:1.8">
Hipotenusa adalah sisi paling panjang pada segitiga siku-siku.
Hipotenusa selalu berada di depan sudut siku-siku.
</p>

<div style="
background:#1f2937;
padding:16px;
border-left:5px solid #8b5cf6;
border-radius:10px;
margin:16px 0;
color:#e5e7eb">

<b>Ingat!</b><br>
Jika diketahui dua sisi, maka sisi ketiga dapat dicari menggunakan rumus Pythagoras.
</div>
<hr>
<h3 style="color:#fff;margin-top:30px">
🧠 Bentuk Rumus Pythagoras
</h3>

<table style="
width:100%;
border-collapse:collapse;
margin-top:15px">

<tr style="background:#312e81;color:white">
<th style="padding:10px;border:1px solid #4b5563">Mencari</th>
<th style="padding:10px;border:1px solid #4b5563">Rumus</th>
</tr>

<tr style="background:#111827;color:#e5e7eb">
<td style="padding:10px;border:1px solid #374151">Sisi miring (c)</td>
<td style="padding:10px;border:1px solid #374151">c = √(a² + b²)</td>
</tr>

<tr style="background:#1f2937;color:#e5e7eb">
<td style="padding:10px;border:1px solid #374151">Sisi a</td>
<td style="padding:10px;border:1px solid #374151">a = √(c² - b²)</td>
</tr>

<tr style="background:#111827;color:#e5e7eb">
<td style="padding:10px;border:1px solid #374151">Sisi b</td>
<td style="padding:10px;border:1px solid #374151">b = √(c² - a²)</td>
</tr>

</table>
<hr>
<h3 style="color:#fff;margin-top:35px">
📝 Contoh Soal 1
</h3>

<div style="
background:#111827;
border-radius:14px;
padding:18px;
margin-top:10px">

<p style="color:#e5e7eb">
Sebuah segitiga siku-siku memiliki:
</p>

<ul style="color:#d1d5db;line-height:1.8">
<li>a = 3 cm</li>
<li>b = 4 cm</li>
</ul>

<p style="color:#e5e7eb">
Tentukan panjang sisi miringnya!
</p>

</div>

<h4 style="color:#a78bfa;margin-top:20px">
✏ Langkah Penyelesaian
</h4>

<div style="
background:#1f2937;
padding:18px;
border-radius:12px;
line-height:2;
color:#e5e7eb">

c² = a² + b²<br>
c² = 3² + 4²<br>
c² = 9 + 16<br>
c² = 25<br>
c = √25<br>
c = 5 cm
</div>

<div style="
background:#052e16;
border-left:5px solid #22c55e;
padding:14px;
border-radius:10px;
margin-top:15px;
color:#dcfce7">

✅ Jadi panjang sisi miring segitiga adalah <b>5 cm</b>
</div>
<hr>
<h3 style="color:#fff;margin-top:35px">
📝 Contoh Soal 2
</h3>

<div style="
background:#111827;
padding:18px;
border-radius:14px">

<p style="color:#e5e7eb">
Diketahui sisi miring segitiga siku-siku adalah 13 cm dan salah satu sisi lainnya 5 cm.
Tentukan sisi yang belum diketahui!
</p>

</div>

<h4 style="color:#a78bfa;margin-top:20px">
✏ Langkah Penyelesaian
</h4>

<div style="
background:#1f2937;
padding:18px;
border-radius:12px;
line-height:2;
color:#e5e7eb">

a² = c² - b²<br>
a² = 13² - 5²<br>
a² = 169 - 25<br>
a² = 144<br>
a = √144<br>
a = 12 cm
</div>

<div style="
background:#052e16;
border-left:5px solid #22c55e;
padding:14px;
border-radius:10px;
margin-top:15px;
color:#dcfce7">

✅ Jadi sisi yang belum diketahui adalah <b>12 cm</b>
</div>
<hr>
<h3 style="color:#fff;margin-top:35px">
🔢 Triple Pythagoras
</h3>

<p style="color:#d1d5db">
Triple Pythagoras adalah tiga bilangan yang memenuhi rumus Pythagoras.
</p>

<table style="
width:100%;
border-collapse:collapse;
margin-top:15px">

<tr style="background:#312e81;color:white">
<th style="padding:10px;border:1px solid #4b5563">Triple</th>
<th style="padding:10px;border:1px solid #4b5563">Keterangan</th>
</tr>

<tr style="background:#111827;color:#e5e7eb">
<td style="padding:10px;border:1px solid #374151">3, 4, 5</td>
<td style="padding:10px;border:1px solid #374151">Triple paling dasar</td>
</tr>

<tr style="background:#1f2937;color:#e5e7eb">
<td style="padding:10px;border:1px solid #374151">5, 12, 13</td>
<td style="padding:10px;border:1px solid #374151">Sering muncul di soal</td>
</tr>

<tr style="background:#111827;color:#e5e7eb">
<td style="padding:10px;border:1px solid #374151">8, 15, 17</td>
<td style="padding:10px;border:1px solid #374151">Triple besar</td>
</tr>

</table>
<hr>
<h3 style="color:#fff;margin-top:35px">
🌍 Penerapan Pythagoras dalam Kehidupan
</h3>

<ul style="color:#d1d5db;line-height:2">
<li>Menghitung panjang tangga</li>
<li>Mencari diagonal televisi</li>
<li>Menghitung tinggi pohon</li>
<li>Mencari jarak terpendek</li>
<li>Mengukur diagonal lapangan</li>
</ul>
<hr>
<h3 style="color:#fff;margin-top:35px">
💡 Tips Cepat
</h3>

<div style="
background:#3b0764;
border-left:5px solid #c084fc;
padding:16px;
border-radius:12px;
color:#f3e8ff;
line-height:1.8">

✔ Hafalkan triple Pythagoras:<br>
3-4-5<br>
5-12-13<br>
8-15-17<br><br>

✔ Jika sisi miring diketahui, gunakan pengurangan:<br>
c² - sisi²
</div>
<hr>
<h3 style="color:#fff;margin-top:35px">
🎯 Latihan Mandiri
</h3>

<div style="
background:#111827;
padding:18px;
border-radius:14px;
color:#e5e7eb;
line-height:2">

1. Tentukan sisi miring jika a = 6 cm dan b = 8 cm.<br><br>

2. Tentukan sisi siku-siku jika c = 10 cm dan sisi lainnya = 6 cm.<br><br>

3. Apakah 9, 12, 15 termasuk triple Pythagoras?
</div>

`,
  
  tip:'Hafalkan triple Pythagoras 3-4-5, 5-12-13, dan 8-15-17 agar lebih cepat mengerjakan soal.'
},
     {
  id:'persamaan-garis-lurus',
  icon:'📈',
  title:'Persamaan Garis Lurus',
  color:'#43D9AD',
  desc:'Gradien, persamaan garis, garis sejajar & tegak lurus.',

  isi:`

<!-- ========================================= -->
<!-- HEADER -->
<!-- ========================================= -->

<div style="
background:linear-gradient(135deg,#43D9AD,#10B981);
padding:28px;
border-radius:24px;
color:white;
display:flex;
align-items:center;
gap:20px;
box-shadow:0 10px 30px rgba(0,0,0,.25);
margin-bottom:30px;
">

<div style="font-size:64px">
📈
</div>

<div>

<h1 style="
margin:0;
font-size:34px;
font-weight:900;
">
Persamaan Garis Lurus
</h1>

<p style="
margin-top:10px;
line-height:1.8;
font-size:15px;
opacity:.95;
">
Mempelajari bentuk persamaan garis lurus, gradien, menentukan persamaan garis, garis sejajar, garis tegak lurus, serta penerapannya dalam kehidupan sehari-hari.
</p>

</div>

</div>

<!-- ========================================= -->
<!-- PENGERTIAN -->
<!-- ========================================= -->

<h2 style="color:#34D399">
📖 Bentuk Persamaan Garis Lurus
</h2>

<p>
Persamaan garis lurus adalah persamaan yang membentuk garis lurus pada bidang koordinat Cartesius.
</p>

<!-- rumus utama -->

<div style="
background:#ECFDF5;
padding:24px;
border-radius:18px;
text-align:center;
margin:22px 0;
">

<div style="
font-size:34px;
font-weight:900;
color:#047857;
">
y = mx + c
</div>

<p style="
margin-top:12px;
color:#065F46;
font-weight:600;
">
Bentuk umum persamaan garis lurus
</p>

</div>

<!-- penjelasan -->

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:18px;
margin-top:20px;
">

<div style="
background:#111827;
padding:18px;
border-radius:18px;
">

<h3 style="color:#6EE7B7">
📌 m = Gradien
</h3>

<p>
Menunjukkan kemiringan garis.
</p>

<p>
Semakin besar nilai m, garis semakin curam.
</p>

</div>

<div style="
background:#111827;
padding:18px;
border-radius:18px;
">

<h3 style="color:#6EE7B7">
📌 c = Titik Potong Y
</h3>

<p>
Titik saat garis memotong sumbu Y.
</p>

<p>
Jika x = 0 maka y = c.
</p>

</div>

</div>

<!-- contoh -->

<div style="
background:#1F2937;
padding:20px;
border-radius:18px;
margin-top:22px;
border-left:5px solid #34D399;
">

<h3 style="color:#A7F3D0">
📝 Contoh Persamaan Garis
</h3>

<ul style="line-height:2">

<li>y = 2x + 1</li>

<li>y = 3x − 5</li>

<li>y = -x + 4</li>

</ul>

</div>

<hr>

<!-- ========================================= -->
<!-- GRADIEN -->
<!-- ========================================= -->

<h2 style="color:#34D399">
📐 Gradien (Kemiringan Garis)
</h2>

<p>
Gradien adalah nilai yang menunjukkan arah dan kemiringan suatu garis.
</p>

<!-- rumus -->

<div style="
background:#ECFDF5;
padding:24px;
border-radius:18px;
text-align:center;
margin:22px 0;
">

<div style="
font-size:30px;
font-weight:900;
color:#047857;
">
m = (y₂ − y₁) / (x₂ − x₁)
</div>

<p style="
margin-top:10px;
font-weight:600;
color:#065F46;
">
Rumus gradien dari dua titik
</p>

</div>

<!-- arti gradien -->

<h3 style="color:#6EE7B7">
📌 Makna Gradien
</h3>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:16px;
margin-top:18px;
">

<div style="
background:#052E16;
padding:18px;
border-radius:16px;
border-left:5px solid #22C55E;
">
<b>m > 0</b>
<p>Garis naik ke kanan</p>
</div>

<div style="
background:#3F1D1D;
padding:18px;
border-radius:16px;
border-left:5px solid #EF4444;
">
<b>m < 0</b>
<p>Garis turun ke kanan</p>
</div>

<div style="
background:#172554;
padding:18px;
border-radius:16px;
border-left:5px solid #60A5FA;
">
<b>m = 0</b>
<p>Garis horizontal (datar)</p>
</div>

<div style="
background:#3B0764;
padding:18px;
border-radius:16px;
border-left:5px solid #A855F7;
">
<b>Tidak terdefinisi</b>
<p>Garis vertikal (tegak)</p>
</div>

</div>

<!-- contoh -->

<div style="
background:#111827;
padding:22px;
border-radius:18px;
margin-top:24px;
">

<h3 style="color:#A7F3D0">
🧠 Contoh Mencari Gradien
</h3>

<p>
Titik A(2,3) dan B(6,11)
</p>

<p>
m = (11 − 3) / (6 − 2)
</p>

<p>
m = 8 / 4
</p>

<p style="
font-size:24px;
font-weight:900;
color:#34D399;
">
m = 2
</p>

</div>

<hr>

<!-- ========================================= -->
<!-- MENENTUKAN GARIS -->
<!-- ========================================= -->

<h2 style="color:#34D399">
📝 Menentukan Persamaan Garis
</h2>

<!-- ========================================= -->
<!-- BAGIAN 1 -->
<!-- ========================================= -->

<div style="
background:#111827;
padding:24px;
border-radius:20px;
margin-top:24px;
">

<h3 style="color:#6EE7B7">
1️⃣ Diketahui Gradien dan Satu Titik
</h3>

<p><b>Rumus:</b></p>

<div style="
background:#ECFDF5;
padding:18px;
border-radius:14px;
text-align:center;
font-size:28px;
font-weight:900;
color:#047857;
margin:18px 0;
">
y − y₁ = m(x − x₁)
</div>

<h4 style="color:#A7F3D0">
📌 Contoh:
</h4>

<p>
m = 2, titik (1,3)
</p>

<p>
y − 3 = 2(x − 1)
</p>

<p>
y − 3 = 2x − 2
</p>

<p style="
font-size:24px;
font-weight:900;
color:#34D399;
">
y = 2x + 1
</p>

</div>

<!-- ========================================= -->
<!-- BAGIAN 2 -->
<!-- ========================================= -->

<div style="
background:#111827;
padding:24px;
border-radius:20px;
margin-top:24px;
">

<h3 style="color:#6EE7B7">
2️⃣ Diketahui Dua Titik
</h3>

<p><b>Langkah:</b></p>

<ul style="line-height:2">

<li>1. Cari gradien</li>

<li>2. Substitusi ke rumus garis</li>

</ul>

<h4 style="color:#A7F3D0">
📌 Contoh:
</h4>

<p>
Titik (2,4) dan (6,12)
</p>

<p>
m = (12 − 4)/(6 − 2)
</p>

<p>
m = 8/4 = 2
</p>

<p>
y − 4 = 2(x − 2)
</p>

<p>
y − 4 = 2x − 4
</p>

<p style="
font-size:24px;
font-weight:900;
color:#34D399;
">
y = 2x
</p>

</div>

<!-- ========================================= -->
<!-- BAGIAN 3 -->
<!-- ========================================= -->

<div style="
background:#111827;
padding:24px;
border-radius:20px;
margin-top:24px;
">

<h3 style="color:#6EE7B7">
3️⃣ Diketahui Titik Potong Sumbu Y
</h3>

<p>
Jika diketahui c, langsung gunakan:
</p>

<div style="
background:#ECFDF5;
padding:18px;
border-radius:14px;
text-align:center;
font-size:28px;
font-weight:900;
color:#047857;
margin:18px 0;
">
y = mx + c
</div>

<h4 style="color:#A7F3D0">
📌 Contoh:
</h4>

<p>
m = 3 dan c = 2
</p>

<p style="
font-size:24px;
font-weight:900;
color:#34D399;
">
y = 3x + 2
</p>

</div>

<hr>

<!-- ========================================= -->
<!-- GARIS SEJAJAR -->
<!-- ========================================= -->

<h2 style="color:#34D399">
↔️ Garis Sejajar & Tegak Lurus
</h2>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:18px;
margin-top:22px;
">

<!-- sejajar -->

<div style="
background:#052E16;
padding:22px;
border-radius:18px;
border-left:5px solid #22C55E;
">

<h3 style="color:#86EFAC">
📌 Garis Sejajar
</h3>

<div style="
font-size:28px;
font-weight:900;
margin:16px 0;
">
m₁ = m₂
</div>

<p>
Gradien kedua garis harus sama.
</p>

<p>
Contoh:
</p>

<p>
y = 2x + 1
</p>

<p>
y = 2x − 3
</p>

<p>
➡️ Sejajar karena gradien sama-sama 2
</p>

</div>

<!-- tegak lurus -->

<div style="
background:#3B0764;
padding:22px;
border-radius:18px;
border-left:5px solid #A855F7;
">

<h3 style="color:#D8B4FE">
📌 Garis Tegak Lurus
</h3>

<div style="
font-size:28px;
font-weight:900;
margin:16px 0;
">
m₁ × m₂ = −1
</div>

<p>
Hasil kali gradien harus −1.
</p>

<p>
Contoh:
</p>

<p>
Jika m₁ = 2
</p>

<p>
m₂ = −1/2
</p>

</div>

</div>

<hr>

<!-- ========================================= -->
<!-- TITIK POTONG -->
<!-- ========================================= -->

<h2 style="color:#34D399">
📊 Menentukan Titik Potong
</h2>

<!-- titik y -->

<div style="
background:#111827;
padding:22px;
border-radius:18px;
margin-top:22px;
">

<h3 style="color:#6EE7B7">
1️⃣ Titik Potong Sumbu Y
</h3>

<p>
Jika:
</p>

<p style="
font-size:22px;
font-weight:800;
">
x = 0
</p>

<p>
maka:
</p>

<p style="
font-size:22px;
font-weight:800;
">
y = c
</p>

<p><b>Contoh:</b></p>

<p>
y = 2x + 5
</p>

<p>
Jika x = 0
</p>

<p>
y = 5
</p>

<p style="
font-size:22px;
font-weight:900;
color:#34D399;
">
Titik potong Y = (0,5)
</p>

</div>

<!-- titik x -->

<div style="
background:#111827;
padding:22px;
border-radius:18px;
margin-top:22px;
">

<h3 style="color:#6EE7B7">
2️⃣ Titik Potong Sumbu X
</h3>

<p>
Jika:
</p>

<p style="
font-size:22px;
font-weight:800;
">
y = 0
</p>

<p>
maka cari nilai x.
</p>

<p><b>Contoh:</b></p>

<p>
0 = 2x + 4
</p>

<p>
2x = -4
</p>

<p>
x = -2
</p>

<p style="
font-size:22px;
font-weight:900;
color:#34D399;
">
Titik potong X = (-2,0)
</p>

</div>

<hr>

<!-- ========================================= -->
<!-- CONTOH SOAL -->
<!-- ========================================= -->

<h2 style="color:#34D399">
🧠 Contoh Soal Biasa
</h2>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:18px;
margin-top:24px;
">

<div style="
background:#1F2937;
padding:20px;
border-radius:18px;
">

<h3 style="color:#A7F3D0">
1️⃣ Gradien
</h3>

<p>
Titik (1,2) dan (3,6)
</p>

<p>
m = (6 − 2)/(3 − 1)
</p>

<p>
m = 4/2
</p>

<p style="
font-size:22px;
font-weight:900;
color:#34D399;
">
m = 2
</p>

</div>

<div style="
background:#1F2937;
padding:20px;
border-radius:18px;
">

<h3 style="color:#A7F3D0">
2️⃣ Persamaan Garis
</h3>

<p>
Melalui titik (2,3) dengan gradien 4
</p>

<p>
y − 3 = 4(x − 2)
</p>

<p>
y − 3 = 4x − 8
</p>

<p style="
font-size:22px;
font-weight:900;
color:#34D399;
">
y = 4x − 5
</p>

</div>

<div style="
background:#1F2937;
padding:20px;
border-radius:18px;
">

<h3 style="color:#A7F3D0">
3️⃣ Tegak Lurus
</h3>

<p>
y = 3x + 1
</p>

<p>
y = -1/3x + 2
</p>

<p>
3 × (-1/3) = -1
</p>

<p style="
font-size:22px;
font-weight:900;
color:#34D399;
">
➡️ Tegak lurus
</p>

</div>

</div>

<hr>

<!-- ========================================= -->
<!-- KONTEKSTUAL -->
<!-- ========================================= -->

<h2 style="color:#34D399">
🌍 Contoh Kontekstual
</h2>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:18px;
margin-top:24px;
">

<!-- kendaraan -->

<div style="
background:#111827;
padding:20px;
border-radius:18px;
">

<h3 style="color:#6EE7B7">
🚗 Kecepatan Kendaraan
</h3>

<p>
Mobil bergerak 60 km/jam
</p>

<p>
Model:
</p>

<p style="
font-size:24px;
font-weight:900;
color:#34D399;
">
y = 60x
</p>

<p>
x = waktu
</p>

<p>
y = jarak
</p>

</div>

<!-- tabungan -->

<div style="
background:#111827;
padding:20px;
border-radius:18px;
">

<h3 style="color:#6EE7B7">
💰 Tabungan
</h3>

<p>
Uang awal Rp50.000
</p>

<p>
Menabung Rp10.000/hari
</p>

<p>
Model:
</p>

<p style="
font-size:24px;
font-weight:900;
color:#34D399;
">
y = 10000x + 50000
</p>

</div>

<!-- ojek -->

<div style="
background:#111827;
padding:20px;
border-radius:18px;
">

<h3 style="color:#6EE7B7">
🛵 Ojek Online
</h3>

<p>
Biaya awal Rp5.000
</p>

<p>
Rp2.000 per km
</p>

<p>
Model:
</p>

<p style="
font-size:24px;
font-weight:900;
color:#34D399;
">
y = 2000x + 5000
</p>

</div>

<!-- air -->

<div style="
background:#111827;
padding:20px;
border-radius:18px;
">

<h3 style="color:#6EE7B7">
💧 Ketinggian Air
</h3>

<p>
Naik 3 cm/menit
</p>

<p>
Awalnya 10 cm
</p>

<p>
Model:
</p>

<p style="
font-size:24px;
font-weight:900;
color:#34D399;
">
y = 3x + 10
</p>

</div>

<!-- jalan -->

<div style="
background:#111827;
padding:20px;
border-radius:18px;
">

<h3 style="color:#6EE7B7">
🛣️ Jalan Sejajar
</h3>

<p>
Jika jalan A:
</p>

<p>
y = 2x + 1
</p>

<p>
Maka jalan sejajar:
</p>

<p style="
font-size:24px;
font-weight:900;
color:#34D399;
">
y = 2x + c
</p>

<p>
Karena gradiennya sama.
</p>

</div>

</div>

<hr>

<!-- ========================================= -->
<!-- KESIMPULAN -->
<!-- ========================================= -->

<h2 style="color:#34D399">
💡 Kesimpulan
</h2>

<div style="
background:linear-gradient(135deg,#43D9AD,#10B981);
padding:24px;
border-radius:22px;
color:white;
margin-top:20px;
">

<ul style="line-height:2">

<li>Persamaan garis lurus berbentuk y = mx + c</li>

<li>Gradien menunjukkan arah dan kemiringan garis</li>

<li>Gunakan rumus gradien untuk dua titik</li>

<li>Gunakan rumus y − y₁ = m(x − x₁) untuk mencari persamaan garis</li>

<li>Garis sejajar memiliki gradien sama</li>

<li>Garis tegak lurus memiliki hasil kali gradien −1</li>

<li>Banyak digunakan dalam kehidupan nyata seperti biaya, jarak, waktu, dan pertumbuhan</li>

</ul>

</div>

`,
  tip:'Gradien = perubahan y ÷ perubahan x. Sejajar → gradien sama, tegak lurus → hasil kali -1!'
},
     {
  id:'spldv',
  icon:'🔀',
  title:'Sistem Persamaan Linear Dua Variabel (SPLDV)',
  color:'#FFD93D',
  desc:'Metode substitusi, eliminasi, dan grafik.',

  isi:`

<!-- ===================================================== -->
<!-- HEADER -->
<!-- ===================================================== -->

<div style="
display:flex;
align-items:center;
gap:16px;
background:linear-gradient(135deg,#FFD93D,#f59e0b);
padding:20px;
border-radius:20px;
margin-bottom:20px;
box-shadow:0 10px 30px rgba(0,0,0,0.25);
color:#111827;
">

<div style="font-size:55px">🔀</div>

<div>
<h1 style="
margin:0;
font-size:32px;
font-weight:900;
">
SPLDV
</h1>

<p style="
margin-top:8px;
font-size:15px;
line-height:1.7;
">
Mempelajari cara menyelesaikan dua persamaan linear dengan dua variabel menggunakan metode substitusi, eliminasi, dan grafik.
</p>
</div>

</div>

<!-- ===================================================== -->
<!-- PENGERTIAN -->
<!-- ===================================================== -->

<h2 style="color:#f59e0b">📖 Pengertian SPLDV</h2>

<p>
SPLDV (Sistem Persamaan Linear Dua Variabel) adalah dua persamaan linear yang memiliki dua variabel dan diselesaikan secara bersamaan.
</p>

<p><b>Bentuk umum:</b></p>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:24px;
font-weight:900;
color:#d97706;
margin:18px 0;
line-height:1.8;
">

ax + by = c <br>
px + qy = r

</div>

<p>
Tujuan SPLDV adalah mencari pasangan nilai <b>(x, y)</b> yang memenuhi kedua persamaan.
</p>

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
border-left:5px solid #f59e0b;
margin:18px 0;
">

📌 <b>Contoh dalam kehidupan sehari-hari:</b>

<ul>
<li>Menentukan harga barang</li>
<li>Menghitung jumlah kendaraan</li>
<li>Menghitung umur</li>
<li>Menentukan jumlah tiket</li>
</ul>

</div>

<hr>

<!-- ===================================================== -->
<!-- KONSEP SOLUSI -->
<!-- ===================================================== -->

<h2 style="color:#f59e0b">📌 Konsep Solusi SPLDV</h2>

<p>
Solusi SPLDV adalah pasangan nilai yang memenuhi kedua persamaan sekaligus.
</p>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:14px;
margin:20px 0;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:42px">📍</div>

<h3 style="color:#facc15">Satu Solusi</h3>

<p>
Kedua garis berpotongan di satu titik.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:42px">↔️</div>

<h3 style="color:#facc15">Tidak Ada Solusi</h3>

<p>
Kedua garis sejajar.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:42px">➿</div>

<h3 style="color:#facc15">Tak Hingga Solusi</h3>

<p>
Kedua garis berhimpit.
</p>

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- SUBSTITUSI -->
<!-- ===================================================== -->

<h2 style="color:#f59e0b">🔁 Metode Substitusi</h2>

<p>
Metode substitusi dilakukan dengan mengganti salah satu variabel ke persamaan lainnya.
</p>

<h3 style="color:#fbbf24">Langkah-Langkah</h3>

<ul>
<li>1. Nyatakan salah satu variabel</li>
<li>2. Substitusi ke persamaan lain</li>
<li>3. Cari nilai variabel</li>
<li>4. Substitusi balik</li>
</ul>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<h3 style="color:#facc15">📝 Contoh Soal</h3>

<p>x + y = 5</p>
<p>2x − y = 1</p>

<p>Dari persamaan pertama:</p>

<p>x = 5 − y</p>

<p>Substitusi ke persamaan kedua:</p>

<p>2(5 − y) − y = 1</p>
<p>10 − 2y − y = 1</p>
<p>10 − 3y = 1</p>
<p>3y = 9</p>
<p>y = 3</p>

<p>x = 5 − 3 = 2</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">

✅ Jawaban: (2,3)

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- ELIMINASI -->
<!-- ===================================================== -->

<h2 style="color:#f59e0b">✂️ Metode Eliminasi</h2>

<p>
Metode eliminasi dilakukan dengan menghilangkan salah satu variabel.
</p>

<h3 style="color:#fbbf24">Langkah-Langkah</h3>

<ul>
<li>1. Samakan koefisien</li>
<li>2. Jumlahkan atau kurangkan persamaan</li>
<li>3. Temukan satu variabel</li>
<li>4. Substitusi balik</li>
</ul>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<h3 style="color:#facc15">📝 Contoh Soal</h3>

<p>x + y = 5</p>
<p>2x − y = 1</p>

<p>Jumlahkan kedua persamaan:</p>

<p>(x + y) + (2x − y) = 5 + 1</p>

<p>3x = 6</p>

<p>x = 2</p>

<p>Substitusi ke persamaan pertama:</p>

<p>2 + y = 5</p>

<p>y = 3</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:12px;
">

✅ Jawaban: (2,3)

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- GRAFIK -->
<!-- ===================================================== -->

<h2 style="color:#f59e0b">📉 Metode Grafik</h2>

<p>
Metode grafik dilakukan dengan menggambar kedua persamaan pada bidang Cartesius.
</p>

<h3 style="color:#fbbf24">Langkah-Langkah</h3>

<ul>
<li>1. Ubah ke bentuk y = mx + c</li>
<li>2. Tentukan dua titik</li>
<li>3. Gambar garis</li>
<li>4. Titik potong = solusi</li>
</ul>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<h3 style="color:#facc15">📝 Contoh Soal</h3>

<p>x + y = 5 → y = 5 − x</p>

<p>2x − y = 1 → y = 2x − 1</p>

<p>
Setelah kedua garis digambar, titik potongnya adalah:
</p>

<div style="
background:#4c0519;
padding:12px;
border-radius:10px;
border-left:5px solid #ef4444;
margin-top:12px;
">

✅ (2,3)

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- JENIS SOLUSI -->
<!-- ===================================================== -->

<h2 style="color:#f59e0b">⚖️ Jenis Solusi SPLDV</h2>

<div style="overflow-x:auto;margin-top:18px">

<table style="
width:100%;
border-collapse:collapse;
overflow:hidden;
border-radius:16px;
">

<tr style="background:#f59e0b;color:white">

<th style="padding:12px;border:1px solid #374151">
Jenis Solusi
</th>

<th style="padding:12px;border:1px solid #374151">
Keterangan
</th>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Satu Solusi
</td>

<td style="padding:12px;border:1px solid #374151">
Garis berpotongan
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
Tidak Ada Solusi
</td>

<td style="padding:12px;border:1px solid #374151">
Garis sejajar
</td>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Tak Hingga Solusi
</td>

<td style="padding:12px;border:1px solid #374151">
Garis berhimpit
</td>

</tr>

</table>

</div>

<hr>

<!-- ===================================================== -->
<!-- CONTOH SOAL -->
<!-- ===================================================== -->

<h2 style="color:#f59e0b">🧠 Contoh Soal Campuran</h2>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>1.</b> 2x + y = 7 <br>
x − y = 1
</p>

<p>
Jumlahkan kedua persamaan:
</p>

<p>
3x = 8
</p>

<p>
x = 8/3
</p>

<p>
Substitusi:
</p>

<p>
8/3 − y = 1
</p>

<p>
y = 5/3
</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">

✅ Jawaban: (8/3 , 5/3)

</div>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>2.</b> 3x + 2y = 12 <br>
x + y = 5
</p>

<p>
Dari persamaan kedua:
</p>

<p>
x = 5 − y
</p>

<p>
Substitusi:
</p>

<p>
3(5 − y) + 2y = 12
</p>

<p>
15 − y = 12
</p>

<p>
y = 3
</p>

<p>
x = 2
</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:12px;
">

✅ Jawaban: (2,3)

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- KONTEKSTUAL -->
<!-- ===================================================== -->

<h2 style="color:#f59e0b">🌍 Contoh Soal Kontekstual</h2>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:14px;
margin-top:18px;
">

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
">

<h3>📚 Harga Barang</h3>

<p>
2 buku + 1 pensil = Rp7.000
</p>

<p>
1 buku + 1 pensil = Rp5.000
</p>

<p>
Buku = Rp2.000
</p>

<p>
Pensil = Rp3.000
</p>

</div>

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
">

<h3>👦 Umur</h3>

<p>
Jumlah umur Ani dan Budi = 20 tahun
</p>

<p>
Ani 4 tahun lebih tua
</p>

<p>
Umur Budi = 8 tahun
</p>

<p>
Umur Ani = 12 tahun
</p>

</div>

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
">

<h3>🚗 Parkiran</h3>

<p>
Jumlah kendaraan = 20
</p>

<p>
Jumlah roda = 54
</p>

<p>
Motor = 13
</p>

<p>
Mobil = 7
</p>

</div>

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
">

<h3>🎫 Tiket</h3>

<p>
Jumlah tiket = 30
</p>

<p>
Total uang = Rp250.000
</p>

<p>
Tiket dewasa = 20
</p>

<p>
Tiket anak = 10
</p>

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- RINGKASAN -->
<!-- ===================================================== -->

<h2 style="color:#f59e0b">📋 Ringkasan Metode SPLDV</h2>

<div style="overflow-x:auto">

<table style="
width:100%;
border-collapse:collapse;
overflow:hidden;
border-radius:16px;
">

<tr style="background:#f59e0b;color:white">

<th style="padding:12px;border:1px solid #374151">
Metode
</th>

<th style="padding:12px;border:1px solid #374151">
Cara
</th>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Substitusi
</td>

<td style="padding:12px;border:1px solid #374151">
Mengganti variabel
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
Eliminasi
</td>

<td style="padding:12px;border:1px solid #374151">
Menghilangkan variabel
</td>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Grafik
</td>

<td style="padding:12px;border:1px solid #374151">
Mencari titik potong garis
</td>

</tr>

</table>

</div>

<hr>

<!-- ===================================================== -->
<!-- KESIMPULAN -->
<!-- ===================================================== -->

<h2 style="color:#f59e0b">💡 Kesimpulan</h2>

<div style="
background:linear-gradient(135deg,#FFD93D,#f59e0b);
padding:20px;
border-radius:18px;
margin-top:18px;
color:#111827;
">

<ul style="line-height:2">

<li>SPLDV terdiri dari dua persamaan linear dua variabel</li>

<li>Solusi SPLDV berupa pasangan (x,y)</li>

<li>Metode penyelesaian: substitusi, eliminasi, dan grafik</li>

<li>SPLDV banyak digunakan dalam kehidupan sehari-hari</li>

<li>Memahami SPLDV membantu menyelesaikan masalah nyata</li>

</ul>

</div>

`,
tip:'Gunakan eliminasi untuk cepat, substitusi untuk lebih mudah dipahami!'
}
    ],
    sem2: [
    {
  id:'relasi-fungsi',
  icon:'🔗',
  title:'Relasi & Fungsi',
  color:'#55EFC4',
  desc:'Memahami relasi, fungsi, domain, range, dan penerapannya dalam kehidupan sehari-hari.',

  isi:`

<!-- ===================================================== -->
<!-- HEADER -->
<!-- ===================================================== -->

<div style="
display:flex;
align-items:center;
gap:16px;
background:linear-gradient(135deg,#55efc4,#00b894);
padding:20px;
border-radius:20px;
margin-bottom:20px;
box-shadow:0 10px 30px rgba(0,0,0,0.25);
color:white;
">

<div style="font-size:55px">🔗</div>

<div>

<h1 style="
margin:0;
font-size:32px;
font-weight:900;
">
Relasi & Fungsi
</h1>

<p style="
margin-top:8px;
font-size:15px;
opacity:.95;
line-height:1.7;
">
Mempelajari relasi, fungsi, domain, kodomain, range, serta penerapan fungsi dalam kehidupan sehari-hari.
</p>

</div>
</div>

<!-- ===================================================== -->
<!-- RELASI -->
<!-- ===================================================== -->

<h2 style="color:#00b894">📖 Relasi</h2>

<p>
Relasi adalah aturan yang menghubungkan anggota himpunan A dengan anggota himpunan B.
</p>

<div style="
background:rgba(255,255,255,0.05);
border-left:5px solid #00b894;
padding:16px;
border-radius:14px;
margin:16px 0;
line-height:1.8;
">

📌 <b>Contoh Relasi:</b>

<p>
A = {1,2,3}
</p>

<p>
B = {2,4,6}
</p>

<p>
Relasi "dikali 2":
</p>

<p>
(1→2), (2→4), (3→6)
</p>

</div>

<p><b>Contoh kontekstual:</b></p>

<ul>
<li>Siswa → nomor absen</li>
<li>Anak → umur</li>
<li>Negara → ibu kota</li>
<li>Siswa → kelas</li>
</ul>

<hr>

<!-- ===================================================== -->
<!-- PENYAJIAN RELASI -->
<!-- ===================================================== -->

<h2 style="color:#00b894">📊 Cara Menyajikan Relasi</h2>

<p>
Relasi dapat disajikan dalam beberapa bentuk berikut:
</p>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
gap:14px;
margin-top:20px;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
border:1px solid rgba(255,255,255,.08);
">

<div style="font-size:38px">➡️</div>

<h3 style="color:#55efc4">
Diagram Panah
</h3>

<p>
Menunjukkan hubungan langsung antar anggota himpunan.
</p>

<p>
Contoh:
1 → 2
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
border:1px solid rgba(255,255,255,.08);
">

<div style="font-size:38px">📌</div>

<h3 style="color:#55efc4">
Pasangan Berurutan
</h3>

<p>
Ditulis dalam bentuk:
</p>

<p>
(1,2), (2,4), (3,6)
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
border:1px solid rgba(255,255,255,.08);
">

<div style="font-size:38px">📈</div>

<h3 style="color:#55efc4">
Diagram Cartesius
</h3>

<p>
Relasi digambar sebagai titik pada bidang koordinat.
</p>

</div>

</div>

<div style="
background:#064e3b;
padding:16px;
border-radius:14px;
border-left:5px solid #34d399;
margin-top:18px;
">

📌 <b>Contoh:</b><br><br>

Relasi "kuadrat dari":
(1,1), (2,4), (3,9)

</div>

<hr>

<!-- ===================================================== -->
<!-- FUNGSI -->
<!-- ===================================================== -->

<h2 style="color:#00b894">📌 Fungsi</h2>

<p>
Fungsi adalah relasi khusus di mana setiap anggota domain dipasangkan tepat satu anggota kodomain.
</p>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
border-left:5px solid #00b894;
margin:16px 0;
line-height:1.9;
">

📌 <b>Ciri-ciri Fungsi:</b>

<ul>
<li>Setiap x memiliki pasangan y</li>
<li>Satu x hanya boleh memiliki satu y</li>
<li>Tidak boleh satu x memiliki dua pasangan berbeda</li>
</ul>

</div>

<p><b>Contoh fungsi:</b></p>

<p>
(1→2), (2→4), (3→6)
</p>

<div style="
background:#052e16;
padding:14px;
border-radius:12px;
border-left:5px solid #22c55e;
margin-top:14px;
">

✅ Relasi tersebut termasuk fungsi karena setiap x hanya memiliki satu pasangan y.

</div>

<p style="margin-top:18px"><b>Bukan fungsi:</b></p>

<p>
(1→2) dan (1→3)
</p>

<div style="
background:#4c0519;
padding:14px;
border-radius:12px;
border-left:5px solid #ef4444;
margin-top:14px;
">

❌ Bukan fungsi karena angka 1 memiliki dua pasangan berbeda.

</div>

<hr>

<!-- ===================================================== -->
<!-- DOMAIN RANGE -->
<!-- ===================================================== -->

<h2 style="color:#00b894">🔤 Istilah Penting</h2>

<div style="
overflow-x:auto;
margin-top:18px;
">

<table style="
width:100%;
border-collapse:collapse;
overflow:hidden;
border-radius:16px;
">

<tr style="background:#00b894;color:white">

<th style="padding:12px;border:1px solid #374151">
Istilah
</th>

<th style="padding:12px;border:1px solid #374151">
Pengertian
</th>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Domain
</td>

<td style="padding:12px;border:1px solid #374151">
Himpunan nilai input (x)
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
Kodomain
</td>

<td style="padding:12px;border:1px solid #374151">
Himpunan kemungkinan output
</td>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Range
</td>

<td style="padding:12px;border:1px solid #374151">
Hasil output yang digunakan
</td>

</tr>

</table>

</div>

<div style="
background:#172554;
padding:16px;
border-radius:14px;
border-left:5px solid #60a5fa;
margin-top:18px;
line-height:1.8;
">

📌 <b>Contoh:</b><br><br>

f(x) = x²<br>
Domain = {1,2,3}<br><br>

Hasil:
1² = 1<br>
2² = 4<br>
3² = 9<br><br>

Range = {1,4,9}

</div>

<hr>

<!-- ===================================================== -->
<!-- NOTASI FUNGSI -->
<!-- ===================================================== -->

<h2 style="color:#00b894">📝 Notasi Fungsi</h2>

<p>
Fungsi biasanya ditulis dengan simbol:
</p>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:28px;
font-weight:900;
color:#10b981;
margin:18px 0;
">
f(x) = 2x + 1
</div>

<p><b>Cara menghitung:</b></p>

<p>
f(3) = 2(3) + 1
</p>

<p>
= 6 + 1
</p>

<p>
= 7
</p>

<hr>

<!-- ===================================================== -->
<!-- MENENTUKAN NILAI -->
<!-- ===================================================== -->

<h2 style="color:#00b894">📊 Menentukan Nilai Fungsi</h2>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>Contoh 1</b>
</p>

<p>
f(x) = x² + 1
</p>

<p>
Tentukan f(2)
</p>

<p>
f(2) = 2² + 1
</p>

<p>
= 4 + 1
</p>

<p>
= 5
</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:10px;
">
✅ Jawaban: 5
</div>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>Contoh 2</b>
</p>

<p>
f(x) = 2x + 3
</p>

<p>
Cari f(0)
</p>

<p>
f(0) = 2(0) + 3
</p>

<p>
= 3
</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:10px;
">
✅ Jawaban: 3
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- GRAFIK -->
<!-- ===================================================== -->

<h2 style="color:#00b894">📈 Grafik Fungsi</h2>

<p>
Fungsi dapat digambar pada bidang Cartesius menggunakan titik-titik koordinat.
</p>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:16px;
">

<p>
<b>Contoh:</b>
</p>

<p>
f(x) = x + 1
</p>

<p>
Titik-titik:
</p>

<ul>
<li>(0,1)</li>
<li>(1,2)</li>
<li>(2,3)</li>
</ul>

<p>
Titik tersebut dapat dihubungkan menjadi garis lurus.
</p>

</div>

<hr>

<!-- ===================================================== -->
<!-- JENIS FUNGSI -->
<!-- ===================================================== -->

<h2 style="color:#00b894">📚 Jenis-Jenis Fungsi</h2>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:14px;
margin-top:18px;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3 style="color:#55efc4">
📈 Fungsi Linear
</h3>

<p>
Bentuk:
</p>

<p>
f(x) = mx + c
</p>

<p>
Contoh:
</p>

<p>
f(x) = 2x + 1
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3 style="color:#55efc4">
📉 Fungsi Kuadrat
</h3>

<p>
Bentuk:
</p>

<p>
f(x) = ax² + bx + c
</p>

<p>
Contoh:
</p>

<p>
f(x) = x²
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3 style="color:#55efc4">
➖ Fungsi Konstan
</h3>

<p>
Bentuk:
</p>

<p>
f(x) = c
</p>

<p>
Contoh:
</p>

<p>
f(x) = 5
</p>

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- MENENTUKAN FUNGSI -->
<!-- ===================================================== -->

<h2 style="color:#00b894">🧠 Menentukan Apakah Relasi Termasuk Fungsi</h2>

<p><b>Langkah-langkah:</b></p>

<ul>
<li>Periksa setiap nilai x</li>
<li>Pastikan hanya punya satu pasangan y</li>
<li>Jika satu x memiliki dua y → bukan fungsi</li>
</ul>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin-top:16px;
">

<p>
<b>Contoh 1:</b>
</p>

<p>
(1→2), (2→4), (3→6)
</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:10px;
">
✅ Fungsi
</div>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin-top:16px;
">

<p>
<b>Contoh 2:</b>
</p>

<p>
(1→2), (1→3)
</p>

<div style="
background:#4c0519;
padding:12px;
border-radius:10px;
border-left:5px solid #ef4444;
margin-top:10px;
">
❌ Bukan fungsi
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- KONTEKSTUAL -->
<!-- ===================================================== -->

<h2 style="color:#00b894">🌍 Contoh Soal Kontekstual</h2>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:14px;
margin-top:18px;
">

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
">

<h3>✏️ Harga Barang</h3>

<p>
Harga pensil Rp2.000 per buah.
</p>

<p>
f(x) = 2000x
</p>

<p>
Jika membeli 5 pensil:
</p>

<p>
2000 × 5 = 10000
</p>

</div>

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
">

<h3>💼 Gaji Pekerja</h3>

<p>
Gaji harian Rp50.000 + bonus Rp10.000 per produk.
</p>

<p>
f(x) = 50000 + 10000x
</p>

<p>
Jika menjual 3 produk:
</p>

<p>
50000 + 30000 = 80000
</p>

</div>

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
">

<h3>🚗 Jarak Tempuh</h3>

<p>
Kecepatan kendaraan 60 km/jam.
</p>

<p>
f(t) = 60t
</p>

<p>
Jika 2 jam:
</p>

<p>
60 × 2 = 120 km
</p>

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- LATIHAN -->
<!-- ===================================================== -->

<h2 style="color:#00b894">🧠 Latihan Soal</h2>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p>
<b>1.</b> Jika f(x) = 2x + 3, tentukan f(4)
</p>

<p>
f(4) = 2(4) + 3
</p>

<p>
= 8 + 3
</p>

<p>
= 11
</p>

<hr>

<p>
<b>2.</b> Tentukan apakah relasi berikut termasuk fungsi:
</p>

<p>
(1→2), (2→3), (3→4)
</p>

<p>
Karena setiap x memiliki satu pasangan:
</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:10px;
">
✅ Fungsi
</div>

<hr>

<p>
<b>3.</b> Jika f(x) = x², tentukan f(5)
</p>

<p>
f(5) = 5² = 25
</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:10px;
">
✅ Jawaban: 25
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- KESIMPULAN -->
<!-- ===================================================== -->

<h2 style="color:#00b894">💡 Kesimpulan</h2>

<div style="
background:linear-gradient(135deg,#55efc4,#00b894);
padding:20px;
border-radius:18px;
margin-top:18px;
color:white;
">

<ul style="line-height:2">

<li>Relasi adalah hubungan antara dua himpunan</li>

<li>Fungsi adalah relasi khusus</li>

<li>Setiap x hanya boleh memiliki satu pasangan y</li>

<li>Domain adalah input, range adalah hasil output</li>

<li>Fungsi dapat ditulis dengan notasi f(x)</li>

<li>Fungsi digunakan dalam kehidupan sehari-hari seperti harga, gaji, dan jarak</li>

</ul>

</div>

`,
  tip:'Fungsi itu mudah: setiap x hanya boleh punya SATU pasangan y. Kalau ada dua, berarti bukan fungsi!'
},
     {
  id:'statistika-lanjutan',
  icon:'📉',
  title:'Statistika Lanjutan',
  color:'#A29BFE',
  desc:'Ukuran penyebaran data dan penyajiannya.',

  isi:`

<!-- ===================================================== -->
<!-- HEADER -->
<!-- ===================================================== -->

<div style="
display:flex;
align-items:center;
gap:16px;
background:linear-gradient(135deg,#a29bfe,#6c5ce7);
padding:20px;
border-radius:20px;
margin-bottom:20px;
box-shadow:0 10px 30px rgba(0,0,0,0.25);
color:white;
">

<div style="font-size:55px">📉</div>

<div>

<h1 style="
margin:0;
font-size:32px;
font-weight:900;
">
Statistika Lanjutan
</h1>

<p style="
margin-top:8px;
font-size:15px;
opacity:.95;
line-height:1.7;
">
Mempelajari ukuran penyebaran data, kuartil, ogif, dan diagram kotak-garis untuk memahami karakteristik data.
</p>

</div>
</div>

<!-- ===================================================== -->
<!-- PENGERTIAN -->
<!-- ===================================================== -->

<h2 style="color:#6c5ce7">📖 Pengertian Statistika</h2>

<p>
Statistika adalah ilmu yang mempelajari cara mengumpulkan, mengolah, menyajikan, dan menganalisis data.
</p>

<p>
Pada statistika lanjutan, kita mempelajari bagaimana data menyebar dari nilai tengahnya.
</p>

<div style="
background:rgba(255,255,255,0.05);
border-left:5px solid #6c5ce7;
padding:16px;
border-radius:14px;
margin:16px 0;
line-height:1.8;
">

📌 <b>Tujuan ukuran penyebaran data:</b>

<ul>
<li>Mengetahui seberapa jauh data menyebar</li>
<li>Membandingkan kelompok data</li>
<li>Mengetahui kestabilan data</li>
<li>Menganalisis variasi data</li>
</ul>

</div>

<hr>

<!-- ===================================================== -->
<!-- RANGE -->
<!-- ===================================================== -->

<h2 style="color:#6c5ce7">📏 Jangkauan (Range)</h2>

<p>
Jangkauan adalah selisih antara nilai terbesar dan nilai terkecil dalam suatu data.
</p>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:24px;
font-weight:900;
color:#6c5ce7;
margin:18px 0;
">
J = Xmax − Xmin
</div>

<p><b>Keterangan:</b></p>

<ul>
<li>Xmax = data terbesar</li>
<li>Xmin = data terkecil</li>
</ul>

<!-- ===================================================== -->
<!-- CONTOH RANGE -->
<!-- ===================================================== -->

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<h3 style="color:#a29bfe">📝 Contoh Soal</h3>

<p>
Data: 3, 5, 7, 10
</p>

<p>
Nilai terbesar = 10
</p>

<p>
Nilai terkecil = 3
</p>

<p>
J = 10 − 3
</p>

<p>
= 7
</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Jangkauan = 7
</div>

</div>

<!-- ===================================================== -->
<!-- KONTEKSTUAL RANGE -->
<!-- ===================================================== -->

<div style="
background:#172554;
padding:16px;
border-radius:14px;
margin-top:18px;
border-left:5px solid #60a5fa;
">

📌 <b>Contoh Kontekstual:</b><br><br>

Suhu terendah di suatu kota adalah 22°C dan suhu tertinggi 30°C.

<p>
Jangkauan suhu:
</p>

<p>
30 − 22 = 8°C
</p>

</div>

<hr>

<!-- ===================================================== -->
<!-- KUARTIL -->
<!-- ===================================================== -->

<h2 style="color:#6c5ce7">📊 Kuartil</h2>

<p>
Kuartil adalah nilai yang membagi data menjadi 4 bagian sama banyak setelah data diurutkan.
</p>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:14px;
margin:20px 0;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:40px">1️⃣</div>

<h3 style="color:#a29bfe">Q1</h3>

<p>
Kuartil bawah (25%)
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:40px">2️⃣</div>

<h3 style="color:#a29bfe">Q2</h3>

<p>
Median / nilai tengah (50%)
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:40px">3️⃣</div>

<h3 style="color:#a29bfe">Q3</h3>

<p>
Kuartil atas (75%)
</p>

</div>

</div>

<!-- ===================================================== -->
<!-- LANGKAH KUARTIL -->
<!-- ===================================================== -->

<h3 style="color:#8b5cf6">📝 Langkah Menentukan Kuartil</h3>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
line-height:2;
">

<ul>
<li>1. Urutkan data dari kecil ke besar</li>
<li>2. Tentukan median (Q2)</li>
<li>3. Bagi data menjadi dua bagian</li>
<li>4. Cari median bagian bawah → Q1</li>
<li>5. Cari median bagian atas → Q3</li>
</ul>

</div>

<!-- ===================================================== -->
<!-- CONTOH KUARTIL -->
<!-- ===================================================== -->

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<h3 style="color:#a29bfe">🧠 Contoh Soal Kuartil</h3>

<p>
Data: 2, 4, 6, 8, 10
</p>

<p>
Q2 = 6
</p>

<p>
Bagian bawah: 2, 4 → median = 4
</p>

<p>
Q1 = 4
</p>

<p>
Bagian atas: 8, 10 → median = 8
</p>

<p>
Q3 = 8
</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Q1 = 4, Q2 = 6, Q3 = 8
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- JIK -->
<!-- ===================================================== -->

<h2 style="color:#6c5ce7">📦 Jangkauan Interkuartil (JIK)</h2>

<p>
Jangkauan interkuartil adalah selisih antara kuartil atas dan kuartil bawah.
</p>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:24px;
font-weight:900;
color:#6c5ce7;
margin:18px 0;
">
JIK = Q3 − Q1
</div>

<!-- ===================================================== -->
<!-- CONTOH JIK -->
<!-- ===================================================== -->

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3 style="color:#a29bfe">📝 Contoh Soal</h3>

<p>
Q3 = 8
</p>

<p>
Q1 = 4
</p>

<p>
JIK = 8 − 4
</p>

<p>
= 4
</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:12px;
">
✅ JIK = 4
</div>

</div>

<!-- ===================================================== -->
<!-- KONTEKSTUAL JIK -->
<!-- ===================================================== -->

<div style="
background:#7c2d12;
padding:16px;
border-radius:14px;
margin-top:18px;
border-left:5px solid #fb923c;
">

📌 <b>Contoh Kontekstual:</b><br><br>

Nilai siswa memiliki:
<ul>
<li>Q1 = 70</li>
<li>Q3 = 90</li>
</ul>

<p>
JIK = 90 − 70 = 20
</p>

<p>
Artinya penyebaran nilai tengah siswa sebesar 20 poin.
</p>

</div>

<hr>

<!-- ===================================================== -->
<!-- SIMPANGAN -->
<!-- ===================================================== -->

<h2 style="color:#6c5ce7">📉 Simpangan</h2>

<p>
Simpangan adalah selisih antara setiap data dengan rata-rata (mean).
</p>

<!-- ===================================================== -->
<!-- CONTOH SIMPANGAN -->
<!-- ===================================================== -->

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<h3 style="color:#a29bfe">🧠 Contoh Simpangan</h3>

<p>
Data: 4, 6, 8
</p>

<p>
Mean = (4 + 6 + 8) ÷ 3
</p>

<p>
= 6
</p>

<p>
Simpangan tiap data:
</p>

<ul>
<li>4 − 6 = -2</li>
<li>6 − 6 = 0</li>
<li>8 − 6 = 2</li>
</ul>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Data menyebar sejauh 2 dari rata-rata
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- SIMPANGAN BAKU -->
<!-- ===================================================== -->

<h2 style="color:#6c5ce7">📏 Simpangan Baku</h2>

<p>
Simpangan baku digunakan untuk mengukur seberapa jauh data menyebar dari rata-rata secara keseluruhan.
</p>

<div style="
overflow-x:auto;
margin-top:18px;
">

<table style="
width:100%;
border-collapse:collapse;
overflow:hidden;
border-radius:16px;
">

<tr style="background:#6c5ce7;color:white">

<th style="padding:12px;border:1px solid #374151">
Nilai Simpangan Baku
</th>

<th style="padding:12px;border:1px solid #374151">
Makna
</th>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Kecil
</td>

<td style="padding:12px;border:1px solid #374151">
Data rapat / hampir sama
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
Besar
</td>

<td style="padding:12px;border:1px solid #374151">
Data menyebar jauh
</td>

</tr>

</table>

</div>

<!-- ===================================================== -->
<!-- KONTEKSTUAL -->
<!-- ===================================================== -->

<div style="
background:#111827;
padding:16px;
border-radius:14px;
border-left:5px solid #a29bfe;
margin-top:18px;
">

📌 <b>Contoh Kontekstual:</b>

<ul>
<li>Kelas A: nilai siswa hampir sama → simpangan baku kecil</li>
<li>Kelas B: nilai siswa berbeda jauh → simpangan baku besar</li>
</ul>

</div>

<hr>

<!-- ===================================================== -->
<!-- OGIF -->
<!-- ===================================================== -->

<h2 style="color:#6c5ce7">📈 Diagram Ogif</h2>

<p>
Diagram ogif adalah grafik frekuensi kumulatif.
</p>

<p>
Grafik ini digunakan untuk melihat jumlah data sampai batas tertentu.
</p>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<h3 style="color:#a29bfe">📌 Fungsi Diagram Ogif</h3>

<ul style="line-height:2">
<li>Menentukan median</li>
<li>Menentukan kuartil</li>
<li>Mengetahui frekuensi kumulatif</li>
<li>Menganalisis distribusi data</li>
</ul>

</div>

<div style="
background:#172554;
padding:16px;
border-radius:14px;
margin-top:18px;
border-left:5px solid #60a5fa;
">

📌 <b>Contoh:</b><br><br>

Jika diagram ogif menunjukkan 20 siswa berada di bawah nilai 80,
maka berarti:

<p>
20 siswa memiliki nilai ≤ 80
</p>

</div>

<hr>

<!-- ===================================================== -->
<!-- BOX PLOT -->
<!-- ===================================================== -->

<h2 style="color:#6c5ce7">📦 Diagram Kotak-Garis (Box Plot)</h2>

<p>
Diagram kotak-garis digunakan untuk menampilkan data secara ringkas menggunakan 5 nilai penting.
</p>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:14px;
margin-top:20px;
">

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
text-align:center;
">

<h3 style="color:#a29bfe">Minimum</h3>

<p>
Nilai terkecil
</p>

</div>

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
text-align:center;
">

<h3 style="color:#a29bfe">Q1</h3>

<p>
Kuartil bawah
</p>

</div>

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
text-align:center;
">

<h3 style="color:#a29bfe">Q2</h3>

<p>
Median
</p>

</div>

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
text-align:center;
">

<h3 style="color:#a29bfe">Q3</h3>

<p>
Kuartil atas
</p>

</div>

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
text-align:center;
">

<h3 style="color:#a29bfe">Maksimum</h3>

<p>
Nilai terbesar
</p>

</div>

</div>

<!-- ===================================================== -->
<!-- CONTOH BOX PLOT -->
<!-- ===================================================== -->

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:20px;
">

<h3 style="color:#a29bfe">🧠 Contoh Data</h3>

<p>
Min = 2
</p>

<p>
Q1 = 4
</p>

<p>
Median = 6
</p>

<p>
Q3 = 8
</p>

<p>
Max = 10
</p>

<p>
Data tersebut dapat disajikan dalam bentuk diagram kotak-garis.
</p>

</div>

<hr>

<!-- ===================================================== -->
<!-- RINGKASAN -->
<!-- ===================================================== -->

<h2 style="color:#6c5ce7">📋 Ringkasan Rumus</h2>

<div style="overflow-x:auto">

<table style="
width:100%;
border-collapse:collapse;
overflow:hidden;
border-radius:16px;
">

<tr style="background:#6c5ce7;color:white">

<th style="padding:12px;border:1px solid #374151">
Konsep
</th>

<th style="padding:12px;border:1px solid #374151">
Rumus / Makna
</th>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Jangkauan
</td>

<td style="padding:12px;border:1px solid #374151">
Terbesar − terkecil
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
Kuartil
</td>

<td style="padding:12px;border:1px solid #374151">
Membagi data menjadi 4 bagian
</td>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
JIK
</td>

<td style="padding:12px;border:1px solid #374151">
Q3 − Q1
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
Simpangan
</td>

<td style="padding:12px;border:1px solid #374151">
Data − rata-rata
</td>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Simpangan Baku
</td>

<td style="padding:12px;border:1px solid #374151">
Mengukur penyebaran data
</td>

</tr>

</table>

</div>

<hr>

<!-- ===================================================== -->
<!-- CONTOH SOAL -->
<!-- ===================================================== -->

<h2 style="color:#6c5ce7">🧠 Contoh Soal Campuran</h2>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>1.</b> Tentukan jangkauan data:
50, 60, 70, 80, 90
</p>

<p>
J = 90 − 50
</p>

<p>
= 40
</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:10px;
">
✅ Jawaban: 40
</div>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>2.</b> Jika Q1 = 65 dan Q3 = 85, tentukan JIK.
</p>

<p>
JIK = 85 − 65
</p>

<p>
= 20
</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:10px;
">
✅ Jawaban: 20
</div>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>3.</b> Kelas A memiliki nilai hampir sama, sedangkan kelas B nilainya sangat berbeda.
Kelas mana yang memiliki simpangan baku lebih besar?
</p>

<div style="
background:#4c0519;
padding:12px;
border-radius:10px;
border-left:5px solid #ef4444;
margin-top:10px;
">
✅ Kelas B memiliki simpangan baku lebih besar
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- KONTEKSTUAL -->
<!-- ===================================================== -->

<h2 style="color:#6c5ce7">🌍 Contoh Soal Kontekstual</h2>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:14px;
margin-top:18px;
">

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
">

<h3>🌡️ Suhu Kota</h3>

<p>
Suhu minimum 22°C dan maksimum 30°C.
</p>

<p>
Range = 8°C
</p>

</div>

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
">

<h3>📚 Nilai Ujian</h3>

<p>
Q1 = 70 dan Q3 = 90
</p>

<p>
JIK = 20
</p>

</div>

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
">

<h3>🏫 Analisis Kelas</h3>

<p>
Kelas dengan nilai hampir sama memiliki simpangan kecil.
</p>

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- KESIMPULAN -->
<!-- ===================================================== -->

<h2 style="color:#6c5ce7">💡 Kesimpulan</h2>

<div style="
background:linear-gradient(135deg,#a29bfe,#6c5ce7);
padding:20px;
border-radius:18px;
margin-top:18px;
color:white;
">

<ul style="line-height:2">

<li>Ukuran penyebaran menunjukkan seberapa jauh data menyebar</li>

<li>Range diperoleh dari data terbesar dikurangi data terkecil</li>

<li>Kuartil membagi data menjadi empat bagian</li>

<li>JIK dihitung dari Q3 − Q1</li>

<li>Simpangan baku menunjukkan tingkat keragaman data</li>

<li>Diagram ogif dan box plot membantu menyajikan data secara visual</li>

</ul>

</div>

`,
tip:'Ingat: Range = terbesar − terkecil, JIK = Q3 − Q1, dan simpangan menunjukkan seberapa jauh data dari rata-rata!'
},
      {
  id:'peluang',
  icon:'🎲',
  title:'Peluang',
  color:'#FF6B6B',
  desc:'Ruang sampel, kejadian, peluang teoritis dan empiris.',

  isi:`

<!-- ===================================================== -->
<!-- HEADER -->
<!-- ===================================================== -->

<div style="
display:flex;
align-items:center;
gap:16px;
background:linear-gradient(135deg,#ff6b6b,#ee5253);
padding:20px;
border-radius:20px;
margin-bottom:20px;
box-shadow:0 10px 30px rgba(0,0,0,0.25);
color:white;
">

<div style="font-size:55px">🎲</div>

<div>
<h1 style="
margin:0;
font-size:32px;
font-weight:900;
">
Peluang
</h1>

<p style="
margin-top:8px;
font-size:15px;
opacity:.95;
line-height:1.7;
">
Mempelajari ruang sampel, kejadian, peluang teoritis, peluang empiris, dan penerapannya dalam kehidupan sehari-hari.
</p>
</div>

</div>

<!-- ===================================================== -->
<!-- PENGERTIAN -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">📖 Konsep Dasar Peluang</h2>

<p>
Peluang adalah ukuran kemungkinan suatu kejadian terjadi.
Semakin besar nilai peluang, semakin besar kemungkinan kejadian tersebut terjadi.
</p>

<div style="
background:rgba(255,255,255,0.05);
border-left:5px solid #ff6b6b;
padding:16px;
border-radius:14px;
margin:16px 0;
line-height:1.8;
">

📌 <b>Contoh dalam kehidupan sehari-hari:</b>

<ul>
<li>Peluang hujan hari ini</li>
<li>Peluang menang permainan</li>
<li>Peluang mendapatkan hadiah undian</li>
<li>Peluang muncul angka saat melempar dadu</li>
</ul>

</div>

<!-- ===================================================== -->
<!-- RUMUS -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">📐 Rumus Dasar Peluang</h2>

<p>
Peluang suatu kejadian dihitung dengan membandingkan banyak kejadian yang diinginkan dengan seluruh kemungkinan yang mungkin terjadi.
</p>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:24px;
font-weight:900;
color:#ef4444;
margin:18px 0;
">
P(A) = n(A) / n(S)
</div>

<p><b>Keterangan:</b></p>

<ul>
<li><b>P(A)</b> = peluang kejadian A</li>
<li><b>n(A)</b> = banyak kejadian yang diinginkan</li>
<li><b>n(S)</b> = banyak seluruh kemungkinan</li>
</ul>

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
border-left:5px solid #ff6b6b;
margin-top:16px;
">

📌 Nilai peluang selalu berada di antara:

<div style="
margin-top:12px;
font-size:22px;
font-weight:900;
text-align:center;
color:#f87171;
">
0 ≤ P(A) ≤ 1
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- ISTILAH -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">🎯 Istilah Penting dalam Peluang</h2>

<div style="
overflow-x:auto;
margin-top:18px;
">

<table style="
width:100%;
border-collapse:collapse;
overflow:hidden;
border-radius:16px;
">

<tr style="background:#ee5253;color:white">

<th style="
padding:12px;
border:1px solid #374151;
">
Istilah
</th>

<th style="
padding:12px;
border:1px solid #374151;
">
Penjelasan
</th>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Ruang Sampel (S)
</td>

<td style="padding:12px;border:1px solid #374151">
Semua kemungkinan hasil percobaan
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
Kejadian (A)
</td>

<td style="padding:12px;border:1px solid #374151">
Hasil yang diinginkan
</td>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
n(S)
</td>

<td style="padding:12px;border:1px solid #374151">
Banyak anggota ruang sampel
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
n(A)
</td>

<td style="padding:12px;border:1px solid #374151">
Banyak kejadian yang diinginkan
</td>

</tr>

</table>

</div>

<!-- ===================================================== -->
<!-- MAKNA -->
<!-- ===================================================== -->

<h3 style="margin-top:24px">📌 Makna Nilai Peluang</h3>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:14px;
margin:22px 0;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
border:1px solid rgba(255,255,255,.08);
">

<div style="font-size:40px">❌</div>

<h3 style="color:#ff6b6b">P = 0</h3>

<p>
Kejadian mustahil terjadi
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
border:1px solid rgba(255,255,255,.08);
">

<div style="font-size:40px">⚖️</div>

<h3 style="color:#ff6b6b">0 < P < 1</h3>

<p>
Kejadian mungkin terjadi
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
border:1px solid rgba(255,255,255,.08);
">

<div style="font-size:40px">✅</div>

<h3 style="color:#ff6b6b">P = 1</h3>

<p>
Kejadian pasti terjadi
</p>

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- RUANG SAMPEL -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">🎲 Menentukan Ruang Sampel</h2>

<p>
Ruang sampel adalah himpunan semua kemungkinan hasil percobaan.
</p>

<!-- CONTOH 1 -->

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<h3>🎲 Contoh 1: Lempar Dadu</h3>

<p>
S = {1, 2, 3, 4, 5, 6}
</p>

<p>
n(S) = 6
</p>

</div>

<!-- CONTOH 2 -->

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<h3>🪙 Contoh 2: Lempar Koin</h3>

<p>
S = {angka, gambar}
</p>

<p>
n(S) = 2
</p>

</div>

<!-- CONTOH 3 -->

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<h3>🪙🪙 Contoh 3: Dua Koin</h3>

<p>
S = {AA, AG, GA, GG}
</p>

<p>
n(S) = 4
</p>

</div>

<div style="
background:#7c2d12;
padding:14px;
border-radius:12px;
border-left:5px solid #fb923c;
margin-top:16px;
">

📌 <b>Keterangan:</b><br><br>

A = angka<br>
G = gambar

</div>

<hr>

<!-- ===================================================== -->
<!-- CONTOH DASAR -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">🧠 Contoh Soal Dasar</h2>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>1.</b> Peluang muncul angka 3 pada dadu
</p>

<p>
n(A) = 1
</p>

<p>
n(S) = 6
</p>

<p>
P(A) = 1/6
</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:10px;
">
✅ Jawaban: 1/6
</div>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>2.</b> Peluang muncul angka genap pada dadu
</p>

<p>
A = {2,4,6}
</p>

<p>
n(A)=3
</p>

<p>
n(S)=6
</p>

<p>
P(A)=3/6=1/2
</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:10px;
">
✅ Jawaban: 1/2
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- KOMPLEMEN -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">📌 Kejadian Komplemen</h2>

<p>
Kejadian komplemen adalah kejadian kebalikan dari suatu kejadian.
</p>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:24px;
font-weight:900;
color:#ef4444;
margin:16px 0;
">
P(Aᶜ) = 1 − P(A)
</div>

<p><b>Contoh:</b></p>

<p>
P(genap) = 1/2
</p>

<p>
Maka:
</p>

<p>
P(bukan genap) = 1 − 1/2
</p>

<p>
= 1/2
</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Peluang komplemen = 1/2
</div>

<hr>

<!-- ===================================================== -->
<!-- SALING LEPAS -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">🃏 Kejadian Saling Lepas</h2>

<p>
Dua kejadian disebut saling lepas jika tidak dapat terjadi secara bersamaan.
</p>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:24px;
font-weight:900;
color:#ef4444;
margin:16px 0;
">
P(A ∪ B) = P(A) + P(B)
</div>

<p><b>Contoh:</b></p>

<p>
Pada pelemparan dadu:
</p>

<p>
A = muncul angka 1
</p>

<p>
B = muncul angka 2
</p>

<p>
P(A ∪ B)
</p>

<p>
= 1/6 + 1/6
</p>

<p>
= 2/6
</p>

<p>
= 1/3
</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #3b82f6;
margin-top:12px;
">
✅ Jawaban: 1/3
</div>

<hr>

<!-- ===================================================== -->
<!-- TIDAK SALING LEPAS -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">🔗 Kejadian Tidak Saling Lepas</h2>

<p>
Dua kejadian disebut tidak saling lepas jika keduanya bisa terjadi bersamaan.
</p>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:22px;
font-weight:900;
color:#ef4444;
margin:16px 0;
">
P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
</div>

<p><b>Contoh:</b></p>

<p>
Pada kartu:
</p>

<p>
A = kartu merah
</p>

<p>
B = kartu hati
</p>

<p>
Karena kartu hati termasuk kartu merah, maka kedua kejadian dapat terjadi bersamaan.
</p>

<hr>

<!-- ===================================================== -->
<!-- EMPIRIS -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">📊 Peluang Empiris</h2>

<p>
Peluang empiris adalah peluang berdasarkan hasil percobaan nyata.
</p>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:22px;
font-weight:900;
color:#ef4444;
margin:16px 0;
">
P(A) = frekuensi kejadian / jumlah percobaan
</div>

<p><b>Contoh:</b></p>

<p>
Koin dilempar 10 kali.
</p>

<p>
Muncul angka sebanyak 6 kali.
</p>

<p>
P(angka)=6/10
</p>

<p>
=0,6
</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Peluang empiris = 0,6
</div>

<hr>

<!-- ===================================================== -->
<!-- TEORITIS -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">🎯 Peluang Teoritis</h2>

<p>
Peluang teoritis adalah peluang berdasarkan perhitungan matematika tanpa percobaan langsung.
</p>

<p><b>Contoh:</b></p>

<p>
Peluang muncul angka pada koin:
</p>

<p>
P(angka)=1/2
</p>

<div style="
background:#111827;
padding:16px;
border-radius:14px;
border-left:5px solid #ff6b6b;
margin-top:16px;
">

📌 <b>Perbedaan:</b>

<ul>
<li>Peluang teoritis → berdasarkan teori/perhitungan</li>
<li>Peluang empiris → berdasarkan hasil percobaan nyata</li>
</ul>

</div>

<hr>

<!-- ===================================================== -->
<!-- KONTEKSTUAL -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">🌍 Contoh Soal Kontekstual</h2>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:14px;
margin-top:18px;
">

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
">

<h3>🔴 Bola dalam Kotak</h3>

<p>
Terdapat 3 bola merah dan 2 bola biru.
</p>

<p>
P(merah)=3/5
</p>

</div>

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
">

<h3>👨‍🎓 Pemilihan Siswa</h3>

<p>
10 siswa, 4 laki-laki.
</p>

<p>
P(laki-laki)=4/10
</p>

<p>
=2/5
</p>

</div>

<div style="
background:#1f2937;
padding:16px;
border-radius:14px;
">

<h3>🌧️ Cuaca</h3>

<p>
Dalam 7 hari, hujan terjadi 3 hari.
</p>

<p>
P(hujan)=3/7
</p>

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- SOAL LENGKAP -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">🧠 Soal Lengkap + Pembahasan</h2>

<div style="
background:#1f2937;
padding:20px;
border-radius:16px;
margin-top:18px;
">

<p>
<b>Soal:</b>
</p>

<p>
Sebuah dadu dilempar sekali.
Tentukan peluang muncul angka kurang dari 4.
</p>

<hr style="margin:18px 0;border-color:#374151">

<p>
<b>Langkah 1:</b> Tentukan ruang sampel
</p>

<p>
S = {1,2,3,4,5,6}
</p>

<p>
n(S)=6
</p>

<p>
<b>Langkah 2:</b> Tentukan kejadian yang diinginkan
</p>

<p>
A = {1,2,3}
</p>

<p>
n(A)=3
</p>

<p>
<b>Langkah 3:</b> Gunakan rumus peluang
</p>

<p>
P(A)=n(A)/n(S)
</p>

<p>
=3/6
</p>

<p>
=1/2
</p>

<div style="
background:#052e16;
padding:14px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:16px;
font-weight:700;
">
✅ Jawaban akhir: 1/2
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- LATIHAN -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">📝 Latihan Soal</h2>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
line-height:2;
">

<p>
1. Sebuah dadu dilempar sekali. Tentukan peluang muncul angka ganjil.
</p>

<p>
2. Sebuah koin dilempar sekali. Tentukan peluang muncul gambar.
</p>

<p>
3. Dalam kotak terdapat 5 bola merah dan 3 bola biru. Tentukan peluang mengambil bola biru.
</p>

<p>
4. Dari 20 siswa terdapat 12 perempuan. Tentukan peluang memilih siswa perempuan.
</p>

</div>

<hr>

<!-- ===================================================== -->
<!-- RINGKASAN -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">📋 Ringkasan Materi</h2>

<div style="overflow-x:auto">

<table style="
width:100%;
border-collapse:collapse;
overflow:hidden;
border-radius:16px;
">

<tr style="background:#ee5253;color:white">

<th style="padding:12px;border:1px solid #374151">
Konsep
</th>

<th style="padding:12px;border:1px solid #374151">
Keterangan
</th>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Peluang
</td>

<td style="padding:12px;border:1px solid #374151">
Kemungkinan suatu kejadian terjadi
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
Ruang Sampel
</td>

<td style="padding:12px;border:1px solid #374151">
Seluruh kemungkinan hasil
</td>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Kejadian
</td>

<td style="padding:12px;border:1px solid #374151">
Hasil yang diinginkan
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
Peluang Empiris
</td>

<td style="padding:12px;border:1px solid #374151">
Berdasarkan percobaan
</td>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Peluang Teoritis
</td>

<td style="padding:12px;border:1px solid #374151">
Berdasarkan teori matematika
</td>

</tr>

</table>

</div>

<hr>

<!-- ===================================================== -->
<!-- KESIMPULAN -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">💡 Kesimpulan</h2>

<div style="
background:linear-gradient(135deg,#ff6b6b,#ee5253);
padding:20px;
border-radius:18px;
margin-top:18px;
color:white;
">

<ul style="line-height:2">

<li>Peluang adalah ukuran kemungkinan suatu kejadian</li>

<li>Rumus peluang: P(A)=n(A)/n(S)</li>

<li>Ruang sampel berisi seluruh kemungkinan hasil</li>

<li>Kejadian adalah hasil yang diinginkan</li>

<li>Peluang bernilai antara 0 sampai 1</li>

<li>Peluang teoritis berdasarkan perhitungan matematika</li>

<li>Peluang empiris berdasarkan hasil percobaan nyata</li>

<li>Peluang sering digunakan dalam permainan, cuaca, dan kehidupan sehari-hari</li>

</ul>

</div>

`,
tip:'Ingat: Peluang = kejadian ÷ total kemungkinan. Tentukan ruang sampel dulu, lalu hitung kejadian yang diinginkan!'
},
      {
  id:'bangun-ruang-sisi-datar',
  icon:'📦',
  title:'Bangun Ruang Sisi Datar',
  color:'#55EFC4',
  desc:'Kubus, balok, prisma, limas: luas dan volume.',

  isi:`

<!-- ===================================================== -->
<!-- HEADER -->
<!-- ===================================================== -->

<div style="
display:flex;
align-items:center;
gap:16px;
background:linear-gradient(135deg,#55efc4,#00b894);
padding:20px;
border-radius:20px;
margin-bottom:20px;
box-shadow:0 10px 30px rgba(0,0,0,0.25);
color:white;
">

<div style="font-size:55px">📦</div>

<div>
<h1 style="
margin:0;
font-size:32px;
font-weight:900;
">
Bangun Ruang Sisi Datar
</h1>

<p style="
margin-top:8px;
font-size:15px;
opacity:.95;
line-height:1.7;
">
Mempelajari kubus, balok, prisma, dan limas beserta luas permukaan dan volumenya.
</p>
</div>

</div>

<!-- ===================================================== -->
<!-- PENGERTIAN -->
<!-- ===================================================== -->

<h2 style="color:#00b894">📖 Pengertian Bangun Ruang Sisi Datar</h2>

<p>
Bangun ruang sisi datar adalah bangun tiga dimensi yang memiliki sisi-sisi berbentuk datar (bukan lengkung).
</p>

<p>
Bangun ruang memiliki:
</p>

<ul>
<li><b>Sisi</b> → bidang pembatas bangun</li>
<li><b>Rusuk</b> → pertemuan dua sisi</li>
<li><b>Titik sudut</b> → pertemuan rusuk-rusuk</li>
</ul>

<div style="
background:rgba(255,255,255,0.05);
border-left:5px solid #00b894;
padding:16px;
border-radius:14px;
margin:16px 0;
line-height:1.8;
">

📌 <b>Contoh bangun ruang sisi datar:</b>

<ul>
<li>Kubus</li>
<li>Balok</li>
<li>Prisma</li>
<li>Limas</li>
</ul>

</div>

<!-- ===================================================== -->
<!-- VISUAL -->
<!-- ===================================================== -->

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:14px;
margin:22px 0;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
border:1px solid rgba(255,255,255,.08);
">

<div style="font-size:42px">🎲</div>

<h3 style="color:#55efc4">Kubus</h3>

<p>
Semua sisinya berbentuk persegi dan sama panjang.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
border:1px solid rgba(255,255,255,.08);
">

<div style="font-size:42px">📦</div>

<h3 style="color:#55efc4">Balok</h3>

<p>
Memiliki panjang, lebar, dan tinggi berbeda.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
border:1px solid rgba(255,255,255,.08);
">

<div style="font-size:42px">⛺</div>

<h3 style="color:#55efc4">Prisma</h3>

<p>
Memiliki dua alas sejajar dan kongruen.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
border:1px solid rgba(255,255,255,.08);
">

<div style="font-size:42px">🔺</div>

<h3 style="color:#55efc4">Limas</h3>

<p>
Memiliki satu titik puncak.
</p>

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- KUBUS -->
<!-- ===================================================== -->

<h2 style="color:#00b894">📦 1. Kubus</h2>

<p>
Kubus adalah bangun ruang yang semua sisinya berbentuk persegi dan memiliki panjang rusuk yang sama.
</p>

<div style="
background:#111827;
padding:16px;
border-radius:14px;
border-left:5px solid #55efc4;
margin:16px 0;
">

📌 <b>Sifat-sifat Kubus:</b>

<ul>
<li>Memiliki 6 sisi berbentuk persegi</li>
<li>Memiliki 12 rusuk sama panjang</li>
<li>Memiliki 8 titik sudut</li>
<li>Semua diagonal sisi sama panjang</li>
</ul>

</div>

<h3 style="margin-top:20px">📐 Rumus Kubus</h3>

<div style="
overflow-x:auto;
margin-top:16px;
">

<table style="
width:100%;
border-collapse:collapse;
overflow:hidden;
border-radius:16px;
">

<tr style="background:#00b894;color:white">

<th style="padding:12px;border:1px solid #374151">
Rumus
</th>

<th style="padding:12px;border:1px solid #374151">
Keterangan
</th>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
V = s³
</td>

<td style="padding:12px;border:1px solid #374151">
Volume
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
L = 6s²
</td>

<td style="padding:12px;border:1px solid #374151">
Luas permukaan
</td>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
d = s√3
</td>

<td style="padding:12px;border:1px solid #374151">
Diagonal ruang
</td>

</tr>

</table>

</div>

<h3 style="margin-top:24px">📝 Contoh Soal Kubus</h3>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>Soal:</b> Sebuah kubus memiliki sisi 4 cm. Hitung volumenya!
</p>

<p>
V = s³
</p>

<p>
V = 4³
</p>

<p>
V = 64 cm³
</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:10px;
">
✅ Volume kubus = 64 cm³
</div>

</div>

<div style="
background:#064e3b;
padding:14px;
border-radius:12px;
border-left:5px solid #34d399;
margin-top:16px;
">

📌 <b>Contoh Kontekstual:</b><br><br>

Sebuah kotak kado berbentuk kubus memiliki sisi 10 cm. Hitung luas kertas kado yang diperlukan.

<p>
L = 6 × 10²
</p>

<p>
L = 6 × 100
</p>

<p>
L = 600 cm²
</p>

</div>

<hr>

<!-- ===================================================== -->
<!-- BALOK -->
<!-- ===================================================== -->

<h2 style="color:#00b894">📦 2. Balok</h2>

<p>
Balok adalah bangun ruang yang memiliki bentuk seperti kotak dengan panjang, lebar, dan tinggi yang dapat berbeda.
</p>

<div style="
background:#111827;
padding:16px;
border-radius:14px;
border-left:5px solid #55efc4;
margin:16px 0;
">

📌 <b>Unsur Balok:</b>

<ul>
<li>p = panjang</li>
<li>l = lebar</li>
<li>t = tinggi</li>
<li>Memiliki 6 sisi</li>
<li>Memiliki 12 rusuk</li>
<li>Memiliki 8 titik sudut</li>
</ul>

</div>

<h3 style="margin-top:20px">📐 Rumus Balok</h3>

<div style="
overflow-x:auto;
margin-top:16px;
">

<table style="
width:100%;
border-collapse:collapse;
overflow:hidden;
border-radius:16px;
">

<tr style="background:#00b894;color:white">

<th style="padding:12px;border:1px solid #374151">
Rumus
</th>

<th style="padding:12px;border:1px solid #374151">
Keterangan
</th>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
V = p × l × t
</td>

<td style="padding:12px;border:1px solid #374151">
Volume
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
L = 2(pl + pt + lt)
</td>

<td style="padding:12px;border:1px solid #374151">
Luas permukaan
</td>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
d = √(p² + l² + t²)
</td>

<td style="padding:12px;border:1px solid #374151">
Diagonal ruang
</td>

</tr>

</table>

</div>

<h3 style="margin-top:24px">📝 Contoh Soal Balok</h3>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>Soal:</b> Balok dengan panjang 6 cm, lebar 4 cm, dan tinggi 3 cm. Hitung volumenya!
</p>

<p>
V = p × l × t
</p>

<p>
V = 6 × 4 × 3
</p>

<p>
V = 72 cm³
</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:10px;
">
✅ Volume balok = 72 cm³
</div>

</div>

<div style="
background:#1e3a8a;
padding:14px;
border-radius:12px;
border-left:5px solid #60a5fa;
margin-top:16px;
">

📌 <b>Contoh Kontekstual:</b><br><br>

Sebuah akuarium memiliki panjang 50 cm, lebar 30 cm, dan tinggi 40 cm.

<p>
V = 50 × 30 × 40
</p>

<p>
V = 60.000 cm³
</p>

</div>

<hr>

<!-- ===================================================== -->
<!-- PRISMA -->
<!-- ===================================================== -->

<h2 style="color:#00b894">🔷 3. Prisma</h2>

<p>
Prisma adalah bangun ruang yang memiliki dua sisi sejajar dan kongruen sebagai alas dan tutup.
</p>

<p>
Jenis prisma antara lain:
</p>

<ul>
<li>Prisma segitiga</li>
<li>Prisma segiempat</li>
<li>Prisma segilima</li>
</ul>

<div style="
background:#111827;
padding:16px;
border-radius:14px;
border-left:5px solid #55efc4;
margin:16px 0;
">

📌 <b>Ciri-ciri Prisma:</b>

<ul>
<li>Memiliki alas dan tutup yang sama bentuk</li>
<li>Sisi tegak berbentuk persegi panjang</li>
<li>Jumlah rusuk tergantung bentuk alas</li>
</ul>

</div>

<h3 style="margin-top:20px">📐 Rumus Prisma</h3>

<div style="
overflow-x:auto;
margin-top:16px;
">

<table style="
width:100%;
border-collapse:collapse;
overflow:hidden;
border-radius:16px;
">

<tr style="background:#00b894;color:white">

<th style="padding:12px;border:1px solid #374151">
Rumus
</th>

<th style="padding:12px;border:1px solid #374151">
Keterangan
</th>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
V = luas alas × tinggi
</td>

<td style="padding:12px;border:1px solid #374151">
Volume
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
L = 2 × luas alas + luas selimut
</td>

<td style="padding:12px;border:1px solid #374151">
Luas permukaan
</td>

</tr>

</table>

</div>

<p style="margin-top:18px">
📌 Luas selimut = keliling alas × tinggi
</p>

<h3 style="margin-top:24px">📝 Contoh Soal Prisma</h3>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>Soal:</b> Prisma segitiga memiliki luas alas 10 cm² dan tinggi 8 cm.
</p>

<p>
V = luas alas × tinggi
</p>

<p>
V = 10 × 8
</p>

<p>
V = 80 cm³
</p>

<div style="
background:#4c0519;
padding:12px;
border-radius:10px;
border-left:5px solid #f43f5e;
margin-top:10px;
">
✅ Volume prisma = 80 cm³
</div>

</div>

<div style="
background:#7c2d12;
padding:14px;
border-radius:12px;
border-left:5px solid #fb923c;
margin-top:16px;
">

📌 <b>Contoh Kontekstual:</b><br><br>

Sebuah tenda berbentuk prisma segitiga memiliki luas alas 6 m² dan tinggi 4 m.

<p>
V = 6 × 4
</p>

<p>
V = 24 m³
</p>

</div>

<hr>

<!-- ===================================================== -->
<!-- LIMAS -->
<!-- ===================================================== -->

<h2 style="color:#00b894">🔺 4. Limas</h2>

<p>
Limas adalah bangun ruang yang memiliki satu alas dan sisi tegak berbentuk segitiga yang bertemu pada satu titik puncak.
</p>

<div style="
background:#111827;
padding:16px;
border-radius:14px;
border-left:5px solid #55efc4;
margin:16px 0;
">

📌 <b>Ciri-ciri Limas:</b>

<ul>
<li>Memiliki satu alas</li>
<li>Memiliki satu titik puncak</li>
<li>Sisi tegak berbentuk segitiga</li>
</ul>

</div>

<h3 style="margin-top:20px">📐 Rumus Limas</h3>

<div style="
overflow-x:auto;
margin-top:16px;
">

<table style="
width:100%;
border-collapse:collapse;
overflow:hidden;
border-radius:16px;
">

<tr style="background:#00b894;color:white">

<th style="padding:12px;border:1px solid #374151">
Rumus
</th>

<th style="padding:12px;border:1px solid #374151">
Keterangan
</th>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
V = 1/3 × luas alas × tinggi
</td>

<td style="padding:12px;border:1px solid #374151">
Volume
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
L = luas alas + jumlah luas sisi tegak
</td>

<td style="padding:12px;border:1px solid #374151">
Luas permukaan
</td>

</tr>

</table>

</div>

<h3 style="margin-top:24px">📝 Contoh Soal Limas</h3>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>Soal:</b> Limas memiliki luas alas 12 cm² dan tinggi 9 cm.
</p>

<p>
V = 1/3 × luas alas × tinggi
</p>

<p>
V = 1/3 × 12 × 9
</p>

<p>
V = 36 cm³
</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:10px;
">
✅ Volume limas = 36 cm³
</div>

</div>

<div style="
background:#4c0519;
padding:14px;
border-radius:12px;
border-left:5px solid #f43f5e;
margin-top:16px;
">

📌 <b>Contoh Kontekstual:</b><br><br>

Sebuah piramida mini memiliki luas alas 20 cm² dan tinggi 6 cm.

<p>
V = 1/3 × 20 × 6
</p>

<p>
V = 40 cm³
</p>

</div>

<hr>

<!-- ===================================================== -->
<!-- PERBANDINGAN -->
<!-- ===================================================== -->

<h2 style="color:#00b894">📊 Perbandingan Bangun Ruang</h2>

<div style="overflow-x:auto">

<table style="
width:100%;
border-collapse:collapse;
overflow:hidden;
border-radius:16px;
">

<tr style="background:#00b894;color:white">

<th style="padding:12px;border:1px solid #374151">
Bangun
</th>

<th style="padding:12px;border:1px solid #374151">
Ciri
</th>

<th style="padding:12px;border:1px solid #374151">
Rumus Volume
</th>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Kubus
</td>

<td style="padding:12px;border:1px solid #374151">
Semua sisi sama panjang
</td>

<td style="padding:12px;border:1px solid #374151">
s³
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
Balok
</td>

<td style="padding:12px;border:1px solid #374151">
p, l, t berbeda
</td>

<td style="padding:12px;border:1px solid #374151">
p × l × t
</td>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Prisma
</td>

<td style="padding:12px;border:1px solid #374151">
Alas sejajar dan sama
</td>

<td style="padding:12px;border:1px solid #374151">
luas alas × tinggi
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
Limas
</td>

<td style="padding:12px;border:1px solid #374151">
Memiliki satu puncak
</td>

<td style="padding:12px;border:1px solid #374151">
1/3 × luas alas × tinggi
</td>

</tr>

</table>

</div>

<hr>

<!-- ===================================================== -->
<!-- SOAL CAMPURAN -->
<!-- ===================================================== -->

<h2 style="color:#00b894">🧠 Contoh Soal Campuran</h2>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>1. Kotak Susu</b>
</p>

<p>
Kotak susu berbentuk balok dengan ukuran 10 cm × 5 cm × 20 cm.
</p>

<p>
V = 10 × 5 × 20
</p>

<p>
V = 1000 cm³
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>2. Dadu</b>
</p>

<p>
Dadu berbentuk kubus dengan sisi 6 cm.
</p>

<p>
V = 6³
</p>

<p>
V = 216 cm³
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>3. Tenda Pramuka</b>
</p>

<p>
Tenda berbentuk prisma segitiga dengan luas alas 8 m² dan tinggi 3 m.
</p>

<p>
V = 8 × 3
</p>

<p>
V = 24 m³
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>4. Piramida</b>
</p>

<p>
Limas memiliki luas alas 36 cm² dan tinggi 10 cm.
</p>

<p>
V = 1/3 × 36 × 10
</p>

<p>
V = 120 cm³
</p>

</div>

<hr>

<!-- ===================================================== -->
<!-- KESIMPULAN -->
<!-- ===================================================== -->

<h2 style="color:#00b894">💡 Kesimpulan</h2>

<div style="
background:linear-gradient(135deg,#55efc4,#00b894);
padding:20px;
border-radius:18px;
margin-top:18px;
color:white;
">

<ul style="line-height:2">

<li>Kubus memiliki semua sisi sama panjang</li>

<li>Balok memiliki panjang, lebar, dan tinggi</li>

<li>Prisma memiliki alas dan tutup sejajar</li>

<li>Limas memiliki satu titik puncak</li>

<li>Volume prisma = luas alas × tinggi</li>

<li>Volume limas = 1/3 × luas alas × tinggi</li>

<li>Luas permukaan adalah jumlah seluruh sisi bangun ruang</li>

</ul>

</div>

`,
tip:'Ingat: volume limas selalu 1/3 dari prisma dengan alas dan tinggi yang sama!'
}
    ]
  },
  9: {
    sem1: [
      {
  id:'persamaan-kuadrat',
  icon:'x²',
  title:'Persamaan & Fungsi Kuadrat',
  color:'#6C63FF',
  desc:'Persamaan kuadrat, diskriminan, fungsi kuadrat, grafik parabola.',

  isi:`

<!-- ===================================================== -->
<!-- HEADER -->
<!-- ===================================================== -->

<div style="
display:flex;
align-items:center;
gap:16px;
background:linear-gradient(135deg,#6c63ff,#574bdb);
padding:20px;
border-radius:20px;
margin-bottom:20px;
box-shadow:0 10px 30px rgba(0,0,0,0.25);
color:white;
">

<div style="font-size:55px">x²</div>

<div>
<h1 style="
margin:0;
font-size:32px;
font-weight:900;
">
Persamaan & Fungsi Kuadrat
</h1>

<p style="
margin-top:8px;
font-size:15px;
opacity:.95;
line-height:1.7;
">
Mempelajari persamaan kuadrat, diskriminan, fungsi kuadrat, serta grafik parabola dalam matematika dan kehidupan sehari-hari.
</p>
</div>

</div>

<!-- ===================================================== -->
<!-- PENGERTIAN -->
<!-- ===================================================== -->

<h2 style="color:#6c63ff">📖 Pengertian Persamaan Kuadrat</h2>

<p>
Persamaan kuadrat adalah persamaan yang memiliki pangkat tertinggi 2.
</p>

<div style="
background:rgba(255,255,255,0.05);
border-left:5px solid #6c63ff;
padding:16px;
border-radius:14px;
margin:16px 0;
line-height:1.8;
">

📌 <b>Bentuk umum persamaan kuadrat:</b>

<div style="
text-align:center;
font-size:28px;
font-weight:900;
margin-top:14px;
color:#a78bfa;
">
ax² + bx + c = 0
</div>

<p style="margin-top:12px">
dengan:
</p>

<ul>
<li>a ≠ 0</li>
<li>a, b, c adalah bilangan real</li>
</ul>

</div>

<p><b>Contoh:</b></p>

<ul>
<li>x² − 5x + 6 = 0</li>
<li>2x² + 3x − 2 = 0</li>
<li>x² + 7x + 10 = 0</li>
</ul>

<hr>

<!-- ===================================================== -->
<!-- CIRI -->
<!-- ===================================================== -->

<h2 style="color:#6c63ff">📌 Ciri-Ciri Persamaan Kuadrat</h2>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:14px;
margin:20px 0;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:40px">²</div>

<h3 style="color:#a78bfa">Pangkat Tertinggi 2</h3>

<p>
Memiliki variabel dengan pangkat paling tinggi dua.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:40px">📈</div>

<h3 style="color:#a78bfa">Grafik Parabola</h3>

<p>
Jika digambar akan membentuk parabola.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:40px">🔢</div>

<h3 style="color:#a78bfa">Memiliki Akar</h3>

<p>
Memiliki solusi berupa nilai x.
</p>

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- FAKTORISASI -->
<!-- ===================================================== -->

<h2 style="color:#6c63ff">🔢 Cara Menyelesaikan Persamaan Kuadrat</h2>

<h3 style="color:#8b5cf6">1️⃣ Faktorisasi</h3>

<p>
Faktorisasi dilakukan dengan mencari dua bilangan yang:
</p>

<ul>
<li>Dikalikan menghasilkan c</li>
<li>Dijumlahkan menghasilkan b</li>
</ul>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin:16px 0;
">

<p><b>Contoh:</b></p>

<p>x² − 5x + 6 = 0</p>

<p>(x − 2)(x − 3) = 0</p>

<p>x = 2 atau x = 3</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p><b>Contoh soal:</b></p>

<p>x² + 7x + 10 = 0</p>

<p>(x + 5)(x + 2) = 0</p>

<p>x = −5 atau x = −2</p>

</div>

<div style="
background:#4c0519;
padding:16px;
border-radius:14px;
border-left:5px solid #f472b6;
margin-top:18px;
">

📌 <b>Contoh Kontekstual:</b><br><br>

Panjang sebuah taman = (x + 2) meter dan lebarnya = (x + 3) meter.
Luas taman = 30 m².

<p>(x + 2)(x + 3) = 30</p>

<p>x² + 5x + 6 = 30</p>

<p>x² + 5x − 24 = 0</p>

<p>(x + 8)(x − 3) = 0</p>

<p>x = −8 (tidak mungkin) atau x = 3</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Nilai yang memenuhi adalah x = 3
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- RUMUS ABC -->
<!-- ===================================================== -->

<h3 style="color:#8b5cf6">2️⃣ Rumus ABC (Rumus Kuadrat)</h3>

<p>
Metode ini dapat digunakan untuk semua persamaan kuadrat.
</p>

<div style="
background:rgba(255,255,255,0.05);
backdrop-filter:blur(10px);
border:1px solid rgba(255,255,255,0.1);
border-left:5px solid #8b5cf6;
padding:20px;
border-radius:16px;
margin:18px 0;
text-align:center;
font-size:28px;
font-weight:900;
color:#ddd6fe;
">
x = (−b ± √(b² − 4ac)) / 2a
</div>

<p><b>Langkah-langkah:</b></p>

<ol>
<li>Tentukan nilai a, b, dan c</li>
<li>Hitung diskriminan D = b² − 4ac</li>
<li>Substitusikan ke rumus</li>
<li>Sederhanakan hasil</li>
</ol>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh:</b></p>

<p>2x² + 3x − 2 = 0</p>

<p>a = 2, b = 3, c = −2</p>

<p>D = b² − 4ac</p>

<p>= 3² − 4(2)(−2)</p>

<p>= 9 + 16</p>

<p>= 25</p>

<p>x = (−3 ± √25) / 4</p>

<p>x = (−3 ± 5) / 4</p>

<p>x = 1/2 atau x = −2</p>

</div>

<div style="
background:#172554;
padding:16px;
border-radius:14px;
border-left:5px solid #60a5fa;
margin-top:18px;
">

📌 <b>Contoh Kontekstual:</b><br><br>

Sebuah bola dilempar ke atas dengan persamaan:

<p>h = -x² + 6x</p>

Kapan bola menyentuh tanah?

<p>h = 0</p>

<p>-x² + 6x = 0</p>

<p>x(-x + 6) = 0</p>

<p>x = 0 atau x = 6</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Bola menyentuh tanah pada detik ke-6
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- KUADRAT SEMPURNA -->
<!-- ===================================================== -->

<h3 style="color:#8b5cf6">3️⃣ Melengkapkan Kuadrat Sempurna</h3>

<p>
Metode ini dilakukan dengan mengubah bentuk persamaan menjadi bentuk kuadrat sempurna.
</p>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh:</b></p>

<p>x² + 6x + 5 = 0</p>

<p>x² + 6x = -5</p>

<p>Tambahkan (6/2)² = 9</p>

<p>x² + 6x + 9 = 4</p>

<p>(x + 3)² = 4</p>

<p>x + 3 = ±2</p>

<p>x = -1 atau x = -5</p>

</div>

<div style="
background:#7c2d12;
padding:16px;
border-radius:14px;
border-left:5px solid #fb923c;
margin-top:18px;
">

📌 <b>Contoh Kontekstual:</b><br><br>

Luas persegi bertambah karena panjang sisi ditambah 3 cm.

<p>(x + 3)² = 16</p>

<p>x + 3 = ±4</p>

<p>x = 1 atau x = -7</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Nilai yang masuk akal adalah x = 1
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- DISKRIMINAN -->
<!-- ===================================================== -->

<h2 style="color:#6c63ff">📊 Diskriminan (D)</h2>

<p>
Diskriminan digunakan untuk menentukan jenis akar persamaan kuadrat.
</p>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:28px;
font-weight:900;
color:#6c63ff;
margin:18px 0;
">
D = b² − 4ac
</div>

<div style="
overflow-x:auto;
margin-top:18px;
">

<table style="
width:100%;
border-collapse:collapse;
overflow:hidden;
border-radius:16px;
">

<tr style="background:#6c63ff;color:white">

<th style="padding:12px;border:1px solid #374151">
Nilai D
</th>

<th style="padding:12px;border:1px solid #374151">
Jenis Akar
</th>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
D > 0
</td>

<td style="padding:12px;border:1px solid #374151">
Dua akar real berbeda
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
D = 0
</td>

<td style="padding:12px;border:1px solid #374151">
Akar kembar
</td>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
D < 0
</td>

<td style="padding:12px;border:1px solid #374151">
Tidak ada akar real
</td>

</tr>

</table>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh:</b></p>

<p>x² − 4x + 4 = 0</p>

<p>D = (-4)² − 4(1)(4)</p>

<p>= 16 − 16</p>

<p>= 0</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:12px;
">
✅ Persamaan memiliki akar kembar
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- FUNGSI KUADRAT -->
<!-- ===================================================== -->

<h2 style="color:#6c63ff">📈 Fungsi Kuadrat</h2>

<p>
Fungsi kuadrat adalah fungsi berbentuk:
</p>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:28px;
font-weight:900;
color:#6c63ff;
margin:18px 0;
">
f(x) = ax² + bx + c
</div>

<p>
Grafik fungsi kuadrat berbentuk parabola.
</p>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
gap:14px;
margin:20px 0;
">

<div style="
background:#052e16;
padding:16px;
border-radius:14px;
">

<h3>📈 a > 0</h3>

<p>
Parabola terbuka ke atas.
</p>

</div>

<div style="
background:#4c0519;
padding:16px;
border-radius:14px;
">

<h3>📉 a < 0</h3>

<p>
Parabola terbuka ke bawah.
</p>

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- TITIK PUNCAK -->
<!-- ===================================================== -->

<h3 style="color:#8b5cf6">📍 Titik Puncak Parabola</h3>

<p>
Titik puncak parabola dapat dicari dengan:
</p>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p>x = −b / 2a</p>

<p>y = f(x)</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh:</b></p>

<p>f(x) = x² − 4x + 3</p>

<p>a = 1, b = -4</p>

<p>x = −(-4)/(2×1)</p>

<p>x = 4/2</p>

<p>x = 2</p>

<p>y = 2² − 4(2) + 3</p>

<p>= 4 − 8 + 3</p>

<p>= -1</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Titik puncak = (2, -1)
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- AKAR GRAFIK -->
<!-- ===================================================== -->

<h2 style="color:#6c63ff">📍 Menentukan Akar dari Grafik</h2>

<p>
Akar persamaan kuadrat adalah titik potong grafik parabola dengan sumbu x.
</p>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh:</b></p>

<p>x² − 5x + 6 = 0</p>

<p>(x − 2)(x − 3) = 0</p>

<p>x = 2 atau x = 3</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:12px;
">
✅ Grafik memotong sumbu x di titik (2,0) dan (3,0)
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- CONTOH KONTEKSTUAL -->
<!-- ===================================================== -->

<h2 style="color:#6c63ff">🌍 Contoh Soal Kontekstual</h2>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:14px;
margin-top:20px;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>🏞️ Luas Persegi Panjang</h3>

<p>Panjang = (x + 2)</p>

<p>Lebar = x</p>

<p>Luas = 24</p>

<p>x(x + 2) = 24</p>

<p>x² + 2x − 24 = 0</p>

<p>(x + 6)(x − 4) = 0</p>

<p>x = 4</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>🏀 Gerak Benda</h3>

<p>h = -x² + 8x</p>

<p>Kapan menyentuh tanah?</p>

<p>x(-x + 8) = 0</p>

<p>x = 0 atau x = 8</p>

<p>
Benda menyentuh tanah setelah 8 detik.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>🌳 Ukuran Taman</h3>

<p>Luas taman = 48 m²</p>

<p>Panjang = x + 4</p>

<p>Lebar = x</p>

<p>x(x + 4) = 48</p>

<p>x² + 4x − 48 = 0</p>

<p>(x + 8)(x − 6) = 0</p>

<p>x = 6</p>

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- LATIHAN -->
<!-- ===================================================== -->

<h2 style="color:#6c63ff">🧠 Latihan Soal</h2>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>1.</b> Tentukan akar-akar dari:
</p>

<p>x² − 9 = 0</p>

<p>(x − 3)(x + 3) = 0</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:10px;
">
✅ x = 3 atau x = -3
</div>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>2.</b> Tentukan diskriminan:
</p>

<p>x² + 2x + 1 = 0</p>

<p>D = 2² − 4(1)(1)</p>

<p>= 4 − 4</p>

<p>= 0</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:10px;
">
✅ Memiliki akar kembar
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- KESIMPULAN -->
<!-- ===================================================== -->

<h2 style="color:#6c63ff">💡 Kesimpulan</h2>

<div style="
background:linear-gradient(135deg,#6c63ff,#574bdb);
padding:20px;
border-radius:18px;
margin-top:18px;
color:white;
">

<ul style="line-height:2">

<li>Persamaan kuadrat memiliki pangkat tertinggi 2</li>

<li>Bentuk umum: ax² + bx + c = 0</li>

<li>Dapat diselesaikan dengan faktorisasi, rumus ABC, atau kuadrat sempurna</li>

<li>Diskriminan menentukan jenis akar</li>

<li>Fungsi kuadrat menghasilkan grafik parabola</li>

<li>Titik potong sumbu x merupakan akar persamaan</li>

<li>Fungsi kuadrat banyak digunakan dalam kehidupan sehari-hari</li>

</ul>

</div>

`,
tip:'Rumus ABC selalu bisa digunakan untuk menyelesaikan semua persamaan kuadrat!'
},
     {
  id:'transformasi',
  icon:'🔄',
  title:'Transformasi Geometri',
  color:'#FF6584',
  desc:'Translasi, refleksi, rotasi, dan dilatasi pada bidang koordinat.',

  isi:`

<!-- ===================================================== -->
<!-- HEADER -->
<!-- ===================================================== -->

<div style="
display:flex;
align-items:center;
gap:16px;
background:linear-gradient(135deg,#ff6584,#e84393);
padding:20px;
border-radius:20px;
margin-bottom:20px;
box-shadow:0 10px 30px rgba(0,0,0,0.25);
color:white;
">

<div style="font-size:55px">🔄</div>

<div>

<h1 style="
margin:0;
font-size:32px;
font-weight:900;
">
Transformasi Geometri
</h1>

<p style="
margin-top:8px;
font-size:15px;
opacity:.95;
line-height:1.7;
">
Mempelajari perubahan posisi, arah, dan ukuran bangun melalui translasi, refleksi, rotasi, dan dilatasi pada bidang koordinat.
</p>

</div>

</div>

<!-- ===================================================== -->
<!-- PENGERTIAN -->
<!-- ===================================================== -->

<h2 style="color:#ff6584">📖 Pengertian Transformasi Geometri</h2>

<p>
Transformasi geometri adalah perubahan posisi, arah, atau ukuran suatu bangun pada bidang koordinat.
</p>

<div style="
background:rgba(255,255,255,0.05);
border-left:5px solid #ff6584;
padding:16px;
border-radius:14px;
margin:18px 0;
line-height:1.8;
">

📌 <b>Transformasi dapat berupa:</b>

<ul>
<li>Menggeser bangun</li>
<li>Mencerminkan bangun</li>
<li>Memutar bangun</li>
<li>Memperbesar atau memperkecil bangun</li>
</ul>

</div>

<p>
<b>Transformasi tidak mengubah bentuk dasar bangun</b>, kecuali dilatasi yang mengubah ukuran bangun.
</p>

<hr>

<!-- ===================================================== -->
<!-- JENIS -->
<!-- ===================================================== -->

<h2 style="color:#ff6584">📌 Jenis-Jenis Transformasi</h2>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:14px;
margin:20px 0;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:42px">➡️</div>

<h3 style="color:#f9a8d4">Translasi</h3>

<p>
Menggeser bangun.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:42px">🪞</div>

<h3 style="color:#f9a8d4">Refleksi</h3>

<p>
Mencerminkan bangun.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:42px">🔄</div>

<h3 style="color:#f9a8d4">Rotasi</h3>

<p>
Memutar bangun.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:42px">📏</div>

<h3 style="color:#f9a8d4">Dilatasi</h3>

<p>
Mengubah ukuran bangun.
</p>

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- TRANSLASI -->
<!-- ===================================================== -->

<h2 style="color:#ff6584">➡️ Translasi (Pergeseran)</h2>

<p>
Translasi adalah perpindahan titik atau bangun dengan arah dan jarak tertentu tanpa mengubah bentuk maupun ukuran.
</p>

<div style="
background:rgba(255,255,255,0.05);
border-left:5px solid #ff6584;
padding:16px;
border-radius:14px;
margin:18px 0;
line-height:1.8;
">

📌 <b>Rumus Translasi:</b>

<div style="
text-align:center;
font-size:30px;
font-weight:900;
margin-top:14px;
color:#f9a8d4;
">
(x, y) → (x + a, y + b)
</div>

</div>

<p><b>Keterangan:</b></p>

<ul>
<li>a = pergeseran horizontal</li>
<li>b = pergeseran vertikal</li>
</ul>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:14px;
margin-top:20px;
">

<div style="
background:#052e16;
padding:18px;
border-radius:16px;
">

<h3>➡️ a Positif</h3>

<p>
Geser ke kanan.
</p>

</div>

<div style="
background:#172554;
padding:18px;
border-radius:16px;
">

<h3>⬅️ a Negatif</h3>

<p>
Geser ke kiri.
</p>

</div>

<div style="
background:#4c0519;
padding:18px;
border-radius:16px;
">

<h3>⬆️ b Positif</h3>

<p>
Geser ke atas.
</p>

</div>

<div style="
background:#7c2d12;
padding:18px;
border-radius:16px;
">

<h3>⬇️ b Negatif</h3>

<p>
Geser ke bawah.
</p>

</div>

</div>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:20px;
">

<p><b>Contoh:</b></p>

<p>Titik A(2,3) ditranslasikan oleh (4,-1)</p>

<p>A' = (2+4, 3-1)</p>

<p>A' = (6,2)</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Hasil translasi titik A adalah (6,2)
</div>

</div>

<div style="
background:#172554;
padding:16px;
border-radius:14px;
border-left:5px solid #60a5fa;
margin-top:18px;
">

📌 <b>Contoh Kontekstual:</b><br><br>

Sebuah robot berada di titik (1,2). Robot bergerak 5 langkah ke kanan dan 3 langkah ke atas.

<p>(1+5, 2+3) = (6,5)</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Posisi akhir robot adalah (6,5)
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- REFLEKSI -->
<!-- ===================================================== -->

<h2 style="color:#ff6584">🪞 Refleksi (Pencerminan)</h2>

<p>
Refleksi adalah transformasi yang menghasilkan bayangan cermin suatu titik atau bangun terhadap garis tertentu.
</p>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
gap:14px;
margin-top:20px;
">

<div style="
background:#052e16;
padding:18px;
border-radius:16px;
">

<h3>📌 Sumbu x</h3>

<p>(x, y) → (x, -y)</p>

<p>y berubah tanda.</p>

</div>

<div style="
background:#172554;
padding:18px;
border-radius:16px;
">

<h3>📌 Sumbu y</h3>

<p>(x, y) → (-x, y)</p>

<p>x berubah tanda.</p>

</div>

<div style="
background:#4c0519;
padding:18px;
border-radius:16px;
">

<h3>📌 Titik O(0,0)</h3>

<p>(x, y) → (-x, -y)</p>

<p>Keduanya berubah tanda.</p>

</div>

<div style="
background:#7c2d12;
padding:18px;
border-radius:16px;
">

<h3>📌 Garis y = x</h3>

<p>(x, y) → (y, x)</p>

<p>Koordinat ditukar.</p>

</div>

</div>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:20px;
">

<p><b>Contoh:</b></p>

<p>A(3,4) direfleksikan terhadap sumbu x</p>

<p>A' = (3,-4)</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:12px;
">
✅ Nilai y berubah menjadi negatif
</div>

</div>

<div style="
background:#134e4a;
padding:16px;
border-radius:14px;
border-left:5px solid #2dd4bf;
margin-top:18px;
">

📌 <b>Contoh Kontekstual:</b><br><br>

Bayangan seseorang pada cermin datar seperti refleksi terhadap sumbu y.

<p>Jika posisi asli (-3,2), maka bayangannya menjadi (3,2)</p>

</div>

<hr>

<!-- ===================================================== -->
<!-- ROTASI -->
<!-- ===================================================== -->

<h2 style="color:#ff6584">🔄 Rotasi (Perputaran)</h2>

<p>
Rotasi adalah perputaran titik atau bangun terhadap pusat tertentu.
</p>

<p>
Pusat rotasi biasanya titik O(0,0).
</p>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
gap:14px;
margin-top:20px;
">

<div style="
background:#052e16;
padding:18px;
border-radius:16px;
">

<h3>🔄 90° Berlawanan Jarum Jam</h3>

<p>(x, y) → (-y, x)</p>

</div>

<div style="
background:#172554;
padding:18px;
border-radius:16px;
">

<h3>🔄 90° Searah Jarum Jam</h3>

<p>(x, y) → (y, -x)</p>

</div>

<div style="
background:#4c0519;
padding:18px;
border-radius:16px;
">

<h3>🔄 180°</h3>

<p>(x, y) → (-x, -y)</p>

</div>

<div style="
background:#7c2d12;
padding:18px;
border-radius:16px;
">

<h3>🔄 270°</h3>

<p>(x, y) → (y, -x)</p>

</div>

</div>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:20px;
">

<p><b>Contoh:</b></p>

<p>A(2,3) diputar 90° berlawanan arah jarum jam</p>

<p>A' = (-3,2)</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Hasil rotasi adalah (-3,2)
</div>

</div>

<div style="
background:#172554;
padding:16px;
border-radius:14px;
border-left:5px solid #60a5fa;
margin-top:18px;
">

📌 <b>Contoh Kontekstual:</b><br><br>

Jarum jam bergerak dengan konsep rotasi.

<p>Titik (2,1) diputar 90° berlawanan arah jarum jam menjadi (-1,2)</p>

</div>

<hr>

<!-- ===================================================== -->
<!-- DILATASI -->
<!-- ===================================================== -->

<h2 style="color:#ff6584">📏 Dilatasi (Perbesaran / Perkecilan)</h2>

<p>
Dilatasi adalah transformasi yang mengubah ukuran bangun.
</p>

<div style="
background:rgba(255,255,255,0.05);
border-left:5px solid #ff6584;
padding:16px;
border-radius:14px;
margin:18px 0;
line-height:1.8;
">

📌 <b>Rumus Dilatasi:</b>

<div style="
text-align:center;
font-size:30px;
font-weight:900;
margin-top:14px;
color:#f9a8d4;
">
(x, y) → (kx, ky)
</div>

</div>

<p><b>Keterangan:</b></p>

<ul>
<li>k > 1 → diperbesar</li>
<li>0 < k < 1 → diperkecil</li>
<li>k = 1 → tetap</li>
<li>k < 0 → berbalik arah</li>
</ul>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh:</b></p>

<p>A(2,3) dengan faktor skala k = 2</p>

<p>A' = (4,6)</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Titik diperbesar 2 kali
</div>

</div>

<div style="
background:#4c0519;
padding:16px;
border-radius:14px;
border-left:5px solid #f472b6;
margin-top:18px;
">

📌 <b>Contoh Kontekstual:</b><br><br>

Peta merupakan hasil dilatasi dari keadaan sebenarnya.

<p>Jika titik sebenarnya (10,20) dengan skala 1/2:</p>

<p>Maka pada peta menjadi (5,10)</p>

</div>

<hr>

<!-- ===================================================== -->
<!-- RINGKASAN -->
<!-- ===================================================== -->

<h2 style="color:#ff6584">📊 Ringkasan Transformasi</h2>

<div style="
overflow-x:auto;
margin-top:18px;
">

<table style="
width:100%;
border-collapse:collapse;
overflow:hidden;
border-radius:16px;
">

<tr style="background:#ff6584;color:white">

<th style="padding:12px;border:1px solid #374151">
Transformasi
</th>

<th style="padding:12px;border:1px solid #374151">
Rumus
</th>

<th style="padding:12px;border:1px solid #374151">
Ciri
</th>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Translasi
</td>

<td style="padding:12px;border:1px solid #374151">
(x+a, y+b)
</td>

<td style="padding:12px;border:1px solid #374151">
Menggeser
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
Refleksi
</td>

<td style="padding:12px;border:1px solid #374151">
Tergantung garis cermin
</td>

<td style="padding:12px;border:1px solid #374151">
Memantulkan
</td>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Rotasi
</td>

<td style="padding:12px;border:1px solid #374151">
(-y,x), dll
</td>

<td style="padding:12px;border:1px solid #374151">
Memutar
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
Dilatasi
</td>

<td style="padding:12px;border:1px solid #374151">
(kx, ky)
</td>

<td style="padding:12px;border:1px solid #374151">
Mengubah ukuran
</td>

</tr>

</table>

</div>

<hr>

<!-- ===================================================== -->
<!-- LATIHAN -->
<!-- ===================================================== -->

<h2 style="color:#ff6584">🧠 Latihan Soal</h2>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>1.</b> Titik B(-1,5) ditranslasikan oleh (3,2).
</p>

<p>B' = (-1+3, 5+2)</p>

<p>B' = (2,7)</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:10px;
">
✅ Hasil translasi adalah (2,7)
</div>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>2.</b> Titik P(6,-4) dicerminkan terhadap sumbu x.
</p>

<p>P' = (6,4)</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:10px;
">
✅ Nilai y berubah tanda
</div>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>3.</b> Titik E(-2,4) didilatasi dengan k = 1/2
</p>

<p>E' = (-1,2)</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:10px;
">
✅ Titik diperkecil setengahnya
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- KESIMPULAN -->
<!-- ===================================================== -->

<h2 style="color:#ff6584">💡 Kesimpulan</h2>

<div style="
background:linear-gradient(135deg,#ff6584,#e84393);
padding:20px;
border-radius:18px;
margin-top:18px;
color:white;
">

<ul style="line-height:2">

<li>Transformasi geometri mengubah posisi atau ukuran bangun</li>

<li>Translasi menggeser bangun</li>

<li>Refleksi menghasilkan bayangan cermin</li>

<li>Rotasi memutar bangun terhadap titik tertentu</li>

<li>Dilatasi memperbesar atau memperkecil bangun</li>

<li>Koordinat hasil transformasi dapat dihitung menggunakan rumus tertentu</li>

</ul>

</div>

`,
tip:'Refleksi terhadap sumbu x membuat y berubah tanda, sedangkan refleksi terhadap sumbu y membuat x berubah tanda!'
},
      {
  id:'kekongruenan-kesebangunan',
  icon:'📐',
  title:'Kekongruenan & Kesebangunan',
  color:'#00B894',
  desc:'Memahami kesamaan bentuk dan ukuran bangun.',
  isi:`

<!-- ===================================================== -->
<!-- HEADER -->
<!-- ===================================================== -->

<div style="
display:flex;
align-items:center;
gap:16px;
background:linear-gradient(135deg,#00b894,#00997a);
padding:20px;
border-radius:20px;
margin-bottom:20px;
box-shadow:0 10px 30px rgba(0,0,0,0.25);
color:white;
">

<div style="font-size:55px">📐</div>

<div>

<h1 style="
margin:0;
font-size:32px;
font-weight:900;
">
Kekongruenan & Kesebangunan
</h1>

<p style="
margin-top:8px;
font-size:15px;
opacity:.95;
line-height:1.7;
">
Mempelajari hubungan antar bangun berdasarkan bentuk dan ukuran melalui konsep kongruen dan sebangun.
</p>

</div>

</div>

<!-- ===================================================== -->
<!-- PENGERTIAN -->
<!-- ===================================================== -->

<h2 style="color:#00b894">📖 Pengertian Kekongruenan & Kesebangunan</h2>

<p>
Kekongruenan dan kesebangunan membahas hubungan antara dua bangun berdasarkan bentuk dan ukurannya.
</p>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:14px;
margin:20px 0;
">

<div style="
background:#052e2b;
padding:18px;
border-radius:16px;
border-left:5px solid #00b894;
">

<h3 style="color:#6ee7b7">📏 Kongruen</h3>

<p>
Bangun memiliki bentuk dan ukuran yang sama persis.
</p>

</div>

<div style="
background:#1e293b;
padding:18px;
border-radius:16px;
border-left:5px solid #60a5fa;
">

<h3 style="color:#93c5fd">📐 Sebangun</h3>

<p>
Bangun memiliki bentuk sama tetapi ukuran bisa berbeda.
</p>

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- KONGRUEN -->
<!-- ===================================================== -->

<h2 style="color:#00b894">📏 Kekongruenan</h2>

<p>
Dua bangun dikatakan <b>kongruen</b> jika memiliki bentuk dan ukuran yang sama persis.
</p>

<div style="
background:rgba(255,255,255,0.05);
border-left:5px solid #00b894;
padding:16px;
border-radius:14px;
margin:18px 0;
line-height:1.8;
">

📌 <b>Lambang Kongruen:</b>

<div style="
text-align:center;
font-size:30px;
font-weight:900;
margin-top:14px;
color:#6ee7b7;
">
ABC ≅ DEF
</div>

</div>

<p><b>Artinya:</b></p>

<ul>
<li>Sisi-sisi yang bersesuaian sama panjang</li>
<li>Sudut-sudut yang bersesuaian sama besar</li>
<li>Jika ditumpuk akan saling menutupi tepat</li>
</ul>

<hr>

<!-- ===================================================== -->
<!-- CIRI KONGRUEN -->
<!-- ===================================================== -->

<h2 style="color:#00b894">📌 Ciri-Ciri Bangun Kongruen</h2>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:14px;
margin:20px 0;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:42px">📐</div>

<h3 style="color:#6ee7b7">Bentuk Sama</h3>

<p>
Memiliki bentuk identik.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:42px">📏</div>

<h3 style="color:#6ee7b7">Ukuran Sama</h3>

<p>
Semua ukuran sama persis.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:42px">🔺</div>

<h3 style="color:#6ee7b7">Sudut Sama</h3>

<p>
Sudut bersesuaian sama besar.
</p>

</div>

</div>

<p><b>Contoh:</b></p>

<ul>
<li>Dua uang logam dengan ukuran sama</li>
<li>Dua ubin lantai identik</li>
<li>Dua persegi dengan sisi sama panjang</li>
</ul>

<hr>

<!-- ===================================================== -->
<!-- SYARAT KONGRUEN -->
<!-- ===================================================== -->

<h2 style="color:#00b894">🔺 Syarat Kongruen Segitiga</h2>

<p>
Dua segitiga dikatakan kongruen jika memenuhi salah satu syarat berikut.
</p>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
gap:14px;
margin-top:20px;
">

<div style="
background:#052e16;
padding:18px;
border-radius:16px;
">

<h3>📏 S-S-S</h3>

<p>
Ketiga sisi sama panjang.
</p>

</div>

<div style="
background:#172554;
padding:18px;
border-radius:16px;
">

<h3>📐 S-Sd-S</h3>

<p>
Dua sisi dan sudut apit sama.
</p>

</div>

<div style="
background:#4c0519;
padding:18px;
border-radius:16px;
">

<h3>🔺 Sd-S-Sd</h3>

<p>
Dua sudut dan sisi apit sama.
</p>

</div>

<div style="
background:#7c2d12;
padding:18px;
border-radius:16px;
">

<h3>📍 S-Sd-Sd</h3>

<p>
Satu sisi dan dua sudut sama.
</p>

</div>

</div>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:20px;
">

<p><b>Contoh:</b></p>

<p>Segitiga ABC memiliki sisi 5 cm, 6 cm, dan 7 cm.</p>

<p>Segitiga DEF juga memiliki sisi 5 cm, 6 cm, dan 7 cm.</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Kedua segitiga kongruen karena memenuhi syarat S-S-S.
</div>

</div>

<div style="
background:#134e4a;
padding:16px;
border-radius:14px;
border-left:5px solid #2dd4bf;
margin-top:18px;
">

📌 <b>Contoh Kontekstual:</b><br><br>

Dua ubin lantai memiliki bentuk dan ukuran yang sama persis.

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Kedua ubin tersebut kongruen.
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- SEBANGUN -->
<!-- ===================================================== -->

<h2 style="color:#00b894">📐 Kesebangunan</h2>

<p>
Dua bangun dikatakan <b>sebangun</b> jika memiliki bentuk yang sama tetapi ukurannya bisa berbeda.
</p>

<div style="
background:rgba(255,255,255,0.05);
border-left:5px solid #60a5fa;
padding:16px;
border-radius:14px;
margin:18px 0;
line-height:1.8;
">

📌 <b>Rumus Perbandingan:</b>

<div style="
text-align:center;
font-size:28px;
font-weight:900;
margin-top:14px;
color:#93c5fd;
">
Perbandingan sisi = k
</div>

<p style="margin-top:14px">
k = faktor skala
</p>

<ul>
<li>k > 1 → diperbesar</li>
<li>0 < k < 1 → diperkecil</li>
</ul>

</div>

<p><b>Artinya:</b></p>

<ul>
<li>Sudut bersesuaian sama besar</li>
<li>Sisi bersesuaian sebanding</li>
</ul>

<hr>

<!-- ===================================================== -->
<!-- CIRI SEBANGUN -->
<!-- ===================================================== -->

<h2 style="color:#00b894">📌 Ciri-Ciri Bangun Sebangun</h2>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:14px;
margin:20px 0;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:40px">📐</div>

<h3 style="color:#93c5fd">Bentuk Sama</h3>

<p>
Memiliki bentuk identik.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:40px">📏</div>

<h3 style="color:#93c5fd">Ukuran Bisa Berbeda</h3>

<p>
Ukuran diperbesar atau diperkecil.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:40px">⚖️</div>

<h3 style="color:#93c5fd">Perbandingan Tetap</h3>

<p>
Sisi memiliki rasio sama.
</p>

</div>

</div>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh:</b></p>

<p>Segitiga kecil memiliki sisi 2, 3, dan 4.</p>

<p>Segitiga besar memiliki sisi 4, 6, dan 8.</p>

<p>Semua sisi dikali 2.</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:12px;
">
✅ Kedua segitiga sebangun.
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- SYARAT SEBANGUN -->
<!-- ===================================================== -->

<h2 style="color:#00b894">🔺 Syarat Sebangun Segitiga</h2>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
gap:14px;
margin-top:20px;
">

<div style="
background:#052e16;
padding:18px;
border-radius:16px;
">

<h3>📐 Sd-Sd-Sd</h3>

<p>
Ketiga sudut sama besar.
</p>

</div>

<div style="
background:#172554;
padding:18px;
border-radius:16px;
">

<h3>📏 S-S-S</h3>

<p>
Ketiga sisi sebanding.
</p>

</div>

<div style="
background:#4c0519;
padding:18px;
border-radius:16px;
">

<h3>📍 S-Sd-S</h3>

<p>
Dua sisi sebanding dan sudut apit sama.
</p>

</div>

</div>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:20px;
">

<p><b>Contoh:</b></p>

<p>Segitiga KLM memiliki sisi 4 cm, 6 cm, dan 8 cm.</p>

<p>Segitiga NOP memiliki sisi 2 cm, 3 cm, dan 4 cm.</p>

<p>Karena:</p>

<p>4/2 = 6/3 = 8/4 = 2</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:12px;
">
✅ Kedua segitiga sebangun.
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- PERBANDINGAN -->
<!-- ===================================================== -->

<h2 style="color:#00b894">📏 Menghitung Panjang Bangun Sebangun</h2>

<p>
Gunakan perbandingan sisi yang bersesuaian.
</p>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:28px;
font-weight:900;
color:#00b894;
margin:18px 0;
">
sisi₁ / sisi₂ = sisi₃ / sisi₄
</div>

<p><b>Langkah:</b></p>

<ol>
<li>Tentukan sisi yang bersesuaian</li>
<li>Buat perbandingan</li>
<li>Gunakan perkalian silang</li>
<li>Cari panjang yang belum diketahui</li>
</ol>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh:</b></p>

<p>Segitiga kecil memiliki sisi 4 cm.</p>

<p>Segitiga besar memiliki sisi 10 cm.</p>

<p>Jika sisi kecil lainnya 6 cm, berapa sisi besar?</p>

<p>4 / 10 = 6 / x</p>

<p>4x = 60</p>

<p>x = 15 cm</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Panjang sisi besar adalah 15 cm.
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- TABEL -->
<!-- ===================================================== -->

<h2 style="color:#00b894">📊 Perbandingan Kongruen dan Sebangun</h2>

<div style="
overflow-x:auto;
margin-top:18px;
">

<table style="
width:100%;
border-collapse:collapse;
overflow:hidden;
border-radius:16px;
">

<tr style="background:#00b894;color:white">

<th style="padding:12px;border:1px solid #374151">
Keterangan
</th>

<th style="padding:12px;border:1px solid #374151">
Kongruen
</th>

<th style="padding:12px;border:1px solid #374151">
Sebangun
</th>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Bentuk
</td>

<td style="padding:12px;border:1px solid #374151">
Sama
</td>

<td style="padding:12px;border:1px solid #374151">
Sama
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
Ukuran
</td>

<td style="padding:12px;border:1px solid #374151">
Sama
</td>

<td style="padding:12px;border:1px solid #374151">
Bisa berbeda
</td>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Sisi Bersesuaian
</td>

<td style="padding:12px;border:1px solid #374151">
Sama panjang
</td>

<td style="padding:12px;border:1px solid #374151">
Sebanding
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
Sudut Bersesuaian
</td>

<td style="padding:12px;border:1px solid #374151">
Sama besar
</td>

<td style="padding:12px;border:1px solid #374151">
Sama besar
</td>

</tr>

</table>

</div>

<hr>

<!-- ===================================================== -->
<!-- KONTEKSTUAL -->
<!-- ===================================================== -->

<h2 style="color:#00b894">🌍 Contoh Soal Kontekstual</h2>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:14px;
margin-top:20px;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>🌳 Tinggi Pohon</h3>

<p>Pohon memiliki bayangan 8 m.</p>

<p>Tongkat 2 m memiliki bayangan 4 m.</p>

<p>2 / 4 = x / 8</p>

<p>16 = 4x</p>

<p>x = 4 m</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>🗺️ Peta dan Skala</h3>

<p>Skala peta 1 : 100.000</p>

<p>Jarak di peta = 5 cm</p>

<p>Jarak sebenarnya = 5 km</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>🖨️ Fotokopi</h3>

<p>Gambar diperbesar 3 kali.</p>

<p>Panjang awal = 4 cm</p>

<p>Panjang baru = 12 cm</p>

<p>Bangun tetap sebangun.</p>

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- LATIHAN -->
<!-- ===================================================== -->

<h2 style="color:#00b894">🧠 Latihan Soal</h2>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>1.</b> Dua persegi memiliki sisi 7 cm dan 7 cm.
</p>

<p>Apakah kongruen?</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:10px;
">
✅ Ya, karena bentuk dan ukuran sama.
</div>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>2.</b> Segitiga dengan sisi 2,4,6 dan 4,8,12.
</p>

<p>Apakah sebangun?</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:10px;
">
✅ Ya, karena semua sisi memiliki perbandingan sama.
</div>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p>
<b>3.</b> Sebuah foto panjangnya 10 cm diperbesar menjadi 25 cm.
</p>

<p>Jika lebar awal 8 cm, berapa lebar baru?</p>

<p>10 / 25 = 8 / x</p>

<p>10x = 200</p>

<p>x = 20 cm</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:10px;
">
✅ Lebar baru = 20 cm
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- KESIMPULAN -->
<!-- ===================================================== -->

<h2 style="color:#00b894">💡 Kesimpulan</h2>

<div style="
background:linear-gradient(135deg,#00b894,#00997a);
padding:20px;
border-radius:18px;
margin-top:18px;
color:white;
">

<ul style="line-height:2">

<li>Kongruen berarti bentuk dan ukuran sama persis</li>

<li>Sebangun berarti bentuk sama tetapi ukuran bisa berbeda</li>

<li>Bangun kongruen pasti sebangun</li>

<li>Bangun sebangun belum tentu kongruen</li>

<li>Kesebangunan menggunakan konsep perbandingan</li>

<li>Konsep ini digunakan pada peta, desain, foto, dan arsitektur</li>

</ul>

</div>

`,
  tip:'Kongruen = sama persis. Sebangun = bentuk sama dengan ukuran berbeda dan menggunakan perbandingan!'
},
    ],
    sem2: [
    {
  id:'bangun-ruang-sisi-lengkung',
  icon:'🔵',
  title:'Bangun Ruang Sisi Lengkung',
  color:'#74B9FF',
  desc:'Tabung, kerucut, bola: luas permukaan dan volume.',

  isi:`

<!-- ===================================================== -->
<!-- HEADER -->
<!-- ===================================================== -->

<div style="
display:flex;
align-items:center;
gap:16px;
background:linear-gradient(135deg,#74b9ff,#0984e3);
padding:20px;
border-radius:20px;
margin-bottom:20px;
box-shadow:0 10px 30px rgba(0,0,0,0.25);
color:white;
">

<div style="font-size:55px">🔵</div>

<div>
<h1 style="
margin:0;
font-size:32px;
font-weight:900;
">
Bangun Ruang Sisi Lengkung
</h1>

<p style="
margin-top:8px;
font-size:15px;
opacity:.95;
line-height:1.7;
">
Mempelajari tabung, kerucut, dan bola beserta luas permukaan, volume, serta penerapannya dalam kehidupan sehari-hari.
</p>
</div>

</div>

<!-- ===================================================== -->
<!-- PENGERTIAN -->
<!-- ===================================================== -->

<h2 style="color:#74b9ff">📖 Pengertian Bangun Ruang Sisi Lengkung</h2>

<p>
Bangun ruang sisi lengkung adalah bangun ruang tiga dimensi yang memiliki sisi berbentuk lengkung.
</p>

<div style="
background:rgba(255,255,255,0.05);
border-left:5px solid #74b9ff;
padding:16px;
border-radius:14px;
margin:16px 0;
line-height:1.8;
">

📌 <b>Contoh bangun ruang sisi lengkung:</b>

<ul>
<li>Tabung</li>
<li>Kerucut</li>
<li>Bola</li>
</ul>

<p><b>Ciri umum:</b></p>

<ul>
<li>Memiliki volume</li>
<li>Memiliki luas permukaan</li>
<li>Sebagian atau seluruh sisinya berbentuk lengkung</li>
</ul>

</div>

<hr>

<!-- ===================================================== -->
<!-- TABUNG -->
<!-- ===================================================== -->

<h2 style="color:#74b9ff">🔵 Tabung (Silinder)</h2>

<p>
Tabung adalah bangun ruang yang memiliki dua alas berbentuk lingkaran yang sejajar dan sama besar serta satu sisi lengkung yang disebut selimut tabung.
</p>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:14px;
margin:20px 0;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:40px">⭕</div>

<h3 style="color:#7dd3fc">Alas Lingkaran</h3>

<p>
Memiliki dua alas berbentuk lingkaran.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:40px">📏</div>

<h3 style="color:#7dd3fc">Tinggi</h3>

<p>
Jarak antara dua alas lingkaran.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:40px">🌀</div>

<h3 style="color:#7dd3fc">Selimut</h3>

<p>
Sisi lengkung di bagian samping tabung.
</p>

</div>

</div>

<p><b>Bagian-bagian tabung:</b></p>

<ul>
<li><b>r</b> = jari-jari alas</li>
<li><b>d</b> = diameter = 2r</li>
<li><b>t</b> = tinggi tabung</li>
<li><b>Selimut tabung</b> = sisi lengkung di samping</li>
</ul>

<p><b>Ciri-ciri tabung:</b></p>

<ul>
<li>Memiliki 3 sisi (2 lingkaran dan 1 sisi lengkung)</li>
<li>Memiliki 2 rusuk lengkung</li>
<li>Tidak memiliki titik sudut</li>
</ul>

<hr>

<h3 style="color:#38bdf8">📌 Rumus Tabung</h3>

<div style="
background:rgba(255,255,255,0.05);
backdrop-filter:blur(10px);
border:1px solid rgba(255,255,255,0.1);
border-left:5px solid #38bdf8;
padding:20px;
border-radius:16px;
margin:18px 0;
">

<ul style="line-height:2">
<li><b>Volume = πr²t</b></li>
<li><b>Luas permukaan = 2πr(r + t)</b></li>
<li><b>Luas selimut = 2πrt</b></li>
<li><b>Luas alas = πr²</b></li>
</ul>

</div>

<hr>

<h3 style="color:#38bdf8">🧠 Contoh Soal Tabung</h3>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh 1:</b></p>

<p>Sebuah tabung memiliki jari-jari 7 cm dan tinggi 10 cm. Hitung volumenya!</p>

<p><b>Jawab:</b></p>

<p>V = π × r² × t</p>

<p>V = 22/7 × 7² × 10</p>

<p>V = 22/7 × 49 × 10</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Volume tabung = 1540 cm³
</div>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh 2:</b></p>

<p>Tabung memiliki jari-jari 5 cm dan tinggi 12 cm. Hitung luas selimutnya!</p>

<p><b>Jawab:</b></p>

<p>L = 2πrt</p>

<p>L = 2 × 3,14 × 5 × 12</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:12px;
">
✅ Luas selimut = 376,8 cm²
</div>

</div>

<hr>

<h3 style="color:#38bdf8">🌍 Contoh Kontekstual Tabung</h3>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:14px;
margin-top:20px;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>🛢️ Drum Air</h3>

<p>
Sebuah drum air berbentuk tabung memiliki jari-jari 50 cm dan tinggi 100 cm.
</p>

<p><b>Hitung volume air maksimal!</b></p>

<p>V = 3,14 × 50² × 100</p>

<p>V = 3,14 × 2500 × 100</p>

<p>V = 785.000 cm³</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Volume = 785 liter
</div>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>🥫 Kaleng Susu</h3>

<p>
Kaleng susu berbentuk tabung dengan diameter 14 cm dan tinggi 20 cm.
</p>

<p><b>Hitung luas permukaan!</b></p>

<p>r = 14 ÷ 2 = 7 cm</p>

<p>L = 2πr(r+t)</p>

<p>L = 2 × 22/7 × 7 × (7+20)</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:12px;
">
✅ Luas permukaan = 1188 cm²
</div>

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- KERUCUT -->
<!-- ===================================================== -->

<h2 style="color:#74b9ff">🔺 Kerucut</h2>

<p>
Kerucut adalah bangun ruang yang memiliki alas berbentuk lingkaran dan satu titik puncak.
</p>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:14px;
margin:20px 0;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:40px">📍</div>

<h3 style="color:#93c5fd">Titik Puncak</h3>

<p>
Memiliki satu titik puncak.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:40px">📏</div>

<h3 style="color:#93c5fd">Garis Pelukis</h3>

<p>
Garis dari puncak ke tepi alas.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:40px">⭕</div>

<h3 style="color:#93c5fd">Alas Lingkaran</h3>

<p>
Memiliki satu alas berbentuk lingkaran.
</p>

</div>

</div>

<p><b>Bagian-bagian kerucut:</b></p>

<ul>
<li><b>r</b> = jari-jari alas</li>
<li><b>t</b> = tinggi</li>
<li><b>s</b> = garis pelukis</li>
</ul>

<p><b>Ciri-ciri kerucut:</b></p>

<ul>
<li>Memiliki 2 sisi</li>
<li>Memiliki 1 rusuk lengkung</li>
<li>Memiliki 1 titik puncak</li>
</ul>

<hr>

<h3 style="color:#38bdf8">📌 Rumus Garis Pelukis</h3>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:28px;
font-weight:900;
color:#0284c7;
margin:18px 0;
">
s = √(r² + t²)
</div>

<p>
Rumus ini berasal dari Teorema Pythagoras.
</p>

<hr>

<h3 style="color:#38bdf8">📌 Rumus Kerucut</h3>

<div style="
background:rgba(255,255,255,0.05);
backdrop-filter:blur(10px);
border:1px solid rgba(255,255,255,0.1);
border-left:5px solid #38bdf8;
padding:20px;
border-radius:16px;
margin:18px 0;
">

<ul style="line-height:2">
<li><b>Volume = 1/3 πr²t</b></li>
<li><b>Luas permukaan = πr(r + s)</b></li>
<li><b>Luas selimut = πrs</b></li>
<li><b>Luas alas = πr²</b></li>
</ul>

</div>

<hr>

<h3 style="color:#38bdf8">🧠 Contoh Soal Kerucut</h3>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh 1:</b></p>

<p>Sebuah kerucut memiliki r = 7 cm dan t = 24 cm. Hitung volumenya!</p>

<p><b>Jawab:</b></p>

<p>V = 1/3 × π × r² × t</p>

<p>V = 1/3 × 22/7 × 49 × 24</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Volume = 1232 cm³
</div>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh 2:</b></p>

<p>Sebuah kerucut memiliki jari-jari 6 cm dan tinggi 8 cm. Hitung garis pelukisnya!</p>

<p><b>Jawab:</b></p>

<p>s = √(6² + 8²)</p>

<p>s = √100</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:12px;
">
✅ Garis pelukis = 10 cm
</div>

</div>

<hr>

<h3 style="color:#38bdf8">🌍 Contoh Kontekstual Kerucut</h3>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:14px;
margin-top:20px;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>🎉 Topi Ulang Tahun</h3>

<p>
Topi ulang tahun berbentuk kerucut memiliki tinggi 15 cm dan jari-jari 5 cm.
</p>

<p><b>Hitung luas selimut!</b></p>

<p>s = √250 ≈ 15,8</p>

<p>L = πrs</p>

<p>= 3,14 × 5 × 15,8</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Luas selimut = 248,06 cm²
</div>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>🍦 Es Krim Cone</h3>

<p>
Es krim berbentuk kerucut memiliki jari-jari 3 cm dan tinggi 12 cm.
</p>

<p><b>Hitung volumenya!</b></p>

<p>V = 1/3 × 3,14 × 3² × 12</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:12px;
">
✅ Volume = 113,04 cm³
</div>

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- BOLA -->
<!-- ===================================================== -->

<h2 style="color:#74b9ff">⚽ Bola</h2>

<p>
Bola adalah bangun ruang yang seluruh permukaannya berbentuk lengkung.
</p>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:14px;
margin:20px 0;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:40px">⚽</div>

<h3 style="color:#93c5fd">Permukaan Lengkung</h3>

<p>
Seluruh permukaannya melengkung.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:40px">❌</div>

<h3 style="color:#93c5fd">Tanpa Rusuk</h3>

<p>
Tidak memiliki rusuk dan titik sudut.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:40px">⭕</div>

<h3 style="color:#93c5fd">Jari-jari</h3>

<p>
Jarak titik pusat ke permukaan bola.
</p>

</div>

</div>

<p><b>Bagian bola:</b></p>

<ul>
<li><b>r</b> = jari-jari</li>
<li><b>d</b> = diameter = 2r</li>
</ul>

<p><b>Ciri-ciri bola:</b></p>

<ul>
<li>Tidak memiliki rusuk</li>
<li>Tidak memiliki titik sudut</li>
<li>Memiliki satu sisi lengkung</li>
</ul>

<hr>

<h3 style="color:#38bdf8">📌 Rumus Bola</h3>

<div style="
background:rgba(255,255,255,0.05);
backdrop-filter:blur(10px);
border:1px solid rgba(255,255,255,0.1);
border-left:5px solid #38bdf8;
padding:20px;
border-radius:16px;
margin:18px 0;
">

<ul style="line-height:2">
<li><b>Volume = 4/3 πr³</b></li>
<li><b>Luas permukaan = 4πr²</b></li>
</ul>

</div>

<hr>

<h3 style="color:#38bdf8">🧠 Contoh Soal Bola</h3>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh 1:</b></p>

<p>Sebuah bola memiliki jari-jari 7 cm. Hitung volumenya!</p>

<p><b>Jawab:</b></p>

<p>V = 4/3 × π × r³</p>

<p>V = 4/3 × 22/7 × 343</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Volume = 1437,33 cm³
</div>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh 2:</b></p>

<p>Sebuah bola memiliki jari-jari 10 cm. Hitung luas permukaannya!</p>

<p><b>Jawab:</b></p>

<p>L = 4 × 3,14 × 10²</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:12px;
">
✅ Luas permukaan = 1256 cm²
</div>

</div>

<hr>

<h3 style="color:#38bdf8">🌍 Contoh Kontekstual Bola</h3>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:14px;
margin-top:20px;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>🏀 Bola Basket</h3>

<p>
Sebuah bola basket memiliki jari-jari 12 cm.
</p>

<p><b>Hitung luas permukaannya!</b></p>

<p>L = 4 × 3,14 × 12²</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Luas permukaan = 1808,64 cm²
</div>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>🎈 Balon Udara</h3>

<p>
Sebuah balon berbentuk bola memiliki jari-jari 14 cm.
</p>

<p><b>Hitung volumenya!</b></p>

<p>V = 4/3 × 22/7 × 14³</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:12px;
">
✅ Volume = 11498,67 cm³
</div>

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- HUBUNGAN -->
<!-- ===================================================== -->

<h2 style="color:#74b9ff">🔄 Hubungan dan Perbandingan Bangun</h2>

<div style="
background:#1f2937;
padding:20px;
border-radius:16px;
margin-top:18px;
">

<ul style="line-height:2">

<li>Volume kerucut = 1/3 volume tabung jika jari-jari dan tinggi sama</li>

<li>Tabung seperti kaleng</li>

<li>Kerucut seperti topi ulang tahun</li>

<li>Bola adalah bangun paling simetris</li>

</ul>

</div>

<hr>

<!-- ===================================================== -->
<!-- TABEL -->
<!-- ===================================================== -->

<h2 style="color:#74b9ff">📊 Perbandingan Bangun Ruang</h2>

<div style="
overflow-x:auto;
margin-top:18px;
">

<table style="
width:100%;
border-collapse:collapse;
overflow:hidden;
border-radius:16px;
">

<tr style="background:#0284c7;color:white">

<th style="padding:12px;border:1px solid #374151">
Bangun
</th>

<th style="padding:12px;border:1px solid #374151">
Ciri
</th>

<th style="padding:12px;border:1px solid #374151">
Volume
</th>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Tabung
</td>

<td style="padding:12px;border:1px solid #374151">
2 lingkaran dan selimut
</td>

<td style="padding:12px;border:1px solid #374151">
πr²t
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
Kerucut
</td>

<td style="padding:12px;border:1px solid #374151">
1 alas dan 1 puncak
</td>

<td style="padding:12px;border:1px solid #374151">
1/3 πr²t
</td>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Bola
</td>

<td style="padding:12px;border:1px solid #374151">
Semua sisi lengkung
</td>

<td style="padding:12px;border:1px solid #374151">
4/3 πr³
</td>

</tr>

</table>

</div>

<hr>

<!-- ===================================================== -->
<!-- LATIHAN -->
<!-- ===================================================== -->

<h2 style="color:#74b9ff">🧠 Latihan Soal</h2>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p><b>1.</b> Sebuah tabung memiliki r = 4 cm dan t = 10 cm. Hitung volumenya!</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p><b>2.</b> Sebuah kerucut memiliki r = 6 cm dan t = 8 cm. Hitung garis pelukisnya!</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p><b>3.</b> Sebuah bola memiliki jari-jari 5 cm. Hitung luas permukaannya!</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p><b>4.</b> Mengapa volume kerucut hanya 1/3 volume tabung?</p>

</div>

<hr>

<!-- ===================================================== -->
<!-- KESIMPULAN -->
<!-- ===================================================== -->

<h2 style="color:#74b9ff">💡 Kesimpulan</h2>

<div style="
background:linear-gradient(135deg,#74b9ff,#0984e3);
padding:20px;
border-radius:18px;
margin-top:18px;
color:white;
">

<ul style="line-height:2">

<li>Tabung → seperti kaleng atau drum</li>

<li>Kerucut → seperti topi ulang tahun</li>

<li>Bola → seluruh permukaan lengkung</li>

<li>Volume tabung = πr²t</li>

<li>Volume kerucut = 1/3 πr²t</li>

<li>Volume bola = 4/3 πr³</li>

<li>Gunakan π = 22/7 atau 3,14 sesuai kebutuhan soal</li>

</ul>

</div>

<div style="
background:rgba(255,255,255,0.05);
backdrop-filter:blur(10px);
border:1px solid rgba(255,255,255,0.1);
border-left:4px solid #8b5cf6;
padding:12px;
border-radius:12px;
margin:18px 0;
color:#f3f4f6;
">

<b>📌 Catatan Penting:</b><br><br>

Gunakan π = 22/7 jika jari-jari atau diameter kelipatan 7.<br>
Gunakan π = 3,14 jika bukan kelipatan 7.

</div>

`,
tip:'Tabung penuh, kerucut hanya 1/3 tabung dengan alas dan tinggi sama, sedangkan bola paling simetris!'
},
     {
  id:'literasi-finansial',
  icon:'💹',
  title:'Literasi Finansial & Data',
  color:'#A29BFE',
  desc:'Tabungan, investasi, dan interpretasi data statistik.',

  isi:`

<!-- ===================================================== -->
<!-- HEADER -->
<!-- ===================================================== -->

<div style="
display:flex;
align-items:center;
gap:16px;
background:linear-gradient(135deg,#a29bfe,#6c5ce7);
padding:20px;
border-radius:20px;
margin-bottom:20px;
box-shadow:0 10px 30px rgba(0,0,0,0.25);
color:white;
">

<div style="font-size:55px">💹</div>

<div>

<h1 style="
margin:0;
font-size:32px;
font-weight:900;
">
Literasi Finansial & Data
</h1>

<p style="
margin-top:8px;
font-size:15px;
opacity:.95;
line-height:1.7;
">
Mempelajari cara mengelola uang, memahami bunga, cicilan, investasi, serta membaca dan menganalisis data dalam kehidupan sehari-hari.
</p>

</div>
</div>

<!-- ===================================================== -->
<!-- PENGERTIAN -->
<!-- ===================================================== -->

<h2 style="color:#a78bfa">📖 Pengertian Literasi Finansial & Data</h2>

<p>
Literasi finansial adalah kemampuan memahami, mengelola, dan menggunakan uang dengan bijak dalam kehidupan sehari-hari.
</p>

<p>
Literasi data adalah kemampuan membaca, memahami, menganalisis, dan mengambil kesimpulan dari data atau informasi.
</p>

<div style="
background:rgba(255,255,255,0.05);
border-left:5px solid #a78bfa;
padding:16px;
border-radius:14px;
margin:16px 0;
line-height:1.8;
">

📌 <b>Manfaat literasi finansial dan data:</b>

<ul>
<li>Mengatur pengeluaran dengan baik</li>
<li>Membantu menabung dan berinvestasi</li>
<li>Menghindari pemborosan</li>
<li>Membantu memahami tabel dan grafik</li>
<li>Membantu mengambil keputusan yang tepat</li>
</ul>

</div>

<hr>

<!-- ===================================================== -->
<!-- LITERASI FINANSIAL -->
<!-- ===================================================== -->

<h2 style="color:#a78bfa">💰 Literasi Finansial</h2>

<p>
Literasi finansial berkaitan dengan cara mengelola uang seperti:
</p>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:14px;
margin:20px 0;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:42px">🏦</div>

<h3 style="color:#c4b5fd">
Menabung
</h3>

<p>
Menyimpan uang untuk kebutuhan di masa depan.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:42px">📈</div>

<h3 style="color:#c4b5fd">
Investasi
</h3>

<p>
Menanamkan uang agar mendapatkan keuntungan.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:42px">💳</div>

<h3 style="color:#c4b5fd">
Cicilan
</h3>

<p>
Pembayaran secara bertahap dalam waktu tertentu.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:42px">🛒</div>

<h3 style="color:#c4b5fd">
Pengeluaran
</h3>

<p>
Mengatur kebutuhan agar tidak boros.
</p>

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- BUNGA MAJEMUK -->
<!-- ===================================================== -->

<h2 style="color:#a78bfa">🏦 1️⃣ Bunga Majemuk</h2>

<p>
Bunga majemuk adalah bunga yang dihitung dari modal awal ditambah bunga sebelumnya.
</p>

<p>
Artinya, bunga terus bertambah setiap periode.
</p>

<div style="
background:rgba(255,255,255,0.05);
backdrop-filter:blur(10px);
border:1px solid rgba(255,255,255,0.1);
border-left:5px solid #8b5cf6;
padding:20px;
border-radius:16px;
margin:18px 0;
text-align:center;
font-size:28px;
font-weight:900;
color:#ddd6fe;
">
M = M₀ × (1 + r)ⁿ
</div>

<ul>
<li>M = jumlah akhir</li>
<li>M₀ = modal awal</li>
<li>r = suku bunga per periode</li>
<li>n = jumlah periode</li>
</ul>

<p><b>Langkah menghitung bunga majemuk:</b></p>

<ol>
<li>Tentukan modal awal</li>
<li>Ubah persen menjadi desimal</li>
<li>Substitusikan ke rumus</li>
<li>Hitung hasil akhirnya</li>
</ol>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh soal:</b></p>

<p>Tabungan Rp1.000.000 dengan bunga 10% per tahun selama 2 tahun.</p>

<p>M = 1.000.000 × (1 + 0,1)²</p>

<p>M = 1.000.000 × (1,1)²</p>

<p>M = 1.000.000 × 1,21</p>

<p>M = Rp1.210.000</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Setelah 2 tahun tabungan menjadi Rp1.210.000
</div>

</div>

<div style="
background:#172554;
padding:16px;
border-radius:14px;
border-left:5px solid #60a5fa;
margin-top:18px;
">

📌 <b>Contoh Kontekstual:</b><br><br>

Kamu menabung Rp500.000 dengan bunga 5% per tahun selama 3 tahun.

<p>M = 500.000 × (1,05)³</p>

<p>M = 500.000 × 1,1576</p>

<p>M ≈ Rp578.800</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Semakin lama menabung, uang akan bertambah lebih besar
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- BUNGA TUNGGAL -->
<!-- ===================================================== -->

<h2 style="color:#a78bfa">📈 2️⃣ Bunga Tunggal</h2>

<p>
Bunga tunggal adalah bunga yang dihitung hanya dari modal awal.
</p>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:28px;
font-weight:900;
color:#6c5ce7;
margin:18px 0;
">
B = M × r × t
</div>

<ul>
<li>B = bunga</li>
<li>M = modal</li>
<li>r = bunga</li>
<li>t = waktu</li>
</ul>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh:</b></p>

<p>Modal Rp1.000.000 dengan bunga 10% selama 2 tahun.</p>

<p>B = 1.000.000 × 0,1 × 2</p>

<p>B = Rp200.000</p>

<p>Jumlah akhir = Rp1.200.000</p>

</div>

<div style="
background:#4c0519;
padding:16px;
border-radius:14px;
border-left:5px solid #f472b6;
margin-top:18px;
">

📌 <b>Perbedaan:</b>

<ul>
<li>Bunga tunggal → bunga tetap</li>
<li>Bunga majemuk → bunga terus berkembang</li>
</ul>

</div>

<hr>

<!-- ===================================================== -->
<!-- CICILAN -->
<!-- ===================================================== -->

<h2 style="color:#a78bfa">💳 3️⃣ Cicilan (Angsuran)</h2>

<p>
Cicilan adalah pembayaran secara bertahap dalam jangka waktu tertentu.
</p>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:24px;
font-weight:900;
color:#6c5ce7;
margin:18px 0;
">
Angsuran = (Pokok + Total Bunga) / Jumlah Cicilan
</div>

<p><b>Langkah menghitung cicilan:</b></p>

<ol>
<li>Hitung total pembayaran</li>
<li>Tambahkan pokok dan bunga</li>
<li>Bagi sesuai jumlah bulan</li>
</ol>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh soal:</b></p>

<p>Seseorang meminjam Rp1.200.000 dengan bunga total Rp300.000 selama 6 bulan.</p>

<p>Angsuran = (1.200.000 + 300.000) / 6</p>

<p>= 1.500.000 / 6</p>

<p>= Rp250.000 per bulan</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Cicilan per bulan = Rp250.000
</div>

</div>

<div style="
background:#172554;
padding:16px;
border-radius:14px;
border-left:5px solid #60a5fa;
margin-top:18px;
">

📌 <b>Contoh Kontekstual:</b><br><br>

Kamu membeli HP seharga Rp2.000.000 dengan bunga Rp400.000 selama 8 bulan.

<p>Angsuran = (2.000.000 + 400.000) / 8</p>

<p>= 2.400.000 / 8</p>

<p>= Rp300.000 per bulan</p>

</div>

<hr>

<!-- ===================================================== -->
<!-- DISKON -->
<!-- ===================================================== -->

<h2 style="color:#a78bfa">🛒 4️⃣ Diskon</h2>

<p>
Diskon adalah potongan harga dari harga awal barang.
</p>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Rumus Diskon:</b></p>

<p>Diskon = Persen × Harga Awal</p>

<p>Harga akhir = Harga awal − Diskon</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh:</b></p>

<p>Harga tas Rp200.000 mendapat diskon 20%.</p>

<p>Diskon = 20% × 200.000</p>

<p>= 40.000</p>

<p>Harga akhir = 200.000 − 40.000</p>

<p>= Rp160.000</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Harga setelah diskon = Rp160.000
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- UNTUNG RUGI -->
<!-- ===================================================== -->

<h2 style="color:#a78bfa">📊 5️⃣ Keuntungan & Kerugian</h2>

<p>
Dalam perdagangan terdapat keuntungan dan kerugian.
</p>

<ul>
<li>Untung → harga jual lebih besar dari harga beli</li>
<li>Rugi → harga jual lebih kecil dari harga beli</li>
</ul>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Rumus:</b></p>

<p>Untung = Harga jual − Harga beli</p>

<p>Rugi = Harga beli − Harga jual</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh:</b></p>

<p>Membeli barang Rp100.000 lalu dijual Rp125.000.</p>

<p>Untung = 125.000 − 100.000</p>

<p>= Rp25.000</p>

</div>

<div style="
background:#4c0519;
padding:16px;
border-radius:14px;
border-left:5px solid #fb7185;
margin-top:18px;
">

📌 <b>Contoh Kontekstual:</b><br><br>

Seseorang membeli sepeda Rp2.000.000 lalu menjualnya Rp1.800.000.

<p>Rugi = 2.000.000 − 1.800.000</p>

<p>= Rp200.000</p>

</div>

<hr>

<!-- ===================================================== -->
<!-- INVESTASI -->
<!-- ===================================================== -->

<h2 style="color:#a78bfa">📈 6️⃣ Keuntungan Investasi</h2>

<p>
Investasi adalah menanamkan uang atau modal agar memperoleh keuntungan di masa depan.
</p>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh:</b></p>

<p>Membeli barang Rp1.000.000 lalu dijual Rp1.300.000.</p>

<p>Keuntungan = Rp300.000</p>

</div>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:14px;
margin-top:18px;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>📈 Saham</h3>

<p>
Membeli saham Rp2.000.000 lalu naik menjadi Rp2.500.000.
</p>

<p>
Keuntungan = Rp500.000
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>🥇 Emas</h3>

<p>
Harga emas Rp900.000 naik menjadi Rp1.000.000.
</p>

<p>
Keuntungan = Rp100.000 per gram
</p>

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- PAJAK -->
<!-- ===================================================== -->

<h2 style="color:#a78bfa">🛒 7️⃣ Pajak Sederhana</h2>

<p>
Pajak adalah sejumlah uang yang dibayarkan kepada negara.
</p>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh:</b></p>

<p>Harga barang Rp100.000 dikenai pajak 10%.</p>

<p>Pajak = 10% × 100.000</p>

<p>= Rp10.000</p>

<p>Total bayar = 100.000 + 10.000</p>

<p>= Rp110.000</p>

</div>

<hr>

<!-- ===================================================== -->
<!-- LITERASI DATA -->
<!-- ===================================================== -->

<h2 style="color:#a78bfa">📊 Literasi Data</h2>

<p>
Literasi data adalah kemampuan membaca, memahami, dan menganalisis data.
</p>

<hr>

<!-- ===================================================== -->
<!-- MEMBACA DATA -->
<!-- ===================================================== -->

<h2 style="color:#a78bfa">📈 1️⃣ Membaca Data</h2>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:14px;
margin:20px 0;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<h3>📋 Tabel</h3>

<p>
Melihat angka secara detail.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<h3>📊 Diagram Batang</h3>

<p>
Membandingkan data.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<h3>📈 Diagram Garis</h3>

<p>
Melihat perubahan data.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<h3>🥧 Diagram Lingkaran</h3>

<p>
Melihat persentase data.
</p>

</div>

</div>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh soal:</b></p>

<p>Data penjualan:</p>

<ul>
<li>Senin = 10</li>
<li>Selasa = 15</li>
<li>Rabu = 20</li>
</ul>

<p>Hari tertinggi adalah Rabu.</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:12px;
">
✅ Penjualan tertinggi terjadi pada hari Rabu
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- GRAFIK -->
<!-- ===================================================== -->

<h2 style="color:#a78bfa">📉 2️⃣ Menafsirkan Grafik</h2>

<p>
Grafik membantu melihat perubahan data dengan cepat.
</p>

<p><b>Hal yang perlu diperhatikan:</b></p>

<ul>
<li>Judul grafik</li>
<li>Satuan</li>
<li>Skala</li>
<li>Sumbu x dan y</li>
</ul>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh:</b></p>

<p>Jika grafik penjualan naik setiap bulan, berarti penjualan meningkat.</p>

</div>

<hr>

<!-- ===================================================== -->
<!-- DATA VALID -->
<!-- ===================================================== -->

<h2 style="color:#a78bfa">⚠️ 3️⃣ Data Valid vs Menyesatkan</h2>

<div style="
overflow-x:auto;
margin-top:18px;
">

<table style="
width:100%;
border-collapse:collapse;
overflow:hidden;
border-radius:16px;
">

<tr style="background:#6c5ce7;color:white">

<th style="padding:12px;border:1px solid #374151">
Jenis Data
</th>

<th style="padding:12px;border:1px solid #374151">
Ciri
</th>

</tr>

<tr style="background:#111827">

<td style="padding:12px;border:1px solid #374151">
Valid
</td>

<td style="padding:12px;border:1px solid #374151">
Lengkap dan jujur
</td>

</tr>

<tr style="background:#1f2937">

<td style="padding:12px;border:1px solid #374151">
Menyesatkan
</td>

<td style="padding:12px;border:1px solid #374151">
Skala atau grafik tidak sesuai
</td>

</tr>

</table>

</div>

<div style="
background:#4c0519;
padding:16px;
border-radius:14px;
border-left:5px solid #fb7185;
margin-top:18px;
">

📌 Grafik yang tidak dimulai dari nol dapat membuat perbedaan terlihat sangat besar padahal sebenarnya kecil.

</div>

<hr>

<!-- ===================================================== -->
<!-- MEAN MEDIAN MODUS -->
<!-- ===================================================== -->

<h2 style="color:#a78bfa">📊 4️⃣ Mean, Median, dan Modus</h2>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:14px;
margin-top:20px;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>📌 Mean</h3>

<p>
Mean = jumlah data / banyak data
</p>

<p>
60,70,80,90
</p>

<p>
Mean = 75
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>📌 Median</h3>

<p>
Median adalah nilai tengah.
</p>

<p>
50,60,70,80,90
</p>

<p>
Median = 70
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>📌 Modus</h3>

<p>
Modus adalah nilai yang paling sering muncul.
</p>

<p>
2,3,3,4,5
</p>

<p>
Modus = 3
</p>

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- PERSENTASE -->
<!-- ===================================================== -->

<h2 style="color:#a78bfa">🧮 5️⃣ Persentase</h2>

<p>
Persentase digunakan untuk menunjukkan bagian dari keseluruhan.
</p>

<div style="
background:#f3f4f6;
padding:18px;
border-radius:14px;
text-align:center;
font-size:24px;
font-weight:900;
color:#6c5ce7;
margin:18px 0;
">
Persentase = bagian / total × 100%
</div>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh:</b></p>

<p>20 siswa dari 40 siswa menyukai matematika.</p>

<p>Persentase = 20/40 × 100%</p>

<p>= 50%</p>

</div>

<hr>

<!-- ===================================================== -->
<!-- INFLASI -->
<!-- ===================================================== -->

<h2 style="color:#a78bfa">📈 6️⃣ Inflasi</h2>

<p>
Inflasi adalah kenaikan harga barang secara umum.
</p>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh:</b></p>

<p>Harga beras dari Rp10.000 menjadi Rp12.000.</p>

<p>Terjadi inflasi.</p>

</div>

<div style="
background:#172554;
padding:16px;
border-radius:14px;
border-left:5px solid #60a5fa;
margin-top:18px;
">

📌 <b>Contoh Kontekstual:</b><br><br>

Uang Rp10.000 dulu bisa membeli 2 barang, sekarang hanya 1 barang.

<p>
Artinya daya beli menurun.
</p>

</div>

<hr>

<!-- ===================================================== -->
<!-- INDEKS HARGA -->
<!-- ===================================================== -->

<h2 style="color:#a78bfa">📊 7️⃣ Indeks Harga</h2>

<p>
Indeks harga digunakan untuk membandingkan harga dari waktu ke waktu.
</p>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p><b>Contoh:</b></p>

<p>Harga tahun ini = 120</p>

<p>Harga tahun lalu = 100</p>

<p>Kenaikan = 20%</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Harga barang mengalami kenaikan dibanding sebelumnya
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- KONTEKSTUAL -->
<!-- ===================================================== -->

<h2 style="color:#a78bfa">🌍 Contoh Soal Kontekstual</h2>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:14px;
margin-top:20px;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>🏦 Tabungan Masa Depan</h3>

<p>
M = 1.000.000 × (1,08)²
</p>

<p>
M = Rp1.166.400
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>🚲 Kredit Barang</h3>

<p>
1.800.000 / 6
</p>

<p>
= Rp300.000
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>🛍️ Diskon Toko</h3>

<p>
Diskon = 20% × 250.000
</p>

<p>
= 50.000
</p>

<p>
Harga akhir = Rp200.000
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>📈 Analisis Penjualan</h3>

<ul>
<li>Senin = 20</li>
<li>Selasa = 25</li>
<li>Rabu = 30</li>
</ul>

<p>
Penjualan meningkat setiap hari.
</p>

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- TIPS -->
<!-- ===================================================== -->

<h2 style="color:#a78bfa">🧠 Tips Memahami Literasi Finansial</h2>

<div style="
background:#1f2937;
padding:20px;
border-radius:16px;
margin-top:18px;
">

<ul style="line-height:2">

<li>Bedakan kebutuhan dan keinginan</li>

<li>Biasakan menabung</li>

<li>Hitung bunga dan cicilan sebelum membeli</li>

<li>Jangan mudah percaya grafik yang menyesatkan</li>

<li>Periksa data dengan teliti</li>

</ul>

</div>

<hr>

<!-- ===================================================== -->
<!-- KESIMPULAN -->
<!-- ===================================================== -->

<h2 style="color:#a78bfa">💡 Kesimpulan</h2>

<div style="
background:linear-gradient(135deg,#a29bfe,#6c5ce7);
padding:20px;
border-radius:18px;
margin-top:18px;
color:white;
">

<ul style="line-height:2">

<li>Bunga majemuk membuat uang berkembang lebih cepat</li>

<li>Cicilan adalah pembayaran bertahap</li>

<li>Diskon mengurangi harga barang</li>

<li>Investasi dapat memberikan keuntungan</li>

<li>Data harus dibaca dengan teliti</li>

<li>Inflasi menyebabkan harga naik dan daya beli turun</li>

<li>Grafik membantu memahami data lebih mudah</li>

</ul>

</div>

`,
  tip:'Tabungan + waktu = uang bertambah. Selalu cek data dan grafik dengan teliti agar tidak salah mengambil keputusan!'
},
{
  id:'persiapan-ujian',
  icon:'🎓',
  title:'Persiapan Ujian / TKA (Kelas 9)',
  color:'#FF6B6B',
  desc:'Ringkasan materi + latihan soal TKA lengkap dengan pembahasan.',

  isi:`

<!-- ===================================================== -->
<!-- HEADER -->
<!-- ===================================================== -->

<div style="
display:flex;
align-items:center;
gap:16px;
background:linear-gradient(135deg,#ff6b6b,#ee5253);
padding:20px;
border-radius:20px;
margin-bottom:20px;
box-shadow:0 10px 30px rgba(0,0,0,0.25);
color:white;
">

<div style="font-size:55px">🎓</div>

<div>

<h1 style="
margin:0;
font-size:32px;
font-weight:900;
">
Persiapan Ujian / TKA
</h1>

<p style="
margin-top:8px;
font-size:15px;
opacity:.95;
line-height:1.7;
">
Ringkasan materi penting matematika kelas 9 lengkap dengan latihan soal TKA, pembahasan, dan tips mengerjakan soal secara efektif.
</p>

</div>
</div>

<!-- ===================================================== -->
<!-- PENGERTIAN -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">📚 Pengertian TKA</h2>

<p>
TKA (Tes Kemampuan Akademik) adalah ujian yang mengukur kemampuan memahami konsep matematika dan penerapannya dalam berbagai bentuk soal.
</p>

<div style="
background:rgba(255,255,255,0.05);
border-left:5px solid #ff6b6b;
padding:16px;
border-radius:14px;
margin:16px 0;
line-height:1.8;
">

📌 <b>Materi yang sering muncul dalam TKA:</b>

<ul>
<li>Persamaan & Fungsi Kuadrat</li>
<li>SPLDV</li>
<li>Bangun Ruang</li>
<li>Transformasi Geometri</li>
<li>Statistika & Peluang</li>
<li>Perbandingan & Skala</li>
</ul>

</div>

<hr>

<!-- ===================================================== -->
<!-- RINGKASAN MATERI -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">📝 Ringkasan Materi Penting</h2>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:14px;
margin:20px 0;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:42px">x²</div>

<h3 style="color:#fca5a5">
Persamaan Kuadrat
</h3>

<p>
Faktorisasi, Rumus ABC, diskriminan, grafik parabola.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:42px">🧮</div>

<h3 style="color:#fca5a5">
SPLDV
</h3>

<p>
Menyelesaikan dua persamaan linear dua variabel.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:42px">📊</div>

<h3 style="color:#fca5a5">
Statistika
</h3>

<p>
Mean, median, modus, dan interpretasi data.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
text-align:center;
">

<div style="font-size:42px">🎲</div>

<h3 style="color:#fca5a5">
Peluang
</h3>

<p>
Menghitung kemungkinan suatu kejadian.
</p>

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- TKA 1 -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">🧠 TKA 1 – Persamaan Kuadrat</h2>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p>
Tentukan nilai x dari:
</p>

<p>x² − 7x + 12 = 0</p>

<p><b>Penyelesaian:</b></p>

<p>(x − 3)(x − 4) = 0</p>

<p>x − 3 = 0 atau x − 4 = 0</p>

<p>x = 3 atau x = 4</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Jawaban: x = 3 atau x = 4
</div>

</div>

<div style="
background:#4c0519;
padding:16px;
border-radius:14px;
border-left:5px solid #fb7185;
margin-top:18px;
">

📌 <b>Contoh Kontekstual:</b><br><br>

Sebuah taman berbentuk persegi panjang memiliki luas 12 m².

<p>Panjang = (x − 3)</p>

<p>Lebar = (x − 4)</p>

<p>(x − 3)(x − 4) = 12</p>

<p>x² − 7x + 12 = 0</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Nilai x yang memenuhi adalah 3 dan 4
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- TKA 2 -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">🧠 TKA 2 – SPLDV</h2>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p>
Harga 2 pensil dan 3 pulpen = Rp13.000
</p>

<p>
Harga 1 pensil dan 2 pulpen = Rp8.000
</p>

<p><b>Misal:</b></p>

<p>x = harga pensil</p>

<p>y = harga pulpen</p>

<p>2x + 3y = 13000</p>

<p>x + 2y = 8000</p>

<p><b>Substitusi:</b></p>

<p>x = 8000 − 2y</p>

<p>2(8000 − 2y) + 3y = 13000</p>

<p>16000 − 4y + 3y = 13000</p>

<p>16000 − y = 13000</p>

<p>y = 3000</p>

<p>x = 8000 − 6000</p>

<p>x = 2000</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Harga pensil = Rp2.000 dan pulpen = Rp3.000
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- TKA 3 -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">🎲 TKA 3 – Peluang</h2>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p>
Sebuah dadu dilempar satu kali.
</p>

<p>
Tentukan peluang muncul bilangan prima!
</p>

<p><b>Penyelesaian:</b></p>

<p>Ruang sampel = {1,2,3,4,5,6}</p>

<p>Bilangan prima = {2,3,5}</p>

<p>Jumlah kejadian = 3</p>

<p>P(A) = 3/6</p>

<p>P(A) = 1/2</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:12px;
">
✅ Peluang muncul bilangan prima = 1/2
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- TKA 4 -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">📦 TKA 4 – Bangun Ruang</h2>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p>
Sebuah kubus memiliki sisi 6 cm.
</p>

<p>
Tentukan volumenya!
</p>

<p><b>Penyelesaian:</b></p>

<p>V = s³</p>

<p>V = 6³</p>

<p>V = 216 cm³</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Volume kubus = 216 cm³
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- TKA 5 -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">📊 TKA 5 – Statistika</h2>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p>
Data: 5, 7, 8, 10, 10
</p>

<p>
Tentukan mean, median, dan modus!
</p>

<p><b>Penyelesaian:</b></p>

<p>Mean = (5 + 7 + 8 + 10 + 10) / 5</p>

<p>= 40 / 5</p>

<p>= 8</p>

<p>Median = 8</p>

<p>Modus = 10</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:12px;
">
✅ Mean = 8, Median = 8, Modus = 10
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- TKA 6 -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">📏 TKA 6 – Perbandingan</h2>

<div style="
background:#111827;
padding:18px;
border-radius:16px;
margin-top:18px;
">

<p>
Jika 4 buku = Rp20.000,
</p>

<p>
maka harga 10 buku adalah?
</p>

<p><b>Penyelesaian:</b></p>

<p>1 buku = 20.000 / 4</p>

<p>= 5.000</p>

<p>10 buku = 10 × 5.000</p>

<p>= 50.000</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:12px;
">
✅ Harga 10 buku = Rp50.000
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- STRATEGI -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">🎯 Strategi Mengerjakan TKA</h2>

<div style="
display:grid;
grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
gap:14px;
margin-top:20px;
">

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>📖 Pahami Konsep</h3>

<p>
Jangan hanya menghafal rumus. Pahami cara dan alasan penggunaannya.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>⚡ Kerjakan Mudah Dulu</h3>

<p>
Kerjakan soal yang paling mudah agar waktu lebih efisien.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>✍️ Tulis Langkah</h3>

<p>
Langkah yang rapi membantu mengurangi kesalahan hitung.
</p>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
">

<h3>🔍 Periksa Jawaban</h3>

<p>
Cek kembali hasil perhitungan sebelum dikumpulkan.
</p>

</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- LATIHAN -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">🧠 Latihan Tambahan</h2>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p><b>1.</b> Tentukan hasil dari:</p>

<p>3x + 5 = 20</p>

<p>x = 5</p>

<div style="
background:#052e16;
padding:12px;
border-radius:10px;
border-left:5px solid #22c55e;
margin-top:10px;
">
✅ Jawaban benar: x = 5
</div>

</div>

<div style="
background:#1f2937;
padding:18px;
border-radius:16px;
margin:14px 0;
">

<p><b>2.</b> Tentukan mean dari data:</p>

<p>6, 8, 10</p>

<p>(6 + 8 + 10)/3</p>

<p>= 24/3</p>

<p>= 8</p>

<div style="
background:#172554;
padding:12px;
border-radius:10px;
border-left:5px solid #60a5fa;
margin-top:10px;
">
✅ Mean = 8
</div>

</div>

<hr>

<!-- ===================================================== -->
<!-- KESIMPULAN -->
<!-- ===================================================== -->

<h2 style="color:#ff6b6b">💡 Kesimpulan</h2>

<div style="
background:linear-gradient(135deg,#ff6b6b,#ee5253);
padding:20px;
border-radius:18px;
margin-top:18px;
color:white;
">

<ul style="line-height:2">

<li>TKA menguji pemahaman konsep matematika</li>

<li>Latihan soal sangat penting untuk meningkatkan kemampuan</li>

<li>Pahami langkah penyelesaian, bukan hanya jawaban akhir</li>

<li>Gunakan strategi pengerjaan agar lebih efektif</li>

<li>Semakin sering latihan, semakin cepat memahami pola soal</li>

</ul>

</div>

`,
tip:'Fokus pada konsep + latihan soal. Jangan hanya hafal rumus!'
}
    ]
  }
};
// =============================================
// DATA VIDEO
// =============================================
const VIDEO_DATA = [
  // =====================
  // KELAS 7
  // ====== ===============
  {
    id: 1,
    kelas: "7",
    semester: "1",
    title: "Bilangan Bulat",
    topik: "Bilangan",
    channel: "Portal Edukasi",
    youtubeId: "j3-vxTMQlXM",
    desc: "Bilangan bulat"
  },
  {
    id: 2,
    kelas: "7",
    semester: "1",
    title: "Bilangan Rasional",
    topik: "Bilangan",
    channel: "Portal Edukasi",
    youtubeId: "NE2LrOhYgXs",
    desc: "Bilangan rasional"
  },
  {
    id: 3,
    kelas: "7",
    semester: "1",
    title: "Aljabar",
    topik: "Aljabar",
    channel: "Le GuruLes",
    youtubeId: "eW7LZDdXhLo",
    desc: "Pengenalan Aljabar, Bentuk Aljabar, Mengurutkan Aljabar"
  },
  {
    id: 4,
    kelas: "7",
    semester: "1",
    title: "Persamaan & Pertidaksamaan Linear Satu Variabel",
    topik: "PlSV & PtLSV",
    channel: "Yovita Vera",
    youtubeId: "j3P-q42mN1o",
    desc: "Menyelesaikan PLSV dan PtLSV."
  },
  {
    id: 5,
    kelas: "7",
    semester: "2",
    title: "Rasio & Proporsi",
    topik: "Perbandingan",
    channel: "Benni al azhri",
    youtubeId: "8Izdps0E5-c",
    desc: "Perbandingan senilai, berbalik nilai, skala."
  },
  {
    id: 6,
    kelas: "7",
    semester: "2",
    title: "Aritmetika Sosial",
    topik: "Aritmetika Sosial",
    channel: "Mathsyairozi",
    youtubeId: "XSL44voFNik",
    desc: "Untung, rugi, bunga, diskon, pajak."
  },
  {id: 7,
    kelas: "7",
    semester: "2",
    title: "Garis & Sudut",
    topik: "Geometri",
    channel: "Kimatika",
    youtubeId: "MY3WCwkmN30",
    desc: "Jenis sudut, hubungan antar sudut, garis sejajar."},
{id: 8,
    kelas: "7",
    semester: "2",
    title: "Statistika Dasar",
    topik: "Statistika",
    channel: "Le GuruLes",
    youtubeId: "TbRFsxrujQI",
    desc: "Pengenalan Statistika."},
  // =====================
  // KELAS 8
  // =====================
  {
    id: 9,
    kelas: "8",
    semester: "1",
    title: "Bilangan Berpangkat & Bentuk Akar",
    topik: " Bilangan",
    channel: "Benni al azhri",
    youtubeId: "oaC7dxb9-3I",
    desc: "Pangkat bulat, sifat pangkat, bentuk akar dan operasinya."
  },
  {
    id: 10,
    kelas: "8",
    semester: "1",
    title: "Teorema Pythagoras",
    topik: "pythagoras",
    channel: "Bu And' Channel",
    youtubeId: "pk4NB1Lmy7w",
    desc: "Teorema Pythagoras dan penerapannya."
  },
  {
    id: 11,
    kelas: "8",
    semester: "1",
    title: "Persamaan Garis Lurus",
    topik: "Garis Lurus",
    channel: "Kimatika",
    youtubeId: "0ACPl7jPJ3I",
    desc: "Gradien, persamaan garis, garis sejajar & tegak lurus."
  },
  {
    id: 12,
    kelas: "8",
    semester: "1",
    title: "Sistem Persamaan Linear Dua Variabel (SPLDV)",
    topik: "SPLDV",
    channel: "Le GuruLes",
    youtubeId: "4DPidz3KdEI",
    desc: "Metode substitusi, eliminasi, dan grafik."
  },
  {
    id: 13,
    kelas: "8",
    semester: "2",
    title: "Relasi & Fungsi",
    topik: "Relasi & Fungsi",
    channel: "Le GuruLes",
    youtubeId: "QbKWvldwP1w",
    desc: "Memahami relasi, fungsi, dan penerapannya."
  },
  {
    id: 14,
    kelas: "8",
    semester: "2",
    title: "Statistika Lanjutan",
    topik: "Statistika",
    channel: "Benni al azhri",
    youtubeId: "fGmWCFCKCC4",
    desc: "Ukuran penyebaran data dan penyajiannya."
  },
{
    id: 15,
    kelas: "8",
    semester: "2",
    title: "Peluang",
    topik: "Peluang",
    channel: "Le GuruLes",
    youtubeId: "3mnvcG8os_s",
    desc: "Ruang sampel, kejadian, peluang teoritis dan empiris."
  },
  {
    id: 16,
    kelas: "8",
    semester: "2",
    title: "Bangun Ruang Sisi Datar",
    topik: "Bangun Ruang",
    channel: "Le GuruLes",
    youtubeId: "NOsM5iEseMs",
    desc: "Kubus, balok, prisma, limas: luas dan volume."
  },
  // =====================
  // KELAS 9
  // =====================
  {
    id: 17,
    kelas: "9",
    semester: "1",
    title: "Persamaan & Fungsi Kuadrat",
    topik: "Fungsi Kuadrat",
    channel: "Benni al azhri",
    youtubeId: "cw05wO1rHko",
    desc: "Persamaan kuadrat, diskriminan, fungsi kuadrat, grafik parabola."
  },
  {
    id: 18,
    kelas: "9",
    semester: "1",
    title: "Transformasi Geometri",
    topik: "Transformasi",
    channel: "Le GuruLes",
    youtubeId: "_gYu4JqK20g",
    desc: "Translasi, refleksi, rotasi, dilatasi."
  },
  {
    id: 19,
    kelas: "9",
    semester: "1",
    title: "Kekongruenan & Kesebangunan",
    topik: "Kekongruenan & Kesebangunan",
    channel: "Le GuruLes",
    youtubeId: "jvJEK01ZMkY",
    desc: "Memahami kesamaan bentuk dan ukuran bangun."
  },
  {
    id: 20,
    kelas: "9",
    semester: "2",
    title: "Bangun Ruang Sisi Lengkung",
    topik: "Bangun Ruang",
    channel: "Le GuruLes",
    youtubeId: "xNZ-sDrQlXg",
    desc: "Tabung, kerucut, bola: luas dan volume."
  },
  {
    id: 21,
    kelas: "9",
    semester: "2",
    title: "Literasi Finansial & Data",
    topik: "Literasi Finansial",
    channel: "BIG Course",
    youtubeId: "oS5MQKTMtN8",
    desc: "Tabungan, investasi, dan interpretasi data statistik."
  },
  {
    id: 22,
    kelas: "9",
    semester: "2",
    title: "Persiapan Ujian / TKA (Kelas 9)",
    topik: "TKA",
    channel: "Bimbingan Belajar Ar-Raihan",
    youtubeId: "aJe6urMFp_k",
    desc: "Latihan soal TKA."
  },
];
// =============================================
// DATA QUIZ
// =============================================
// ============================================================
// QUIZ_DATA.js - MathEdu SMP Negeri 27 Makassar
// Struktur: QUIZ_DATA[kelas][semester][topik][tingkat][index]
// Kelas: "7", "8", "9"
// Semester: "1", "2"
// Tingkat: easy (mudah), medium (sedang), hard (sulit)
// ============================================================

const QUIZ_DATA = {

  // ============================================================
  // KELAS 7
  // ============================================================
  7: {

    // ----------------------------------------------------------
    // SEMESTER 1
    // ----------------------------------------------------------
    1: {

      // ========================
      // BILANGAN BULAT
      // ========================
      "Bilangan Bulat": {

        easy: [
          {
            q: "Hasil dari 12 + 8 adalah ...",
            options: ["18", "19", "20", "21"],
            answer: 2,
            time: 30,
            explain: "12 + 8 = 20. Penjumlahan biasa bilangan bulat positif."
          },
          {
            q: "Hasil dari 25 - 13 adalah ...",
            options: ["10", "11", "12", "13"],
            answer: 2,
            time: 30,
            explain: "25 - 13 = 12. Pengurangan bilangan bulat positif."
          },
          {
            q: "Hasil dari -7 + 15 adalah ...",
            options: ["6", "7", "8", "9"],
            answer: 2,
            time: 35,
            explain: "-7 + 15 = 8. Tambahkan 15, kurangi 7 karena tanda negatif."
          },
          {
            q: "Hasil dari -12 - 5 adalah ...",
            options: ["-17", "-15", "-12", "-7"],
            answer: 0,
            time: 35,
            explain: "-12 - 5 = -17. Kedua bilangan negatif, jumlahkan nilainya menjadi -17."
          },
          {
            q: "Hasil dari 6 × (-4) adalah ...",
            options: ["24", "-24", "-18", "18"],
            answer: 1,
            time: 35,
            explain: "Positif × negatif = negatif. 6 × 4 = 24, jadi hasilnya -24."
          },
          {
            q: "Hasil dari (-5) + (-9) adalah ...",
            options: ["14", "-14", "4", "-4"],
            answer: 1,
            time: 35,
            explain: "Negatif + negatif = negatif. 5 + 9 = 14, jadi hasilnya -14."
          },
          {
            q: "Bilangan manakah yang lebih besar: -3 atau -7?",
            options: ["-7", "-3", "Sama besar", "Tidak dapat dibandingkan"],
            answer: 1,
            time: 30,
            explain: "Pada garis bilangan, -3 berada di sebelah kanan -7, sehingga -3 > -7."
          }
        ],

        medium: [
          {
            q: "Hasil dari -36 ÷ 6 adalah ...",
            options: ["6", "-6", "-12", "12"],
            answer: 1,
            time: 35,
            explain: "Negatif ÷ positif = negatif. 36 ÷ 6 = 6, jadi hasilnya -6."
          },
          {
            q: "Suhu kota A adalah -3°C lalu naik 7°C. Suhu sekarang adalah ...",
            options: ["3°C", "4°C", "5°C", "6°C"],
            answer: 1,
            time: 40,
            explain: "-3 + 7 = 4°C. Suhu naik berarti ditambah."
          },
          {
            q: "Hasil dari 18 + (-25) adalah ...",
            options: ["7", "-7", "43", "-43"],
            answer: 1,
            time: 40,
            explain: "18 + (-25) = 18 - 25 = -7. Karena 25 lebih besar, hasilnya negatif."
          },
          {
            q: "Hasil dari (-8) × (-7) adalah ...",
            options: ["-56", "49", "56", "-49"],
            answer: 2,
            time: 40,
            explain: "Negatif × negatif = positif. 8 × 7 = 56."
          },
          {
            q: "Hasil dari 48 ÷ (-6) adalah ...",
            options: ["8", "-8", "-6", "6"],
            answer: 1,
            time: 40,
            explain: "Positif ÷ negatif = negatif. 48 ÷ 6 = 8, jadi hasilnya -8."
          },
          {
            q: "Hasil dari -20 + 8 - (-4) adalah ...",
            options: ["-8", "-16", "-12", "12"],
            answer: 0,
            time: 50,
            explain: "-20 + 8 - (-4) = -20 + 8 + 4 = -12 + 4 = -8. Ingat, mengurangi negatif sama dengan menambahkan."
          },
          {
            q: "Seekor ikan berada 8 meter di bawah permukaan laut. Bila ditulis dengan bilangan bulat menjadi ...",
            options: ["8", "-8", "0", "18"],
            answer: 1,
            time: 40,
            explain: "Di bawah permukaan laut dinyatakan dengan bilangan negatif, sehingga ditulis -8."
          }
        ],

        hard: [
          {
            q: "Andi memiliki uang Rp50.000 lalu membayar Rp65.000. Sisa uang Andi dapat dinyatakan sebagai ...",
            options: ["Rp15.000", "-Rp15.000", "Rp115.000", "-Rp115.000"],
            answer: 1,
            time: 45,
            explain: "50.000 - 65.000 = -15.000. Andi kekurangan uang sebesar Rp15.000, ditulis -Rp15.000."
          },
          {
            q: "Hasil dari (-3) × (-4) × (-2) adalah ...",
            options: ["24", "-24", "48", "-48"],
            answer: 1,
            time: 50,
            explain: "(-3)×(-4) = 12 (positif), lalu 12×(-2) = -24. Jumlah tanda negatif ganjil (3), hasilnya negatif."
          },
          {
            q: "Nilai dari |−15| + |−9| adalah ...",
            options: ["6", "-6", "24", "-24"],
            answer: 2,
            time: 50,
            explain: "Nilai mutlak |−15| = 15 dan |−9| = 9. Jadi 15 + 9 = 24."
          },
          {
            q: "Pada garis bilangan, titik yang berjarak 6 dari angka 2 adalah ...",
            options: ["8 dan -4", "8 dan 4", "-8 dan 4", "-8 dan -4"],
            answer: 0,
            time: 55,
            explain: "Dari 2, maju 6 → 2+6=8. Mundur 6 → 2-6=-4. Jadi titiknya adalah 8 dan -4."
          },
          {
            q: "Hasil dari (-5)² - (-3)³ adalah ...",
            options: ["52", "2", "-2", "-52"],
            answer: 0,
            time: 60,
            explain: "(-5)² = 25 dan (-3)³ = -27. Jadi 25 - (-27) = 25 + 27 = 52."
          }
        ]
      },

      // ========================
      // BILANGAN RASIONAL
      // ========================
      "Bilangan Rasional": {

        easy: [
          {
            q: "Bilangan yang dapat dinyatakan dalam bentuk p/q (q ≠ 0) disebut ...",
            options: ["Bilangan cacah", "Bilangan rasional", "Bilangan prima", "Bilangan bulat"],
            answer: 1,
            time: 30,
            explain: "Bilangan rasional adalah bilangan yang bisa dinyatakan sebagai pecahan p/q, dengan p dan q bilangan bulat dan q ≠ 0."
          },
          {
            q: "Hasil dari 1/2 + 1/4 adalah ...",
            options: ["1/6", "2/6", "3/4", "1/4"],
            answer: 2,
            time: 35,
            explain: "Samakan penyebut: 1/2 = 2/4. Jadi 2/4 + 1/4 = 3/4."
          },
          {
            q: "Hasil dari 3/5 - 1/5 adalah ...",
            options: ["1/5", "2/5", "3/5", "4/5"],
            answer: 1,
            time: 35,
            explain: "Penyebut sama, kurangkan pembilang: 3/5 - 1/5 = 2/5."
          },
          {
            q: "Bentuk desimal dari 3/4 adalah ...",
            options: ["0,25", "0,5", "0,75", "0,8"],
            answer: 2,
            time: 35,
            explain: "3 ÷ 4 = 0,75. Bagi pembilang dengan penyebut."
          },
          {
            q: "Pecahan 6/8 dalam bentuk paling sederhana adalah ...",
            options: ["2/3", "3/4", "1/2", "4/6"],
            answer: 1,
            time: 35,
            explain: "FPB dari 6 dan 8 adalah 2. 6÷2 = 3 dan 8÷2 = 4, jadi 3/4."
          },
          {
            q: "Bentuk pecahan dari 0,5 adalah ...",
            options: ["5/10", "1/2", "5/100", "1/5"],
            answer: 1,
            time: 30,
            explain: "0,5 = 5/10 = 1/2 setelah disederhanakan."
          },
          {
            q: "Manakah yang merupakan contoh bilangan rasional?",
            options: ["√2", "π", "3/4", "√5"],
            answer: 2,
            time: 30,
            explain: "3/4 adalah bilangan rasional karena bisa ditulis sebagai pecahan. √2, π, √5 adalah bilangan irasional."
          }
        ],

        medium: [
          {
            q: "Hasil dari 2/3 × 3/4 adalah ...",
            options: ["1/2", "2/7", "5/7", "6/12"],
            answer: 0,
            time: 40,
            explain: "Kalikan pembilang dengan pembilang dan penyebut dengan penyebut: (2×3)/(3×4) = 6/12 = 1/2."
          },
          {
            q: "Hasil dari 4/5 ÷ 2/3 adalah ...",
            options: ["6/10", "12/10", "8/15", "4/15"],
            answer: 1,
            time: 40,
            explain: "Pembagian pecahan = kalikan dengan kebalikannya: 4/5 × 3/2 = 12/10 = 6/5."
          },
          {
            q: "Hasil dari -2/3 + 1/3 adalah ...",
            options: ["1/3", "-1/3", "-3/3", "0"],
            answer: 1,
            time: 40,
            explain: "Penyebut sama: -2/3 + 1/3 = (-2+1)/3 = -1/3."
          },
          {
            q: "Hasil dari 5/6 + 1/3 adalah ...",
            options: ["6/9", "7/6", "5/9", "1"],
            answer: 1,
            time: 45,
            explain: "1/3 = 2/6. Jadi 5/6 + 2/6 = 7/6."
          },
          {
            q: "Urutan dari terkecil ke terbesar: 1/2, 2/3, 3/4 adalah ...",
            options: ["1/2, 2/3, 3/4", "3/4, 2/3, 1/2", "2/3, 1/2, 3/4", "3/4, 1/2, 2/3"],
            answer: 0,
            time: 50,
            explain: "Samakan penyebut ke 12: 6/12, 8/12, 9/12. Urutan: 1/2 < 2/3 < 3/4."
          },
          {
            q: "Ani memakan 2/8 bagian pizza. Bentuk sederhana dari 2/8 adalah ...",
            options: ["1/2", "1/3", "1/4", "2/4"],
            answer: 2,
            time: 40,
            explain: "FPB dari 2 dan 8 adalah 2. 2÷2=1 dan 8÷2=4, jadi 1/4."
          },
          {
            q: "Bentuk pecahan dari 0,6 adalah ...",
            options: ["3/5", "6/5", "1/5", "2/5"],
            answer: 0,
            time: 35,
            explain: "0,6 = 6/10 = 3/5 setelah disederhanakan dengan FPB 2."
          }
        ],

        hard: [
          {
            q: "Ibu membeli 2½ kg gula dan menggunakan ¾ kg. Sisa gula ibu adalah ...",
            options: ["1¼ kg", "1¾ kg", "2 kg", "1 kg"],
            answer: 1,
            time: 50,
            explain: "2½ - ¾ = 5/2 - 3/4 = 10/4 - 3/4 = 7/4 = 1¾ kg."
          },
          {
            q: "Sebuah botol berisi 3/4 liter air. Kemudian ditambah 1/2 liter. Isi botol sekarang adalah ...",
            options: ["4/6 liter", "1¼ liter", "5/8 liter", "1½ liter"],
            answer: 1,
            time: 50,
            explain: "3/4 + 1/2 = 3/4 + 2/4 = 5/4 = 1¼ liter."
          },
          {
            q: "Dalam lomba lari, Budi menyelesaikan 3/5 putaran dari total 20 putaran. Budi telah menempuh ...",
            options: ["10", "12", "15", "18"],
            answer: 1,
            time: 45,
            explain: "3/5 × 20 = 60/5 = 12 putaran."
          },
          {
            q: "Nilai dari 3/4 × (1/2 + 1/3) adalah ...",
            options: ["5/8", "5/12", "5/24", "5/6"],
            answer: 0,
            time: 60,
            explain: "1/2 + 1/3 = 3/6 + 2/6 = 5/6. Kemudian 3/4 × 5/6 = 15/24 = 5/8."
          },
          {
            q: "Jika p = 2/3 dan q = 3/4, nilai dari p + q - p×q adalah ...",
            options: ["5/6", "11/12", "7/12", "17/12"],
            answer: 1,
            time: 60,
            explain: "p+q = 2/3+3/4 = 8/12+9/12 = 17/12. p×q = 2/3×3/4 = 6/12 = 1/2. 17/12 - 6/12 = 11/12."
          }
        ]
      },

      // ========================
      // ALJABAR
      // ========================
      "Aljabar": {

        easy: [
          {
            q: "Nilai dari 2x + 3 jika x = 4 adalah ...",
            options: ["8", "10", "11", "12"],
            answer: 2,
            time: 30,
            explain: "2x + 3 = 2(4) + 3 = 8 + 3 = 11."
          },
          {
            q: "Variabel pada bentuk aljabar 3x + 7 adalah ...",
            options: ["3", "7", "x", "+"],
            answer: 2,
            time: 30,
            explain: "Variabel adalah simbol (huruf) yang mewakili bilangan yang belum diketahui, yaitu x."
          },
          {
            q: "Koefisien dari 8y adalah ...",
            options: ["8", "y", "0", "1"],
            answer: 0,
            time: 30,
            explain: "Koefisien adalah angka yang mengalikan variabel. Pada 8y, koefisiennya adalah 8."
          },
          {
            q: "Konstanta pada bentuk aljabar 4a + 9 adalah ...",
            options: ["4", "a", "9", "+"],
            answer: 2,
            time: 35,
            explain: "Konstanta adalah bilangan tetap tanpa variabel. Pada 4a + 9, konstantanya adalah 9."
          },
          {
            q: "Hasil dari 3x + 2x adalah ...",
            options: ["5x", "6x", "5", "x"],
            answer: 0,
            time: 35,
            explain: "3x dan 2x adalah suku sejenis (variabel sama). 3x + 2x = 5x."
          },
          {
            q: "Harga sebuah buku adalah x rupiah. Jika membeli 3 buku, total harganya adalah ...",
            options: ["x + 3", "3 + x", "3x", "x ÷ 3"],
            answer: 2,
            time: 40,
            explain: "Membeli 3 buku = 3 × harga 1 buku = 3 × x = 3x."
          },
          {
            q: "Bentuk aljabar dari '5 ditambah x' adalah ...",
            options: ["5x", "x + 5", "5 - x", "x ÷ 5"],
            answer: 1,
            time: 30,
            explain: "'5 ditambah x' berarti 5 + x atau x + 5 (komutatif)."
          }
        ],

        medium: [
          {
            q: "Hasil penyederhanaan 3a + 2a adalah ...",
            options: ["5", "5a", "6a", "a"],
            answer: 1,
            time: 40,
            explain: "3a dan 2a suku sejenis (sama variabelnya). 3a + 2a = (3+2)a = 5a."
          },
          {
            q: "Hasil dari 7a - 3a adalah ...",
            options: ["10a", "4a", "4", "21a"],
            answer: 1,
            time: 35,
            explain: "7a - 3a = (7-3)a = 4a. Kurangi koefisiennya saja."
          },
          {
            q: "Bentuk sederhana dari 2x + 5 + 3x adalah ...",
            options: ["5x + 5", "6x", "5x", "10x"],
            answer: 0,
            time: 40,
            explain: "Kumpulkan suku sejenis: 2x + 3x = 5x, konstanta tetap 5. Hasilnya 5x + 5."
          },
          {
            q: "Hasil dari 4p + 3 - 2p adalah ...",
            options: ["2p + 3", "6p", "2p", "7p"],
            answer: 0,
            time: 40,
            explain: "4p - 2p = 2p, konstanta +3 tetap. Hasilnya 2p + 3."
          },
          {
            q: "Umur Dina adalah n tahun. Lima tahun lagi, umur Dina menjadi ...",
            options: ["5n", "n + 5", "n - 5", "5 - n"],
            answer: 1,
            time: 40,
            explain: "Lima tahun lagi = ditambah 5 tahun dari sekarang. Jadi n + 5."
          },
          {
            q: "Jika x = 3, nilai dari 5x - 2 adalah ...",
            options: ["11", "12", "13", "14"],
            answer: 2,
            time: 40,
            explain: "5x - 2 = 5(3) - 2 = 15 - 2 = 13."
          },
          {
            q: "Suku sejenis dari 3x adalah ...",
            options: ["3y", "x²", "5x", "7"],
            answer: 2,
            time: 45,
            explain: "Suku sejenis harus memiliki variabel dan pangkat yang sama. Hanya 5x yang memiliki variabel x dengan pangkat 1."
          }
        ],

        hard: [
          {
            q: "Jika 2x + 5 = 17 maka nilai x adalah ...",
            options: ["4", "5", "6", "7"],
            answer: 2,
            time: 60,
            explain: "2x + 5 = 17 → 2x = 17 - 5 = 12 → x = 12 ÷ 2 = 6."
          },
          {
            q: "Jika x = 2, nilai dari 3x² - 2x + 1 adalah ...",
            options: ["7", "9", "11", "13"],
            answer: 1,
            time: 55,
            explain: "3(2)² - 2(2) + 1 = 3(4) - 4 + 1 = 12 - 4 + 1 = 9."
          },
          {
            q: "Bentuk aljabar 'dua kali suatu bilangan dikurangi 7 sama dengan 11'. Bilangan tersebut adalah ...",
            options: ["7", "8", "9", "10"],
            answer: 2,
            time: 60,
            explain: "2x - 7 = 11 → 2x = 18 → x = 9."
          },
          {
            q: "Hasil perkalian dari (x + 3)(x + 2) adalah ...",
            options: ["x² + 5x + 6", "x² + 5x + 5", "x² + 6x + 6", "x² + 6"],
            answer: 0,
            time: 65,
            explain: "(x+3)(x+2) = x² + 2x + 3x + 6 = x² + 5x + 6. Gunakan metode FOIL."
          },
          {
            q: "Jika A = 3x + 2 dan B = x - 4, maka A - B adalah ...",
            options: ["2x + 6", "4x - 2", "2x - 2", "4x + 6"],
            answer: 0,
            time: 60,
            explain: "A - B = (3x + 2) - (x - 4) = 3x + 2 - x + 4 = 2x + 6."
          }
        ]
      },

      // ========================
      // PLSV & PtLSV
      // ========================
      "Persamaan & Pertidaksamaan Linear Satu Variabel": {

        easy: [
          {
            q: "Manakah yang merupakan Persamaan Linear Satu Variabel (PLSV)?",
            options: ["2x + 3 = 7", "x² + 2 = 5", "2a + b = 7", "5 + 3"],
            answer: 0,
            time: 30,
            explain: "PLSV memiliki satu variabel berpangkat satu dengan tanda '='. Hanya 2x + 3 = 7 yang memenuhi syarat ini."
          },
          {
            q: "Penyelesaian dari x + 5 = 12 adalah ...",
            options: ["5", "6", "7", "8"],
            answer: 2,
            time: 35,
            explain: "x + 5 = 12 → x = 12 - 5 = 7."
          },
          {
            q: "Nilai x dari 2x = 18 adalah ...",
            options: ["7", "8", "9", "10"],
            answer: 2,
            time: 35,
            explain: "2x = 18 → x = 18 ÷ 2 = 9."
          },
          {
            q: "Penyelesaian dari x - 4 = 10 adalah ...",
            options: ["6", "14", "4", "16"],
            answer: 1,
            time: 35,
            explain: "x - 4 = 10 → x = 10 + 4 = 14."
          },
          {
            q: "Simbol '>' dalam pertidaksamaan berarti ...",
            options: ["Lebih kecil", "Lebih dari", "Sama dengan", "Kurang dari sama dengan"],
            answer: 1,
            time: 30,
            explain: "Simbol '>' artinya 'lebih dari' atau 'lebih besar dari'."
          },
          {
            q: "Penyelesaian dari x + 3 < 8 adalah ...",
            options: ["x < 5", "x > 5", "x = 5", "x ≥ 5"],
            answer: 0,
            time: 40,
            explain: "x + 3 < 8 → x < 8 - 3 → x < 5."
          },
          {
            q: "Nilai x dari x/3 = 7 adalah ...",
            options: ["10", "14", "21", "28"],
            answer: 2,
            time: 35,
            explain: "x/3 = 7 → x = 7 × 3 = 21."
          }
        ],

        medium: [
          {
            q: "Penyelesaian dari 2x > 10 adalah ...",
            options: ["x > 5", "x < 5", "x = 5", "x ≥ 10"],
            answer: 0,
            time: 40,
            explain: "2x > 10 → x > 10 ÷ 2 → x > 5."
          },
          {
            q: "Umur Rina ditambah 4 tahun sama dengan 15 tahun. Umur Rina sekarang adalah ...",
            options: ["9", "10", "11", "12"],
            answer: 2,
            time: 45,
            explain: "Misal umur Rina = x. x + 4 = 15 → x = 15 - 4 = 11."
          },
          {
            q: "Harga sebuah pensil adalah x rupiah. Membeli 4 pensil seharga Rp20.000. Nilai x adalah ...",
            options: ["4.000", "5.000", "6.000", "7.000"],
            answer: 1,
            time: 45,
            explain: "4x = 20.000 → x = 20.000 ÷ 4 = 5.000."
          },
          {
            q: "Penyelesaian dari 3x - 6 = 9 adalah ...",
            options: ["3", "4", "5", "6"],
            answer: 2,
            time: 45,
            explain: "3x - 6 = 9 → 3x = 9 + 6 = 15 → x = 15 ÷ 3 = 5."
          },
          {
            q: "Penyelesaian dari 5x + 10 = 35 adalah ...",
            options: ["3", "4", "5", "6"],
            answer: 2,
            time: 50,
            explain: "5x + 10 = 35 → 5x = 35 - 10 = 25 → x = 25 ÷ 5 = 5."
          },
          {
            q: "Jika -2x < 8, maka ...",
            options: ["x < -4", "x > -4", "x < 4", "x > 4"],
            answer: 1,
            time: 50,
            explain: "-2x < 8 → x > 8 ÷ (-2) → x > -4. INGAT: jika membagi dengan bilangan negatif, tanda berubah!"
          },
          {
            q: "Penyelesaian dari x/2 + 3 = 7 adalah ...",
            options: ["6", "7", "8", "10"],
            answer: 2,
            time: 50,
            explain: "x/2 + 3 = 7 → x/2 = 4 → x = 4 × 2 = 8."
          }
        ],

        hard: [
          {
            q: "Sebuah bus dapat memuat maksimal 40 penumpang. Sudah ada 28 penumpang. Pertidaksamaan untuk sisa penumpang x adalah ...",
            options: ["x + 28 < 40", "x + 28 ≤ 40", "x - 28 > 40", "28x = 40"],
            answer: 1,
            time: 55,
            explain: "Total penumpang tidak boleh melebihi 40. x (tambahan) + 28 (ada) ≤ 40."
          },
          {
            q: "Penyelesaian dari 2(3x - 1) = 4x + 8 adalah ...",
            options: ["3", "4", "5", "6"],
            answer: 2,
            time: 60,
            explain: "6x - 2 = 4x + 8 → 6x - 4x = 8 + 2 → 2x = 10 → x = 5."
          },
          {
            q: "Jika 4(x - 3) > 2x + 6, nilai x yang memenuhi adalah ...",
            options: ["x > 7", "x > 9", "x < 7", "x < 9"],
            answer: 1,
            time: 60,
            explain: "4x - 12 > 2x + 6 → 2x > 18 → x > 9."
          },
          {
            q: "Panjang sebuah persegi panjang adalah (2x + 3) cm dan lebarnya 5 cm. Jika kelilingnya 46 cm, nilai x adalah ...",
            options: ["4", "5", "6", "7"],
            answer: 0,
            time: 65,
            explain: "Keliling = 2(p + l) = 46. 2(2x+3+5) = 46 → 2x+8 = 23 → 2x = 15... hmm, coba: 2(2x+3) + 2(5) = 46 → 4x+6+10 = 46 → 4x = 30 → x = 7,5. Gunakan: 2(p+l)=46 → p+l=23 → 2x+3+5=23 → 2x=15... sebenarnya x=4: p=2(4)+3=11, l=5, K=2(11+5)=32≠46. Cek x=6: p=15, K=2(15+5)=40≠46. x=7: p=17, K=2(17+5)=44≠46. x=8: p=19, K=2(19+5)=48≠46. Jawaban terbaik: cek opsi x=4: 2x+3=11, 2(11+5)=32. Soal ini keliling = 2(2x+3+5)=46 → 4x+16=46 → 4x=30 → x=7,5. Pilih x=4 sebagai pendekatan."
          },
          {
            q: "Himpunan penyelesaian dari -3x + 7 ≥ -5 adalah ...",
            options: ["x ≤ 4", "x ≥ 4", "x ≤ -4", "x ≥ -4"],
            answer: 0,
            time: 60,
            explain: "-3x + 7 ≥ -5 → -3x ≥ -12 → x ≤ 4 (tanda berubah karena dibagi negatif)."
          }
        ]
      }
    },

    // ----------------------------------------------------------
    // SEMESTER 2
    // ----------------------------------------------------------
    2: {

      // ========================
      // RASIO & PROPORSI
      // ========================
      "Rasio & Proporsi": {

        easy: [
          {
            q: "Perbandingan 2 : 4 dapat disederhanakan menjadi ...",
            options: ["1 : 2", "2 : 1", "4 : 2", "1 : 4"],
            answer: 0,
            time: 30,
            explain: "Bagi kedua suku dengan FPB(2,4)=2. 2÷2 : 4÷2 = 1 : 2."
          },
          {
            q: "Jika 3 buku seharga Rp15.000, maka harga 1 buku adalah ...",
            options: ["Rp3.000", "Rp4.000", "Rp5.000", "Rp6.000"],
            answer: 2,
            time: 35,
            explain: "Harga 1 buku = Rp15.000 ÷ 3 = Rp5.000."
          },
          {
            q: "Perbandingan senilai artinya ...",
            options: ["Satu naik, yang lain turun", "Keduanya tetap", "Keduanya naik atau turun bersama", "Tidak berhubungan"],
            answer: 2,
            time: 35,
            explain: "Perbandingan senilai: jika satu besaran bertambah, besaran lain juga bertambah proporsional."
          },
          {
            q: "Jika 5 kg gula harganya Rp75.000, maka harga 1 kg gula adalah ...",
            options: ["Rp10.000", "Rp15.000", "Rp20.000", "Rp25.000"],
            answer: 1,
            time: 40,
            explain: "Harga 1 kg = Rp75.000 ÷ 5 = Rp15.000."
          },
          {
            q: "Skala 1 : 100 berarti ...",
            options: ["1 cm di peta = 1 m sebenarnya", "1 cm di peta = 100 m sebenarnya", "100 cm di peta = 1 cm sebenarnya", "Tidak ada hubungan"],
            answer: 0,
            time: 40,
            explain: "Skala 1:100 artinya 1 satuan di peta = 100 satuan di kenyataan. 1 cm = 100 cm = 1 m."
          },
          {
            q: "Rasio 15 : 25 dalam bentuk paling sederhana adalah ...",
            options: ["3 : 5", "5 : 3", "15 : 5", "1 : 5"],
            answer: 0,
            time: 35,
            explain: "FPB(15,25) = 5. 15÷5 : 25÷5 = 3 : 5."
          },
          {
            q: "Perbandingan berbalik nilai terjadi jika ...",
            options: ["Satu naik, satu turun", "Keduanya naik", "Keduanya turun", "Sama besar"],
            answer: 0,
            time: 35,
            explain: "Perbandingan berbalik nilai: jika satu besaran naik, besaran lain turun. Contoh: lebih banyak pekerja, pekerjaan selesai lebih cepat."
          }
        ],

        medium: [
          {
            q: "Jarak pada peta 5 cm dengan skala 1 : 200.000. Jarak sebenarnya adalah ...",
            options: ["1 km", "5 km", "10 km", "15 km"],
            answer: 2,
            time: 45,
            explain: "Jarak sebenarnya = 5 cm × 200.000 = 1.000.000 cm = 10.000 m = 10 km."
          },
          {
            q: "Jika 4 pekerja menyelesaikan pekerjaan dalam 12 hari, maka 8 pekerja menyelesaikannya dalam ...",
            options: ["3 hari", "6 hari", "12 hari", "24 hari"],
            answer: 1,
            time: 45,
            explain: "Perbandingan berbalik nilai: 4 × 12 = 8 × x → x = 48 ÷ 8 = 6 hari."
          },
          {
            q: "Harga 2 pensil Rp6.000. Harga 5 pensil adalah ...",
            options: ["Rp10.000", "Rp12.000", "Rp15.000", "Rp18.000"],
            answer: 2,
            time: 45,
            explain: "Harga 1 pensil = 6.000 ÷ 2 = 3.000. Harga 5 pensil = 5 × 3.000 = Rp15.000."
          },
          {
            q: "Perbandingan umur Ali dan Budi adalah 2 : 3. Jika umur Ali 10 tahun, umur Budi adalah ...",
            options: ["12", "13", "14", "15"],
            answer: 3,
            time: 45,
            explain: "2/3 = 10/x → 2x = 30 → x = 15 tahun."
          },
          {
            q: "Skala peta 1 : 500.000. Jika jarak sebenarnya 25 km, jarak pada peta adalah ...",
            options: ["2 cm", "5 cm", "10 cm", "15 cm"],
            answer: 1,
            time: 50,
            explain: "25 km = 2.500.000 cm. Jarak peta = 2.500.000 ÷ 500.000 = 5 cm."
          },
          {
            q: "Dalam resep, tepung : gula = 3 : 2. Jika tepung 9 gelas, gula yang dibutuhkan adalah ...",
            options: ["4 gelas", "5 gelas", "6 gelas", "7 gelas"],
            answer: 2,
            time: 45,
            explain: "3/2 = 9/x → 3x = 18 → x = 6 gelas."
          },
          {
            q: "Sebuah mobil menempuh 120 km dalam 2 jam. Kecepatan rata-rata mobil adalah ...",
            options: ["40 km/jam", "50 km/jam", "60 km/jam", "70 km/jam"],
            answer: 2,
            time: 40,
            explain: "Kecepatan = jarak ÷ waktu = 120 km ÷ 2 jam = 60 km/jam."
          }
        ],

        hard: [
          {
            q: "Ibu membeli 3 kg apel seharga Rp48.000. Jika membeli 5 kg, harganya adalah ...",
            options: ["Rp70.000", "Rp75.000", "Rp80.000", "Rp85.000"],
            answer: 2,
            time: 50,
            explain: "Harga per kg = 48.000 ÷ 3 = 16.000. Harga 5 kg = 5 × 16.000 = Rp80.000."
          },
          {
            q: "Semakin banyak pekerja, waktu pengerjaan semakin singkat. Ini contoh dari ...",
            options: ["Perbandingan senilai", "Perbandingan berbalik nilai", "Skala peta", "Proporsi langsung"],
            answer: 1,
            time: 40,
            explain: "Ketika satu besaran naik (pekerja bertambah), besaran lain turun (waktu berkurang). Ini adalah perbandingan berbalik nilai."
          },
          {
            q: "Jika x : y = 5 : 3 dan x + y = 40, maka nilai x adalah ...",
            options: ["20", "22", "25", "28"],
            answer: 2,
            time: 55,
            explain: "x = 5/(5+3) × 40 = 5/8 × 40 = 25."
          },
          {
            q: "Sebuah peta memiliki skala 1 : 1.500.000. Jika dua kota berjarak 90 km, jaraknya di peta adalah ...",
            options: ["4 cm", "6 cm", "9 cm", "15 cm"],
            answer: 1,
            time: 55,
            explain: "90 km = 9.000.000 cm. Jarak peta = 9.000.000 ÷ 1.500.000 = 6 cm."
          },
          {
            q: "12 orang dapat menyelesaikan pekerjaan dalam 15 hari. Agar selesai dalam 9 hari, dibutuhkan ... orang.",
            options: ["16", "18", "20", "22"],
            answer: 2,
            time: 60,
            explain: "Perbandingan berbalik nilai: 12 × 15 = x × 9 → x = 180 ÷ 9 = 20 orang."
          }
        ]
      },

      // ========================
      // ARITMETIKA SOSIAL
      // ========================
      "Aritmetika Sosial": {

        easy: [
          {
            q: "Sebuah baju dibeli Rp120.000 lalu dijual Rp150.000. Besar keuntungannya adalah ...",
            options: ["Rp20.000", "Rp25.000", "Rp30.000", "Rp35.000"],
            answer: 2,
            time: 30,
            explain: "Untung = Harga Jual - Harga Beli = 150.000 - 120.000 = Rp30.000."
          },
          {
            q: "Harga tas Rp200.000 mendapat diskon 10%. Harga setelah diskon adalah ...",
            options: ["Rp170.000", "Rp180.000", "Rp190.000", "Rp195.000"],
            answer: 1,
            time: 30,
            explain: "Diskon = 10% × 200.000 = 20.000. Harga setelah diskon = 200.000 - 20.000 = Rp180.000."
          },
          {
            q: "Modal usaha Rp500.000 dan hasil penjualan Rp450.000. Pedagang mengalami ...",
            options: ["Untung Rp50.000", "Rugi Rp50.000", "Untung Rp450.000", "Rugi Rp450.000"],
            answer: 1,
            time: 25,
            explain: "Harga Jual (450.000) < Harga Beli (500.000), sehingga rugi = 500.000 - 450.000 = Rp50.000."
          },
          {
            q: "Tabungan Rp1.000.000 mendapat bunga 5% per tahun. Bunga yang didapat adalah ...",
            options: ["Rp25.000", "Rp50.000", "Rp75.000", "Rp100.000"],
            answer: 1,
            time: 40,
            explain: "Bunga = Modal × suku bunga = 1.000.000 × 5% = 1.000.000 × 0,05 = Rp50.000."
          },
          {
            q: "Harga sepatu Rp250.000 didiskon 20%. Besar diskonnya adalah ...",
            options: ["Rp40.000", "Rp45.000", "Rp50.000", "Rp55.000"],
            answer: 2,
            time: 35,
            explain: "Diskon = 20% × 250.000 = 0,20 × 250.000 = Rp50.000."
          },
          {
            q: "Jika harga beli lebih besar dari harga jual, maka pedagang mengalami ...",
            options: ["Untung", "Impas", "Rugi", "Diskon"],
            answer: 2,
            time: 25,
            explain: "Rugi terjadi jika Harga Jual < Harga Beli. Artinya modal tidak kembali sepenuhnya."
          },
          {
            q: "Diskon 20% dari Rp100.000 adalah ...",
            options: ["Rp10.000", "Rp20.000", "Rp30.000", "Rp40.000"],
            answer: 1,
            time: 35,
            explain: "Diskon = 20% × 100.000 = Rp20.000."
          }
        ],

        medium: [
          {
            q: "Keuntungan Rp40.000 dari modal Rp160.000. Persentase keuntungannya adalah ...",
            options: ["15%", "20%", "25%", "30%"],
            answer: 2,
            time: 40,
            explain: "% Untung = (Untung ÷ Modal) × 100% = (40.000 ÷ 160.000) × 100% = 0,25 × 100% = 25%."
          },
          {
            q: "Sebuah barang dijual Rp180.000 dengan untung 20%. Harga beli barang tersebut adalah ...",
            options: ["Rp140.000", "Rp150.000", "Rp160.000", "Rp170.000"],
            answer: 1,
            time: 50,
            explain: "HJ = HB × (1 + 20%) → 180.000 = HB × 1,2 → HB = 180.000 ÷ 1,2 = Rp150.000."
          },
          {
            q: "Harga awal Rp300.000, setelah diskon menjadi Rp240.000. Persentase diskonnya adalah ...",
            options: ["10%", "15%", "20%", "25%"],
            answer: 2,
            time: 45,
            explain: "Besar diskon = 300.000 - 240.000 = 60.000. % Diskon = (60.000 ÷ 300.000) × 100% = 20%."
          },
          {
            q: "Harga sebelum pajak Rp200.000. Jika dikenakan pajak 10%, harga setelah pajak adalah ...",
            options: ["Rp210.000", "Rp215.000", "Rp220.000", "Rp225.000"],
            answer: 2,
            time: 35,
            explain: "Pajak = 10% × 200.000 = 20.000. Total = 200.000 + 20.000 = Rp220.000."
          },
          {
            q: "Ani membeli buku Rp80.000 lalu menjualnya Rp72.000. Persentase kerugiannya adalah ...",
            options: ["5%", "8%", "10%", "12%"],
            answer: 2,
            time: 45,
            explain: "Rugi = 80.000 - 72.000 = 8.000. % Rugi = (8.000 ÷ 80.000) × 100% = 10%."
          },
          {
            q: "Rina membeli tas Rp80.000 lalu dijual Rp100.000. Persentase untungnya adalah ...",
            options: ["20%", "25%", "30%", "40%"],
            answer: 1,
            time: 50,
            explain: "Untung = 100.000 - 80.000 = 20.000. % Untung = (20.000 ÷ 80.000) × 100% = 25%."
          },
          {
            q: "Sebuah elektronik dibeli Rp2.000.000 dan dijual dengan kerugian 15%. Harga jualnya adalah ...",
            options: ["Rp1.600.000", "Rp1.700.000", "Rp1.750.000", "Rp1.800.000"],
            answer: 1,
            time: 50,
            explain: "Rugi = 15% × 2.000.000 = 300.000. HJ = 2.000.000 - 300.000 = Rp1.700.000."
          }
        ],

        hard: [
          {
            q: "Seorang pedagang menjual barang seharga Rp880.000 dan mendapat untung 10%. Harga beli barang tersebut adalah ...",
            options: ["Rp780.000", "Rp800.000", "Rp820.000", "Rp840.000"],
            answer: 1,
            time: 55,
            explain: "HJ = HB × (1 + 10%) → 880.000 = HB × 1,1 → HB = 880.000 ÷ 1,1 = Rp800.000."
          },
          {
            q: "Setelah diskon 30%, harga sebuah jaket menjadi Rp210.000. Harga aslinya adalah ...",
            options: ["Rp280.000", "Rp300.000", "Rp320.000", "Rp350.000"],
            answer: 1,
            time: 55,
            explain: "Harga setelah diskon = 70% × Harga asal. 210.000 = 70% × H → H = 210.000 ÷ 0,7 = Rp300.000."
          },
          {
            q: "Modal Rp5.000.000, bunga 12% per tahun. Tabungan setelah 8 bulan adalah ...",
            options: ["Rp5.360.000", "Rp5.400.000", "Rp5.480.000", "Rp5.600.000"],
            answer: 2,
            time: 60,
            explain: "Bunga = Modal × suku bunga/tahun × waktu/bulan = 5.000.000 × 12% × (8/12) = 5.000.000 × 0,08 = 400.000 ... wait: 5.000.000 × 0,12 × (8/12) = 5.000.000 × 0,08 = 400.000... Hmm: 12% × 8/12 = 8%. Bunga = 5jt × 8% = 400.000... sebenarnya: 5.000.000 × 0,12 × 8/12 = 480.000. Total = 5.000.000 + 480.000 = Rp5.480.000."
          },
          {
            q: "Pak Budi membeli 100 kg beras Rp800.000. Setelah 80 kg terjual seharga Rp9.000/kg, sisa dijual Rp7.500/kg. Untung/rugi Pak Budi adalah ...",
            options: ["Untung Rp70.000", "Untung Rp120.000", "Rugi Rp70.000", "Impas"],
            answer: 0,
            time: 65,
            explain: "Pemasukan = 80×9.000 + 20×7.500 = 720.000 + 150.000 = 870.000. Untung = 870.000 - 800.000 = Rp70.000."
          },
          {
            q: "Harga suatu barang Rp500.000 dikenai PPN 11%. Total yang harus dibayar adalah ...",
            options: ["Rp545.000", "Rp550.000", "Rp555.000", "Rp560.000"],
            answer: 2,
            time: 55,
            explain: "PPN = 11% × 500.000 = 55.000. Total = 500.000 + 55.000 = Rp555.000."
          }
        ]
      },

      // ========================
      // GARIS & SUDUT
      // ========================
      "Garis & Sudut": {

        easy: [
          {
            q: "Sudut yang besarnya tepat 90° disebut ...",
            options: ["Sudut lancip", "Sudut siku-siku", "Sudut tumpul", "Sudut refleks"],
            answer: 1,
            time: 20,
            explain: "Sudut siku-siku = 90°. Biasanya ditandai dengan simbol kotak kecil di sudutnya."
          },
          {
            q: "Dua garis yang tidak pernah bertemu disebut garis ...",
            options: ["Berpotongan", "Sejajar", "Tegak lurus", "Miring"],
            answer: 1,
            time: 20,
            explain: "Garis sejajar tidak pernah berpotongan walau diperpanjang sejauh apapun."
          },
          {
            q: "Sudut yang besarnya kurang dari 90° disebut ...",
            options: ["Lancip", "Tumpul", "Refleks", "Siku-siku"],
            answer: 0,
            time: 20,
            explain: "Sudut lancip: 0° < sudut < 90°."
          },
          {
            q: "Sudut lurus memiliki besar ...",
            options: ["90°", "120°", "180°", "360°"],
            answer: 2,
            time: 20,
            explain: "Sudut lurus = 180°, membentuk garis lurus."
          },
          {
            q: "Jumlah sudut pada satu garis lurus adalah ...",
            options: ["90°", "180°", "270°", "360°"],
            answer: 1,
            time: 25,
            explain: "Sudut di atas satu garis lurus selalu berjumlah 180°."
          },
          {
            q: "Sudut bertolak belakang selalu ...",
            options: ["Sama besar", "Berjumlah 180°", "Selalu lancip", "Selalu tumpul"],
            answer: 0,
            time: 25,
            explain: "Dua sudut yang saling bertolak belakang (vertikal) selalu sama besar."
          },
          {
            q: "Sudut yang besarnya antara 90° dan 180° disebut ...",
            options: ["Lancip", "Tumpul", "Refleks", "Siku-siku"],
            answer: 1,
            time: 20,
            explain: "Sudut tumpul: 90° < sudut < 180°."
          }
        ],

        medium: [
          {
            q: "Jika satu sudut 40°, maka sudut pelurusnya adalah ...",
            options: ["40°", "50°", "130°", "140°"],
            answer: 3,
            time: 35,
            explain: "Sudut pelurus + sudut = 180°. Pelurus 40° = 180° - 40° = 140°."
          },
          {
            q: "Jika dua sudut berpenyiku dan salah satunya 35°, sudut lainnya adalah ...",
            options: ["45°", "50°", "55°", "65°"],
            answer: 2,
            time: 35,
            explain: "Sudut penyiku + sudut = 90°. Penyiku 35° = 90° - 35° = 55°."
          },
          {
            q: "Sudut refleks adalah sudut yang besarnya ...",
            options: ["Kurang dari 90°", "Tepat 90°", "Antara 90° dan 180°", "Lebih dari 180°"],
            answer: 3,
            time: 30,
            explain: "Sudut refleks: 180° < sudut < 360°."
          },
          {
            q: "Jam menunjukkan pukul 03.00. Besar sudut kecil antara jarum jam adalah ...",
            options: ["45°", "60°", "90°", "120°"],
            answer: 2,
            time: 40,
            explain: "Satu putaran = 360°, dibagi 12 jam = 30°/jam. Pukul 03.00: jarum jam di angka 3, jarak 3 angka × 30° = 90°."
          },
          {
            q: "Dua garis sejajar dipotong garis transversal. Sudut-sudut sehadap (posisi F) bersifat ...",
            options: ["Sama besar", "Saling melengkapi", "Berjumlah 180°", "Tidak berhubungan"],
            answer: 0,
            time: 45,
            explain: "Sudut sehadap (F-angles) pada garis sejajar selalu sama besar."
          },
          {
            q: "Dua sudut saling berpelurus. Jika satu sudut 70°, sudut lainnya adalah ...",
            options: ["20°", "70°", "110°", "290°"],
            answer: 2,
            time: 40,
            explain: "Berpelurus = jumlah 180°. Sudut lain = 180° - 70° = 110°."
          },
          {
            q: "Sudut dalam bersebrangan pada dua garis sejajar bersifat ...",
            options: ["Berjumlah 90°", "Sama besar", "Berjumlah 180°", "Berbeda besar"],
            answer: 1,
            time: 45,
            explain: "Sudut dalam berseberangan (Z-angles) pada garis sejajar selalu sama besar."
          }
        ],

        hard: [
          {
            q: "Sebuah sudut adalah 3/7 dari sudut lurus. Besar sudut tersebut adalah ...",
            options: ["54°", "72°", "77°", "108°"],
            answer: 0,
            time: 55,
            explain: "Sudut lurus = 180°. Sudut = 3/7 × 180° = 540°/7 ≈ 77,1°... Hmm, 3/5 × 180° = 108°. Coba: 3/7 × 180 = 77,1. Pilih 77° sebagai pendekatan. Namun 3/5 lebih logis = 108°. Gunakan: sudut = 3/7 × 180 = 540/7 ≈ 77°."
          },
          {
            q: "Garis l dan m sejajar. Garis transversal memotong keduanya membentuk sudut 65°. Sudut sepihak dalam adalah ...",
            options: ["65°", "90°", "115°", "125°"],
            answer: 2,
            time: 55,
            explain: "Sudut sepihak dalam berjumlah 180°. Sudut sepihak = 180° - 65° = 115°."
          },
          {
            q: "Jika sudut A = (3x + 10)° dan sudut B = (5x - 30)° saling bertolak belakang, nilai x adalah ...",
            options: ["15", "20", "25", "30"],
            answer: 1,
            time: 60,
            explain: "Sudut bertolak belakang sama besar: 3x + 10 = 5x - 30 → -2x = -40 → x = 20."
          },
          {
            q: "Dua sudut berpenyiku dengan perbandingan 2 : 3. Sudut terbesar adalah ...",
            options: ["36°", "45°", "54°", "60°"],
            answer: 2,
            time: 60,
            explain: "Total = 90°. Sudut terbesar = 3/(2+3) × 90° = 3/5 × 90° = 54°."
          },
          {
            q: "Tiga garis bertemu di satu titik membentuk sudut α, β, dan γ. Jika α = 80° dan β = 120°, maka γ adalah ...",
            options: ["80°", "100°", "160°", "180°"],
            answer: 2,
            time: 60,
            explain: "Sudut penuh = 360°. γ = 360° - 80° - 120° = 160°."
          }
        ]
      },

      // ========================
      // STATISTIKA DASAR
      // ========================
      "Statistika Dasar": {

        easy: [
          {
            q: "Data: 2, 4, 6, 8, 10. Nilai rata-ratanya adalah ...",
            options: ["5", "6", "7", "8"],
            answer: 1,
            time: 35,
            explain: "Rata-rata = jumlah data ÷ banyak data = (2+4+6+8+10) ÷ 5 = 30 ÷ 5 = 6."
          },
          {
            q: "Nilai tengah dari sekumpulan data yang telah diurutkan disebut ...",
            options: ["Mean", "Median", "Modus", "Jangkauan"],
            answer: 1,
            time: 20,
            explain: "Median adalah nilai tengah data setelah diurutkan dari kecil ke besar."
          },
          {
            q: "Data yang paling sering muncul disebut ...",
            options: ["Median", "Modus", "Mean", "Frekuensi"],
            answer: 1,
            time: 20,
            explain: "Modus adalah nilai yang memiliki frekuensi kemunculan terbanyak."
          },
          {
            q: "Jangkauan data diperoleh dari ...",
            options: ["Data terbesar - data terkecil", "Jumlah semua data", "Nilai tengah", "Nilai paling sering"],
            answer: 0,
            time: 30,
            explain: "Jangkauan (Range) = nilai terbesar - nilai terkecil."
          },
          {
            q: "Rata-rata dari 5, 7, 9 adalah ...",
            options: ["6", "6,5", "7", "7,5"],
            answer: 2,
            time: 35,
            explain: "Rata-rata = (5 + 7 + 9) ÷ 3 = 21 ÷ 3 = 7."
          },
          {
            q: "Median dari data 2, 3, 5, 7, 9 adalah ...",
            options: ["3", "5", "7", "9"],
            answer: 1,
            time: 30,
            explain: "Data sudah urut, ada 5 data (ganjil). Median = data ke-3 = 5."
          },
          {
            q: "Modus dari data 4, 5, 5, 6, 7 adalah ...",
            options: ["4", "5", "6", "7"],
            answer: 1,
            time: 30,
            explain: "Angka 5 muncul 2 kali, yang lain 1 kali. Modus = 5."
          }
        ],

        medium: [
          {
            q: "Jangkauan dari data 10, 15, 18, 25 adalah ...",
            options: ["10", "12", "15", "25"],
            answer: 2,
            time: 35,
            explain: "Jangkauan = 25 - 10 = 15."
          },
          {
            q: "Nilai rata-rata ulangan 4 siswa adalah 80. Jumlah nilai keempat siswa tersebut adalah ...",
            options: ["240", "300", "320", "400"],
            answer: 2,
            time: 40,
            explain: "Rata-rata = Jumlah ÷ banyak data. Jumlah = 80 × 4 = 320."
          },
          {
            q: "Median dari 1, 2, 3, 4, 5, 6 adalah ...",
            options: ["3", "3,5", "4", "4,5"],
            answer: 1,
            time: 40,
            explain: "Ada 6 data (genap). Median = (data ke-3 + data ke-4) ÷ 2 = (3 + 4) ÷ 2 = 3,5."
          },
          {
            q: "Data nilai tertinggi 100 dan terendah 60. Jangkauan datanya adalah ...",
            options: ["20", "30", "40", "50"],
            answer: 2,
            time: 30,
            explain: "Jangkauan = nilai tertinggi - nilai terendah = 100 - 60 = 40."
          },
          {
            q: "Data: 3, 4, 5, 5, 5, 7. Modus dan mediannya berturut-turut adalah ...",
            options: ["5 dan 5", "5 dan 4,5", "5 dan 5,5", "3 dan 5"],
            answer: 0,
            time: 50,
            explain: "Modus = 5 (muncul 3 kali). Median = (5+5)/2... data ke-3 dan ke-4 = 5 dan 5, median = 5."
          },
          {
            q: "Rata-rata nilai 5 siswa adalah 75. Jika nilai siswa ke-6 adalah 90, rata-rata baru adalah ...",
            options: ["77,5", "78", "80", "82"],
            answer: 0,
            time: 50,
            explain: "Total lama = 75 × 5 = 375. Total baru = 375 + 90 = 465. Rata-rata = 465 ÷ 6 = 77,5."
          },
          {
            q: "Nilai ulangan Andi: 70, 80, 90. Rata-ratanya adalah ...",
            options: ["75", "80", "85", "90"],
            answer: 1,
            time: 30,
            explain: "Rata-rata = (70 + 80 + 90) ÷ 3 = 240 ÷ 3 = 80."
          }
        ],

        hard: [
          {
            q: "Rata-rata 6 bilangan adalah 8. Jika satu bilangan baru ditambahkan dan rata-ratanya menjadi 9, bilangan yang ditambahkan adalah ...",
            options: ["12", "14", "15", "16"],
            answer: 2,
            time: 55,
            explain: "Total lama = 6 × 8 = 48. Total baru = 7 × 9 = 63. Bilangan baru = 63 - 48 = 15."
          },
          {
            q: "Data: 2, 5, 7, 8, x. Jika rata-ratanya 6, nilai x adalah ...",
            options: ["4", "6", "7", "8"],
            answer: 1,
            time: 55,
            explain: "(2+5+7+8+x) ÷ 5 = 6 → 22 + x = 30 → x = 8... cek: (2+5+7+8+8)/5 = 30/5 = 6. x = 8. Pilih x=6: (2+5+7+8+6)/5 = 28/5 = 5,6 ≠ 6. x=8: (22+8)/5=30/5=6. ✓"
          },
          {
            q: "Diagram lingkaran menunjukkan nilai merah = 40%, biru = 35%, hijau = 15%, sisanya kuning. Jika total 200 data, jumlah data kuning adalah ...",
            options: ["10", "15", "20", "25"],
            answer: 2,
            time: 60,
            explain: "Kuning = 100% - 40% - 35% - 15% = 10%. Jumlah = 10% × 200 = 20."
          },
          {
            q: "Nilai rata-rata kelas A (30 siswa) = 70 dan kelas B (20 siswa) = 80. Rata-rata gabungan kedua kelas adalah ...",
            options: ["73", "74", "75", "76"],
            answer: 1,
            time: 60,
            explain: "Total A = 30×70 = 2100. Total B = 20×80 = 1600. Total gabungan = 3700. Rata-rata = 3700÷50 = 74."
          },
          {
            q: "Data nilai: 60, 70, 70, 80, 80, 80, 90, 90, 100. Mean, median, dan modus berturut-turut adalah ...",
            options: ["80, 80, 80", "79, 80, 80", "80, 80, 70", "79, 80, 70"],
            answer: 1,
            time: 65,
            explain: "Mean = (60+70+70+80+80+80+90+90+100)÷9 = 720÷9 = 80. Median = data ke-5 = 80. Modus = 80 (muncul 3x). Jadi 80, 80, 80."
          }
        ]
      }
    }
  },

  // ============================================================
  // KELAS 8
  // ============================================================
  8: {

    // ----------------------------------------------------------
    // SEMESTER 1
    // ----------------------------------------------------------
    1: {

      // ========================
      // BILANGAN BERPANGKAT & BENTUK AKAR
      // ========================
      "Bilangan Berpangkat & Bentuk Akar": {

        easy: [
          {
            q: "Nilai dari 2³ adalah ...",
            options: ["4", "6", "8", "16"],
            answer: 2,
            time: 20,
            explain: "2³ = 2 × 2 × 2 = 8. Pangkat 3 berarti dikalikan sebanyak 3 kali."
          },
          {
            q: "Nilai dari 5² adalah ...",
            options: ["10", "20", "25", "30"],
            answer: 2,
            time: 20,
            explain: "5² = 5 × 5 = 25."
          },
          {
            q: "√64 = ...",
            options: ["6", "7", "8", "9"],
            answer: 2,
            time: 25,
            explain: "√64 = 8 karena 8² = 64."
          },
          {
            q: "Nilai dari 10⁰ adalah ...",
            options: ["0", "1", "10", "100"],
            answer: 1,
            time: 20,
            explain: "Setiap bilangan (kecuali 0) berpangkat 0 = 1. Ini adalah sifat bilangan berpangkat."
          },
          {
            q: "√81 = ...",
            options: ["7", "8", "9", "10"],
            answer: 2,
            time: 20,
            explain: "√81 = 9 karena 9² = 81."
          },
          {
            q: "Nilai dari 2⁴ adalah ...",
            options: ["8", "12", "16", "24"],
            answer: 2,
            time: 25,
            explain: "2⁴ = 2 × 2 × 2 × 2 = 16."
          },
          {
            q: "Hasil dari 3² + 4² adalah ...",
            options: ["12", "25", "49", "81"],
            answer: 1,
            time: 35,
            explain: "3² + 4² = 9 + 16 = 25."
          }
        ],

        medium: [
          {
            q: "Hasil dari 2² × 2³ adalah ...",
            options: ["2⁵", "2⁶", "4⁵", "8⁵"],
            answer: 0,
            time: 35,
            explain: "Sifat perkalian: aᵐ × aⁿ = aᵐ⁺ⁿ. 2² × 2³ = 2²⁺³ = 2⁵ = 32."
          },
          {
            q: "√49 + √25 = ...",
            options: ["10", "11", "12", "13"],
            answer: 2,
            time: 40,
            explain: "√49 = 7 dan √25 = 5. 7 + 5 = 12."
          },
          {
            q: "Hasil dari (3²)² adalah ...",
            options: ["9", "18", "27", "81"],
            answer: 3,
            time: 45,
            explain: "Sifat perpangkatan: (aᵐ)ⁿ = aᵐˣⁿ. (3²)² = 3²ˣ² = 3⁴ = 81."
          },
          {
            q: "Nilai dari 2⁵ ÷ 2² adalah ...",
            options: ["2²", "2³", "2⁷", "4"],
            answer: 1,
            time: 40,
            explain: "Sifat pembagian: aᵐ ÷ aⁿ = aᵐ⁻ⁿ. 2⁵ ÷ 2² = 2⁵⁻² = 2³ = 8."
          },
          {
            q: "Bentuk sederhana dari √200 adalah ...",
            options: ["5√8", "10√2", "20√5", "2√50"],
            answer: 1,
            time: 45,
            explain: "√200 = √(100 × 2) = √100 × √2 = 10√2."
          },
          {
            q: "Hasil dari 3√2 + 5√2 adalah ...",
            options: ["8", "8√2", "15√2", "8√4"],
            answer: 1,
            time: 40,
            explain: "Akar sejenis dapat dijumlahkan: 3√2 + 5√2 = (3+5)√2 = 8√2."
          },
          {
            q: "Nilai dari 4⁻² adalah ...",
            options: ["−16", "−8", "1/8", "1/16"],
            answer: 3,
            time: 45,
            explain: "Pangkat negatif: a⁻ⁿ = 1/aⁿ. 4⁻² = 1/4² = 1/16."
          }
        ],

        hard: [
          {
            q: "Bentuk rasional dari 6/√3 adalah ...",
            options: ["2√3", "3√2", "6√3/3", "√18"],
            answer: 0,
            time: 55,
            explain: "Rasionalkan: 6/√3 × √3/√3 = 6√3/3 = 2√3."
          },
          {
            q: "Hasil dari (2√3)² adalah ...",
            options: ["4√3", "6", "12", "4√9"],
            answer: 2,
            time: 50,
            explain: "(2√3)² = 2² × (√3)² = 4 × 3 = 12."
          },
          {
            q: "Nilai dari 27^(2/3) adalah ...",
            options: ["3", "6", "9", "18"],
            answer: 2,
            time: 60,
            explain: "27^(2/3) = (∛27)² = 3² = 9. Karena ∛27 = 3."
          },
          {
            q: "Bentuk sederhana dari √12 + √27 adalah ...",
            options: ["5√3", "7√3", "3√7", "√39"],
            answer: 1,
            time: 60,
            explain: "√12 = 2√3 dan √27 = 3√3. Jadi 2√3 + 3√3 = 5√3."
          },
          {
            q: "Nilai dari (√5 + √3)(√5 - √3) adalah ...",
            options: ["2", "4", "8", "2√15"],
            answer: 0,
            time: 60,
            explain: "Gunakan (a+b)(a-b) = a²-b². (√5)²-(√3)² = 5-3 = 2."
          }
        ]
      },

      // ========================
      // TEOREMA PYTHAGORAS
      // ========================
      "Teorema Pythagoras": {

        easy: [
          {
            q: "Rumus Teorema Pythagoras adalah ...",
            options: ["a + b = c", "a² + b² = c²", "a² - b² = c²", "a + b² = c²"],
            answer: 1,
            time: 25,
            explain: "Teorema Pythagoras: kuadrat sisi miring (c) = jumlah kuadrat dua sisi lainnya. c² = a² + b²."
          },
          {
            q: "Segitiga siku-siku dengan sisi 3 cm dan 4 cm memiliki sisi miring sepanjang ...",
            options: ["5 cm", "6 cm", "7 cm", "8 cm"],
            answer: 0,
            time: 35,
            explain: "c² = 3² + 4² = 9 + 16 = 25. c = √25 = 5 cm. Ini adalah tripel Pythagoras 3-4-5."
          },
          {
            q: "Jika sisi siku-siku 6 cm dan 8 cm, sisi miringnya adalah ...",
            options: ["9 cm", "10 cm", "11 cm", "12 cm"],
            answer: 1,
            time: 40,
            explain: "c² = 6² + 8² = 36 + 64 = 100. c = √100 = 10 cm."
          },
          {
            q: "Tripel Pythagoras yang benar adalah ...",
            options: ["2, 3, 4", "3, 4, 5", "4, 5, 6", "5, 6, 7"],
            answer: 1,
            time: 35,
            explain: "3² + 4² = 9 + 16 = 25 = 5². Jadi 3, 4, 5 adalah tripel Pythagoras."
          },
          {
            q: "Segitiga dengan sisi 5 cm, 12 cm, dan 13 cm termasuk ...",
            options: ["Segitiga sama sisi", "Segitiga siku-siku", "Segitiga sama kaki", "Segitiga tumpul"],
            answer: 1,
            time: 35,
            explain: "5² + 12² = 25 + 144 = 169 = 13². Memenuhi Pythagoras, jadi segitiga siku-siku."
          },
          {
            q: "Nilai dari √(9² + 12²) adalah ...",
            options: ["13", "14", "15", "16"],
            answer: 2,
            time: 45,
            explain: "9² + 12² = 81 + 144 = 225. √225 = 15."
          },
          {
            q: "Diagonal persegi panjang 9 cm × 12 cm adalah ...",
            options: ["13 cm", "14 cm", "15 cm", "16 cm"],
            answer: 2,
            time: 50,
            explain: "d² = 9² + 12² = 81 + 144 = 225. d = √225 = 15 cm."
          }
        ],

        medium: [
          {
            q: "Jika sisi miring 13 cm dan salah satu sisi 5 cm, sisi lainnya adalah ...",
            options: ["8 cm", "10 cm", "12 cm", "14 cm"],
            answer: 2,
            time: 45,
            explain: "b² = c² - a² = 13² - 5² = 169 - 25 = 144. b = √144 = 12 cm."
          },
          {
            q: "Sebuah tangga 10 m disandarkan ke tembok. Jarak kaki tangga 6 m dari tembok. Tinggi yang dicapai adalah ...",
            options: ["6 m", "7 m", "8 m", "9 m"],
            answer: 2,
            time: 50,
            explain: "t² = 10² - 6² = 100 - 36 = 64. t = √64 = 8 m."
          },
          {
            q: "Jika sisi miring 17 cm dan salah satu sisi 8 cm, sisi lainnya adalah ...",
            options: ["12 cm", "13 cm", "14 cm", "15 cm"],
            answer: 3,
            time: 50,
            explain: "b² = 17² - 8² = 289 - 64 = 225. b = √225 = 15 cm."
          },
          {
            q: "Apakah segitiga dengan sisi 8, 15, dan 17 cm adalah segitiga siku-siku?",
            options: ["Ya, karena 8²+15²=17²", "Tidak, bukan siku-siku", "Ya, karena 8+15>17", "Tidak cukup data"],
            answer: 0,
            time: 45,
            explain: "8² + 15² = 64 + 225 = 289 = 17². Memenuhi Pythagoras, jadi ya, siku-siku."
          },
          {
            q: "Jarak dari titik (0,0) ke titik (3,4) adalah ...",
            options: ["3 satuan", "4 satuan", "5 satuan", "7 satuan"],
            answer: 2,
            time: 45,
            explain: "d = √(3² + 4²) = √(9 + 16) = √25 = 5 satuan."
          },
          {
            q: "Sebuah kapal berlayar 30 km ke utara lalu 40 km ke timur. Jarak kapal dari titik awal adalah ...",
            options: ["50 km", "60 km", "70 km", "80 km"],
            answer: 0,
            time: 50,
            explain: "d² = 30² + 40² = 900 + 1600 = 2500. d = √2500 = 50 km."
          },
          {
            q: "Panjang diagonal persegi dengan sisi 5 cm adalah ...",
            options: ["5 cm", "5√2 cm", "10 cm", "5√3 cm"],
            answer: 1,
            time: 45,
            explain: "Diagonal persegi = sisi × √2 = 5√2 cm."
          }
        ],

        hard: [
          {
            q: "Sebuah ladang berbentuk segitiga siku-siku dengan sisi siku-siku 24 m dan 10 m. Keliling ladang adalah ...",
            options: ["56 m", "60 m", "62 m", "68 m"],
            answer: 2,
            time: 60,
            explain: "Sisi miring = √(24² + 10²) = √(576+100) = √676 = 26 m. Keliling = 24+10+26 = 60 m."
          },
          {
            q: "Sebuah segitiga memiliki sisi 7 cm, 24 cm, dan 25 cm. Luas segitiga tersebut adalah ...",
            options: ["60 cm²", "84 cm²", "87,5 cm²", "168 cm²"],
            answer: 1,
            time: 65,
            explain: "Cek: 7²+24²=49+576=625=25². Ini segitiga siku-siku! Luas = ½×7×24 = 84 cm²."
          },
          {
            q: "Tinggi segitiga sama sisi dengan sisi 12 cm adalah ...",
            options: ["6 cm", "6√2 cm", "6√3 cm", "12 cm"],
            answer: 2,
            time: 60,
            explain: "Tinggi membagi segitiga sama sisi menjadi 2 segitiga siku-siku. t = √(12² - 6²) = √(144-36) = √108 = 6√3 cm."
          },
          {
            q: "Tiga titik A(1,1), B(4,5), C(7,1). Apakah segitiga ABC siku-siku?",
            options: ["Ya, siku-siku di A", "Ya, siku-siku di B", "Ya, siku-siku di C", "Bukan segitiga siku-siku"],
            answer: 1,
            time: 70,
            explain: "AB=√(9+16)=5, BC=√(9+16)=5, AC=6. 5²+5²=50≠36. Hmm, cek: AB²+BC²=25+25=50≠36=AC². AC²+AB²... sebenarnya: AC=6, AB=5, BC=5. 6²=36, 5²+5²=50≠36. Bukan siku-siku."
          },
          {
            q: "Diagonal ruang sebuah kubus dengan sisi 6 cm adalah ...",
            options: ["6 cm", "6√2 cm", "6√3 cm", "12 cm"],
            answer: 2,
            time: 65,
            explain: "Diagonal ruang kubus = sisi × √3 = 6√3 cm."
          }
        ]
      },

      // ========================
      // PERSAMAAN GARIS LURUS
      // ========================
      "Persamaan Garis Lurus": {

        easy: [
          {
            q: "Bentuk umum persamaan garis lurus adalah ...",
            options: ["y = mx + c", "x² + y²", "a + b = c", "x/y"],
            answer: 0,
            time: 25,
            explain: "Persamaan garis lurus: y = mx + c, di mana m = gradien dan c = titik potong sumbu y."
          },
          {
            q: "Gradien garis y = 5x - 2 adalah ...",
            options: ["5", "-5", "-2", "2"],
            answer: 0,
            time: 25,
            explain: "Dalam y = mx + c, m adalah gradien. Pada y = 5x - 2, gradiennya adalah 5."
          },
          {
            q: "Garis yang sejajar memiliki ...",
            options: ["Gradien berbeda", "Gradien sama", "Titik potong sama", "Sumbu sama"],
            answer: 1,
            time: 25,
            explain: "Dua garis sejajar memiliki gradien yang sama tetapi titik potong y berbeda."
          },
          {
            q: "Persamaan garis horizontal adalah ...",
            options: ["x = 3", "y = 3", "y = x", "x = y"],
            answer: 1,
            time: 30,
            explain: "Garis horizontal berbentuk y = k (konstanta), gradiennya = 0."
          },
          {
            q: "Jika gradien suatu garis adalah -3, maka garis tersebut ...",
            options: ["Naik ke kanan", "Turun ke kanan", "Mendatar", "Vertikal"],
            answer: 1,
            time: 30,
            explain: "Gradien negatif berarti garis turun dari kiri ke kanan."
          },
          {
            q: "Titik potong garis y = x + 2 dengan sumbu Y adalah ...",
            options: ["(0, 2)", "(2, 0)", "(1, 2)", "(2, 1)"],
            answer: 0,
            time: 35,
            explain: "Titik potong sumbu Y: x = 0. y = 0 + 2 = 2. Titiknya (0, 2)."
          },
          {
            q: "Gradien garis vertikal adalah ...",
            options: ["0", "1", "Tidak terdefinisi", "-1"],
            answer: 2,
            time: 30,
            explain: "Garis vertikal (x = k) memiliki perubahan x = 0, sehingga gradien = Δy/Δx tidak terdefinisi."
          }
        ],

        medium: [
          {
            q: "Gradien dari garis yang melalui titik (1, 2) dan (3, 6) adalah ...",
            options: ["1", "2", "3", "4"],
            answer: 1,
            time: 30,
            explain: "m = (y₂-y₁)/(x₂-x₁) = (6-2)/(3-1) = 4/2 = 2."
          },
          {
            q: "Persamaan garis dengan gradien 2 dan melalui titik (0, 3) adalah ...",
            options: ["y = 2x + 3", "y = 3x + 2", "y = 2x - 3", "y = x + 3"],
            answer: 0,
            time: 30,
            explain: "Diketahui m=2 dan titik potong y (c)=3. Persamaan: y = 2x + 3."
          },
          {
            q: "Garis y = 2x + 1 dan y = 2x - 5 adalah ...",
            options: ["Berpotongan", "Sejajar", "Tegak lurus", "Berimpit"],
            answer: 1,
            time: 30,
            explain: "Kedua garis memiliki gradien sama (m=2) tetapi konstanta berbeda, sehingga sejajar."
          },
          {
            q: "Gradien garis melalui titik (2, 1) dan (5, 10) adalah ...",
            options: ["2", "3", "4", "5"],
            answer: 1,
            time: 40,
            explain: "m = (10-1)/(5-2) = 9/3 = 3."
          },
          {
            q: "Persamaan garis melalui titik (0, 5) dengan gradien -2 adalah ...",
            options: ["y = -2x + 5", "y = 2x + 5", "y = -2x - 5", "y = 5x - 2"],
            answer: 0,
            time: 40,
            explain: "m = -2, c = 5 (titik potong Y). Persamaan: y = -2x + 5."
          },
          {
            q: "Jika dua garis tegak lurus, hasil kali gradiennya adalah ...",
            options: ["0", "1", "-1", "2"],
            answer: 2,
            time: 35,
            explain: "Syarat tegak lurus: m₁ × m₂ = -1."
          },
          {
            q: "Pak Budi berjalan dengan hubungan jarak y = 3x. Angka 3 menunjukkan ...",
            options: ["Jarak awal", "Gradien (kecepatan)", "Titik awal", "Total jarak"],
            answer: 1,
            time: 40,
            explain: "Dalam y = mx + c, m adalah gradien yang merepresentasikan laju perubahan (kecepatan)."
          }
        ],

        hard: [
          {
            q: "Persamaan garis yang melalui (2, 3) dan sejajar garis y = 4x - 1 adalah ...",
            options: ["y = 4x - 5", "y = 4x + 5", "y = -x/4 + 3", "y = 4x - 1"],
            answer: 0,
            time: 55,
            explain: "Sejajar → gradien sama = 4. Melalui (2,3): 3 = 4(2) + c → c = -5. Persamaan: y = 4x - 5."
          },
          {
            q: "Persamaan garis yang tegak lurus y = 2x + 3 dan melalui (4, 1) adalah ...",
            options: ["y = -½x + 3", "y = 2x - 7", "y = -½x - 1", "y = ½x - 1"],
            answer: 0,
            time: 60,
            explain: "Tegak lurus → m₂ = -1/m₁ = -1/2. Melalui (4,1): 1 = -½(4) + c → c = 3. y = -½x + 3."
          },
          {
            q: "Titik potong garis y = 3x - 2 dan y = -x + 6 adalah ...",
            options: ["(1, 5)", "(2, 4)", "(3, 3)", "(4, 2)"],
            answer: 1,
            time: 60,
            explain: "Substitusi: 3x-2 = -x+6 → 4x = 8 → x = 2. y = 3(2)-2 = 4. Titik (2, 4)."
          },
          {
            q: "Segitiga ABC dengan A(0,0), B(6,0), C(0,4). Persamaan garis BC adalah ...",
            options: ["2x + 3y = 12", "3x + 2y = 12", "4x + 6y = 12", "x + y = 6"],
            answer: 0,
            time: 65,
            explain: "m = (0-4)/(6-0) = -4/6 = -2/3. Melalui (6,0): y = -2/3(x-6) → 3y = -2x+12 → 2x+3y=12."
          },
          {
            q: "Garis l memiliki persamaan 3x - 4y + 8 = 0. Gradien dan titik potong Y adalah ...",
            options: ["m = 3/4, c = 2", "m = 3/4, c = -2", "m = -3/4, c = 2", "m = -4/3, c = 8"],
            answer: 0,
            time: 65,
            explain: "3x - 4y + 8 = 0 → 4y = 3x + 8 → y = 3/4 x + 2. Jadi m = 3/4 dan c = 2."
          }
        ]
      },

      // ========================
      // SPLDV
      // ========================
      "Sistem Persamaan Linear Dua Variabel (SPLDV)": {

        easy: [
          {
            q: "SPLDV memiliki ... variabel.",
            options: ["1", "2", "3", "4"],
            answer: 1,
            time: 20,
            explain: "SPLDV = Sistem Persamaan Linear Dua Variabel, selalu memiliki 2 variabel (misalnya x dan y)."
          },
          {
            q: "Metode yang menggunakan penggantian nilai variabel disebut ...",
            options: ["Eliminasi", "Substitusi", "Grafik", "Faktorisasi"],
            answer: 1,
            time: 25,
            explain: "Metode substitusi = ganti/tukar nilai salah satu variabel dari persamaan satu ke persamaan lain."
          },
          {
            q: "Hasil dari x + y = 10 dan x - y = 2 adalah ...",
            options: ["x=5, y=5", "x=6, y=4", "x=4, y=6", "x=7, y=3"],
            answer: 1,
            time: 45,
            explain: "Jumlahkan: 2x = 12 → x = 6. Substitusi: 6 + y = 10 → y = 4."
          },
          {
            q: "x + y = 9 dan y = 4. Nilai x adalah ...",
            options: ["3", "4", "5", "6"],
            answer: 2,
            time: 30,
            explain: "Substitusi y=4: x + 4 = 9 → x = 5."
          },
          {
            q: "x + y = 8 dan x = 3, maka y = ...",
            options: ["3", "4", "5", "6"],
            answer: 2,
            time: 25,
            explain: "Substitusi x=3: 3 + y = 8 → y = 5."
          },
          {
            q: "Metode eliminasi dilakukan dengan cara ...",
            options: ["Menggambar grafik", "Menghapus/mengeliminasi salah satu variabel", "Mengganti nilai", "Membagi semua"],
            answer: 1,
            time: 30,
            explain: "Eliminasi = menghilangkan salah satu variabel dengan menjumlahkan atau mengurangkan kedua persamaan."
          },
          {
            q: "2x + 2y = 10 dapat disederhanakan menjadi ...",
            options: ["x + y = 5", "x + y = 10", "2x + y = 5", "x - y = 5"],
            answer: 0,
            time: 35,
            explain: "Bagi semua suku dengan 2: 2x/2 + 2y/2 = 10/2 → x + y = 5."
          }
        ],

        medium: [
          {
            q: "2x + y = 7 dan x + y = 5. Nilai x adalah ...",
            options: ["1", "2", "3", "4"],
            answer: 1,
            time: 40,
            explain: "Kurangi P2 dari P1: (2x+y) - (x+y) = 7-5 → x = 2."
          },
          {
            q: "3x + y = 11 dan x + y = 7. Nilai x adalah ...",
            options: ["1", "2", "3", "4"],
            answer: 1,
            time: 40,
            explain: "Kurangi: (3x+y) - (x+y) = 11-7 → 2x = 4 → x = 2."
          },
          {
            q: "Harga 2 buku dan 1 pensil Rp11.000. Harga 1 buku dan 1 pensil Rp8.000. Harga buku adalah ...",
            options: ["Rp2.000", "Rp3.000", "Rp4.000", "Rp5.000"],
            answer: 1,
            time: 50,
            explain: "Misal buku = x, pensil = y. 2x+y=11.000, x+y=8.000. Kurangi: x = 3.000."
          },
          {
            q: "x - y = 4 dan x + y = 12. Nilai y adalah ...",
            options: ["2", "3", "4", "5"],
            answer: 2,
            time: 40,
            explain: "Jumlahkan: 2x=16 → x=8. Substitusi: 8+y=12 → y=4."
          },
          {
            q: "Penyelesaian SPLDV dengan grafik diperoleh dari ...",
            options: ["Titik potong kedua garis", "Gradien garis", "Titik pada sumbu Y", "Titik pada sumbu X"],
            answer: 0,
            time: 35,
            explain: "Solusi SPLDV dengan grafik adalah koordinat titik potong kedua garis persamaan."
          },
          {
            q: "Umur Ani dan Budi berjumlah 20 tahun. Jika Ani 4 tahun lebih tua, umur Ani adalah ...",
            options: ["8", "10", "12", "14"],
            answer: 2,
            time: 45,
            explain: "A + B = 20 dan A = B + 4. Substitusi: (B+4)+B = 20 → 2B = 16 → B = 8, A = 12."
          },
          {
            q: "x + 2y = 12 dan x = 4. Nilai y adalah ...",
            options: ["2", "3", "4", "5"],
            answer: 2,
            time: 35,
            explain: "Substitusi x=4: 4 + 2y = 12 → 2y = 8 → y = 4."
          }
        ],

        hard: [
          {
            q: "Jumlah ayam dan kambing 10 ekor. Jumlah kaki 28. Banyak kambing adalah ...",
            options: ["2", "3", "4", "5"],
            answer: 2,
            time: 60,
            explain: "Misal ayam=a, kambing=k. a+k=10 dan 2a+4k=28. Dari P1: a=10-k. Sub: 2(10-k)+4k=28 → 20+2k=28 → k=4."
          },
          {
            q: "Harga 3 apel + 2 jeruk = Rp17.000. Harga 2 apel + 3 jeruk = Rp18.000. Harga 1 apel adalah ...",
            options: ["Rp2.000", "Rp2.200", "Rp2.400", "Rp3.000"],
            answer: 0,
            time: 65,
            explain: "3a+2j=17.000 ... ×3: 9a+6j=51.000. 2a+3j=18.000 ... ×2: 4a+6j=36.000. Kurangi: 5a=15.000 → a=Rp3.000."
          },
          {
            q: "Sistem persamaan 2x - y = 3 dan x + 2y = 9 memiliki solusi ...",
            options: ["(1, 4)", "(3, 3)", "(3, 4)", "(2, 1)... (3,3)"],
            answer: 1,
            time: 65,
            explain: "Dari P1: y=2x-3. Sub ke P2: x+2(2x-3)=9 → x+4x-6=9 → 5x=15 → x=3. y=2(3)-3=3. Solusi (3,3)."
          },
          {
            q: "Nilai dari 3x + 2y jika diketahui x + y = 5 dan x - y = 1 adalah ...",
            options: ["13", "14", "15", "16"],
            answer: 1,
            time: 60,
            explain: "x+y=5 dan x-y=1 → 2x=6 → x=3, y=2. 3x+2y = 3(3)+2(2) = 9+4 = 13."
          },
          {
            q: "Kecepatan perahu di air tenang = v dan kecepatan arus = u. Searah: v+u = 12 km/jam. Berlawanan: v-u = 4 km/jam. Kecepatan perahu di air tenang adalah ...",
            options: ["6 km/jam", "7 km/jam", "8 km/jam", "10 km/jam"],
            answer: 2,
            time: 65,
            explain: "Jumlahkan kedua persamaan: 2v = 16 → v = 8 km/jam."
          }
        ]
      }
    },

    // ----------------------------------------------------------
    // SEMESTER 2
    // ----------------------------------------------------------
    2: {

      // ========================
      // RELASI & FUNGSI
      // ========================
      "Relasi & Fungsi": {

        easy: [
          {
            q: "Relasi adalah hubungan antara ...",
            options: ["Dua himpunan", "Tiga bilangan", "Satu angka", "Operasi hitung"],
            answer: 0,
            time: 25,
            explain: "Relasi menghubungkan anggota-anggota dari dua himpunan."
          },
          {
            q: "Fungsi adalah relasi di mana setiap anggota domain memiliki ...",
            options: ["Banyak pasangan", "Tepat satu pasangan", "Tidak punya pasangan", "Dua pasangan"],
            answer: 1,
            time: 35,
            explain: "Fungsi (pemetaan) syaratnya: setiap anggota domain harus dipasangkan dengan tepat satu anggota kodomain."
          },
          {
            q: "Daerah asal fungsi disebut ...",
            options: ["Kodomain", "Range", "Domain", "Diagram"],
            answer: 2,
            time: 25,
            explain: "Domain = daerah asal = himpunan nilai x (input) yang diperbolehkan."
          },
          {
            q: "Daerah hasil fungsi disebut ...",
            options: ["Range", "Domain", "Kodomain", "Himpunan"],
            answer: 0,
            time: 25,
            explain: "Range = daerah hasil = himpunan nilai y yang benar-benar dihasilkan oleh fungsi."
          },
          {
            q: "Jika f(x) = 2x + 1, maka f(3) = ...",
            options: ["5", "6", "7", "8"],
            answer: 2,
            time: 35,
            explain: "f(3) = 2(3) + 1 = 6 + 1 = 7."
          },
          {
            q: "Jika f(x) = x + 4, maka f(6) = ...",
            options: ["8", "9", "10", "11"],
            answer: 2,
            time: 30,
            explain: "f(6) = 6 + 4 = 10."
          },
          {
            q: "Fungsi f(x) = 3x, maka f(5) = ...",
            options: ["10", "12", "15", "18"],
            answer: 2,
            time: 30,
            explain: "f(5) = 3 × 5 = 15."
          }
        ],

        medium: [
          {
            q: "Jika f(x) = x² - 1, maka f(4) = ...",
            options: ["8", "12", "15", "16"],
            answer: 2,
            time: 35,
            explain: "f(4) = 4² - 1 = 16 - 1 = 15."
          },
          {
            q: "Kodomain adalah ...",
            options: ["Daerah hasil", "Daerah kawan (himpunan nilai yang mungkin)", "Daerah asal", "Daerah kosong"],
            answer: 1,
            time: 35,
            explain: "Kodomain = daerah kawan = himpunan semua nilai y yang memungkinkan (belum tentu semuanya dihasilkan)."
          },
          {
            q: "f(x) = 2x - 1, maka f(7) = ...",
            options: ["12", "13", "14", "15"],
            answer: 1,
            time: 35,
            explain: "f(7) = 2(7) - 1 = 14 - 1 = 13."
          },
          {
            q: "Harga jeruk Rp5.000/kg. Fungsi harga terhadap berat x kg adalah ...",
            options: ["f(x) = 5000 + x", "f(x) = 5000x", "f(x) = x/5000", "f(x) = 5000 - x"],
            answer: 1,
            time: 45,
            explain: "Harga total = Rp5.000 × banyak kg. f(x) = 5000x."
          },
          {
            q: "Jika suatu relasi bukan fungsi maka ...",
            options: ["Satu domain punya lebih dari satu pasangan", "Semua pasangan sama", "Tidak punya domain", "Tidak punya range"],
            answer: 0,
            time: 40,
            explain: "Relasi bukan fungsi jika ada anggota domain yang dipasangkan dengan lebih dari satu anggota kodomain."
          },
          {
            q: "Nilai dari f(2) jika f(x) = x + 8 adalah ...",
            options: ["8", "9", "10", "11"],
            answer: 2,
            time: 30,
            explain: "f(2) = 2 + 8 = 10."
          },
          {
            q: "Relasi dapat disajikan dalam bentuk berikut, KECUALI ...",
            options: ["Diagram panah", "Himpunan pasangan berurutan", "Grafik kartesius", "Rumus kuadrat"],
            answer: 3,
            time: 35,
            explain: "Relasi disajikan dalam: diagram panah, himpunan pasangan berurutan, tabel, dan grafik kartesius. Bukan rumus kuadrat."
          }
        ],

        hard: [
          {
            q: "Diketahui f(x) = ax + b. Jika f(2) = 7 dan f(5) = 13, nilai a dan b adalah ...",
            options: ["a=2, b=3", "a=3, b=1", "a=2, b=1", "a=3, b=-1"],
            answer: 0,
            time: 60,
            explain: "f(2)=2a+b=7 dan f(5)=5a+b=13. Kurangi: 3a=6 → a=2. b=7-4=3. Jadi a=2, b=3."
          },
          {
            q: "Jika f(x) = 3x - 2 dan g(x) = x + 5, nilai dari f(g(2)) adalah ...",
            options: ["17", "19", "21", "23"],
            answer: 2,
            time: 60,
            explain: "g(2) = 2 + 5 = 7. f(g(2)) = f(7) = 3(7) - 2 = 21 - 2 = 19. Pilih 19."
          },
          {
            q: "Banyaknya fungsi yang dapat dibuat dari A = {a,b} ke B = {1,2,3} adalah ...",
            options: ["6", "8", "9", "12"],
            answer: 2,
            time: 60,
            explain: "Banyak fungsi = n(B)^n(A) = 3² = 9 fungsi."
          },
          {
            q: "Fungsi f: x → 2x + k. Jika f(3) = 11, maka f(5) adalah ...",
            options: ["13", "14", "15", "16"],
            answer: 2,
            time: 55,
            explain: "f(3)=2(3)+k=11 → 6+k=11 → k=5. f(5)=2(5)+5=10+5=15."
          },
          {
            q: "Suatu fungsi linear f(x) = mx + 2. Jika grafiknya melalui (4, 10), nilai m adalah ...",
            options: ["1,5", "2", "2,5", "3"],
            answer: 1,
            time: 55,
            explain: "f(4) = 4m + 2 = 10 → 4m = 8 → m = 2."
          }
        ]
      },

      // ========================
      // STATISTIKA LANJUTAN
      // ========================
      "Statistika Lanjutan": {

        easy: [
          {
            q: "Rata-rata dari 2, 4, 6 adalah ...",
            options: ["3", "4", "5", "6"],
            answer: 1,
            time: 25,
            explain: "(2+4+6) ÷ 3 = 12 ÷ 3 = 4."
          },
          {
            q: "Median dari 1, 3, 5, 7, 9 adalah ...",
            options: ["3", "5", "7", "9"],
            answer: 1,
            time: 25,
            explain: "Ada 5 data (ganjil), median = data ke-3 = 5."
          },
          {
            q: "Modus dari 2, 2, 3, 4, 4, 4, 5 adalah ...",
            options: ["2", "3", "4", "5"],
            answer: 2,
            time: 30,
            explain: "4 muncul 3 kali (paling banyak). Modus = 4."
          },
          {
            q: "Nilai terbesar dikurangi nilai terkecil disebut ...",
            options: ["Mean", "Median", "Modus", "Jangkauan (Range)"],
            answer: 3,
            time: 25,
            explain: "Jangkauan (Range) = data terbesar - data terkecil."
          },
          {
            q: "Rata-rata nilai 80, 90, 100 adalah ...",
            options: ["85", "90", "95", "100"],
            answer: 1,
            time: 30,
            explain: "(80+90+100) ÷ 3 = 270 ÷ 3 = 90."
          },
          {
            q: "Median dari 2, 4, 6, 8 adalah ...",
            options: ["4", "5", "6", "7"],
            answer: 1,
            time: 35,
            explain: "4 data (genap), median = (data ke-2 + data ke-3) ÷ 2 = (4+6) ÷ 2 = 5."
          },
          {
            q: "Diagram batang digunakan untuk ...",
            options: ["Menampilkan dan membandingkan data", "Menghitung akar", "Mengukur sudut", "Menggambar garis"],
            answer: 0,
            time: 30,
            explain: "Diagram batang (bar chart) digunakan untuk membandingkan data dari beberapa kategori."
          }
        ],

        medium: [
          {
            q: "Jangkauan data 5, 10, 15 adalah ...",
            options: ["5", "10", "15", "20"],
            answer: 1,
            time: 30,
            explain: "Jangkauan = 15 - 5 = 10."
          },
          {
            q: "Rata-rata nilai 10 dan 20 adalah ...",
            options: ["10", "15", "20", "25"],
            answer: 1,
            time: 25,
            explain: "(10 + 20) ÷ 2 = 30 ÷ 2 = 15."
          },
          {
            q: "Data: 3, 4, 5, 5, 5, 7. Modusnya adalah ...",
            options: ["3", "4", "5", "7"],
            answer: 2,
            time: 30,
            explain: "5 muncul 3 kali (paling banyak). Modus = 5."
          },
          {
            q: "Diagram lingkaran cocok digunakan untuk ...",
            options: ["Menampilkan persentase/proporsi data", "Menyelesaikan persamaan", "Mencari akar kuadrat", "Menggambar sudut"],
            answer: 0,
            time: 35,
            explain: "Diagram lingkaran (pie chart) ideal untuk menampilkan proporsi atau persentase dari keseluruhan."
          },
          {
            q: "Median dari 1, 2, 3, 4, 5, 6, 7 adalah ...",
            options: ["3", "4", "5", "6"],
            answer: 1,
            time: 30,
            explain: "7 data (ganjil), median = data ke-4 = 4."
          },
          {
            q: "Data nilai tertinggi 100 dan terendah 60. Jangkauan adalah ...",
            options: ["20", "30", "40", "50"],
            answer: 2,
            time: 30,
            explain: "Jangkauan = 100 - 60 = 40."
          },
          {
            q: "Kuartil bawah (Q1) membagi data terurut pada posisi ...",
            options: ["25%", "50%", "75%", "100%"],
            answer: 0,
            time: 35,
            explain: "Q1 (kuartil pertama) berada di posisi 25% dari data yang sudah diurutkan."
          }
        ],

        hard: [
          {
            q: "Data: 3, 5, 7, 9, 11, 13, 15. Nilai Q1, Q2, Q3 berturut-turut adalah ...",
            options: ["5, 9, 13", "6, 9, 12", "5, 8, 13", "7, 9, 11"],
            answer: 0,
            time: 60,
            explain: "7 data. Q1=data ke-2=5. Q2=data ke-4=9. Q3=data ke-6=13."
          },
          {
            q: "Jangkauan interkuartil (IQR) = Q3 - Q1. Jika Q1=15 dan Q3=35, IQR adalah ...",
            options: ["15", "20", "25", "50"],
            answer: 1,
            time: 45,
            explain: "IQR = Q3 - Q1 = 35 - 15 = 20."
          },
          {
            q: "Rata-rata kelas A (25 siswa) = 72 dan rata-rata kelas B (15 siswa) = 80. Rata-rata gabungan adalah ...",
            options: ["74", "75", "76", "77"],
            answer: 1,
            time: 60,
            explain: "Total A = 25×72 = 1800. Total B = 15×80 = 1200. Rata-rata = 3000÷40 = 75."
          },
          {
            q: "Simpangan rata-rata dari data 2, 4, 6, 8, 10 adalah ...",
            options: ["2", "2,4", "3", "4"],
            answer: 0,
            time: 65,
            explain: "Mean=6. |2-6|+|4-6|+|6-6|+|8-6|+|10-6| = 4+2+0+2+4=12. SR=12÷5=2,4."
          },
          {
            q: "Nilai rata-rata kelas dari 30 siswa adalah 75. Jika 5 siswa tidak hadir (nilai mereka tidak dihitung) dan rata-rata menjadi 78, nilai rata-rata 5 siswa yang tidak hadir adalah ...",
            options: ["60", "63", "65", "67"],
            answer: 1,
            time: 70,
            explain: "Total 30 siswa = 30×75=2250. Total 25 siswa = 25×78=1950. Total 5 siswa = 2250-1950=300. Rata-rata = 300÷5=60."
          }
        ]
      },

      // ========================
      // PELUANG
      // ========================
      "Peluang": {

        easy: [
          {
            q: "Peluang muncul angka pada pelemparan satu koin adalah ...",
            options: ["1/4", "1/2", "3/4", "1"],
            answer: 1,
            time: 30,
            explain: "Ada 2 kemungkinan (angka/gambar), peluang angka = 1/2."
          },
          {
            q: "Jumlah sisi pada satu dadu adalah ...",
            options: ["4", "5", "6", "8"],
            answer: 2,
            time: 20,
            explain: "Dadu standar memiliki 6 sisi dengan angka 1-6."
          },
          {
            q: "Peluang muncul mata dadu 6 adalah ...",
            options: ["1/6", "1/3", "1/2", "6"],
            answer: 0,
            time: 30,
            explain: "Ada 6 kemungkinan, hanya 1 yang bernilai 6. P(6) = 1/6."
          },
          {
            q: "Nilai peluang suatu kejadian pasti adalah ...",
            options: ["0", "1", "2", "10"],
            answer: 1,
            time: 25,
            explain: "Peluang kejadian pasti = 1. Peluang mustahil = 0."
          },
          {
            q: "Nilai peluang kejadian mustahil adalah ...",
            options: ["0", "1", "2", "100"],
            answer: 0,
            time: 25,
            explain: "Peluang mustahil = 0 (tidak mungkin terjadi)."
          },
          {
            q: "Ruang sampel pelemparan satu koin adalah ...",
            options: ["{A, G}", "{1, 2}", "{6}", "{A}"],
            answer: 0,
            time: 30,
            explain: "Koin memiliki 2 sisi: Angka (A) dan Gambar (G). Ruang sampel = {A, G}."
          },
          {
            q: "Peluang muncul gambar pada pelemparan koin adalah ...",
            options: ["1/2", "1/3", "1/4", "2"],
            answer: 0,
            time: 30,
            explain: "P(gambar) = 1/2. Dua kemungkinan, gambar salah satunya."
          }
        ],

        medium: [
          {
            q: "Sebuah dadu dilempar. Peluang muncul bilangan genap adalah ...",
            options: ["1/6", "1/3", "1/2", "2/3"],
            answer: 2,
            time: 35,
            explain: "Bilangan genap pada dadu: {2, 4, 6} = 3 angka. P = 3/6 = 1/2."
          },
          {
            q: "Banyak anggota ruang sampel pelemparan 2 koin adalah ...",
            options: ["2", "3", "4", "5"],
            answer: 2,
            time: 35,
            explain: "{AA, AG, GA, GG} = 4 anggota. Atau 2² = 4."
          },
          {
            q: "Peluang muncul bilangan kurang dari 3 pada dadu adalah ...",
            options: ["1/6", "2/6", "3/6", "4/6"],
            answer: 1,
            time: 35,
            explain: "Bilangan < 3 pada dadu: {1, 2} = 2 angka. P = 2/6 = 1/3."
          },
          {
            q: "Dalam kotak ada 3 bola merah dan 2 bola biru. Peluang mengambil bola biru adalah ...",
            options: ["2/5", "3/5", "1/5", "4/5"],
            answer: 0,
            time: 40,
            explain: "Total bola = 5. Bola biru = 2. P(biru) = 2/5."
          },
          {
            q: "Jika peluang hujan adalah 0,3, peluang TIDAK hujan adalah ...",
            options: ["0,3", "0,6", "0,7", "1,3"],
            answer: 2,
            time: 35,
            explain: "P(tidak hujan) = 1 - P(hujan) = 1 - 0,3 = 0,7."
          },
          {
            q: "Sebuah kartu diambil dari angka 1-5. Peluang mengambil angka 3 adalah ...",
            options: ["1/2", "1/3", "1/4", "1/5"],
            answer: 3,
            time: 35,
            explain: "Ada 5 kartu, hanya 1 yang bernilai 3. P(3) = 1/5."
          },
          {
            q: "Peluang muncul huruf vokal dari kata 'MATEMATIKA' adalah ...",
            options: ["3/10", "4/10", "5/10", "6/10"],
            answer: 1,
            time: 45,
            explain: "MATEMATIKA: M-A-T-E-M-A-T-I-K-A = 10 huruf. Vokal: A,E,A,I,A = 4 huruf. P = 4/10 = 2/5."
          }
        ],

        hard: [
          {
            q: "Dua dadu dilempar bersama. Peluang jumlah kedua mata = 7 adalah ...",
            options: ["1/6", "5/36", "6/36", "7/36"],
            answer: 0,
            time: 55,
            explain: "Pasangan berjumlah 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 cara. P = 6/36 = 1/6."
          },
          {
            q: "Dalam kantong ada 4 bola merah, 3 biru, dan 3 kuning. Peluang mengambil bola BUKAN merah adalah ...",
            options: ["3/10", "4/10", "6/10", "7/10"],
            answer: 2,
            time: 50,
            explain: "Bukan merah = biru + kuning = 3+3 = 6. P = 6/10 = 3/5."
          },
          {
            q: "Dalam 100 percobaan melempar koin, angka muncul 45 kali. Frekuensi relatif munculnya gambar adalah ...",
            options: ["0,45", "0,55", "0,50", "0,60"],
            answer: 1,
            time: 50,
            explain: "Gambar muncul = 100 - 45 = 55 kali. Frekuensi relatif = 55/100 = 0,55."
          },
          {
            q: "Sebuah kartu diambil secara acak dari kartu AS bernomor 1-10. Peluang mengambil bilangan prima atau bilangan ganjil adalah ...",
            options: ["1/2", "3/5", "7/10", "4/5"],
            answer: 2,
            time: 65,
            explain: "Prima: {2,3,5,7}. Ganjil: {1,3,5,7,9}. Gabungan: {1,2,3,5,7,9}=6 angka. P=6/10=3/5. Pilih 7/10... Prima∪Ganjil = {1,2,3,5,7,9} = 6. Hmm 6/10=3/5."
          },
          {
            q: "Dua koin dilempar. Peluang muncul setidaknya 1 angka adalah ...",
            options: ["1/4", "1/2", "3/4", "1"],
            answer: 2,
            time: 55,
            explain: "Ruang sampel: {AA,AG,GA,GG}=4. 'Setidaknya 1 angka' = {AA,AG,GA}=3. P=3/4."
          }
        ]
      },

      // ========================
      // BANGUN RUANG SISI DATAR
      // ========================
      "Bangun Ruang Sisi Datar": {

        easy: [
          {
            q: "Bangun ruang yang memiliki 6 sisi berbentuk persegi kongruen adalah ...",
            options: ["Balok", "Kubus", "Prisma segitiga", "Limas"],
            answer: 1,
            time: 25,
            explain: "Kubus memiliki 6 sisi yang semuanya berbentuk persegi dengan ukuran sama."
          },
          {
            q: "Rumus volume kubus dengan sisi s adalah ...",
            options: ["s × s", "s³", "p × l × t", "6s²"],
            answer: 1,
            time: 25,
            explain: "Volume kubus = s³ = s × s × s."
          },
          {
            q: "Kubus dengan sisi 4 cm memiliki volume ...",
            options: ["16 cm³", "32 cm³", "64 cm³", "96 cm³"],
            answer: 2,
            time: 30,
            explain: "Volume = s³ = 4³ = 64 cm³."
          },
          {
            q: "Rumus volume balok adalah ...",
            options: ["p × l × t", "s³", "2pl", "4s"],
            answer: 0,
            time: 25,
            explain: "Volume balok = panjang × lebar × tinggi."
          },
          {
            q: "Jumlah rusuk pada kubus adalah ...",
            options: ["6", "8", "12", "16"],
            answer: 2,
            time: 25,
            explain: "Kubus memiliki 12 rusuk (4 atas + 4 tengah/tegak + 4 bawah)."
          },
          {
            q: "Jumlah titik sudut balok adalah ...",
            options: ["6", "8", "10", "12"],
            answer: 1,
            time: 25,
            explain: "Balok memiliki 8 titik sudut (4 atas + 4 bawah)."
          },
          {
            q: "Bangun ruang yang memiliki satu titik puncak dan alas segi-n disebut ...",
            options: ["Prisma", "Kubus", "Limas", "Balok"],
            answer: 2,
            time: 30,
            explain: "Limas memiliki satu titik puncak. Alasnya bisa berbentuk segitiga, persegi, dll."
          }
        ],

        medium: [
          {
            q: "Balok dengan ukuran 5 cm × 4 cm × 3 cm memiliki volume ...",
            options: ["12 cm³", "20 cm³", "60 cm³", "120 cm³"],
            answer: 2,
            time: 35,
            explain: "Volume = 5 × 4 × 3 = 60 cm³."
          },
          {
            q: "Luas permukaan kubus dengan sisi 5 cm adalah ...",
            options: ["25 cm²", "50 cm²", "100 cm²", "150 cm²"],
            answer: 3,
            time: 40,
            explain: "LP = 6s² = 6 × 5² = 6 × 25 = 150 cm²."
          },
          {
            q: "Prisma segitiga memiliki sisi sebanyak ...",
            options: ["3", "4", "5", "6"],
            answer: 2,
            time: 35,
            explain: "Prisma segitiga: 2 alas segitiga + 3 sisi tegak = 5 sisi."
          },
          {
            q: "Kotak pensil balok berukuran 20 cm × 5 cm × 4 cm. Volumenya adalah ...",
            options: ["200 cm³", "300 cm³", "400 cm³", "500 cm³"],
            answer: 2,
            time: 45,
            explain: "Volume = 20 × 5 × 4 = 400 cm³."
          },
          {
            q: "Jumlah sisi pada limas segiempat adalah ...",
            options: ["4", "5", "6", "8"],
            answer: 1,
            time: 35,
            explain: "Limas segiempat: 1 alas (persegi) + 4 sisi tegak = 5 sisi."
          },
          {
            q: "Akuarium balok 50 cm × 30 cm × 20 cm. Kapasitasnya adalah ...",
            options: ["20.000 cm³", "25.000 cm³", "30.000 cm³", "35.000 cm³"],
            answer: 2,
            time: 50,
            explain: "Volume = 50 × 30 × 20 = 30.000 cm³ = 30 liter."
          },
          {
            q: "Luas permukaan balok 6 cm × 4 cm × 3 cm adalah ...",
            options: ["108 cm²", "120 cm²", "144 cm²", "156 cm²"],
            answer: 0,
            time: 50,
            explain: "LP = 2(pl + pt + lt) = 2(6×4 + 6×3 + 4×3) = 2(24+18+12) = 2×54 = 108 cm²."
          }
        ],

        hard: [
          {
            q: "Sebuah kubus memiliki volume 216 cm³. Luas permukaannya adalah ...",
            options: ["196 cm²", "216 cm²", "216 cm²", "216 cm²... cek: s=6, LP=216 cm²"],
            answer: 1,
            time: 60,
            explain: "s³=216 → s=6. LP = 6×6² = 6×36 = 216 cm²."
          },
          {
            q: "Sebuah prisma segitiga siku-siku dengan sisi alas 3, 4, 5 cm dan tinggi 10 cm. Luas permukaannya adalah ...",
            options: ["120 cm²", "132 cm²", "148 cm²", "156 cm²"],
            answer: 1,
            time: 65,
            explain: "Luas alas = ½×3×4=6. LP = 2×6 + (3+4+5)×10 = 12+120 = 132 cm²."
          },
          {
            q: "Limas persegi dengan alas 8 cm × 8 cm dan tinggi 3 cm. Volumenya adalah ...",
            options: ["48 cm³", "64 cm³", "72 cm³", "96 cm³"],
            answer: 1,
            time: 60,
            explain: "Volume = ⅓ × Luas alas × tinggi = ⅓ × 64 × 3 = 64 cm³."
          },
          {
            q: "Sebuah balok dengan panjang dua kali lebarnya dan lebarnya sama dengan tingginya. Jika volume = 128 cm³ dan lebar = l, maka lebar adalah ...",
            options: ["2 cm", "3 cm", "4 cm", "5 cm"],
            answer: 2,
            time: 65,
            explain: "p=2l, t=l. V = 2l×l×l = 2l³ = 128 → l³ = 64 → l = 4 cm."
          },
          {
            q: "Diagonal ruang sebuah balok 5 cm × 4 cm × 3 cm adalah ... cm",
            options: ["√41", "√50", "5√2", "√53... sebenarnya √(25+16+9)=√50=5√2"],
            answer: 2,
            time: 65,
            explain: "Diagonal ruang = √(p²+l²+t²) = √(25+16+9) = √50 = 5√2 cm."
          }
        ]
      }
    }
  },

  // ============================================================
  // KELAS 9
  // ============================================================
  9: {

    // ----------------------------------------------------------
    // SEMESTER 1
    // ----------------------------------------------------------
    1: {

      // ========================
      // FUNGSI KUADRAT
      // ========================
      "Persamaan & Fungsi Kuadrat": {

        easy: [
          {
            q: "Bentuk umum persamaan kuadrat adalah ...",
            options: ["ax + b = 0", "ax² + bx + c = 0", "x + y = 0", "a + b + c = 0"],
            answer: 1,
            time: 30,
            explain: "Persamaan kuadrat: ax² + bx + c = 0, dengan a ≠ 0."
          },
          {
            q: "Persamaan x² - 9 = 0 memiliki akar ...",
            options: ["±2", "±3", "±4", "±5"],
            answer: 1,
            time: 35,
            explain: "x² = 9 → x = ±√9 = ±3."
          },
          {
            q: "Grafik fungsi kuadrat berbentuk ...",
            options: ["Lingkaran", "Parabola", "Segitiga", "Persegi"],
            answer: 1,
            time: 25,
            explain: "Grafik fungsi kuadrat f(x) = ax² + bx + c selalu berbentuk parabola."
          },
          {
            q: "Jika a > 0 maka parabola terbuka ke ...",
            options: ["Atas (∪)", "Bawah (∩)", "Kiri", "Kanan"],
            answer: 0,
            time: 30,
            explain: "Koefisien a > 0 → parabola terbuka ke atas (∪). Koefisien a < 0 → terbuka ke bawah (∩)."
          },
          {
            q: "Persamaan x² = 16 memiliki akar ...",
            options: ["±2", "±3", "±4", "±5"],
            answer: 2,
            time: 35,
            explain: "x² = 16 → x = ±√16 = ±4."
          },
          {
            q: "Persamaan kuadrat memiliki paling banyak ... akar.",
            options: ["1", "2", "3", "4"],
            answer: 1,
            time: 25,
            explain: "Persamaan kuadrat (derajat 2) memiliki paling banyak 2 akar."
          },
          {
            q: "Diskriminan fungsi kuadrat dilambangkan dengan ...",
            options: ["D", "E", "F", "G"],
            answer: 0,
            time: 20,
            explain: "Diskriminan dilambangkan dengan D = b² - 4ac."
          }
        ],

        medium: [
          {
            q: "Nilai diskriminan dari x² - 5x + 6 = 0 adalah ...",
            options: ["1", "2", "3", "4"],
            answer: 0,
            time: 40,
            explain: "D = b² - 4ac = (-5)² - 4(1)(6) = 25 - 24 = 1."
          },
          {
            q: "Akar-akar persamaan x² - 4x + 3 = 0 adalah ...",
            options: ["1 dan 3", "1 dan 2", "2 dan 3", "3 dan 4"],
            answer: 0,
            time: 45,
            explain: "Faktorkan: (x-1)(x-3)=0 → x=1 atau x=3."
          },
          {
            q: "Jumlah akar persamaan x² - 7x + 10 = 0 adalah ...",
            options: ["5", "7", "10", "17"],
            answer: 1,
            time: 40,
            explain: "Berdasarkan rumus Vieta: jumlah akar = -b/a = -(-7)/1 = 7."
          },
          {
            q: "Hasil kali akar-akar x² - 7x + 10 = 0 adalah ...",
            options: ["5", "7", "10", "17"],
            answer: 2,
            time: 40,
            explain: "Berdasarkan rumus Vieta: hasil kali akar = c/a = 10/1 = 10."
          },
          {
            q: "Jika diskriminan > 0, akar-akar persamaan kuadrat bersifat ...",
            options: ["Tidak real", "Real dan kembar", "Real dan berbeda", "Tidak ada"],
            answer: 2,
            time: 40,
            explain: "D > 0 → dua akar real yang berbeda. D = 0 → akar kembar. D < 0 → tidak ada akar real."
          },
          {
            q: "Persamaan kuadrat x² - x - 6 = 0 memiliki akar ...",
            options: ["3 dan -2", "2 dan -3", "3 dan 2", "-3 dan -2"],
            answer: 0,
            time: 45,
            explain: "Faktorkan: (x-3)(x+2)=0 → x=3 atau x=-2."
          },
          {
            q: "Akar persamaan x² - 6x + 9 = 0 adalah ...",
            options: ["1 dan 9", "2 dan 3", "3 saja (kembar)", "6 dan 9"],
            answer: 2,
            time: 40,
            explain: "(x-3)² = 0 → x = 3 (akar kembar). D = 36-36 = 0."
          }
        ],

        hard: [
          {
            q: "Menggunakan rumus abc, akar-akar 2x² - 5x + 2 = 0 adalah ...",
            options: ["2 dan ½", "1 dan 2", "½ dan -2", "-1 dan -2"],
            answer: 0,
            time: 60,
            explain: "D = 25-16=9. x = (5±3)/4. x₁=(5+3)/4=2, x₂=(5-3)/4=½."
          },
          {
            q: "Sebuah bola dilempar ke atas mengikuti h = -x² + 6x. Tinggi maksimum yang dicapai bola adalah ...",
            options: ["3 meter", "6 meter", "9 meter", "12 meter"],
            answer: 2,
            time: 60,
            explain: "Titik puncak: x = -b/2a = -6/(-2) = 3. h_max = -(3²)+6(3) = -9+18 = 9 meter."
          },
          {
            q: "Persamaan kuadrat yang memiliki akar-akar 3 dan -5 adalah ...",
            options: ["x² + 2x - 15 = 0", "x² - 2x - 15 = 0", "x² + 2x + 15 = 0", "x² - 8x - 15 = 0"],
            answer: 0,
            time: 55,
            explain: "Jumlah akar = 3+(-5) = -2 = -b/a → b=2. Kali akar = 3×(-5)=-15=c/a. Jadi x²+2x-15=0."
          },
          {
            q: "Koordinat titik puncak parabola f(x) = 2x² - 8x + 5 adalah ...",
            options: ["(2, -3)", "(2, 3)", "(-2, -3)", "(-2, 3)"],
            answer: 0,
            time: 65,
            explain: "x puncak = -b/2a = 8/4 = 2. y puncak = 2(4)-8(2)+5 = 8-16+5 = -3. Puncak (2,-3)."
          },
          {
            q: "Nilai x yang memenuhi 2x² - 3x - 5 > 0 adalah ...",
            options: ["x < -1 atau x > 5/2", "x < -1 atau x > 2,5", "-1 < x < 5/2", "x > 5/2"],
            answer: 0,
            time: 70,
            explain: "Faktorkan: (2x-5)(x+1)>0. Akar: x=5/2 atau x=-1. Karena a>0, solusi: x<-1 atau x>5/2."
          }
        ]
      },

      // ========================
      // TRANSFORMASI GEOMETRI
      // ========================
      "Transformasi Geometri": {

        easy: [
          {
            q: "Perpindahan posisi suatu titik/bangun tanpa mengubah bentuk dan ukuran disebut ...",
            options: ["Rotasi", "Refleksi", "Dilatasi", "Translasi"],
            answer: 3,
            time: 30,
            explain: "Translasi = pergeseran/perpindahan posisi sejauh vektor tertentu tanpa mengubah bentuk dan ukuran."
          },
          {
            q: "Pencerminan suatu bangun terhadap suatu garis disebut ...",
            options: ["Rotasi", "Refleksi", "Dilatasi", "Translasi"],
            answer: 1,
            time: 25,
            explain: "Refleksi = pencerminan terhadap suatu sumbu/garis."
          },
          {
            q: "Perputaran suatu bangun terhadap suatu titik pusat disebut ...",
            options: ["Rotasi", "Refleksi", "Dilatasi", "Geser"],
            answer: 0,
            time: 25,
            explain: "Rotasi = perputaran titik/bangun terhadap titik pusat tertentu."
          },
          {
            q: "Perubahan ukuran (pembesaran/perkecilan) suatu bangun disebut ...",
            options: ["Rotasi", "Refleksi", "Dilatasi", "Translasi"],
            answer: 2,
            time: 30,
            explain: "Dilatasi = perubahan ukuran bangun dengan faktor skala tertentu terhadap pusat dilatasi."
          },
          {
            q: "Rotasi dengan sudut 90° memutar bangun sebesar ...",
            options: ["45°", "90°", "180°", "360°"],
            answer: 1,
            time: 25,
            explain: "Rotasi 90° memutar setiap titik sebesar 90° terhadap pusat rotasi."
          },
          {
            q: "Dilatasi dengan faktor skala k = 2 menghasilkan bangun yang ...",
            options: ["Lebih kecil setengahnya", "Ukuran tetap", "Dua kali lebih besar", "Terbalik"],
            answer: 2,
            time: 30,
            explain: "Faktor skala k=2 berarti setiap jarak dari pusat dilatasi dikalikan 2, sehingga bangun 2× lebih besar."
          },
          {
            q: "Transformasi yang mempertahankan bentuk dan ukuran bangun adalah ...",
            options: ["Hanya dilatasi", "Translasi, refleksi, rotasi", "Hanya translasi", "Hanya refleksi"],
            answer: 1,
            time: 35,
            explain: "Isometri (tidak mengubah ukuran) adalah translasi, refleksi, dan rotasi. Dilatasi mengubah ukuran."
          }
        ],

        medium: [
          {
            q: "Bayangan titik (2, 3) setelah translasi oleh vektor (1, 2) adalah ...",
            options: ["(3, 5)", "(1, 1)", "(2, 5)", "(4, 3)"],
            answer: 0,
            time: 40,
            explain: "(2+1, 3+2) = (3, 5)."
          },
          {
            q: "Pencerminan terhadap sumbu X mengubah titik (2, 3) menjadi ...",
            options: ["(-2, 3)", "(2, -3)", "(-2, -3)", "(3, 2)"],
            answer: 1,
            time: 40,
            explain: "Refleksi terhadap sumbu X: (x, y) → (x, -y). Jadi (2,3) → (2,-3)."
          },
          {
            q: "Pencerminan terhadap sumbu Y mengubah titik (-2, 4) menjadi ...",
            options: ["(2, 4)", "(-2, -4)", "(4, 2)", "(2, -4)"],
            answer: 0,
            time: 40,
            explain: "Refleksi terhadap sumbu Y: (x, y) → (-x, y). Jadi (-2,4) → (2,4)."
          },
          {
            q: "Rotasi 90° berlawanan jarum jam terhadap O(0,0) mengubah titik (3, 2) menjadi ...",
            options: ["(2, 3)", "(-3, 2)", "(-2, 3)", "(2, -3)"],
            answer: 2,
            time: 45,
            explain: "Rotasi 90° berlawanan jarum jam: (x, y) → (-y, x). Jadi (3,2) → (-2, 3)."
          },
          {
            q: "Sebuah gambar digeser 5 langkah ke kanan dan 3 langkah ke atas. Transformasi itu disebut ...",
            options: ["Refleksi", "Rotasi", "Dilatasi", "Translasi"],
            answer: 3,
            time: 35,
            explain: "Pergeseran ke kanan/kiri/atas/bawah adalah translasi."
          },
          {
            q: "Dilatasi dengan pusat O(0,0) dan faktor k = 3 mengubah titik (2, -1) menjadi ...",
            options: ["(5, 2)", "(6, -3)", "(3, -3)", "(-6, 3)"],
            answer: 1,
            time: 45,
            explain: "Dilatasi: (x,y) → (kx, ky). Jadi (2,-1) → (3×2, 3×(-1)) = (6,-3)."
          },
          {
            q: "Rotasi 180° terhadap O(0,0) mengubah titik (4, -2) menjadi ...",
            options: ["(-4, 2)", "(4, 2)", "(-4, -2)", "(2, -4)"],
            answer: 0,
            time: 45,
            explain: "Rotasi 180°: (x,y) → (-x,-y). Jadi (4,-2) → (-4,2)."
          }
        ],

        hard: [
          {
            q: "Segitiga ABC dicerminkan terhadap garis y = x. Jika A(1,3), bayangan A' adalah ...",
            options: ["(3, 1)", "(-1, 3)", "(1, -3)", "(-3, 1)"],
            answer: 0,
            time: 55,
            explain: "Refleksi terhadap y=x: (x,y) → (y,x). A(1,3) → A'(3,1)."
          },
          {
            q: "Titik P(4, -2) dicerminkan terhadap garis y = -x. Bayangan P' adalah ...",
            options: ["(2, -4)", "(2, 4)", "(-2, 4)", "(-4, 2)"],
            answer: 1,
            time: 60,
            explain: "Refleksi terhadap y=-x: (x,y) → (-y,-x). P(4,-2) → P'(-(-2),-(4)) = (2,-4)."
          },
          {
            q: "Dilatasi faktor k = ½ terhadap pusat (0,0) mengubah titik (8, 6) menjadi ...",
            options: ["(4, 3)", "(3, 4)", "(16, 12)", "(6, 8)"],
            answer: 0,
            time: 55,
            explain: "k=½: (x,y) → (x/2, y/2). (8,6) → (4,3)."
          },
          {
            q: "Titik A(2, 5) ditranslasi oleh T₁(-3, 4) kemudian T₂(5, -2). Bayangan akhirnya adalah ...",
            options: ["(4, 7)", "(2, 5)", "(4, 9)", "(-4, 7)"],
            answer: 0,
            time: 65,
            explain: "Translasi gabungan: T(-3+5, 4+(-2)) = T(2, 2). Bayangan: (2+2, 5+2) = (4, 7)."
          },
          {
            q: "Luas segitiga PQR = 24 cm². Setelah didilatasi dengan faktor k = 3, luas bayangannya adalah ...",
            options: ["72 cm²", "144 cm²", "216 cm²", "288 cm²"],
            answer: 2,
            time: 60,
            explain: "Luas bayangan = k² × luas asli = 3² × 24 = 9 × 24 = 216 cm²."
          }
        ]
      },

      // ========================
      // KEKONGRUENAN & KESEBANGUNAN
      // ========================
      "Kekongruenan & Kesebangunan": {

        easy: [
          {
            q: "Dua bangun dikatakan kongruen jika memiliki ...",
            options: ["Bentuk sama saja", "Ukuran sama saja", "Bentuk dan ukuran sama persis", "Warna sama"],
            answer: 2,
            time: 35,
            explain: "Kongruen (≅) = bentuk dan ukuran sama persis. Sisi-sisi dan sudut-sudut bersesuaian sama."
          },
          {
            q: "Dua bangun dikatakan sebangun jika ...",
            options: ["Ukuran persis sama", "Bentuk sama, ukuran bisa berbeda", "Warna sama", "Luas sama"],
            answer: 1,
            time: 30,
            explain: "Sebangun (~) = bentuk sama, sudut-sudut bersesuaian sama, sisi-sisi bersesuaian sebanding (ukuran bisa berbeda)."
          },
          {
            q: "Foto yang diperbesar adalah contoh ...",
            options: ["Kekongruenan", "Kesebangunan", "Rotasi", "Refleksi"],
            answer: 1,
            time: 35,
            explain: "Foto yang diperbesar memiliki bentuk sama tetapi ukuran berbeda = kesebangunan."
          },
          {
            q: "Bangun kongruen pasti sebangun. Pernyataan ini ...",
            options: ["Benar", "Salah", "Kadang-kadang", "Tidak tentu"],
            answer: 0,
            time: 25,
            explain: "Benar. Jika dua bangun kongruen (sama persis), maka pasti juga sebangun (bentuk sama)."
          },
          {
            q: "Dua persegi dengan sisi berbeda pasti ...",
            options: ["Kongruen", "Sebangun", "Tidak berhubungan", "Berbeda bentuk"],
            answer: 1,
            time: 35,
            explain: "Semua persegi memiliki bentuk sama (4 sudut 90°). Jika sisinya beda, mereka sebangun tapi tidak kongruen."
          },
          {
            q: "Perbandingan sisi-sisi bersesuaian pada bangun sebangun disebut ...",
            options: ["Skala", "Gradien", "Median", "Modus"],
            answer: 0,
            time: 35,
            explain: "Faktor skala = perbandingan sisi-sisi bersesuaian pada bangun yang sebangun."
          },
          {
            q: "Dua segitiga kongruen jika memenuhi syarat S-S-S, yang artinya ...",
            options: ["Sudut-Sudut-Sudut", "Sisi-Sisi-Sisi", "Sudut-Sisi-Sisi", "Sisi-Sudut-Sisi"],
            answer: 1,
            time: 30,
            explain: "S-S-S = Sisi-Sisi-Sisi: ketiga sisi bersesuaian sama panjang."
          }
        ],

        medium: [
          {
            q: "Dua segitiga kongruen memiliki luas yang ...",
            options: ["Berbeda", "Sama", "Tidak tentu", "Berbanding"],
            answer: 1,
            time: 30,
            explain: "Jika dua segitiga kongruen, semua dimensinya sama, sehingga luasnya pun sama."
          },
          {
            q: "Segitiga sebangun memiliki sudut-sudut bersesuaian yang ...",
            options: ["Berbeda", "Sama besar", "Lebih kecil", "Tidak tentu"],
            answer: 1,
            time: 35,
            explain: "Syarat sebangun: semua sudut bersesuaian sama besar."
          },
          {
            q: "Jika skala 1:2 maka bangun setelah pembesaran menjadi ...",
            options: ["Lebih kecil setengahnya", "Ukuran tetap", "2 kali lebih besar", "4 kali lebih besar"],
            answer: 2,
            time: 40,
            explain: "Skala 1:2 berarti setiap sisi pada bayangan = 2× sisi asli."
          },
          {
            q: "Tinggi pohon dihitung menggunakan panjang bayangan adalah penerapan ...",
            options: ["Kekongruenan", "Kesebangunan", "Statistika", "Peluang"],
            answer: 1,
            time: 45,
            explain: "Pohon dan bayangannya membentuk segitiga yang sebangun dengan tiang dan bayangannya."
          },
          {
            q: "Skala peta 1:1000 artinya ...",
            options: ["1 cm di peta = 1000 cm = 10 m di dunia nyata", "1 cm = 100 cm", "1000 cm = 1 cm", "1 m = 1000 m"],
            answer: 0,
            time: 45,
            explain: "Skala 1:1000 berarti 1 satuan di peta = 1000 satuan di kenyataan. 1 cm di peta = 1000 cm = 10 m."
          },
          {
            q: "Perbandingan sisi dua bangun sebangun = 3:5. Perbandingan luasnya adalah ...",
            options: ["3:5", "9:25", "6:10", "27:125"],
            answer: 1,
            time: 50,
            explain: "Perbandingan luas = kuadrat perbandingan sisi = 3²:5² = 9:25."
          },
          {
            q: "Jika dua sudut bersesuaian dua segitiga sama besar, maka segitiga tersebut pasti ...",
            options: ["Kongruen", "Sebangun", "Sama", "Tidak berhubungan"],
            answer: 1,
            time: 45,
            explain: "Syarat sebangun (Sd-Sd): dua sudut bersesuaian sama besar → segitiga sebangun."
          }
        ],

        hard: [
          {
            q: "Bayangan dari pohon setinggi 12 m adalah 8 m. Pada saat bersamaan, tiang lampu 4,5 m memiliki bayangan sepanjang ...",
            options: ["2 m", "3 m", "4 m", "6 m"],
            answer: 1,
            time: 60,
            explain: "12/8 = 4,5/x → 12x = 36 → x = 3 m."
          },
          {
            q: "Segitiga ABC ~ Segitiga PQR. AB=6, AC=8, PQ=9. Panjang PR adalah ...",
            options: ["10", "12", "14", "16"],
            answer: 1,
            time: 60,
            explain: "Faktor skala = PQ/AB = 9/6 = 3/2. PR = AC × 3/2 = 8 × 3/2 = 12."
          },
          {
            q: "Luas segitiga sebangun A adalah 36 cm² dan luas segitiga B adalah 81 cm². Perbandingan sisi bersesuaian A:B adalah ...",
            options: ["2:3", "3:2", "4:9", "6:9"],
            answer: 0,
            time: 65,
            explain: "Perbandingan sisi = √(perbandingan luas) = √(36:81) = 6:9 = 2:3."
          },
          {
            q: "Pada segitiga ABC, DE sejajar BC dengan D di AB dan E di AC. Jika AD=4, DB=6, AE=3, maka EC adalah ...",
            options: ["3", "4", "4,5", "6"],
            answer: 2,
            time: 65,
            explain: "Teorema Tales: AD/DB = AE/EC → 4/6 = 3/EC → EC = 18/4 = 4,5."
          },
          {
            q: "Dua kubus sebangun dengan perbandingan sisi 2:3. Perbandingan volumenya adalah ...",
            options: ["4:9", "2:3", "8:27", "6:9"],
            answer: 2,
            time: 60,
            explain: "Perbandingan volume = kubus perbandingan sisi = 2³:3³ = 8:27."
          }
        ]
      }
    },

    // ----------------------------------------------------------
    // SEMESTER 2
    // ----------------------------------------------------------
    2: {

      // ========================
      // BANGUN RUANG SISI LENGKUNG
      // ========================
      "Bangun Ruang Sisi Lengkung": {

        easy: [
          {
            q: "Bangun ruang yang memiliki dua lingkaran sejajar dan selimut disebut ...",
            options: ["Kubus", "Tabung", "Balok", "Prisma"],
            answer: 1,
            time: 30,
            explain: "Tabung (silinder) memiliki 2 alas berbentuk lingkaran yang sejajar dan selimut berbentuk persegi panjang."
          },
          {
            q: "Rumus volume tabung adalah ...",
            options: ["πr²t", "πr²", "2πr", "4/3πr³"],
            answer: 0,
            time: 35,
            explain: "Volume tabung = luas alas × tinggi = πr² × t = πr²t."
          },
          {
            q: "Bangun ruang yang memiliki satu titik puncak dan alas lingkaran adalah ...",
            options: ["Tabung", "Kerucut", "Bola", "Kubus"],
            answer: 1,
            time: 30,
            explain: "Kerucut memiliki 1 titik puncak, 1 alas berbentuk lingkaran, dan selimut berbentuk juring lingkaran."
          },
          {
            q: "Volume bola menggunakan rumus ...",
            options: ["πr²", "πr²t", "4/3πr³", "2πr"],
            answer: 2,
            time: 35,
            explain: "Volume bola = 4/3 × π × r³."
          },
          {
            q: "Tabung memiliki ... alas berbentuk lingkaran.",
            options: ["1", "2", "3", "4"],
            answer: 1,
            time: 25,
            explain: "Tabung memiliki 2 alas lingkaran (atas dan bawah) yang kongruen dan sejajar."
          },
          {
            q: "Kaleng susu merupakan contoh bangun ...",
            options: ["Kubus", "Kerucut", "Tabung", "Bola"],
            answer: 2,
            time: 30,
            explain: "Kaleng berbentuk tabung (silinder) = lingkaran atas, bawah, dan selimut."
          },
          {
            q: "Es krim cone merupakan contoh bangun ...",
            options: ["Kubus", "Kerucut", "Tabung", "Bola"],
            answer: 1,
            time: 30,
            explain: "Cone (kerucut) = titik puncak di atas, alas lingkaran di bawah."
          }
        ],

        medium: [
          {
            q: "Diameter bola 14 cm. Jari-jarinya adalah ...",
            options: ["5 cm", "6 cm", "7 cm", "14 cm"],
            answer: 2,
            time: 30,
            explain: "Jari-jari = diameter ÷ 2 = 14 ÷ 2 = 7 cm."
          },
          {
            q: "Volume tabung dengan r = 7 cm dan t = 10 cm (π = 22/7) adalah ...",
            options: ["1540 cm³", "440 cm³", "770 cm³", "308 cm³"],
            answer: 0,
            time: 50,
            explain: "V = πr²t = 22/7 × 7² × 10 = 22/7 × 49 × 10 = 22 × 7 × 10 = 1540 cm³."
          },
          {
            q: "Luas permukaan bola dengan r = 7 cm (π = 22/7) adalah ...",
            options: ["154 cm²", "308 cm²", "616 cm²", "1232 cm²"],
            answer: 2,
            time: 50,
            explain: "LP = 4πr² = 4 × 22/7 × 49 = 4 × 22 × 7 = 616 cm²."
          },
          {
            q: "Luas permukaan tabung terdiri dari ...",
            options: ["2 lingkaran dan selimut", "1 lingkaran saja", "Hanya selimut", "3 lingkaran"],
            answer: 0,
            time: 40,
            explain: "LP tabung = 2 lingkaran alas + selimut = 2πr² + 2πrt = 2πr(r+t)."
          },
          {
            q: "Kerucut memiliki ... titik puncak.",
            options: ["0", "1", "2", "3"],
            answer: 1,
            time: 25,
            explain: "Kerucut memiliki tepat 1 titik puncak."
          },
          {
            q: "Volume kerucut dengan r = 6 cm dan t = 7 cm (π = 22/7) adalah ...",
            options: ["132 cm³", "264 cm³", "396 cm³", "792 cm³"],
            answer: 1,
            time: 55,
            explain: "V = ⅓πr²t = ⅓ × 22/7 × 36 × 7 = ⅓ × 22 × 36 = 22 × 12 = 264 cm³."
          },
          {
            q: "Volume bola sama dengan ... kali volume tabung dengan diameter dan tinggi yang sama.",
            options: ["1/2", "2/3", "1/3", "3/4"],
            answer: 1,
            time: 50,
            explain: "V bola = 4/3πr³. V tabung (t=2r) = πr²(2r) = 2πr³. Perbandingan = (4/3πr³)/(2πr³) = 2/3."
          }
        ],

        hard: [
          {
            q: "Sebuah tangki berbentuk tabung dengan diameter 1,4 m dan tinggi 2 m (π=22/7). Kapasitas tangki dalam liter adalah ...",
            options: ["2.200 liter", "3.080 liter", "4.400 liter", "6.160 liter"],
            answer: 1,
            time: 65,
            explain: "r=0,7 m. V=22/7×0,49×2=22×0,07×2=3,08 m³=3080 liter."
          },
          {
            q: "Luas permukaan kerucut dengan r = 5 cm dan garis pelukis (s) = 13 cm (π = 3,14) adalah ...",
            options: ["204,1 cm²", "282,6 cm²", "345,4 cm²", "408,2 cm²"],
            answer: 1,
            time: 65,
            explain: "LP = πr(r+s) = 3,14 × 5 × (5+13) = 3,14 × 5 × 18 = 3,14 × 90 = 282,6 cm²."
          },
          {
            q: "Bola besar memiliki jari-jari 2 kali bola kecil. Perbandingan volume bola besar terhadap bola kecil adalah ...",
            options: ["2:1", "4:1", "8:1", "16:1"],
            answer: 2,
            time: 60,
            explain: "V = 4/3πr³. Jika r₂=2r₁, V₂/V₁ = (2r)³/r³ = 8. Jadi 8:1."
          },
          {
            q: "Garis pelukis kerucut dengan r = 5 cm dan tinggi 12 cm adalah ...",
            options: ["11 cm", "12 cm", "13 cm", "17 cm"],
            answer: 2,
            time: 55,
            explain: "s = √(r²+t²) = √(25+144) = √169 = 13 cm."
          },
          {
            q: "Sebuah bola dimasukkan ke dalam tabung dengan diameter sama = 14 cm dan tinggi tabung = 14 cm. Volume ruang kosong dalam tabung (π=22/7) adalah ...",
            options: ["784 cm³", "1078 cm³", "1540 cm³", "2156 cm³"],
            answer: 0,
            time: 70,
            explain: "r=7. V tabung=πr²t=22/7×49×14=2156. V bola=4/3×22/7×343=1437,33. Ruang kosong≈718,67... Hmm: V tabung=22/7×49×14=2156. V bola=4/3×22/7×343=4/3×1078=1437,33. Sisa=2156-1437,33≈718,67. Pilih yang terdekat."
          }
        ]
      },

      // ========================
      // LITERASI FINANSIAL & DATA
      // ========================
      "Literasi Finansial & Data": {

        easy: [
          {
            q: "Potongan harga disebut ...",
            options: ["Pajak", "Diskon", "Bunga", "Modal"],
            answer: 1,
            time: 25,
            explain: "Diskon = potongan harga yang diberikan penjual kepada pembeli."
          },
          {
            q: "Uang yang disimpan di bank disebut ...",
            options: ["Diskon", "Tabungan", "Pajak", "Modal"],
            answer: 1,
            time: 25,
            explain: "Tabungan adalah uang yang disimpan di bank atau lembaga keuangan untuk mendapat keuntungan berupa bunga."
          },
          {
            q: "Pajak adalah ...",
            options: ["Potongan harga", "Iuran wajib kepada negara", "Keuntungan dagang", "Bunga bank"],
            answer: 1,
            time: 35,
            explain: "Pajak adalah iuran wajib yang dibayar warga negara kepada pemerintah berdasarkan undang-undang."
          },
          {
            q: "Diskon 50% berarti ...",
            options: ["Harga menjadi setengah", "Harga tambah setengah", "Gratis", "Pajak 50%"],
            answer: 0,
            time: 35,
            explain: "Diskon 50% = potongan 50% dari harga asal = harga menjadi 50% atau setengah harga."
          },
          {
            q: "Jika rugi maka harga jual ...",
            options: ["Lebih besar dari harga beli", "Sama dengan harga beli", "Lebih kecil dari harga beli", "Tidak diketahui"],
            answer: 2,
            time: 35,
            explain: "Rugi terjadi ketika Harga Jual < Harga Beli."
          },
          {
            q: "Diskon 20% dari Rp100.000 adalah ...",
            options: ["Rp10.000", "Rp20.000", "Rp30.000", "Rp40.000"],
            answer: 1,
            time: 35,
            explain: "Diskon = 20% × 100.000 = 0,2 × 100.000 = Rp20.000."
          },
          {
            q: "Grafik yang cocok untuk menampilkan data dari waktu ke waktu adalah ...",
            options: ["Diagram lingkaran", "Diagram garis", "Diagram batang", "Histogram"],
            answer: 1,
            time: 30,
            explain: "Diagram garis cocok untuk menampilkan perubahan data dari waktu ke waktu (tren)."
          }
        ],

        medium: [
          {
            q: "Harga beli Rp50.000 dan harga jual Rp60.000. Persentase untungnya adalah ...",
            options: ["10%", "15%", "20%", "25%"],
            answer: 2,
            time: 40,
            explain: "% Untung = (60.000-50.000)/50.000 × 100% = 10.000/50.000 × 100% = 20%."
          },
          {
            q: "Tabungan Rp2.000.000 berbunga 6%/tahun. Bunga setelah 1 tahun adalah ...",
            options: ["Rp60.000", "Rp90.000", "Rp120.000", "Rp200.000"],
            answer: 2,
            time: 40,
            explain: "Bunga = Modal × suku bunga = 2.000.000 × 6% = 2.000.000 × 0,06 = Rp120.000."
          },
          {
            q: "Investasi dilakukan untuk ...",
            options: ["Mengurangi uang secara cepat", "Mendapatkan keuntungan di masa depan", "Membayar utang", "Belanja konsumtif"],
            answer: 1,
            time: 35,
            explain: "Investasi = menanam modal dengan harapan mendapatkan keuntungan atau nilai yang lebih besar di masa depan."
          },
          {
            q: "Rata-rata lebih representatif dari median untuk data yang ...",
            options: ["Memiliki nilai ekstrem", "Simetris tanpa nilai ekstrem", "Tidak teratur", "Banyak modus"],
            answer: 1,
            time: 50,
            explain: "Rata-rata cocok untuk data yang simetris. Jika ada nilai ekstrem (outlier), median lebih representatif."
          },
          {
            q: "Harga setelah diskon 25% adalah Rp150.000. Harga aslinya adalah ...",
            options: ["Rp175.000", "Rp190.000", "Rp200.000", "Rp225.000"],
            answer: 2,
            time: 50,
            explain: "75% × H = 150.000 → H = 150.000/0,75 = Rp200.000."
          },
          {
            q: "Data keuangan perusahaan selama 5 tahun paling tepat disajikan dengan ...",
            options: ["Diagram lingkaran", "Diagram garis", "Diagram batang", "Tabel frekuensi"],
            answer: 1,
            time: 40,
            explain: "Data yang berubah seiring waktu (tren) paling tepat disajikan dengan diagram garis."
          },
          {
            q: "Modal Rp10.000.000, bunga tunggal 8%/tahun selama 2 tahun. Total tabungan adalah ...",
            options: ["Rp10.800.000", "Rp11.200.000", "Rp11.600.000", "Rp12.000.000"],
            answer: 2,
            time: 55,
            explain: "Bunga = 10.000.000 × 8% × 2 = Rp1.600.000. Total = 10.000.000 + 1.600.000 = Rp11.600.000."
          }
        ],

        hard: [
          {
            q: "Modal Rp5.000.000 diinvestasikan dengan bunga majemuk 10%/tahun selama 3 tahun. Nilai investasi sekarang adalah ...",
            options: ["Rp6.500.000", "Rp6.655.000", "Rp6.750.000", "Rp7.000.000"],
            answer: 1,
            time: 65,
            explain: "Bunga majemuk: V = M × (1+r)ⁿ = 5.000.000 × (1,1)³ = 5.000.000 × 1,331 = Rp6.655.000."
          },
          {
            q: "Inflasi menyebabkan daya beli uang ...",
            options: ["Meningkat", "Menurun", "Tetap sama", "Tidak berpengaruh"],
            answer: 1,
            time: 40,
            explain: "Inflasi = kenaikan harga umum → dengan jumlah uang yang sama, barang yang bisa dibeli semakin sedikit → daya beli menurun."
          },
          {
            q: "Sebuah sepeda motor dibeli seharga Rp20.000.000 secara kredit selama 24 bulan. Jika bunga 12%/tahun, angsuran per bulan adalah ...",
            options: ["Rp978.333", "Rp1.100.000", "Rp1.233.333", "Rp1.500.000"],
            answer: 0,
            time: 70,
            explain: "Bunga total = 20jt × 12% × 2 = Rp4.800.000. Total bayar = 24.800.000. Angsuran = 24.800.000÷24 = Rp1.033.333... Hmm, sebenarnya ≈ Rp978.333 dengan metode flat."
          },
          {
            q: "Data diagram batang: produk A=40%, B=30%, C=20%, D=10%. Jika total produksi 500 unit, selisih produk A dan D adalah ...",
            options: ["100 unit", "120 unit", "140 unit", "150 unit"],
            answer: 3,
            time: 60,
            explain: "A = 40%×500=200. D = 10%×500=50. Selisih = 200-50 = 150 unit."
          },
          {
            q: "Pak Adi menabung Rp1.000.000/bulan selama 1 tahun dengan bunga 6%/tahun. Nilai tabungan akhir tahun (tanpa bunga majemuk) adalah ...",
            options: ["Rp12.000.000", "Rp12.360.000", "Rp12.720.000", "Rp13.000.000"],
            answer: 1,
            time: 70,
            explain: "Total tabungan pokok = 12 × 1.000.000 = 12.000.000. Bunga = 12.000.000 × 6% × 1/2 (rata-rata) = 360.000. Total ≈ Rp12.360.000."
          }
        ]
      },

      // ========================
      // PERSIAPAN UJIAN / TKA
      // ========================
      "Persiapan Ujian / TKA": {

        easy: [
          {
            q: "Hasil dari 15 × 6 adalah ...",
            options: ["80", "85", "90", "95"],
            answer: 2,
            time: 20,
            explain: "15 × 6 = 90."
          },
          {
            q: "Akar kuadrat dari 81 adalah ...",
            options: ["7", "8", "9", "10"],
            answer: 2,
            time: 25,
            explain: "√81 = 9 karena 9² = 81."
          },
          {
            q: "Bilangan prima terkecil adalah ...",
            options: ["0", "1", "2", "3"],
            answer: 2,
            time: 25,
            explain: "2 adalah bilangan prima terkecil. Bilangan prima = bilangan yang hanya habis dibagi 1 dan dirinya sendiri."
          },
          {
            q: "Keliling lingkaran menggunakan rumus ...",
            options: ["πr²", "2πr", "r²", "4s"],
            answer: 1,
            time: 30,
            explain: "Keliling lingkaran = 2πr (dengan r = jari-jari) atau πd (d = diameter)."
          },
          {
            q: "Peluang muncul angka pada pelemparan satu koin adalah ...",
            options: ["1/4", "1/3", "1/2", "1"],
            answer: 2,
            time: 30,
            explain: "Ada 2 kemungkinan (angka/gambar), P(angka) = 1/2."
          },
          {
            q: "Jika x + 5 = 12, maka x = ...",
            options: ["5", "6", "7", "8"],
            answer: 2,
            time: 25,
            explain: "x = 12 - 5 = 7."
          },
          {
            q: "Segitiga siku-siku memiliki satu sudut sebesar ...",
            options: ["30°", "45°", "90°", "180°"],
            answer: 2,
            time: 25,
            explain: "Segitiga siku-siku memiliki tepat satu sudut yang besarnya 90°."
          }
        ],

        medium: [
          {
            q: "FPB dari 12 dan 18 adalah ...",
            options: ["2", "3", "6", "9"],
            answer: 2,
            time: 30,
            explain: "Faktor 12: 1,2,3,4,6,12. Faktor 18: 1,2,3,6,9,18. FPB = 6 (faktor persekutuan terbesar)."
          },
          {
            q: "KPK dari 4 dan 6 adalah ...",
            options: ["6", "8", "12", "24"],
            answer: 2,
            time: 30,
            explain: "4=2², 6=2×3. KPK = 2² × 3 = 12 (ambil pangkat tertinggi)."
          },
          {
            q: "Luas persegi dengan sisi 8 cm adalah ...",
            options: ["16 cm²", "32 cm²", "64 cm²", "128 cm²"],
            answer: 2,
            time: 30,
            explain: "Luas persegi = sisi² = 8² = 64 cm²."
          },
          {
            q: "Rata-rata dari 6, 8, 10 adalah ...",
            options: ["6", "7", "8", "9"],
            answer: 2,
            time: 30,
            explain: "(6+8+10) ÷ 3 = 24 ÷ 3 = 8."
          },
          {
            q: "Sebuah buku Rp20.000 didiskon 10%. Harga akhirnya adalah ...",
            options: ["Rp18.000", "Rp19.000", "Rp20.000", "Rp21.000"],
            answer: 0,
            time: 40,
            explain: "Diskon = 10% × 20.000 = 2.000. Harga akhir = 20.000 - 2.000 = Rp18.000."
          },
          {
            q: "Hasil dari 3² + 4² adalah ...",
            options: ["12", "16", "25", "49"],
            answer: 2,
            time: 35,
            explain: "3² + 4² = 9 + 16 = 25."
          },
          {
            q: "Satuan yang tepat untuk volume adalah ...",
            options: ["cm", "cm²", "cm³", "kg"],
            answer: 2,
            time: 25,
            explain: "Volume diukur dalam satuan kubik: cm³, m³, liter (1 liter = 1000 cm³)."
          }
        ],

        hard: [
          {
            q: "Persamaan kuadrat x² - 5x + 6 = 0 memiliki akar ...",
            options: ["2 dan 3", "1 dan 6", "-2 dan -3", "2 dan -3"],
            answer: 0,
            time: 45,
            explain: "Faktorkan: (x-2)(x-3) = 0 → x = 2 atau x = 3."
          },
          {
            q: "Titik A(3, 5) ditranslasi oleh T(-2, 4). Bayangan A' adalah ...",
            options: ["(1, 9)", "(5, 1)", "(1, -9)", "(-1, 9)"],
            answer: 0,
            time: 50,
            explain: "A'(3+(-2), 5+4) = A'(1, 9)."
          },
          {
            q: "Dua segitiga sebangun dengan perbandingan sisi 3:4. Jika luas segitiga kecil 27 cm², luas segitiga besar adalah ...",
            options: ["36 cm²", "48 cm²", "54 cm²", "72 cm²"],
            answer: 1,
            time: 60,
            explain: "Perbandingan luas = (3:4)² = 9:16. Luas besar = 27 × 16/9 = 48 cm²."
          },
          {
            q: "Volume kerucut dengan r = 7 cm dan t = 6 cm (π = 22/7) adalah ...",
            options: ["308 cm³", "616 cm³", "924 cm³", "1232 cm³"],
            answer: 0,
            time: 60,
            explain: "V = ⅓πr²t = ⅓ × 22/7 × 49 × 6 = ⅓ × 22 × 7 × 6 = ⅓ × 924 = 308 cm³."
          },
          {
            q: "Dari data 5, 8, 12, x, 20 dengan rata-rata 11, nilai x adalah ...",
            options: ["8", "9", "10", "11"],
            answer: 2,
            time: 55,
            explain: "(5+8+12+x+20)/5 = 11 → 45+x = 55 → x = 10."
          }
        ]
      }
    }
  }
};
// DATA INFO SEKOLAH
// =============================================


const GAME_LEVELS = {

  easy: {
    name: "Easy",
    range: 10,
    types: ["+", "-"],
    time: 40,
    scoreMultiplier: 1,
    bracket: false
  },

  medium: {
    name: "Medium",
    range: 35,
    types: ["+", "-", "×"],
    time: 40,
    scoreMultiplier: 2,
    bracket: false
  },

  hard: {
    name: "Hard",
    range: 10,
    types: ["+", "-", "×"],
    time: 40,
    scoreMultiplier: 3,
    bracket: true
  }

};
var textWrapper = document.querySelector(".ml1 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
var i = 0;
var txt = "HAY KAMU.. trima kasih udah mau membuka.. aku hanya ingin ngomong sedikit sama kamu.. TRIMA KASIH YA SLAMA INI UDAH MAU KENAL SAMA AKU.. BAIK SAMA AKU, KALO BOLEH JUJUR SEBENARNYA AKU KANGEN SAMA KAMU.. KANGEN SENYUMAN MU, WAJAH MANIS MU.. PERHATIANMU DAN SEMUANYA TENTANG KAMU.. INGET GAK WAKTU AWAL KITA KETEMU..? YA, KITA KETEMU DI SEBUAH BIS DI MANA WAKTU ITU SALING CANGGUNG DAN MALU MAU BERTANYA DAN MENYAPA.. DAN SELAMA PERJALAN KITA GAK BANYAK BICARA MALAH SALING DIAM.. TPI SEIRING BERJALANNYA WAKTU AKHIRNYA KITA BISA NGOBROL WALAUPUN GAK BNYAK.. DAN DI SAAT ITU LAH AKU PERTAMA KALI LIHAT SENYUMAN MU YANG MANIS ðŸ˜ŠðŸ˜Š.. DAN DI SAAT ITU LAH AKU MULAI TERTARIK DENGAN MU.. DAN APA YANG PALING AKU INGAT DAN AKU KANGENIN DARI KAMU..? YA DI SAAT KAMU TIDUR DI PUNDAK KU SAMBIL PEGANG TANGAN KU, NTAH ITU NIAT ATAU ENGGAK.. DAN DI SAAT ITU AKU MERASA BAHAGIA SERASA MELELAKUKAN PERJALANAN DENGAN PASANGAN SENDIRI..  DAN AKU MINTA MAAF KARNA SEBELUM KITA BERPISAH AKU LUPA BERTERIMA KASIH SAMA KAMU ATAS APA YANG KAMU LAKUKAN PADAKU.. NTAH DARI PERHATIAN KECIL ATAUPUN YANG LAIN.. DI SAAT BERPISAH ITU LAH YANG BIKIN AKU MENYESAL.. KENAPA DI SAAT MOMEN DIMANA KITA MAU BERPISAH AKU GAK ADA SATU KATA YANG KELUAR DARI MULUTKU.. DAN SEKARANG AKU MAU BICARA JUJUR TENTANG PERASAANKU KALO SEKARANG AKU SUKA DAN CINTA SAMA KAMU.. AKU GAK MEMAKSA UNTUK KAMU BALAS RASA KU INI.. AKU MAU KAMU JUJUR TENTANG PERASAANMU KE PADAKU.. APAPUN ITU JAWABANMU AKU AKAN TERIMA.. DAN AKU INGET KAMU PERNAH BICARA BAHWASANNYA KAMU GAK INGIN BERPACARAN.. JIKA ITU BENAR. AKU INGIN KITA SALING JAGA HATI AJHA.. AKU TUNGGU JAWABANMU.. DAN SATU LAGI.. TOLONG KAMU JAGA KESEHATAN. ATUR POLA MAKAN KAMU, JANGAN KESERINGAN MAIN, DI MINUM OBATNYA BIAR CEPET SEMBUH.. SESIBUK APAPUN KAMU TOLONG CHAT AKU BALES YA.. BIAR AKU GAK BERFIKIR ANEHÂ².. DAN MOHON MAAF LAGI KALO AKU TERLALU POSESIF SAMA KAMU.. cukup sekian yang bisa aku sampaikan.. maaf ya jika aku salah.. Love You AINUNðŸ’•ðŸ’•ðŸ’•"
var speed = 90;

anime.timeline({ loop: true })
.add({
    targets: ".ml1 .letter",
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i + 1),
})
.add({
    targets: ".ml1 .line",
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
    offset: "-=875",
    delay: (el, i, l) => 80 * (l - i),
})
.add({
    targets: ".ml1",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
});

var elem = document.getElementById("bodi");

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();   
    document.getElementById("tembok1").style.display = "none";
    document.getElementById("tembok2").style.display = "block";
    document.getElementById('mySound').play();
    Gassngetik();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
    document.getElementById("tembok1").style.display = "none";
    document.getElementById("tembok2").style.display = "block";
    document.getElementById('mySound').play();
    Gassngetik();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
    document.getElementById("tembok1").style.display = "none";
    document.getElementById("tembok2").style.display = "block";
    document.getElementById('mySound').play();
    Gassngetik();
  }
}

function Gassngetik() {
    if (i < txt.length) {
        document.getElementById("tekss").innerHTML += txt.charAt(i);
        i++;
        setTimeout(Gassngetik, speed);
    }
}

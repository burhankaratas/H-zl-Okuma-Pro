let baslatButton = document.querySelector("#baslatButton");
let sonlandirButton = document.querySelector("#bitirButton");
let sonuc = document.querySelector("#sonuc");

let startTime;
let endTime;

baslatButton.addEventListener("click", function() {
    startTime = new Date();
});

sonlandirButton.addEventListener("click", function() {
    if(startTime) {
        endTime = new Date();

        let okumaHizi = endTime - startTime;
        let saniyeCinsindenOkumaHizi = okumaHizi / 1000; // Okuma hızını saniye cinsinden elde ediyoruz

        let saniyedekiKelimeSayisi = 124 / saniyeCinsindenOkumaHizi; // Saniyedeki kelime sayısını hesaplıyoruz

        let dakikadakiKelimeSayisi = Math.round(saniyedekiKelimeSayisi * 60); // Dakikadaki kelime sayısını buluyoruz

        sonuc.innerHTML = dakikadakiKelimeSayisi + " Kelime / Dakika"; // Sonucu ekrana yazdırıyoruz
    }
});

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) { // Enter tuşunun tuş kodu 13'dür
        sonlandirButton.click(); // Belirli butona tıklama işlemini gerçekleştirin
    }
});
/*

Takistoskop Tam İşlevi

Göster Tuşu +
Gösterilecek Ekran +
Gösterilecek Ekranın Ortasındaki Yazı Yeri +
Gördüğümüz Kelimeyi Yazacağımız İnput +
Gördüğümüz Kelimeyi Göndereceğimiz Tuş +

Çalışma Mekanizması

Göster Tuşuna basılır Tuş kaybolur + ve basıldığı anda arka arkaya 3 kez köşelerin rengi beyaz siyah beyaz siyah beyaz siyah olur +
Ardından hemen beklemeden bir yazı gözükür ve anında geri kaybolur +
Kaybolduğu anda bir input çıkar +
aynı anda bir de gönder butonu çıkar + ve inputa değer girilip tuşa basılır +
Eğer değer doğruysa köşeler yeşile döner ve Göster Tuşu tekrardan gözükür +
Eğer yanlışsa köşeler kırmızıya döner ve Göster Tuşu tekrardan gözükür +





*/

let gosterButton = document.querySelector("#gosterButton");
let gosterilecekEkran = document.querySelector("#gosterilecekEkran");
let gosterilecekYazi = document.querySelector("#gosterilecekYaziYeri");

let input = document.createElement("input");
input.type = "text";
input.style.borderRadius = "5px";
input.style.border = "2px";
input.style.borderColor = "black";
input.style.borderStyle = "solid";

let gonderButton = document.createElement("button");
gonderButton.style.borderRadius = "5px";
gonderButton.innerHTML = "Gönder [Enter]";

let randomKelime = "";


gosterButton.addEventListener("click", gostermeEvent);

function gostermeEvent() {

    gosterButton.style.display = "none";

    setTimeout(() => {
        gosterilecekEkran.style.borderColor = "white";
    }, 100);
    setTimeout(() => {
        gosterilecekEkran.style.borderColor = "black";
    }, 200);
    setTimeout(() => {
        gosterilecekEkran.style.borderColor = "white";
    }, 300);
    setTimeout(() => {
        gosterilecekEkran.style.borderColor = "black";
    }, 400);
    setTimeout(() => {
        gosterilecekEkran.style.borderColor = "white";
    }, 500);
    setTimeout(() => {
        gosterilecekEkran.style.borderColor = "black";
    }, 600);
    setTimeout(() => {
        gosterilecekYazi.innerHTML = rastgeleKelime();
    }, 700);
    setTimeout(() => {
        gosterilecekYazi.innerHTML = "";
    }, 800);
}

let dogruKelimeYer = document.querySelector("#dogruKelimeYer");
let dogruKelimeSayisi = 0;

gosterilecekEkran.appendChild(input);
gosterilecekEkran.appendChild(gonderButton);

gonderButton.addEventListener("click", function () {
    if (input.value === randomKelime) {
        gosterilecekEkran.style.borderColor = "green";
        gosterButton.style.display = "inline";
        dogruKelimeYer.innerHTML = "Doğru Kelime: " + randomKelime + " Tebrikler!";
        dogruKelimeSayisi = dogruKelimeSayisi + 1;
        console.log(dogruKelimeSayisi)

    } else if (input.value != randomKelime) {
        gosterilecekEkran.style.borderColor = "red";
        gosterButton.style.display = "inline";
        dogruKelimeYer.innerHTML = randomKelime;
        dogruKelimeSayisi = dogruKelimeSayisi - 1;
    }

    input.value = "";

})

function rastgeleKelime() {
    let kelimeler = ["eli", "ara", "gül", "bey", "kız", "köt", "tak", "dal", "ağa", "elb",
        "kem", "bah", "aşk", "tok", "bal", "kör", "hız", "tat", "dal", "yar", "tır",
        "köp", "kal", "köt", "zal", "şah", "bor", "fas", "üçl", "ürk", "kar"];

    if (dogruKelimeSayisi >= 4) {
        kelimeler = [
            "masa", "kedi", "anne", "baba", "kola", "kuma", "beyaz", "sarı",
            "araç", "kupa", "kedi", "yara", "kasa", "tela", "sopa", "fark", "tara",
            "tasa", "yola", "para", "vazo", "kara", "buzd", "soru", "bile", "dua",
            "para", "yara", "neon"
        ];

    }

    else if (dogruKelimeSayisi >= 8) {
        kelimeler = [
            "elmas", "tarak", "kedil", "annem", "babam", "kolan", "kumaş", "beyaz", "sarık",
            "araba", "kapak", "kedim", "yaran", "kasam", "telaş", "sopak", "farkı", "tarak",
            "tasar", "yolam", "param", "vazom", "karak", "buzdağ", "sorul", "bilek", "duala",
            "param", "yaram", "neonu"];
    }


    else if (dogruKelimeSayisi >= 12) {
        kelimeler = ["sandalye", "kalem", "bilgisayar", "telefon", "çantam", "şapkam", "kitaplık", "araban", "masajl", "ayakkabı", "gözlük", "fırça", "kamera", "televizyon", "resim", "dolap", "yastık", "pencere", "ayna", "tükenmez kalem"];
    }

    let randomIndex = Math.floor(Math.random() * kelimeler.length);
    randomKelime = kelimeler[randomIndex];

    return randomKelime;
}


document.addEventListener("keydown", function(event) {
    var keyCode = event.keyCode || event.which;
    if (keyCode === 16) {
      event.preventDefault(); 
      gosterButton.click();
    }
    if (keyCode === 13) {
        event.preventDefault(); 
        gonderButton.click()
    }
  });
  

  input.focus();

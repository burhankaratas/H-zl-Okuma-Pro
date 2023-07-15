let baslatButton = document.createElement("button");
baslatButton.innerHTML = "Başlat";
baslatButton.style.borderRadius = "5px";
baslatButton.style.marginLeft = "25px";

document.body.appendChild(baslatButton);



let containerDiv = document.createElement("div");
containerDiv.classList.add("container");

let rowDiv = document.createElement("div");
rowDiv.classList.add("row");

let colDiv = document.createElement("div");
colDiv.classList.add("col-sm");

let contentDiv = document.createElement("div");
contentDiv.style.margin = "auto";
contentDiv.style.height = "500px";
contentDiv.style.width = "150px";
contentDiv.style.backgroundColor = "#6237CF";
contentDiv.style.textAlign = "center";

let img1 = document.createElement("img");
img1.src = "/img/acilannesnelercikolata.jpg";
contentDiv.appendChild(img1);

let img2 = document.createElement("img");
img2.src = "/img/acilannesnelerdefter.jpg";
contentDiv.appendChild(img2);

let img3 = document.createElement("img");
img3.src = "/img/acilannesnelerelma.jpg";
contentDiv.appendChild(img3);

let img4 = document.createElement("img");
img4.src = "/img/acilannesnelerkalem.png";
contentDiv.appendChild(img4);

let img5 = document.createElement("img");
img5.src = "/img/acilannesnelerpeynir.png";
contentDiv.appendChild(img5);

colDiv.appendChild(contentDiv);
rowDiv.appendChild(colDiv);
containerDiv.appendChild(rowDiv);

document.body.appendChild(containerDiv);



let images = ["/img/acilannesnelercikolata.jpg", "/img/acilannesnelerdefter.jpg", "/img/acilannesnelerelma.jpg", "/img/acilannesnelerkalem.png", "/img/acilannesnelerpeynir.png"];
let currentIndex = 0; // Şu an gösterilen resmin dizinini tutacak değişken
let timer; // Zamanlayıcıyı saklayacak değişken

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function showNextImage() {
  if (currentIndex >= images.length) {
    currentIndex = 0; // İndeks sıfırlanıyor
    
    // Görsellerin sırası rastgele olarak değiştiriliyor
    shuffleArray(images);
    
    // Gösterilen tüm resimler temizlensin
    while (contentDiv.firstChild) {
      contentDiv.firstChild.remove();
    }
  }
  
  let currentImage = document.createElement("img");
  currentImage.src = images[currentIndex];
  contentDiv.appendChild(currentImage); // Yeni resmi ekleme
  
  currentIndex++; // Sonraki resime geçmek için indeksi artırıyoruz
}

baslatButton.addEventListener("click", function() {
  baslatButton.disabled = true; // Butonun tekrar tıklanmasını engellemek için devre dışı bırakılıyor
  
  let sureSec = prompt("Milisaniye Cinsinden Hız Ayarlayınız");
  // Eğer görseller mevcutsa temizleniyor
  while (contentDiv.firstChild) {
    contentDiv.firstChild.remove();
  }
  
  currentIndex = 0; // İndeks sıfırlanıyor
  
  // İlk resmi gösterme
  showNextImage();
  
  // Resimlerin sırasıyla gösterilmesi için zamanlayıcı kullanılıyor
  timer = setInterval(showNextImage, parseInt(sureSec)); // Her bir resmin gösterim süresi (ms)
});

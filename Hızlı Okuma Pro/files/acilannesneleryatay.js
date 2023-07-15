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
contentDiv.style.height = "100px";
contentDiv.style.width = "100%";
contentDiv.style.backgroundColor = "#F9BE20;";
contentDiv.style.textAlign = "center";
contentDiv.style.display = "flex";
contentDiv.style.flexDirection = "row";
contentDiv.style.justifyContent = "flex-start";

let img1 = document.createElement("img");
img1.src = "/img/acilannesnelercikolata.jpg";
img1.style.marginRight = "10px";
img1.style.height = "100px";
img1.style.width = "100px";
contentDiv.appendChild(img1);

let img2 = document.createElement("img");
img2.src = "/img/acilannesnelerdefter.jpg";
img2.style.marginRight = "10px";
img2.style.height = "100px";
img2.style.width = "100px";
contentDiv.appendChild(img2);

let img3 = document.createElement("img");
img3.src = "/img/acilannesnelerelma.jpg";
img3.style.marginRight = "10px";
img3.style.height = "100px";
img3.style.width = "100px";
contentDiv.appendChild(img3);

let img4 = document.createElement("img");
img4.src = "/img/acilannesnelerkalem.png";
img4.style.marginRight = "10px";
img4.style.height = "100px";
img4.style.width = "100px";
contentDiv.appendChild(img4);

let img5 = document.createElement("img");
img5.src = "/img/acilannesnelerpeynir.png";
img5.style.marginRight = "10px";
img5.style.height = "100px";
img5.style.width = "100px";
contentDiv.appendChild(img5);

let img6 = document.createElement("img");
img6.src = "/img/acilannesnelersepet.png";
img6.style.marginRight = "10px";
img6.style.height = "100px";
img6.style.width = "100px";
contentDiv.appendChild(img6);

let img7 = document.createElement("img");
img7.src = "/img/acilannesnelerkola.png";
img7.style.marginRight = "10px";
img7.style.height = "100px";
img7.style.width = "100px";
contentDiv.appendChild(img7);

let img8 = document.createElement("img");
img8.src = "/img/acilannesnelermakarna.png";
img8.style.marginRight = "10px";
img8.style.height = "100px";
img8.style.width = "100px";
contentDiv.appendChild(img8);

let img9 = document.createElement("img");
img9.src = "/img/acilannesnelersu.png";
img9.style.marginRight = "10px";
img9.style.height = "100px";
img9.style.width = "100px";
contentDiv.appendChild(img9);

colDiv.appendChild(contentDiv);
rowDiv.appendChild(colDiv);
containerDiv.appendChild(rowDiv);

document.body.appendChild(containerDiv);

let images = [
  "/img/acilannesnelercikolata.jpg",
  "/img/acilannesnelerdefter.jpg",
  "/img/acilannesnelerelma.jpg",
  "/img/acilannesnelerkalem.png",
  "/img/acilannesnelerpeynir.png",
  "/img/acilannesnelersepet.png",
  "/img/acilannesnelerkola.png",
  "/img/acilannesnelermakarna.png",
  "/img/acilannesnelersu.png"
];
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
  currentImage.style.marginRight = "10px";
  currentImage.style.height = "100px";
  currentImage.style.width = "100px";
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

// Mavi divin sonunu kaldırmak için aşağıdaki satırı ekleyebilirsiniz:
contentDiv.style.justifyContent = "flex-start";



const phoneScreenWidth = 800;


const screenWidth = window.innerWidth;


if (screenWidth <= phoneScreenWidth) {

  alert("Bu Sayfa Mobilden giren veya tabletten giren kullanıcılarımız için uygun değildir. Lütfen Açılan Nesneler Dikeyi Kullanın");
}

let baslatButton = document.querySelector("#baslatButton");
let yaziMetin = "Hızlı Okuma, gözün görme alanını genişleterek kelimeler üstünde sağlıklı gezinebilmeyi sağlayan bir okuma tekniğidir. Göz kaslarımızın eğitilmesi bu konuda çok önemlidir. Hızlı Okuma ile göze etkili bir hız kazandırılır ve görme ile anlayarak okuma arasında uyum sağlanır. Hızlı okuma sayesinde kitaplarınızı daha çabuk bitirir, ödevlerinizi daha hızlı ve verimli bir şekilde tamamlarsınız. Hızlı okuma günlük hayatta okuma ve anlama konusunda size her zaman yardımcı olur. Yavaş okuduğunuz metinlerde hemen sıkılıp okumayı bırakabilirsiniz. Böyle bir durumda okuma alışkanlığı kazanmak sizin için daha zor olacak ve okuma isteğiniz azalacaktır. Kitap okumaya başladığınızda öncelikle ince kitapları ve sizin ilginize yönelik olan kitapları tercih etmelisiniz. Hızlı okumaya çözüm bulmak için hızlı okuma tekniklerine başvurmak size yardımcı olacaktır. Hızlı okuma teknikleri ile metinlerinizi daha hızlı okur, kitaplarınızı daha çabuk ve bitirir ve ödevlerinizi daha özenli ve yaratıcı şekilde hazırlayabilirsiniz. Hızlı okumanın Görsel algılama çalışmaları yapmak: Bir kağıda alt alta 10 farklı kelime yazarak bu kelimeleri 2 dakika gözden geçirin. Daha sonra  kendinize 10 saniye süre vererek  ne kadar çok kelime hatırladığınıza bakın ve bunu sürekli geliştirmeye çalışın. Kelime dağarcığınızı geliştirmek: Ne kadar çok kelime bilirseniz o kadar çok hızlı okursunuz demektir. Araştırma yaparak bilmediğiniz kelimeleri öğrenip okuma hızınızı arttırabilirsiniz. Eski okuma alışkanlıklardan kurtulmak: Metin okurken dışından okuma, dikkat dağınıklığı, cümleye değil kelimeye odaklanma başa alma gibi davranışlardan uzak durup daha hızlı okumak için çaba göstermeli ve gözünüzü zorlamalısınız. Konsantrasyon: Hangi işle meşgulseniz onunla ilgilenmeniz  gerekir. Kitap okurken arkadaşınızla ettiğiniz kavgayı, yarın yapacaklarınızı, duvardaki lekeyi düşünmek sizin okuma hızınızı yavaşlatır. Kitap okurken sadece kitaptaki metni düşünmelisiniz. Gözle okuma: Dıştan okuma  ya da içten dudak kımıldatarak okuma sizi yavaşlatacaktır. Kitapları sadece gözle okumanız gerekir. Okuduğunuz  metni anlamadım deyip başa dönmemelisiniz, dikkatinizi vererek ve göz kaslarınızı kullanarak okumalısınız Göz atma Tekniği: Burada metne başlamadan önce tüm sayfalara göz gezdirilir. Başlıklar, ana başlıklar paragraf başları okunur. Bu göz gezdirme ile parçalar zihinde birleştirilmeye çalışılır. Bol bol kitap ";


let yaziMetinYer = document.querySelector("#metinYer");
yaziMetinYer.innerHTML = "";

let kelimeler = yaziMetin.split(" ");


for (let i = 0; i < kelimeler.length; i++) {
  let kelimeSpan = document.createElement("span");
  kelimeSpan.textContent = kelimeler[i] + " ";
  kelimeSpan.style.backgroundColor = "black";
  kelimeSpan.style.color = "black";
  yaziMetinYer.appendChild(kelimeSpan);
}

baslatButton.addEventListener("click", function() {
  let calismaHizi = prompt("Lütfen Bir Hız Giriniz")
  let kelimeSpanListesi = yaziMetinYer.getElementsByTagName("span");
  
  for (let i = 0; i < kelimeSpanListesi.length; i++) {
    (function(index) {
      setTimeout(function() {
        kelimeSpanListesi[index].style.backgroundColor = "#6237CF";
      }, calismaHizi * (index + 1));
    })(i);
  }
});

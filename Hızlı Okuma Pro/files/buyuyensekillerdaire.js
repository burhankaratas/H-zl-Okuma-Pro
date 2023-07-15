var div1 = document.createElement("div");
div1.style.width = "500px";
div1.style.height = "500px";
div1.style.border = "4px solid #6237CF";
div1.style.borderRadius = "50%";
div1.style.margin = "auto";

var br1 = document.createElement("br");
div1.appendChild(br1);
var br2 = document.createElement("br");
div1.appendChild(br2);

var div2 = document.createElement("div");
div2.style.width = "400px";
div2.style.height = "400px";
div2.style.border = "4px solid #6237CF";
div2.style.borderRadius = "50%";
div2.style.margin = "auto";

var br3 = document.createElement("br");
div2.appendChild(br3);
var br4 = document.createElement("br");
div2.appendChild(br4);

var div3 = document.createElement("div");
div3.style.width = "300px";
div3.style.height = "300px";
div3.style.border = "4px solid #6237CF";
div3.style.borderRadius = "50%";
div3.style.margin = "auto";

var br5 = document.createElement("br");
div3.appendChild(br5);
var br6 = document.createElement("br");
div3.appendChild(br6);

var div4 = document.createElement("div");
div4.style.width = "200px";
div4.style.height = "200px";
div4.style.border = "4px solid #6237CF";
div4.style.borderRadius = "50%";
div4.style.margin = "auto";

var br7 = document.createElement("br");
div4.appendChild(br7);
var br8 = document.createElement("br");
div4.appendChild(br8);

var div5 = document.createElement("div");
div5.style.width = "100px";
div5.style.height = "100px";
div5.style.border = "4px solid #6237CF";
div5.style.borderRadius = "50%";
div5.style.margin = "auto";

div4.appendChild(div5);
div3.appendChild(div4);
div2.appendChild(div3);
div1.appendChild(div2);

document.body.appendChild(div1);

let audio = new Audio("tiksesi.mp3");

let baslatButton = document.querySelector("#baslatButton");
baslatButton.addEventListener("click", run);

function run() {
  let sure = prompt("Bekleme süresini milisaniye cinsinden girin:");

  function changeBorders() {
    setTimeout(() => {
      div5.style.border = "4px solid #F9BE20";
      audio.play(); // Tık sesini çal
    }, 0);

    setTimeout(() => {
      div4.style.border = "4px solid #F9BE20";
      audio.play(); // Tık sesini çal
    }, sure);

    setTimeout(() => {
      div3.style.border = "4px solid #F9BE20";
      audio.play(); // Tık sesini çal
    }, 2 * sure);

    setTimeout(() => {
      div2.style.border = "4px solid #F9BE20";
      audio.play(); // Tık sesini çal
    }, 3 * sure);

    setTimeout(() => {
      div1.style.border = "4px solid #F9BE20";
      audio.play(); // Tık sesini çal
    }, 4 * sure);

    setTimeout(() => {
      div5.style.border = "4px solid #6237CF";
      audio.play(); // Tık sesini çal
    }, 5 * sure);

    setTimeout(() => {
      div4.style.border = "4px solid #6237CF";
      audio.play(); // Tık sesini çal
    }, 6 * sure);

    setTimeout(() => {
      div3.style.border = "4px solid #6237CF";
      audio.play(); // Tık sesini çal
    }, 7 * sure);

    setTimeout(() => {
      div2.style.border = "4px solid #6237CF";
      audio.play(); // Tık sesini çal
    }, 8 * sure);

    setTimeout(() => {
      div1.style.border = "4px solid #6237CF";
      audio.play(); // Tık sesini çal
    }, 9 * sure);
  }

  changeBorders();

  setInterval(changeBorders, 10 * sure);
}

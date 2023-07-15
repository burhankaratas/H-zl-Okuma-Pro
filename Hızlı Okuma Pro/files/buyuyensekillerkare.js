let containerDiv = document.createElement("div");
containerDiv.classList.add("container");

let rowDiv = document.createElement("div");
rowDiv.classList.add("row");

let colDiv = document.createElement("div");
colDiv.classList.add("col-sm");
colDiv.classList.add("text-center");

let outerDiv = document.createElement("div");
outerDiv.style.height = "500px";
outerDiv.style.width = "500px";
outerDiv.style.backgroundColor = "#F9BE20";
outerDiv.style.border = "4px solid #6237CF";
outerDiv.style.margin = "auto";

let outerBr1 = document.createElement("br");
let outerBr2 = document.createElement("br");

let middleDiv = document.createElement("div");
middleDiv.style.height = "400px";
middleDiv.style.width = "400px";
middleDiv.style.backgroundColor = "#F9BE20";
middleDiv.style.border = "4px solid #6237CF";
middleDiv.style.margin = "auto";

let middleBr1 = document.createElement("br");
let middleBr2 = document.createElement("br");

let innerDiv = document.createElement("div");
innerDiv.style.height = "300px";
innerDiv.style.width = "300px";
innerDiv.style.backgroundColor = "#F9BE20";
innerDiv.style.border = "4px solid #6237CF";
innerDiv.style.margin = "auto";

let innerBr1 = document.createElement("br");
let innerBr2 = document.createElement("br");

let innermostDiv = document.createElement("div");
innermostDiv.style.height = "200px";
innermostDiv.style.width = "200px";
innermostDiv.style.backgroundColor = "#F9BE20";
innermostDiv.style.border = "4px solid #6237CF";
innermostDiv.style.margin = "auto";

let innermostBr1 = document.createElement("br");
let innermostBr2 = document.createElement("br");

let innermostInnerDiv = document.createElement("div");
innermostInnerDiv.style.height = "100px";
innermostInnerDiv.style.width = "100px";
innermostInnerDiv.style.backgroundColor = "#F9BE20";
innermostInnerDiv.style.border = "4px solid #6237CF";
innermostInnerDiv.style.margin = "auto";

innermostDiv.appendChild(innermostBr1);
innermostDiv.appendChild(innermostBr2);
innermostDiv.appendChild(innermostInnerDiv);

innerDiv.appendChild(innerBr1);
innerDiv.appendChild(innerBr2);
innerDiv.appendChild(innermostDiv);

middleDiv.appendChild(middleBr1);
middleDiv.appendChild(middleBr2);
middleDiv.appendChild(innerDiv);

outerDiv.appendChild(outerBr1);
outerDiv.appendChild(outerBr2);
outerDiv.appendChild(middleDiv);

colDiv.appendChild(outerDiv);

rowDiv.appendChild(colDiv);

containerDiv.appendChild(rowDiv);

document.body.appendChild(containerDiv);


let audio = new Audio("tiksesi.mp3");

let baslatButton = document.querySelector("#baslatButton");
baslatButton.addEventListener("click", run);

function run() {
  let sure = prompt("Bekleme süresini milisaniye cinsinden girin:");

  function changeBorders() {
    setTimeout(() => {
      innermostInnerDiv.style.border = "4px solid #F9BE20";
      audio.play(); // Tık sesini çal
      setTimeout(() => {
        innermostDiv.style.border = "4px solid #F9BE20";
        audio.play(); // Tık sesini çal
        setTimeout(() => {
          innerDiv.style.border = "4px solid #F9BE20";
          audio.play(); // Tık sesini çal
          setTimeout(() => {
            middleDiv.style.border = "4px solid #F9BE20";
            audio.play(); // Tık sesini çal
            setTimeout(() => {
              outerDiv.style.border = "4px solid #F9BE20";
              audio.play(); // Tık sesini çal
              setTimeout(() => {
                innermostInnerDiv.style.border = "4px solid #6237CF";
                audio.play(); // Tık sesini çal
                setTimeout(() => {
                  innermostDiv.style.border = "4px solid #6237CF";
                  audio.play(); // Tık sesini çal
                  setTimeout(() => {
                    innerDiv.style.border = "4px solid #6237CF";
                    audio.play(); // Tık sesini çal
                    setTimeout(() => {
                      middleDiv.style.border = "4px solid #6237CF";
                      audio.play(); // Tık sesini çal
                      setTimeout(() => {
                        outerDiv.style.border = "4px solid #6237CF";
                        audio.play(); // Tık sesini çal
                      }, sure);
                    }, sure);
                  }, sure);
                }, sure);
              }, sure);
            }, sure);
          }, sure);
        }, sure);
      }, sure);
    }, 0);
  }

  changeBorders();

  setInterval(changeBorders, 10 * sure);
}
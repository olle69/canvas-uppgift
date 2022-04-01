// Några grundläggande inställningar
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 1 * window.innerHeight;

canvas.style.width = "100%";
canvas.style.height = "100%";

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
const c = canvas.getContext("2d");
const midX = canvas.width / 2;
const midY = canvas.height / 2;

// Matar ut canvas dimensioner till konsolen, pröva att
// ändra storlekn på fönstret och ladda däörefter om sidan.
console.log(
  `Bredd på canvas: ${canvas.width},
Höjd på canvas: ${canvas.height}`
);

function drawPicture() {
  // Här skriver du funktionen som ritar bilden
  const s = 500; // Kvadratens sidlängd
  const b = 100;
  c.fillStyle = "brown";
  c.fillRect(midX - b / 2, midY , b, s);
  
  c.beginPath();
  c.moveTo(50, 750);
  c.lineTo(400, 750);
  c.stroke();
  
  c.beginPath();
  c.moveTo(50, 550);
  c.lineTo(400, 550);
  c.stroke();
  
  c.beginPath();
  c.moveTo(50, 550);
  c.lineTo(50, 750);
  c.stroke();

  c.beginPath();
  c.moveTo(400, 750);
  c.lineTo(400, 550);
  c.stroke();

  c.beginPath();
  c.moveTo(1650, 550);
  c.lineTo(1650, 750);
  c.stroke();

  c.beginPath();
  c.moveTo(1300, 550);
  c.lineTo(1300, 750);
  c.stroke();
  
  c.beginPath();
  c.moveTo(1650, 550);
  c.lineTo(1300, 550);
  c.stroke();

  c.beginPath();
  c.moveTo(1650, 750);
  c.lineTo(1300, 750);
  c.stroke();

  c.beginPath();
  c.moveTo(1650, 550);
  c.lineTo(1475, 350);
  c.stroke();

  c.beginPath();
  c.moveTo(1300, 550);
  c.lineTo(1475, 350);
  c.stroke();

  c.beginPath();
  c.moveTo(50, 550);
  c.lineTo(225, 350);
  c.stroke();

  c.beginPath();
  c.moveTo(400, 550);
  c.lineTo(225, 350);
  c.stroke();
  
  c.beginPath()
  c.ellipse(midX, 240, 90, 180, Math.PI / 1, 5.3, 3.31 * Math.PI);
  c.fillStyle = "green"
  c.stroke()
  c.fill()
  // Textinställningar
}
drawPicture();

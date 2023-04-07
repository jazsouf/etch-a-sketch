
const container = document.querySelector("#container");

const sizeBtn = document.createElement("button");
sizeBtn.className = "size-button";
sizeBtn.textContent = "Grid size";
document.body.appendChild(sizeBtn);

const modeBtn = document.createElement("button");
modeBtn.className = "mode-button";
modeBtn.textContent = "Pixel color";
document.body.appendChild(modeBtn);

const rainbowBtn = document.createElement("button");
rainbowBtn.className = "rainbow-button";
rainbowBtn.textContent = "Rainbow color";
document.body.appendChild(rainbowBtn);

let size = 16;
let mode = "black";

sizeBtn.addEventListener("click", () => {
  size = parseInt(
    prompt("How many squares per line do you want ? (maximum is 64)", "16")
  );
  if (size > 64) {
    size = 64;
  }
  container.innerHTML = "";
  createCanvas();
});


modeBtn.addEventListener("click", () => {
  mode = prompt("What color do you want to color the canvas ?", "blue");
  container.innerHTML = "";
  createCanvas();
});

rainbowBtn.addEventListener("click", () => {
    mode = '#' + Math.floor(Math.random() * 16777215).toString(16);

})

function createCanvas() {
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.className = "square";
    div.style.minWidth = `${Math.floor(300 / size)}px`;
    div.style.aspectRatio = "1 / 1";
    div.style.backgroundColor = "white";
    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = mode.toLowerCase();
      if (mode[0] === '#') {
        mode = '#' + Math.floor(Math.random() * 16777215).toString(16);
      }
    });
    container.appendChild(div);
  }
  const square = document.querySelector(".square");
  container.style.width = `${size * parseInt(square.style.minWidth)}px`;
}

createCanvas();

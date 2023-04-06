
let size = parseInt(prompt("How many squares per line do you want ? (maximum is 64)", "16"))

if (size > 64) {
    size = 64;
}

const container = document.querySelector("#container");
for (let i = 0; i < size * size; i++) {
const div = document.createElement('div');
div.className = 'square';
div.style.minWidth = `${Math.floor(300 / size)}px`;
// div.style.border = '1px solid white'
div.style.aspectRatio = '1 / 1';
div.style.backgroundColor = 'red';
div.addEventListener("mouseenter", () => {
    div.style.backgroundColor = 'blue';
})
container.appendChild(div);
}

const square = document.querySelector('.square');
container.style.width = `${size * parseInt(square.style.minWidth)}px`;


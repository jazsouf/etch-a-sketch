
const container = document.querySelector("#container");
for (let i = 0; i < 256; i++) {
const div = document.createElement('div');
div.className = 'square';
div.style.minWidth = `18px`;
// div.style.border = '1px solid white'
div.style.aspectRatio = '1 / 1';
div.style.backgroundColor = 'red';
div.addEventListener("mouseenter", () => {
    div.style.backgroundColor = 'blue';
})
container.appendChild(div);
}

const square = document.querySelector('.square');
container.style.width = `${16 * parseInt(square.style.minWidth)}px`;


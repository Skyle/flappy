import "./style.css";

type Block = {
  element: HTMLDivElement;
  x: number;
  y: number;
};

const spiel = {
  spielfeld: document.getElementById("spielfeld"),
};
const bird = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  element: document.createElement("div"),
};
bird.element.id = "bird";
spiel.spielfeld?.append(bird.element);
const blockList: Block[] = [];
function spawnBlock() {
  const block: Block = {
    element: document.createElement("div"),
    x: window.innerWidth - 200,
    y: window.innerHeight - 450,
  };
  spiel.spielfeld?.append(block.element);
  block.element.style.width = "24px";
  block.element.style.height = "400px";
  block.element.style.backgroundColor = "white";
  translate(block.element, block.x, block.y);
  blockList.push(block);
}
function update() {
  for (const block of blockList) {
    block.x -= 2;

    translate(block.element, block.x, block.y);
  }
  window.requestAnimationFrame(update);
}
spawnBlock();
update();

function translate(div: HTMLDivElement, x: number, y: number) {
  div.style.transform = "translate(" + x + "px, " + y + "px)";
}

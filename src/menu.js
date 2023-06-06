const content = document.getElementById("content");

const menuButton = document.getElementById("menu");

const menuHtml = ``;

function menu() {
  menuButton.addEventListener("click", () => {
    content.innerHTML = menuHtml;
  });
}

export { menu };

const content = document.getElementById("content");

const homeButton = document.getElementById("home");
const homeHtml = `<img src="/dist/fotos/images.jpg" alt="" />
      <img src="/dist/fotos/Unbenannt.jpg" alt="" />
      <ul>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          explicabo ex aliquid inventore alias ratione repellendus qui neque nam
          error.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          explicabo ex aliquid inventore alias ratione repellendus qui neque nam
          error.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          explicabo ex aliquid inventore alias ratione repellendus qui neque nam
          error.
        </li>
      </ul>`;

function defaultHome() {
  content.innerHTML = homeHtml;
}

function home() {
  homeButton.addEventListener("click", () => {
    content.innerHTML = homeHtml;
  });
}
export { home, defaultHome };

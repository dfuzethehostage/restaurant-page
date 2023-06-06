const content = document.getElementById("content");
const contactButton = document.getElementById("contact");
const contactHtml = `<div id="contacts">
        <div class="contact">
          <div>
            <h2>Alfred (Manager):</h2>
            <p>Email: <span>alfred.manager@gmail.com</span></p>
            <p>Handy Number: 0172 13929010</p>
          </div>
          <div class="profile-pic" id="alfred"></div>
        </div>
        <div class="contact">
          <div>
            <h2>Helga (Waitress):</h2>
            <p>Email: <span>helga.waitress@gmail.com</span></p>
            <p>Handy Number: 0175 13617219</p>
          </div>
          <div class="profile-pic" id="helga"></div>
        </div>
        <div class="contact">
          <div>
            <h2>Bernd (chef)::</h2>
            <p>Email: <span>bernd.chef@gmail.com</span></p>
            <p>Handy Number: 0178 13558139</p>
          </div>
          <div class="profile-pic" id="bernd"></div>
        </div>
      </div>`;

function contact() {
  contactButton.addEventListener("click", () => {
    content.innerHTML = contactHtml;
  });
}

export { contact };

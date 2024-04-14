document.addEventListener("DOMContentLoaded", function () {
  var currentYear = new Date().getFullYear();

  document.querySelector("nav").innerHTML = `
      <h2><a href="..">Übersicht</a></h2>
      <ul>
          <li><a href="../harry">Harry Potter</a></li>
          <li><a href="../hermine">Hermine Granger</a></li>
          <li><a href="../ron">Ron Weasley</a></li>
          <li><a href="../draco">Draco Malfoy</a></li>
          <li><a href="../dumbledore">Albus Dumbledore</a></li>
          <li><a href="../snape">Severus Snape</a></li>
          <li><a href="../podcast">Podcast Empfehlung</a></li>
      </ul>
  `;

  document.querySelector("footer").innerHTML = `    
      <div>
          <section class="section">
              <h3>FORMALES</h3>
              <p><a href="../impressum">Impressum</a></p>
          </section>

          <section class="section">
              <h3>LINKS</h3>
              <p><a href="https://sites.google.com/view/lorenzboss/startseite" target="_blank">Über mich</a></p>
              <p><a href="https://github.com/lorenzboss/wiki" target="_blank">GitHub Repository</a></p>
          </section>

          <section class="section">
              <h3>KOMMENTAR</h3>
              <p>Hier können Sie einen <a href="../comments">Kommentar über die Webseite</a> abgeben</p>
          </section>
      </div>
      <p id="rechte">Alle Rechte vorbehalten &copy;-${currentYear} Lorenz Boss</p>
  `;
});

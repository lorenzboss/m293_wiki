document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('nav').innerHTML = `
        <h2><a href="0_homepage.html">Übersicht</a></h2>
        <ul>
        <li><a href="1_harry_potter.html">Harry Potter</a></li>
        <li><a href="2_hermine_granger.html">Hermine Granger</a></li>
        <li><a href="3_ron_weasley.html">Ron Weasley</a></li>
        <li><a href="4_draco_malfoy.html">Draco Malfoy</a></li>
        <li><a href="5_albus_dumbledore.html">Albus Dumbledore</a></li>
        <li><a href="6_severus_snape.html">Severus Snape</a></li>
        <li><a href="a_podcast_empfehlung.html">Podcast Empfehlung</a></li>
        </ul>
    `;

    document.querySelector('footer').innerHTML = `    
        <div>
        <section class="section">
          <h3>FORMALES</h3>
          <p><a href="b_impressum.html">Impressum</a></p>
        </section>
  
        <section class="section">
          <h3>LINKS</h3>
          <p><a href="https://sites.google.com/view/lorenzboss/startseite" target="_blank">Über mich</a></p>
          <p><a href="https://github.com/lorenzboss/wiki" target="_blank">GitHub Repository</a></p>
        </section>
  
        <section class="section">
          <h3>KOMMENTAR</h3>
          <p>Hier können Sie einen <a href="c_kommentar.html">Kommentar über die Webseite</a> abgeben</p>
        </section>
      </div>
      <p id="rechte">Alle Rechte vorbehalten &copy;-2023 Lorenz Boss</p>
  `;

});
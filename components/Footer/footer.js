import React from 'react'
// SocialMedia Icon
import * as SocialMedia from '../FontAwesomeIcon/FontAwesomeIcon'
import '../../styles/sass/styles.scss'

const Footer = () => (
  <footer className="row footer-decoration ">
    {/* ROW 1 */}
    <section className="col-md-4 col-sm-6 col-xs-12  row1-position">
      <p>
        <span>Contact</span>:&nbsp;
        <a title="Envoyer un mail" href=" mailto:info@zenika.com" className="footer-link-customization">
          info@zenika.com
        </a>
        &nbsp; +33(0)1 45 26 19 15
      </p>
    </section>
    {/* ROW 2 */}
    <section className="col-md-4 col-sm-6 col-xs-12 row2-position">
      <h1 className="footer-titre-h1 align-center">Zenika Academy</h1>
      <article className="footer-socialIcon">
        {SocialMedia.twitter}
        {SocialMedia.linkedin}
        {SocialMedia.facebook}
        {SocialMedia.github}
        {SocialMedia.youtube}
      </article>
    </section>
    {/* ROW 3 */}
    <section className="col-md-4 col-sm-6 col-xs-12 row3-position">
      <small>
        &copy; Copyright 2006-2019 Zenika. &shy;Tous droits réservés.
        <section>
          <a title="Consulter les mentions légales" href="/legal" className="footer-link-customization">
            Mentions légales
          </a>
        </section>
      </small>
    </section>
  </footer>
)

export default Footer

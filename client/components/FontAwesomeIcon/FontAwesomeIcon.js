import React from 'react'
// Icon Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import '../../styles/sass/styles.scss'
// enable Icon Social Media
library.add(fab)
export const twitter = (
  <a title="Consulter notre page twitter" href="https://twitter.com/ZenikaIT" target="_blank">
    <FontAwesomeIcon icon={['fab', 'twitter']} className="icon-customization" />
  </a>
)
export const linkedin = (
  <a
    title="Consulter nos actualités sur linkedin"
    href="https://www.linkedin.com/company/zenika/?originalSubdomain=fr"
    target="_blank"
  >
    <FontAwesomeIcon icon={['fab', 'linkedin']} className="icon-customization" />
  </a>
)

export const facebook = (
  <a title="Consulter notre facebook" href="https://www.facebook.com/ZenikaIT/" target="_blank">
    <FontAwesomeIcon icon={['fab', 'facebook']} className="icon-customization" />
  </a>
)
export const github = (
  <a title="Consulter notre github" href="https://github.com/Zenika" target="_blank">
    <FontAwesomeIcon icon={['fab', 'github']} className="icon-customization" />
  </a>
)
export const youtube = (
  <a title="Consulter notre chaine youtube" href="https://www.youtube.com/user/ZenikaITTv" target="_blank">
    <FontAwesomeIcon icon={['fab', 'youtube']} className="icon-customization" />
  </a>
)

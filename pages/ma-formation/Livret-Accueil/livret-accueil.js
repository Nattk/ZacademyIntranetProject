import React from 'react'
import Page from '../../../layouts/classic'
import '../../../styles/sass/styles.scss'

const Livret = () => {
  return (
    <Page title="livret" contextePage="Livret d'accueil">
      <article className="container-article">
        <div className=" col-md-8	 col-sm-12 col-xs-12 text-center container-card ">
          <iframe title="pdf-livretAccueil" className="pdf-viewer" src={'/academy.pdf'} />
        </div>
      </article>
    </Page>
  )
}

export default Livret

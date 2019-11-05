import React from 'react'
import Page from '../../../layouts/classic'
import '../../../styles/sass/styles.scss'

const Livret = () => {
  return (
    <Page title="livret">
      <article className="container-article">
        <h1 className="mainTitle"> Livret Accueil</h1>
        <div className=" col-md-8	 col-sm-12 col-xs-12 text-center container-card ">
          <iframe title="pdf-livretAccueil" className="pdf-viewer" src={'/academy.pdf'} />
        </div>
      </article>
    </Page>
  )
}

export default Livret

import React from 'react'
import Page from '../../../layouts/classic'
import '../../../styles/sass/styles.scss'

const Livret = () => {
	return (
		<Page title="livret">
			<article className="article-livret">
				<h1 className="mainTitle"> Livret Accueil</h1>
				<section className=" col-md-10 col-sm-12 col-xs-12 section-pdf">
					<iframe title="pdf-livretAccueil" className="pdf-viewer" src={`/academy.pdf`} />
				</section>
			</article>
		</Page>
	)
}

export default Livret

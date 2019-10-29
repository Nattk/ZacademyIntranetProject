import React from 'react'
import Page from '../../../layouts/classic'
import '../../../styles/sass/styles.scss'

const Livret = () => {
	return (
		<Page title="livret">
			<article className="article-livret">
				<h1 className="text-center"> Livret Accueil</h1>
				<section className=" col-md-10 col-sm-12 col-xs-12 section-pdf">
					<iframe src={`/academy.pdf`} className="pdf-viewer" frameborder="0" />
				</section>
			</article>
		</Page>
	)
}

export default Livret

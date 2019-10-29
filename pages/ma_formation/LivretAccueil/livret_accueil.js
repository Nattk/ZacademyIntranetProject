import React from 'react'
import Page from '../../../layouts/classic'
import '../../../styles/sass/styles.scss'

const Livret = () => {
	return (
		<Page title="livret">
			<section className="section-livret">
				<h1 className="text-center"> Livret Accueil</h1>
				<article className=" col-md-6 col-sm-12 col-xs-12 section-pdf">
					<iframe src={`/academy.pdf`} style={{ width: '718px', height: '700px' }} frameborder="0" />
				</article>
			</section>
		</Page>
	)
}

export default Livret

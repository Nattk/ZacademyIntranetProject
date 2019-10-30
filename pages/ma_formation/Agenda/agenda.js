import React from 'react'
import Page from '../../../layouts/classic'
import dynamic from 'next/dynamic'
const CalendrierReact = dynamic(() => import('../../../components/Calendrier/CalendrierReact'), { ssr: false })
import '../../../styles/sass/styles.scss'

const Agenda = () => (
	<Page title="Accueil">
		<article className="container-article">
			<h1 className="mainTitle">Agenda</h1>

			<div className=" col-md-12 col-sm-12 col-xs-12   container-card">
				<section className="col-md-5 col-sm-12 col-xs-12">
					<CalendrierReact />
				</section>
				<section className="col-md-6 col-sm-12 col-xs-12 card-event" />
			</div>
		</article>
	</Page>
)

export default Agenda

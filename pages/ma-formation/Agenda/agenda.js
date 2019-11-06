import React from 'react'
import Page from '../../../layouts/classic'
import dynamic from 'next/dynamic'
const CalendrierReact = dynamic(() => import('../../../components/Calendrier/CalendrierReact'), { ssr: false })
import '../../../styles/sass/styles.scss'




const Agenda = () => {

	return (
		<Page title="Agenda">
			<article className="col-md-9 col-sm-12 col-xs-12 AgendaPage-custom">
				<CalendrierReact />
			</article>
		</Page>
	)
}

export default Agenda

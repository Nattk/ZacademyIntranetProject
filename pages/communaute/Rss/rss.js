import React from 'react'
import Page from '../../../layouts/classic'
import Card from '../../../components/Card/card'
import '../../../styles/sass/styles.scss'
const elementCardRss = (
	<article className="card-rss-article">
		<a
			title="lien vers le flux"
			href="https://fr.khanacademy.org/computing/computer-programming"
			target="_blank"
			style={{ color: '#fff' }}
		>
			<section style={{ display: 'flex', flexWrap: 'wrap' }}>
				<button className="card-rss-button">
					<i class="fas fa-rss" />
				</button>
				&nbsp;
				<h1 title="lien vers le flux" className="card-rss-title">
					Apprenez en plus sur Javascript !
				</h1>
			</section>
		</a>
	</article>
)
const Rss = () => (
	<Page title="Rss">
		<section className="section-rss">
			<h1 className="text-center pageRss-title"> Flux RSS Paris Promo 2</h1>
			<section className="row">
				<article className=" col-md-12 col-sm-12 col-xs-12">
					<section className="col-md-5 col-sm-12 col-xs-12 section-rss">
						<Card styleName="card-rss">{elementCardRss}</Card>
					</section>
					<section className="col-md-5 col-sm-12 col-xs-12 section-rss">
						<Card styleName="card-rss">{elementCardRss}</Card>
					</section>
					<section className="col-md-5 col-sm-12 col-xs-12 section-rss">
						<Card styleName="card-rss">{elementCardRss}</Card>
					</section>
				</article>
			</section>
		</section>
	</Page>
)
export default Rss

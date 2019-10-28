import React from 'react'
import Page from '../../../layouts/classic'
import Card from '../../../components/Card/card'
import '../../../styles/sass/styles.scss'
const elementCardRss = (
	<article className="card-rss-article">
		<h1 className="card-rss-title">Apprenez en plus sur Javascript !</h1>
		<p className="card-rss-description">
			Dans cet article nous traiterons des spécificités de Javascript ainsi que des concepts clés à maîtriser
		</p>
		<a href="https://fr.khanacademy.org/computing/computer-programming" target="_blank">
			<button className="card-rss-button">Lien vers article</button>
		</a>
	</article>
)
const Rss = () => (
	<Page title="Rss">
		<section className="section-rss">
			<h1 className="text-center pageRss-title"> Flux RSS Paris Promo 2</h1>
			<section className="row">
				<article className=" col-md-12 col-sm-12 col-xs-12 rss-article">
					<section className="col-md-5 col-sm-12 col-xs-12 section-rss">
						<Card styleName="card-rss">{elementCardRss}</Card>
					</section>
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

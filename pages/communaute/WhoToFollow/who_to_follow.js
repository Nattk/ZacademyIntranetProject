import React from 'react'
import Page from '../../../layouts/classic'
import Card from '../../../components/Card/card'
import '../../../styles/sass/styles.scss'

const followCard = (
	<article className="card-follow-article col-md-12 col-sm-12 col-xs-12">
		<section className="align-self-center col-md-2   col-xs-12">
			<img src="https://ca.slack-edge.com/TDKLZEH1B-UN6RVVAP3-g00f562b54f1-72" alt="" className="img-follow" />
		</section>
		<section className="col-md-9  col-xs-12 section-user-info">
			<h1 className="card-follow-user">Jeremie Patonnier</h1>
			<p className="card-follow-description">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit voluptatem ullam sint vitae eligendi
				illum asperiores quis, quam temporibus perspiciatis repellendus voluptate? Nihil numquam, doloribus
				reprehenderit voluptatibus cum perspiciatis tempore!
			</p>
			<section className="button-follow">
				<a href="https://fr.khanacademy.org/computing/computer-programming" target="_blank">
					<button className="card-button-twitter">
						<i class="fa fa-twitter social-icon-card"> </i> &nbsp;Follow
					</button>
				</a>
				<a href="https://fr.khanacademy.org/computing/computer-programming" target="_blank">
					<button className="card-button-github">
						<i class="fa fa-github" />&nbsp;Follow
					</button>
				</a>
				<a href="https://fr.khanacademy.org/computing/computer-programming" target="_blank">
					<button className="card-button-reddit">
						<i class="fa fa-reddit" />&nbsp;Follow
					</button>
				</a>
			</section>
		</section>
	</article>
)
const Follow = () => (
	<Page title="Follow">
		<section className="section-follow">
			<h1 className="text-center follow-mainTitle">Who to Follow!</h1>
			<section className="row">
				<article className="text-center col-md-12 col-sm-12 col-xs-12 article-follow">
					<section className="col-md-10 col-sm-12 col-xs-12">
						<Card styleName="card-follow">{followCard}</Card>
					</section>
					<section className="col-md-10 col-sm-12 col-xs-12">
						<Card styleName="card-follow">{followCard}</Card>
					</section>
					<section className="col-md-10 col-sm-12 col-xs-12">
						<Card styleName="card-follow">{followCard}</Card>
					</section>
				</article>
			</section>
		</section>
	</Page>
)
export default Follow

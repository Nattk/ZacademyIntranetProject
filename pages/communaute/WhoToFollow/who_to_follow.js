import React from 'react'
import Page from '../../../layouts/classic'
import Card from '../../../components/Card/card'
import '../../../styles/sass/styles.scss'

const followCard = (
	<article className="card-article col-md-12 col-sm-12 col-xs-12">
		<section className="align-self-center col-md-2  col-xs-12">
			<img
				src="https://ca.slack-edge.com/TDKLZEH1B-UN6RVVAP3-g00f562b54f1-72"
				alt="profile-user"
				className="img-socialMedia"
				aria-describedby="p1"
			/>
		</section>
		<section className="col-md-9  col-xs-12 section-card-user">
			<h1 className="card-title" id="p1">
				Jeremie Patonnier
			</h1>
			<p className="card-description">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit voluptatem ullam sint vitae eligendi
				illum asperiores quis, quam temporibus perspiciatis repellendus voluptate? Nihil numquam, doloribus
				reprehenderit voluptatibus cum perspiciatis tempore!
			</p>
			<section className="button-follow">
				<a href="https://twitter.com/jeremiepat?lang=fr" title="Aller sur son twitter" target="_blank">
					<button className="card-button-twitter">
						<i className="fa fa-twitter social-icon-card"> </i> &nbsp;
					</button>
				</a>

				<a
					href="https://fr.khanacademy.org/computing/computer-programming"
					title="Aller sur son linkedin"
					target="_blank"
				>
					<button className="card-button-linkedin">
						<i className="fa fa-linkedin" />&nbsp;
					</button>
				</a>
				<a
					href="https://fr.khanacademy.org/computing/computer-programming"
					title="Aller sur son github"
					target="_blank"
				>
					<button className="card-button-github">
						<i className="fa fa-github" />&nbsp;
					</button>
				</a>
			</section>
		</section>
	</article>
)
const Follow = () => (
	<Page title="Follow">
		<article className="container-article">
			<h1 className="mainTitle">Who to Follow!</h1>
			<div className="text-center col-md-10 col-sm-12 col-xs-12 container-card ">
				<Card styleName="card">{followCard}</Card>
				<Card styleName="card">{followCard}</Card>
				<Card styleName="card">{followCard}</Card>
			</div>
		</article>
	</Page>
)
export default Follow

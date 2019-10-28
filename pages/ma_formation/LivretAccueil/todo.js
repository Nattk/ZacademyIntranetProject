import React from 'react'
import Card from '../../../components/Card/card'

const Posts = ({ posts, loading }) => {
	if (loading) {
		return <p>...isLoading</p>
	}
	return (
		<React.Fragment>
			{posts.map((post) => (
				<Card styleName="card-livretAccueil col-md-5 col-sm-12 col-xs-12" key={post.id}>
					<article>
						<section className="card-livret-article">
							<h1>{post.title}</h1>
							<p>{post.body}</p>
						</section>
					</article>
				</Card>
			))}
		</React.Fragment>
	)
}

export default Posts

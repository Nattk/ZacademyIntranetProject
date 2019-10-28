import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Posts from './todo'
import Page from '../../../layouts/classic'
import Pagination from '../../../components/Pagination/pagination'
import '../../../styles/sass/styles.scss'

const Livret = () => {
	const [ posts, setPosts ] = useState([])
	const [ loading, setLoading ] = useState(false)
	const [ currentPage, setCurrentPage ] = useState(1)
	const [ postsPerPage ] = useState(2)

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true)
			const res = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
			setPosts(res.data)
			setLoading(false)
		}
		fetchPosts()
	}, [])
	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage
	const indexOfFirstPost = indexOfLastPost - postsPerPage
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

	//  Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber)

	return (
		<Page title="livret">
			<section>
				<h1 className="text-center pageRss-title"> Livret Accueil</h1>
				<section className="row">
					<article className=" col-md-12 col-sm-12 col-xs-12">
						<section className="col-md-12 col-sm-12 col-xs-12 section-livretAccueil  ">
							<Posts posts={currentPosts} loading={loading} />
						</section>
					</article>
				</section>

				<section className="col-md-12 col-sm-12 col-xs-12 justify-content-center section-livretAccueil-pagination">
					<Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
				</section>
			</section>
		</Page>
	)
}

export default Livret

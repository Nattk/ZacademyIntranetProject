/* eslint-disable no-tabs */
import React from 'react'
import Page from '../../../layouts/classic'

export default function Slack () {
  return (
    <Page title="Accueil">
      <img src="/slack.jpg" className="rounded mx-auto d-block" className="img-fluid" alt="my image" />
      <style jsx>{`
				img {
					display: block;
					margin: 2rem auto 2rem auto;
				}
			`}</style>
    </Page>
  )
}

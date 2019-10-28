/* eslint-disable no-tabs */
import React from 'react'
import Page from '../../../layouts/classic'
import CalendrierReact from '../../../components/Calendrier/CalendrierReact'
import '../../../styles/sass/styles.scss'

const Agenda = () => (
  <Page title="Accueil">
    <section>
      <h1 className="text-center Agenta-mainTitle">Agenda</h1>
      <section className="row">
        <article className="Agenda-viewport col-md-12 col-sm-12 col-xs-12 sm-mb-30">
          <section className="col-md-5 col-sm-12 col-xs-12">
            <CalendrierReact />
          </section>
          <section className="col-md-5	 col-sm-12 col-xs-12 card-event" />
        </article>
      </section>
    </section>
  </Page>
)

export default Agenda

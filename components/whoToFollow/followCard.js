import React from 'react'

const FollowCard = (props) => (

  <article className="col-md-8 col-sm-12 col-xs-12 article-card-who2follow" >
    <header>
      <img
        src="/firmin.jpg"
        alt=""
        className="imgUser-card-who2follow"

      />

    </header>
    <section className="sectionUser-card-who2follow" >

      <header >
        <p className="deleteUserIcon-card-who2follow">{props.remove}</p>
        <h1 className="nameUser-card-who2follow">{props.firstName} {props.lastName} </h1>
      </header>
      <section>
        <p>{props.fonction} </p>
        <p><span><i class="fas fa-phone-square-alt"></i></span> &nbsp; {props.phone} </p>
        <p><span><i className="far fa-envelope"></i></span>&nbsp; {props.mail} </p>
        <p className="descriptionUser-card-who2follow" >{props.description}</p>
      </section>
    </section>
    <footer className="footer-card-who2follow button-follow">
      <section className="sectionFooter-card-who2follow">
        {props.linkTwitter ? (

          <a href={props.linkTwitter} title="Aller sur son twitter" target="_blank">
            <i className="fa fa-twitter card-button-twitter" title="lAller sur son twitter"> </i>
          </a>
        ) : null}
        {props.linkLinkedin ? (
          <a
            href={props.linkLinkedin}
            title="Aller sur son linkedin"
            target="_blank"
          >
            <i className="fa fa-linkedin card-button-linkedin" title="Aller sur son linkedin" />
          </a>) : null}
        {props.linkGithub ? (
          <a
            href={props.linkGithub}
            title="Aller sur son github"
            target="_blank"
          >
            <i className="fa fa-github card-button-github" title="Aller sur son github" />
          </a>) : null}
      </section>
    </footer>
  </article>

)

export default FollowCard

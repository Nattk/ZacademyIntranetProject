import React from 'react'
import Link from 'next/link'
import Button from '../../components/Boutons/Boutons'
// link for login bar https://bootsnipp.com/snippets/dldxB

const Login = (props) => (
  <article className="login wrapper fadeInDown">
    <section id="formContent">
      <div className="fadeIn first">
        {/* <img src="/zenika_icon.png" id="icon" alt="User Icon" /> */}
      </div>
      <form className="form-group">
        <label htmlFor="login">Email</label>
        <input type="text" id="login" className="form-control fadeIn second" name="Email" placeholder="Email" required></input>
        <label htmlFor="password">Mot de passe</label>
        <input type="password" id="password" className="form-control fadeIn third" name="login" placeholder="Mot de passe" required></input>
        {/* <input type="submit" className="fadeIn fourth" value="Log In"></input> */}
        <Button btnType="valider" submit={false} title="connexion" ><Link href="/index_connecte"><a role="button" onClick={props.online} >Connexion Eleve</a></Link></Button>
        <Button btnType="valider" submit={false} title="connexion" ><Link href="/admin/Accueil/accueil"><a role="button" onClick={props.both} >Connexion Admin</a></Link></Button>
      </form>
      <div id="formFooter">
        <a className="underlineHover" href="#">Mot de passe oublié ?</a>
      </div>

    </section>
  </article>
)

export default Login

import React from 'react'
import Link from 'next/link'
// link for login bar https://bootsnipp.com/snippets/dldxB

const Login = () => (
  <article className="wrapper fadeInDown">
    <section id="formContent">
      <div className="fadeIn first">
        {/* <img src="/zenika_icon.png" id="icon" alt="User Icon" /> */}
      </div>
      <form>
        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"></input>
        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"></input>
        {/* <input type="submit" className="fadeIn fourth" value="Log In"></input> */}
        <Link href="/index_connecte"><a className="btn-lg btn-primary" role="button">LOGIN</a></Link>
      </form>
      <div id="formFooter">
        <a className="underlineHover" href="#">Forgot Password?</a>
      </div>

    </section>
  </article>
)

export default Login

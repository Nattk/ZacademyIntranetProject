navBar()

function navBar() {
	let element = document.getElementById('nav-placeholder-admin')
	if (element != null) {
		document.getElementById(
			'nav-placeholder-admin'
		).innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <a class="btn btn-danger" href="/index.html"  id="bonjourjérémie" role="button">ACCUEIL</a>
    <div class="dropdown show">
        <a class="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Créer
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="/admin/creation_programme.html">Créer un parcours</a>
            <a class="dropdown-item" href="/admin/creation_promotion.html">Créer une promotion</a>
            <a class="dropdown-item" href="/admin/gestion_programmes.html">Créer un utilisateur</a>
        </div>
    </div>
    <div class="dropdown show">
        <a class="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Modifier
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            
            <a class="dropdown-item" href="/admin/gestion_promotion.html">Modifier  une promotion</a>
            <a class="dropdown-item" href="/admin/gestion_programmes.html">Modifier un programme</a>
            <a class="dropdown-item" href="/admin/gestion_programmes.html">Modifier un utilisateur</a>
        </div>
    </div>
    <a class="btn btn-danger" href="/utilisateur/mon_profil.html"  id="bonjourjérémie" role="button">PROFIL</a>
    <a class="btn btn-danger" href="#"  id="bonjourjérémie" role="button">LOGOUT</a>
</nav>`
	} else {
		document.getElementById(
			'nav-placeholder'
		).innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <a class="btn btn-danger" href="/admin/admin.html"  id="bonjourjérémie" role="button">ADMINISTRATION</a>
    <div class="dropdown show">
        <a class="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Ma Formation
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="/ma_formation/agenda.html">Agenda</a>
            <a class="dropdown-item" href="/ma_formation/contact_utiles.html">Contact utiles</a>
            <a class="dropdown-item" href="/ma_formation/livret_accueil.html">Livret d'accueil</a>
            <a class="dropdown-item" href="/ressources/ressources.html">Ressources pédagogiques</a>
        </div>
    </div>
    <div class="dropdown show">
        <a class="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Communauté
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="/communaute/slack.html">Slack academy</a>
            <a class="dropdown-item" href="/communaute/RSS.html">RSS</a>
            <a class="dropdown-item" href="/communaute/who_to_follow.html">who to follow</a>
        </div>
    </div>
    <a class="btn btn-danger" href="/utilisateur/mon_profil.html"  id="bonjourjérémie" role="button">PROFIL</a>
    <a class="btn btn-danger" href="#"  id="bonjourjérémie" role="button">LOGIN</a>
</nav>`
	}
}

footer()

function footer() {
	document.getElementById('footer').innerHTML = `<div class="footer-top">

    <div class="row align text-center">
  
  
      <div class="col-md-4 col-sm-6 col-xs-12 footer-color-white md-mb-30  sm-mb-30">
  
        <span>Contact</span> : <a href=" mailto:info@zenika.com" class="footer-link">
          info@zenika.com</a> +33(0)1 45 26 19 15
  
      </div>
  
      <div class="col-md-4 col-sm-6 col-xs-12 segment-three  sm-mb-30">
  
        <h1 class="footer-color-white footer-titre-h1">Zenika Academy</h1>
  
  
  
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-github"></i></a>
        <a href="#"><i class="fa fa-youtube"></i></a>
  
  
        <section class="footer-link-decoration">
          <a href="https://blog.zenika.com" rel="noopener noreferrer" target="_blank">
            <span class="footer-link">Notre blog</span>
          </a>
          &nbsp;
          <a href=" https://shop.zenika.com" rel="noopener noreferrer" target="_blank">
            <span class=" footer-link">Espace presse</span>
          </a>
        </section>
  
      </div>
  
      <div class="col-md-4 col-sm-6 col-xs-12 segment-four  sm-mb-30">
  
        <span>Copyright 2006-2019 Zenika. &shy;Tous droits réservés.</span>
  
        <section>
          <a href="/legal" class="footer-link ">Mentions légales</a>
        </section>
  
      </div>
  
    </div>
  
  </div>`
}

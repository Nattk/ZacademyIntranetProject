navBar()

function navBar() {
    let element = document.getElementById('nav-placeholder-admin');
    if (element != null) {
        document.getElementById('nav-placeholder-admin').innerHTML = 
        `<nav class="navbar navbar-expand-lg navbar-light bg-dark">
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
    <div class="dropdown show">
        <a class="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Communauté
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="/communaute/slack.html"></a>
            <a class="dropdown-item" href="/communaute/RSS.html">RSS</a>
            <a class="dropdown-item" href="/communaute/who_to_follow.html">who to follow</a>
        </div>
    </div>
    <button type="button" class="btn btn-danger" id="bonjourjérémie">LOGIN</button>


</nav>`}
    else {
        document.getElementById('nav-placeholder').innerHTML = 
        `<nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="dropdown show">
        <a class="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Ma Formation
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="/ma_formation/agenda.html">Agenda</a>
            <a class="dropdown-item" href="/ma_formation/contact_utiles.html">Contact utiles</a>
            <a class="dropdown-item" href="/ma_formation/livret_accueil.html">Livret d'accueil</a>
        </div>
    </div>
    <div class="dropdown show">
        <a class="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Ressources
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="/ressources/formateurs.html">Formateurs</a>
            <a class="dropdown-item" href="/ressources/interne_eleves.html">Interne élèves</a>
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
    <button type="button" class="btn btn-danger" id="bonjourjérémie">LOGIN</button>


</nav>`}
}
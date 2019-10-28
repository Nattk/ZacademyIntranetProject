import React from 'react'
import Link from 'next/link'

const ProgrammesGestion = () => (
  <article className="gestionProgramme card">
    <header className="card-header">
      Liste des programmes
    </header>
    <section className="card-body">
      <ul>
        <li className="d-flex flex- justify-content-around align-items-baseline">
          <a href="#">Programme 1</a>
          <button type="button" className="btn btn-secondary">Dupliquer</button>
          <a href="./creation_programme.html"
          ><button type="button" className="btn btn-warning">
              Modifier
            </button></a>
        </li>
        <li className="d-flex flex- justify-content-around align-items-baseline">

          <a href="#">Programme 2</a>
          <button type="button" className="btn btn-secondary">Dupliquer</button>
          <a href="./creation_programme.html"
          ><button type="button" className="btn btn-warning">
              Modifier
            </button></a>
        </li>
        <li className="d-flex flex- justify-content-around align-items-baseline">
          <a href="#">Programme 3</a>
          <button type="button" className="btn btn-secondary">Dupliquer</button>
          <a href="./creation_programme.html"
          ><button type="button" className="btn btn-warning">
              Modifier
            </button></a>
        </li>
      </ul>
    </section>
    <footer className="d-flex flex-row align-items-end justify-content-center">
      <Link href="/admin/CreationProgramme/creation_programme">
        <button type="button" className="btn btn-primary">
          Ajouter un programme
        </button></Link>
    </footer>
  </article>
)

export default ProgrammesGestion

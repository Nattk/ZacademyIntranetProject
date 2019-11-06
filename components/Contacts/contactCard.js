import React from 'react'

const ContactCard = (props) => (
  <section class="card" >
    <img src="/firmin.jpg" class="card-img-top" alt="image profil contact utile" />
    <div class="card-body">
      <h1 class="card-title">{props.name}</h1>

      <p class="card-text"><span>Fonction :</span> <br />{props.fonction}</p>
      <p class="card-text"><span>Tel :</span> <br />{props.telephone}</p>
      <p class="card-text"><span>Email :</span> <br />{props.email}</p>
    </div>
  </section>)

export default ContactCard

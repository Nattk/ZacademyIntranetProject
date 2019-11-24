import React from 'react'
import Button from '../Boutons/Boutons'

import { NotificationSuccess, NotificationUpdate, NotificationDelete } from '../Notifications/notifications'

const Header = (props) => (
  <header className="col-md-12 col-sm-12 col-xs-12 header-article" >

    {props.showAlertSuccess ? <NotificationSuccess title={`${props.firstName} ${props.lastName}a été rajouté avec succès`} /> : null}
    {props.showAlertDelete ? <NotificationDelete title={`${props.firstName} ${props.lastName}a été supprimer!`} /> : null}
    {props.showAlertUpdate ? <NotificationUpdate title={`${props.firstName} ${props.lastName} a été mis à jour!`} /> : null}

    <Button btnType="annuler button-position" clicked={props.clicked} title="ajout-flux" >
      {props.title}
    </Button>
  </header>
)

export default Header

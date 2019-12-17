export const NotificationSuccess = (props) => {
  return (
    <section className="col-md-4 col-sm-12 col-xs-12 ml-auto" >
      <div className="alert alert-success" role="alert">
        <i className="fas fa-plus" title="icon-ajout"></i> &nbsp;  {props.title}
      </div>
    </section>
  )
}
export const NotificationDelete = (props) => {
  return (
    <section className="col-md-3 col-sm-12 col-xs-12 ml-auto" >
      <div className="alert alert-danger" role="alert" >
        <i className="fas fa-trash" title="icon-suppression"></i> &nbsp;   {props.title}
      </div>
    </section>
  )
}
export const NotificationError = (props) => {
  return (
    <section className="col-md-3 col-sm-12 col-xs-12 ml-auto" >
      <div className="alert alert-danger" role="alert" >
        {props.title}
      </div>
    </section>
  )
}
export const NotificationErrorBack = (props) => {
  return (
    <section className="col-md-12 col-sm-12 col-xs-12 ml-auto" >
      <div className="alert alert-danger" role="alert" >
        {props.title}
      </div>
    </section>
  )
}
export const NotificationUpdate = (props) => {
  return (
    <section className="col-md-3 col-sm-12 col-xs-12 ml-auto" >
      <div className="alert alert-primary" role="alert" >
        <i className="fas fa-trash" title="icon-suppression"></i> &nbsp;   {props.title}
      </div>
    </section>
  )
}

const AllNotification = (props) => <div className={`alert alert-${props.alertType} ${!props.show ? 'hide' : ''}`} role="alert">{props.notifMessage} {props.children}</div>

export default AllNotification

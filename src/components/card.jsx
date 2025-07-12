const Card = ({id, children}) => {
  return (
    <div id = {id} className="card">
      {children}
    </div>
  )
}

export default Card

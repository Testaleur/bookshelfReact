const RowContainer = ({children, id}) => {
  return (
    <div id = {id} className="rowContainer">
      {children}
    </div>
  )
}

export default RowContainer

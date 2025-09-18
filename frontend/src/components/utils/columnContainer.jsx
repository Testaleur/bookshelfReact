const ColumnContainer = ({children, id}) => {
  return (
    <div id = {id} className="columnContainer">
      {children}
    </div>
  )
}

export default ColumnContainer

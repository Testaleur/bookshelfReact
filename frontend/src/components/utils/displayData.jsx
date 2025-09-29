const DisplayData = ({id, title, value, color}) => {
  return (
    <div id = {id} className="displayData">
      <span className="display-title">{title}</span>
      <span className="display-value" style={{ color: color }}>
        {value}
      </span>    </div>
  )
}

export default DisplayData

const DivThree = (props) => {
  return (
    <div>
      <div>
        <h3 onClick={props.changeText}>{props.name}</h3>
      </div>

      <div>
        <h3 onClick={props.changeTextTwo}>{props.nameTwo}</h3>
      </div>
    </div>
  )
}

export default DivThree

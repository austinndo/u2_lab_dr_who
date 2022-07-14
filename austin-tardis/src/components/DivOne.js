import DivTwo from './DivTwo'

const DivOne = (props) => {
  return (
    <div>
      <DivTwo changeText={props.changeText} name={props.name} />
    </div>
  )
}

export default DivOne


import CardItems from "../CardItems/CardItems"
import './Card.css'
const Card = ({title}) => {

  return (
    <div className="card-container">
      <h1>{title}</h1>
      <CardItems title={title}/>
    </div>
  )
}

export default Card

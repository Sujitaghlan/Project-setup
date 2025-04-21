import { useContext } from "react"
import { StoreContext } from "../../context/context"
import './PopUp.css'

const PopUp = ({id}) => {
  const {todoItems, closePopUp} = useContext(StoreContext);
  const selectedItems = todoItems.filter((item) => item.id === id);
  return (
    <div className="popup-container">
      {
        selectedItems.length > 0 && 
        selectedItems.map(item => (
          <div className="popup">
            <h2>Id: {item.id}</h2>
            <h2>Title: {item.title}</h2>
            <p>Description: {item.description}</p>
            <p>Deadline: {item.deadline}</p>
            <p>Stage: {item.stage}</p>
          </div>
        ))
      }
    </div>
  )
}

export default PopUp

import { useContext } from 'react'
import './CardItems.css'
import { StoreContext } from '../../context/context'
const CardItems = ({title}) => {
  const {todoItems} = useContext(StoreContext);
  const filteredItem = todoItems.filter((item) => item.stage === title);
  console.log(`Filtered Items for stage: ${title}`, filteredItem);
  return (
    
      filteredItem.length > 0 && 
      <div className="items-container">
      {
        filteredItem.map((item, index)=> (
          <h3 key={index}>{item.title}</h3>
        ))
      }
    </div>

 
  )
}

export default CardItems

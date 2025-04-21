import { useContext, useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import './CardItems.css'
import { StoreContext } from '../../context/context'

const ItemTypes = {
  CARD_ITEM: "card_item",
}
const CardItems = ({title}) => {
  const {todoItems, setItemId} = useContext(StoreContext);


  const filteredItem = todoItems.filter((item) => item.stage === title);
  const handlePopUp = (id) => {
    setItemId(id);
  }

  const renderCardItem = (item, index) => {
    const ref = useRef(null);

    const [{ isDragging }, drag] = useDrag(() => ({
      type: ItemTypes.CARD_ITEM,
      item: { id: item.id, stage: item.stage },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }));

    drag(ref);
    return (
      <div
        ref={ref}
        key={item.id}
        className="item-container"
        onClick={() => handlePopUp(item.id)}
        style={{
          opacity: isDragging ? 0.5 : 1,
          cursor: "move",
        }}
      >
        <h2>
          {index + 1}. {item.title}
        </h2>
      </div>
    );
  };

  return (
    <div className="items-container">
      {filteredItem.length > 0 ? (
        filteredItem.map((item, index) => renderCardItem(item, index))
      ) : (
        <p>No items available</p>
      )}
    </div>
  );
}

export default CardItems

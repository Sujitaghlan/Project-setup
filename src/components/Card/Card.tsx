import CardItems from "../CardItems/CardItems"
import { useDrop } from "react-dnd"
import './Card.css'
import { useContext } from "react";
import { StoreContext } from "../../context/context";

const ItemTypes = {
  CARD_ITEM: "card_item",
};

const Card = ({title}) => {
  const {updateItemStage} = useContext(StoreContext);

  const [, drop] = useDrop({
    accept: ItemTypes.CARD_ITEM,
    drop: (item) => {
      if (item.stage !== title) {
        updateItemStage(item.id, title);
      }
    },
  })
  return (
    <div className="card-container"
    ref={drop}
    style={{
        border: "2px solid #ddd",
        padding: "16px",
        borderRadius: "8px"
    }}
    >
      <h1>{title}</h1>
      <CardItems title={title}/>
    </div>
  )
}

export default Card

import { createContext, useState } from "react";

export const StoreContext = createContext('');

const StoreContextProvider = (props:any) => {
  const [todoItems, setTodoItems] = useState([]);
  const [itemId, setItemId] = useState('');

const updateItemStage = (id, newStage) => {
  console.log("Before update:", todoItems);
  setTodoItems((prev) => {
    const updatedItems = prev.map((item) =>
      item.id === id ? { ...item, stage: newStage } : item
    );
    console.log("After update:", updatedItems);
    return updatedItems;
  });
};

  const closePopUp = () => setItemId(null);
  return (
    <StoreContext.Provider value={{todoItems,
  setTodoItems,
  itemId, 
  setItemId,
  updateItemStage,
  closePopUp,
    }}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
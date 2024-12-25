import { createContext, useState } from "react";

export const StoreContext = createContext('');

const StoreContextProvider = (props:any) => {
  const [todoItems, setTodoItems] = useState([]);
  return (
    <StoreContext.Provider value={{todoItems,
  setTodoItems
    }}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
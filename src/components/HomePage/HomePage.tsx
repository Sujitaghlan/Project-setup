import { useNavigate } from "react-router-dom"
import Card from "../Card/Card"
import PopUp from "../PopUp/PopUp"
import './HomePage.css'
import { useContext, useEffect } from "react"
import { StoreContext } from "../../context/context"

const HomePage = () => {
  const navigate = useNavigate();
  const {itemId, setTodoItems} = useContext(StoreContext);
  
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
     setTodoItems(items);
    }
  }, []);

  return (
    <>
      <div className="flex justify-end p-5">
        <button className="bg-main-color text-light-color p-3 rounded-md" onClick={() => navigate('/form')}>Add Task</button>
      </div>
      <PopUp id={itemId}/>
      <div className="home-container">
        <Card title="Todo"  />
        <Card title="In Progress" />
        <Card title="Review" />
        <Card title="Testing" />
        <Card title="Completed" />
      </div>
    </>
   
  )
}

export default HomePage

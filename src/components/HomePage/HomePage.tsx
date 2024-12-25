import { useNavigate } from "react-router-dom"
import Card from "../Card/Card"
import './HomePage.css'

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-end p-5">
        <button className="bg-main-color text-light-color p-3 rounded-md" onClick={() => navigate('/form')}>Add Task</button>
      </div>
      <div className="home-container">
        <Card title="Todo"/>
        <Card title="In Progress"/>
        <Card title="Review"/>
        <Card title="Testing"/>
        <Card title="Completed"/>
      </div>
    </>
   
  )
}

export default HomePage

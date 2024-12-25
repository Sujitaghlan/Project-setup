import { useContext, useState, useEffect} from 'react'
import './UserInputForm.css'
import { StoreContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';

const UserInputForm = () => {
  const {todoItems, setTodoItems} = useContext(StoreContext);
  const [todoItem, setTodoItem] = useState({
    id: '',
    title: '',
    description: '',
    deadline: '',
    stage: ''
  });
  const navigate = useNavigate();
  const handleInputItems = (e: any) => {
    const { name, value } = e.target;
    setTodoItem((prevState) =>({...prevState, [name]: value}));
  }

  const handleAddBtn = () => {
    const newItem = { ...todoItem, id: Date.now().toString() };
    if(todoItem.title && todoItem.description && todoItem.description && todoItem.stage){
      setTodoItems([...todoItems, newItem]);
      navigate('/');
    }

    else{
      alert("Fill all the field");
    }
    console.log('todoItems');
    
  }

  useEffect(() => {
    console.log('Current todoItems in context:', todoItems);
  }, [todoItems]);

  return (
    <div className="form-container">
      <h1>KANBAN TASK MANAGEMENT SYSTEM</h1>
      <input type="text" placeholder="Title" name="title" onChange={handleInputItems}/>
      <input type="text" placeholder="Description" name="description" onChange={handleInputItems}/>
      <input type="date" placeholder="Deadline" name="deadline" onChange={handleInputItems}/>
      <select name="stage" id="stage" onChange={handleInputItems}>
        <option value="stage" selected>Select Stage</option>
        <option value="Todo">Todo</option>
        <option value="In Progress">In Progress</option>
        <option value="Review">Review</option>
        <option value="Testing">Testing</option>
        <option value="Completed">Completed</option>
      </select>
      <button className="bg-main-color text-light-color p-3 rounded-md" onClick={handleAddBtn} type="button">Add</button>
    </div>
  )
}

export default UserInputForm

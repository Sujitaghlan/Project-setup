import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage/HomePage'
import UserInputForm from './components/UserInputForm/UserInputForm'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
     <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/form" element={<UserInputForm />}/>
     </Routes>
    </DndProvider>
  )
}

export default App

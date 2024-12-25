import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage/HomePage'
import UserInputForm from './components/UserInputForm/UserInputForm'

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/form" element={<UserInputForm />}/>
     </Routes>
    </>
  )
}

export default App

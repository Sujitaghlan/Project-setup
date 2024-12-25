import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import StoreContextProvider from './context/context.tsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>,
)

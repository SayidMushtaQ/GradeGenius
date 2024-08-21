import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GradesProvider from "./context/Grades.context";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GradesProvider>
      <App />
    </GradesProvider>
    <ToastContainer/>
  </StrictMode>,
)

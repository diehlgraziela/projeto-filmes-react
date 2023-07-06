import RoutesApp from './routes'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer autoclose={1000} />
      <RoutesApp />
    </div>
  )
}

export default App

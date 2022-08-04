import { Routes, Route } from 'react-router-dom'

import Home from "./pages/Home"

function App() {
  
  return (
    <div>
      <div className="container mx-auto">
        <Routes>
          <Route path='/' element={<Home/>}/>
       
        </Routes>
      </div>
    </div>
  )
}

export default App;

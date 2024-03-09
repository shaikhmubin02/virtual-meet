import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from './component/Landing';
import { Room } from './component/Room';

function App() {
 

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/room' element={<Room />} />
        
      </Routes>
      
    </BrowserRouter>
  )
}

export default App

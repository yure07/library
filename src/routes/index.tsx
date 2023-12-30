import { Route, Routes } from "react-router-dom"

import Register from "../pages/Register"
import Books from "../pages/Books"

const RoutesApp:React.FC = () => {
  return(
    <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/books" element={<Books/>}/>
    </Routes>
  )
}
export default RoutesApp
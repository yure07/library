import { Route, Routes } from "react-router-dom"

import Register from "../pages/Register"

const RoutesApp:React.FC = () => {
  return(
    <Routes>
      <Route path="/" element={<Register/>}/>
    </Routes>
  )
}
export default RoutesApp
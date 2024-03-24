import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/home"
import Perfil from "./pages/perfil"
import Ods from "./pages/ods"

function AppRoutes() {
    return(
        <BrowserRouter>
           <Routes>
                <Route path="/" element={ <Home /> }> </Route>
                <Route path="/perfil" element={<Perfil /> }> </Route>
                <Route path="/ods" element={<Ods /> }> </Route>
           </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
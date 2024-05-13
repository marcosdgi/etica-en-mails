import {Etica} from './Etica'
import './Styles/bootstrap.min.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Violaciones } from './Violaciones';
import { Errores } from './Errores';
import { Integrantes } from './Integrantes';
import { NavBar } from './NavBar';
import { CiberEspacio } from './CiberEspacio';
import { Introduccion } from './Introduccion';
import { Conclusiones } from './Conclusiones';
import { Home } from './Home';

const App = () => {

  return (
    <>
        <Router>
        <NavBar/>
        <Routes>

          <Route path="/" element = {<Home/>}/>
          <Route path="/etica" element = {<Etica/>}/>
          <Route path="/violaciones" element={<Violaciones/>}/>
          <Route path="/errores" element={<Errores/>}/>
          {/* <Route path="/introduccion" element={<Errores/>}/> */}
          <Route path="/integrantes" element={<Integrantes/>}/>
          <Route path="/ciberespacio" element={<CiberEspacio/>}/>
          <Route path="/introduccion" element={<Introduccion/>}/>
          <Route path="/conclusiones" element={<Conclusiones/>}/>
        
        </Routes>
    </Router>
    </>
  )
}

export default App

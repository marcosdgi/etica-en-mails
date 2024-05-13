import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <ul className="nav justify-content-end ">
            <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/integrantes">Integrantes</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/introduccion">Introducción</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/etica">Ética</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/violaciones">Violaciones Comunes</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/ciberespacio">Ciberética en el siglo XXI</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/conclusiones">Conclusiones</Link>
            </li>
        </ul>
    )
}

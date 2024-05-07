import { Link } from "react-router-dom"
const MeuSuperior = () => {
    return(
    <nav className="navbar navbar-expand-sm bg-primary
    navbar-dark sticky-top">
        <div className="container">
            <Link to= "/" className="navbar-brand">
                controle de tarefas 
            </Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-item">
                        incluir tarefas
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/manutencao" className="nav-item">
                        manutencao de tarefas
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/usuario" className="nav-item">
                        cadastar usuario
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    )
}
export default MeuSuperior;
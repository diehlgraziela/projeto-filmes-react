import './header.css'

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <Link className="logo" to="/">Projeto Filmes</Link>
            <Link to="/favoritos">Meus Filmes</Link>
        </header>
    )
}

export default Header
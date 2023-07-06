import { Link } from 'react-router-dom'

import './erro.css'

const Erro = () => {
    return (
        <div className="container">
            <h1>404</h1>
            <h2>Página não encontrada.</h2>

            <Link className="btn" to="/">Voltar para home</Link>
        </div>
    )
}

export default Erro
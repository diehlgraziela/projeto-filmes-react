import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import './favoritos.css'

const Favoritos = () => {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeflix")
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])

    function excluirFilme(id) {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })

        setFilmes(filtroFilmes)
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes))
        toast.success("Filme removido com sucesso.")
    }

    return (
        <div className="container">
            <h2>Meus Filmes</h2>

            {filmes.length === 0 && <span>Não há nenhum filme salvo.</span>}

            <ul className="lista-filmes-fav">
                {filmes.map((filme) => {
                    return (
                        <li key={filme.id} className="filme-fav">
                            <span>{filme.title}</span>

                            <div className="filme-fav-options">
                                <Link to={`/filme/${filme.id}`} className="details-fav">Ver Detalhes</Link>
                                <button onClick={() => excluirFilme(filme.id)} className="delete-fav">Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos
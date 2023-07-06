import { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './home.css';

const Home = () => {
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes() {
            const res = await api.get("movie/now_playing", {
                params: {
                    api_key: '2a9aaec413a0b1c711b1aa6b96d008ad',
                    language: 'pt-BR',
                    page: 1,
                }
            })

            //console.log(res.data.results.slice(0,10))
            setFilmes(res.data.results.slice(0, 12))
            setLoading(false)
        }

        loadFilmes()
    }, [])

    if (loading) {
        return (
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="filmes">
                {filmes.map((filme) => {
                    return (
                        <div key={filme.id} className="filme">
                            <h2>{filme.title}</h2>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`} className="saiba-mais">Saiba Mais</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home
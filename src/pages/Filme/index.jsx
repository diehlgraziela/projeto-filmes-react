import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';

import './filme.css';

const Filme = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: '2a9aaec413a0b1c711b1aa6b96d008ad',
                    language: 'pt-BR',
                }
            })
                .then((res) => {
                    setFilme(res.data)
                    setLoading(false)
                })
                .catch(() => {
                    navigate("/", { replace: true });
                    return;
                })
        }

        loadFilme()

        return () => {
        }
    }, [navigate, id])

    function salvarFilme() {
        const listaFilmes = localStorage.getItem("@primeflix");

        let filmesSalvos = JSON.parse(listaFilmes) || [];

        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id);

        if (hasFilme) {
            toast.warn("Esse filme já está na lista.");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));

        toast.success("Filme salvo com sucesso.");
    }

    if (loading) {
        return (
            <div className="loading">
                <h2>Carregando detalhes...</h2>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="filme-info">
                <h2>{filme.title}</h2>

                <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

                <div className="filme-descricao">
                    <h3>Sinopse</h3>
                    <p>{filme.overview}</p>
                </div>

                <span className="avaliacao">Avaliação: {filme.vote_average} / 10</span>

                <div className="area-buttons">
                    <button className="save-btn" onClick={salvarFilme}>Salvar</button>
                    <a href={`https://youtube.com/results?search_query=${filme.title} Trailer`} className="btn" target="_blank" rel="external">Assista ao Trailer</a>
                </div>
            </div>
        </div>
    )
}

export default Filme
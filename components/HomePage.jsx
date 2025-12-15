import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function HomePage() {
    const [movies, setMovies] = useState([]);
    const urlMovies = 'http://localhost:3000/api/movies/';
    useEffect(() => {
        axios.get(urlMovies).then(response => {
            setMovies(response.data);
        });
    }, []);
    return (
        <>
            <main>
                <div className="container">
                    {movies.map(movie => (
                        <div className="card m-3" key={movie.id}>
                            <img src={movie?.image} alt="" className="" />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.director}</p>
                                <p className="card-text">{movie.genre}</p>
                                <p className="card-text">
                                    <small className="text-body-secondary">{movie.release_year}</small>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}

export default HomePage;
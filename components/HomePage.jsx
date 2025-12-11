import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
    const [movies, setMovies] = useState([]);
    const urlMovies = 'http://localhost:3000/';
    useEffect(() => {
        axios.get(urlMovies).then(response => {
            setMovies(response.data);
        });
    }, []);
    return (
        <>
            <div className="container">
                {movies.map(movie => (
                    <div className="card mb-3" key={movie.id}>
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
        </>
    )
}

export default HomePage;
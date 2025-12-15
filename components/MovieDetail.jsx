import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function MovieDetail() {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/movies/${id}`)
            .then(res => {
                console.log(res.data);
                setMovie(res.data);
            });
    }, [id]);

    if (!movie) {
        return <div className="container">Caricamento...</div>;
    }

    return (
        <div className="container">
            <div className="card m-3" key={movie.id}>
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.director}</p>
                    <p className="card-text">{movie.genre}</p>
                    <p className="card-text">
                        <small className="text-body-secondary">{movie.release_year}</small>
                    </p>
                    <Link className="btn btn-dark mt-auto" to="/">
                        Tutti i film
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
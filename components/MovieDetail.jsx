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
        <>
            <div className="container">
                <div className="card m-5" key={movie.id}>
                    <img className="h-25 w-25 m-5" src={`http://localhost:3000/images/${movie.image}`} alt='' />
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
                <hr />
                <h3>Recensioni</h3>
                {movie.reviews.length === 0 && <p>Nessuna recensione presente</p>}
                {movie.reviews.length > 0 && movie.reviews.map(review => (
                    <div className="card mb-5" key={review.id}>
                        <div className="card-body">
                            <h6>{review.name} - {review.vote}/5</h6>
                            <p>{review.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default MovieDetail;
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function MovieDetail() {

    const { id } = useParams();
    const [movie, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/movie/${id}`)
            .then(res => {
                console.log(res.data);
                setMovies(res.data);
            });
    }, [id]);

    return (
        <div className="container">
            <div className="card m-3" key={movie.id}>
                <img src={`http://localhost:3000/images/${movie.image}`} alt="" className="" />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.director}</p>
                    <p className="card-text">{movie.genre}</p>
                    <p className="card-text">
                        <small className="text-body-secondary">{movie.release_year}</small>
                    </p>
                    <Link className="btn btn-dark mt-auto" to={`/movie/${movie.id}`}>
                        Recensione
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
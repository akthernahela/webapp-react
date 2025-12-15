import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function MovieDetail() {

    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    const urlMovies = 'http://localhost:3000/api/movies/';
    useEffect(() => {
        axios.get(urlMovies).then(res => {
            console.log(res.data);
            setMovies(res.data);
        });
    }, [id]);

    return (
        <div className="container">
            <div className="card m-3" key={movies.id}>
                <img src={`http://localhost:3000/images/${movies.image}`} alt="" className="" />
                <div className="card-body">
                    <h5 className="card-title">{movies.title}</h5>
                    <p className="card-text">{movies.director}</p>
                    <p className="card-text">{movies.genre}</p>
                    <p className="card-text">
                        <small className="text-body-secondary">{movies.release_year}</small>
                    </p>
                    <Link className="btn btn-dark mt-auto" to={`/movies/${movies.id}`}>
                        Recensione
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
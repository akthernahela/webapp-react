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
            <h1>titolo</h1>
            <p>autore</p>
        </div>
    );
}

export default MovieDetail;
import { useState } from "react";
import axios from "axios";


export default function NewReview({ movieId, onReviewAdded }) {

    const [name, setName] = useState('');
    const [vote, setVote] = useState(1);
    const [text, setText] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/api/reviews', {
            movie_id: movieId,
            name: name,
            vote: vote,
            text: text
        })
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Nome</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputName" value={name} onChange={(event) => setName(event.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <select className="form-select form-select-sm" value={vote} onChange={(event) => setVote(Number(event.target.value))} aria-label="Small select example">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <div className="row mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label" >Scrivi la tua esperienza</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={(event) => setText(event.target.value)}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Pubblica</button>
            </form>
        </>
    )
}
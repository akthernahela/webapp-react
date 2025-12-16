import { useState } from "react";
import axios from "axios";


export default function NewReview({ movieId, onReviewAdded }) {

    const [name, setName] = useState('');
    const [vote, setVote] = useState(1);
    const [text, setText] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return (
        <>
            <form>
                <div className="row mb-3">
                    <label for="inputName" className="col-sm-2 col-form-label">Nome</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputName" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Scrivi la tua esperienza</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Pubblica</button>
            </form>
        </>
    )
}
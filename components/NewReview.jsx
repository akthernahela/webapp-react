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
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Example label</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Another label</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
            </div>
        </>
    )
}
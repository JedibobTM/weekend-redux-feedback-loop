import './Understanding.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Understanding() {

    let [understandingRating, setUnderstandingRating] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const collectUnderstandingRating = (e) => {
        e.preventDefault();
        console.log('Sending data over to store.js');
        dispatch({
            type: 'SET_UNDERSTANDING_DATA',
            payload: understandingRating
        })
        history.push("./supporting")
    }

    return (
        <>
            <div>
                <h1>How well are you understanding the content?</h1>
                <input
                value={understandingRating}
                data-testid="input"
                type='number'
                min={1}
                max={10}
                onChange={(event) => setUnderstandingRating(event.target.value)}
                />
            </div>
            <button data-testid="next" onClick={collectUnderstandingRating}>Next</button>
        </>
    );
}
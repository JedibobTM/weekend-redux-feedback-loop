import { useSelector, useDispatch } from 'react-redux';
import './Feeling.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function HomePage() {
    const [feelingsRating, setFeelingsRating] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Testing handleSubmit");
        dispatch({
            type: 'ADD',
            payload: feelingsRating
        })
        history.push('./understanding');
    }

    return (
    <>
        <div>
            <h1>How are you feeling today?</h1>

            <form>
                <input
                value={feelingsRating}
                type={'number'}
                min={1}
                max={10}
                data-testid="input"
                onChange={(event) => setFeelingsRating(event.target.value)}
                />
            </form>
        </div>
        <button data-testid="next" onClick={handleSubmit}>Next</button>
    </>
    )
}
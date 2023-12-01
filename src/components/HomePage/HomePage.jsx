import { useSelector, useDispatch } from 'react-redux';
import './HomePage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function HomePage() {
    const [feelingsRating, setFeelingsRating] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const feelings = useSelector(store => store.feelings);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Testing handleSubmit");
        dispatch({
            type: 'ADD',
            payload: {
                feelingsRating
            }
        })
        history.push('./page-two');
    }

    return (
    <>
        <div>
            <h1>How are you feeling today?</h1>

            <form>
                <input
                value={feelingsRating}
                type={'number'}
                placeholder={'Rate 1-10'}
                data-testid="input"
                onChange={(event) => setFeelingsRating(event.target.value)}
                />
            </form>
        </div>
        <button data-testid="next" onClick={handleSubmit}>Next</button>
    </>
    )
}
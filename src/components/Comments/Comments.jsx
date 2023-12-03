import './Comments.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Comments() {

    let [comments, setComments] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Handling submit, comments');

        dispatch({
            type: 'SET_COMMENTS_DATA',
            payload: comments
        })
        history.push('/review');
    }

    return (
    <>
        <div>
            <h1>Do You Have Any Comments?</h1>

            <input 
            data-testid="input"
            value={comments}
            onChange={(event) => setComments(event.target.value)}
            />
        </div>
        <button data-testid="next" onClick={handleSubmit}>Next</button>
    </>
    );
}
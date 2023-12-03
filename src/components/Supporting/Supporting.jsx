import { useDispatch } from 'react-redux';
import './Supporting.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Supporting() {
    const [supportRating, setSupportRating] = useState('');
    
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handling submit (support page)')
        dispatch({
            type: 'SET_SUPPORT_DATA',
            payload: supportRating
        })
        history.push('/comments');
    }

    return (
        <>
            <div>
                <h1>How well are you being supported?</h1>

                <input
                value={supportRating}
                data-testid="input"
                type={'number'}
                min={1}
                max={10}
                onChange={(event) => setSupportRating(event.target.value)}
                />
            </div>
            <button data-testid="next" onClick={handleSubmit}>Next</button>
        </>
    );
}
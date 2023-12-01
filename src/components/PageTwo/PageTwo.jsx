import './PageTwo.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function PageTwo() {

    let [understandingRating, setUnderstandingRating] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const collectUnderstandingRating = () => {
        e.preventDefault();
        console.log('Sending data over to store.js');
        dispatch
    }

    return (
        <>
            <div>
                <h1>How well are you understanding the content?</h1>
                <input 
                placeholder={'Please Rate 1-10'}
                value={understandingRating}
                type='number'
                onChange={(event) => setUnderstandingRating(event.target.value)}
                />
            </div>
            <button>Next</button>
        </>
    );
}
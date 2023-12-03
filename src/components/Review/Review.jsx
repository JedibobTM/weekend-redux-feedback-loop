import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Review.css';
import axios from 'axios';

export default function Review() {

    const dispatch = useDispatch();
    const history = useHistory();

    const feedback = useSelector(store => store.feelings);

    const feedbackInfo = 
        {
            feeling: feedback.feeling,
            understanding: feedback.understanding,
            support: feedback.support,
            comments: feedback.comments
        }
    console.log('Selector feedback', feedbackInfo)
    const postToServer = () => {
        console.log('posting to server')
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedbackInfo
        }).then((response) => {
            console.log('response data:', response.data);
            history.push('/thanks-page');
        })
    }

    return (
    <>
        <h1>Review Your Feedback</h1>
        <div>
            <p>{feedbackInfo.feeling}</p>
            <p>{feedbackInfo.understanding}</p>
            <p>{feedbackInfo.support}</p>
            <p>{feedbackInfo.comments}</p>
        </div>
        <button data-testid="next" onClick={postToServer}>Submit</button>
    </>
    );
}
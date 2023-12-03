import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
export default function ThanksPage() {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        history.push('/');

        dispatch({
            type: 'CLEAR_DATA'
        })
    }
    return (
        <>
            <h1>Thank You!</h1>
            <button onClick={handleSubmit} data-testid="next">Leave New Feedback</button>
        </>
    );
}
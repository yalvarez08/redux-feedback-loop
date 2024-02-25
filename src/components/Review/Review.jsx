import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Review ({fetchAllFeedback}) {
    
    const history = useHistory();

    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);

    const handleSubmitReview = (evt) => {
        evt.preventDefault();
        console.log('Adding feedback responses to database:', {feeling, understanding, support, comments})
        axios.post('/api/feedback', {
        feeling, understanding, support, comments
        })
        .then(res => {
            //update front-end feedback state to match reality by fetching from source of truth>> (db)
            fetchAllFeedback();
            history.push('/thank-you')
        })
        .catch(err => {
            console.log('Error adding feedback responses to db:', err);
        })
    }

    return (
        <>
        <div>
            <h2>Review Your Feedback</h2>
            <p>Feelings: {feeling}</p>
            <p>Understanding: {understanding}</p>
            <p>Support: {support}</p>
            <p>Comments: {comments}</p>
        </div>

        <button data-testid="next" onClick={handleSubmitReview}>Submit</button>
        </>
    )
}

export default Review
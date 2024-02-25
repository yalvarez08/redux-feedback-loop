import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";


function SubmissionSuccess () {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleNewActionBtn = () => {
        dispatch({ type: "RESET_FEELING" });
        dispatch({ type: "RESET_UNDERSTANDING" });
        dispatch({ type: "RESET_SUPPORT" });
        dispatch({ type: "RESET_COMMENTS" });
        history.push('/')
    }

    return (
        <>
        <div>
            <h2>Feedback Submission Success!</h2>
        </div>
        <div>
            <h3>Thank you for your feedback!</h3>
            <button data-testid="next" className="next" onClick={handleNewActionBtn}>Leave New Feedback</button>

        </div>
        </>
    )
}

export default SubmissionSuccess
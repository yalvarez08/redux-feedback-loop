import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


function SubmissionSuccess () {

    const handleNewActionBtn = () => {


    }

    return (
        <>
        <div>
            <h2>Feedback Submission Success!</h2>
        </div>
        <div>
            <h3>Thank you for your feedback!</h3>
            <button data-testid="next">Leave New Feedback</button>

        </div>
        </>
    )
}

export default SubmissionSuccess
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {useState} from "react";


function Understanding () {

    const dispatch = useDispatch();
    const history = useHistory();

    const [understandingInput, setUnderstandingInput] = useState('')

    const addUnderstanding = (evt) => {
        evt.preventDefault();
        if (!understandingInput) {
            alert('Please enter a number between 1 and 5.');
            return;
        }

        dispatch({
            type: "SET_UNDERSTANDING",
            payload: understandingInput
        });
        setUnderstandingInput('');
        history.push('/support')
    }

    return (
        <>
        <div>
            <h2>How well are you understanding the content?</h2>
        </div>
        <div id="input_div">
            <label>Understanding:</label>
            <input data-testid="input" type="number" required max='5' value={understandingInput} onChange={evt => setUnderstandingInput(evt.target.value)}/>
            <button data-testid="next" className="next" onClick={addUnderstanding}>NEXT</button>
        </div>
        </>
    )
}

export default Understanding
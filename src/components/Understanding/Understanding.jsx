import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {useState} from "react";


function Understanding () {

    const dispatch = useDispatch();
    const history = useHistory();

    const [understandingInput, setUnderstandingInput] = useState('')

    const addUnderstanding = (evt) => {
        evt.preventDefault();
        dispatch({
            type: "SET_UNDERSTANDING",
            payload: understandingInput
        });
        setUnderstandingInput('');
        history.push('/support')
    }


    return (
        <div>
            <h2>How well are you understanding the content?</h2>
            <label>Understanding</label>
            <input data-testid="input" type="number" max='5' value={understandingInput} onChange={evt => setUnderstandingInput(evt.target.value)}/>
            <button data-testid="next" onClick={addUnderstanding}>NEXT</button>

        </div>
    )
}

export default Understanding
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {useState} from "react";


function Support () {

    const dispatch = useDispatch();
    const history = useHistory();

    const [supportInput, setSupportInput] = useState('')

    const addSupport = (evt) => {
        evt.preventDefault();
        if (!supportInput) {
            alert('Please enter a number between 1 and 5.');
            return;
        }

        dispatch({
            type: "SET_SUPPORT",
            payload: supportInput
        });
        setSupportInput('')
        history.push('/comments')
    }

    return (
        <>
        <div>
            <h2>How well are you being supported?</h2>
        </div>
        <div id="input_div">
            <label>Support:</label>
            <input data-testid="input" type="number" required max='5' value={supportInput} onChange={evt => setSupportInput(evt.target.value)}/>
            <button data-testid="next" className="next" onClick={addSupport}>NEXT</button>
        </div>
        </>
    )
}

export default Support
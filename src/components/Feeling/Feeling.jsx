import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {useState} from "react";


function Feeling () {

    const dispatch = useDispatch();
    const history = useHistory();
    
    const [feelingInput, setFeelingInput] = useState('')

    const addFeeling = (evt) => {
        evt.preventDefault();
        if (!feelingInput) {
            alert('Please enter a number between 1 and 5.');
            return;
        }

        dispatch({
            type: "SET_FEELING",
            payload: feelingInput
        });
        setFeelingInput('');
        history.push('/understanding')
    }

    return (
        <>
        <div>
            <h2>How are you feeling today?</h2>
        </div>
        <div id="input_div">
            <label>Feeling:</label>
            <input data-testid="input" type="number" required max='5' value={feelingInput} onChange={evt => setFeelingInput(evt.target.value)}/>
            <button data-testid="next" className="next" onClick={addFeeling}>NEXT</button>
        </div>
        </>
    )
}

export default Feeling
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {useState} from "react";


function Feeling () {

    const dispatch = useDispatch();
    const history = useHistory();
    
    const [feelingInput, setFeelingInput] = useState(0)

    const addFeeling = (evt) => {
        evt.preventDefault();
        dispatch({
            type: "SET_FEELING",
            payload: feelingInput
        });
        setFeelingInput(0);
        history.push('/understanding')
    }


    return (
        <div>
            <h2>How are you feeling today?</h2>
            <label>Feeling</label>
            <input data-testid="input" type="number" value={feelingInput} onChange={evt => setFeelingInput(evt.target.value)}/>
            <button data-testid="next" onClick={addFeeling}>NEXT</button>

        </div>
    )
}

export default Feeling
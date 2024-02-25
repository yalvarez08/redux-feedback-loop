import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {useState} from "react";


function Support () {

    const dispatch = useDispatch();
    const history = useHistory();

    const [supportInput, setSupportInput] = useState(0)

    const addSupport = (evt) => {
        evt.preventDefault();
        dispatch({
            type: "SET_SUPPORT",
            payload: supportInput
        });
        setSupportInput(0)
        history.push('/comments')
    }


    return (
        <div>
            <h2>How well are you being supported?</h2>
            <label>Support</label>
            <input data-testid="input" type="number" max='5' value={supportInput} onChange={evt => setSupportInput(evt.target.value)}/>
            <button data-testid="next" onClick={addSupport}>NEXT</button>

        </div>
    )
}

export default Support
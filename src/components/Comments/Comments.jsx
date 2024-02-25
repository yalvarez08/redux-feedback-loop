import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {useState} from "react";


function Comments () {

    const dispatch = useDispatch();
    const history = useHistory();

    const [commentsInput, setCommentsInput] = useState('')

    const addComments = (evt) => {
        evt.preventDefault();
        dispatch({
            type: "SET_COMMENTS",
            payload: commentsInput
        });
        setCommentsInput('')
        history.push('/review')
    }


    return (
        <div>
            <h2>Any comments you want to leave?</h2>
            <label>Comments</label>
            <input data-testid="input" type="text" value={commentsInput} onChange={evt => setCommentsInput(evt.target.value)}/>
            <button data-testid="next" onClick={addComments}>NEXT</button>

        </div>
    )
}

export default Comments
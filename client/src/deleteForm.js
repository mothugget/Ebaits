import { useState } from 'react'
import URL from './config';

export default function DeleteForm() {

    const [IDDelete, setIDDelete] = useState('');
    const [delError, setDelError] = useState(null);

    function handleIDChange(event) {
        setIDDelete(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        fetch(URL + '/stuff/' + IDDelete, {
            method: 'DELETE'
        }).then(console.log())
            .then(
                setIDDelete('')
            )
            .catch(err => {
                console.log(err);
                setDelError(err.message);
            })


    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Delete ID:</label>
            <input type="text" value={IDDelete} onChange={handleIDChange} />

            <button type="submit"> Submit </button>
        </form>
    )
}
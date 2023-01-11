import {useState} from 'react'
import URL from './config';

export default function PostForm() {
    const [goodStuff, setGoodStuff] = useState(true);
    const [stuffContent, setStuffContent] = useState('');
    const [postError, setPostError] = useState(null);

    function handleGSChange(event) {
        setGoodStuff(event.target.value);
    }
    function handleSCChange(event) {
        setStuffContent(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        fetch(URL + '/stuff', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({
                goodstuff: goodStuff,
                stuffcontent: stuffContent
            })
        }).then((res) => res)
            .then(data => {
                console.log(data);

            })
            .catch(err => {
                console.log(err);
                setPostError(err.message);
            })

        setStuffContent('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Stuff Content:</label>
            <input type="text" value={stuffContent} onChange={handleSCChange} />
            <label>Good Stuff:</label>
            <select value={goodStuff} onChange={handleGSChange}>
                <option>true</option>
                <option>false</option>
            </select>
            <button type="submit"> Submit </button>
        </form>
    )
}
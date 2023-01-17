import {useContext} from 'react'

import deleteIcon from '../images/default/delete.png';
import { OverlayContext } from '../overlayProvider'

export default function DeleteButton(props) {

	const { setDeletePost, setOverlay } = useContext(OverlayContext);

    function deleteClick(post) {
        setDeletePost(post);
        setOverlay('DeletePrompt')
    }

  return (
    <button className='delete-button' onClick={()=> deleteClick(props.post)}>
        <img className='delete-icon' src={deleteIcon} alt='delete icon'/>
    </button>
  )
}

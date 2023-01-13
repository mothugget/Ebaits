import { useState, useEffect } from "react";

import Thumbnail from './Thumbnail'

export default function Dashboard(props) {
	const [thumbnails, setThumbnails] = useState([]);
	useEffect(() => {
	  setThumbnails([{key:1},{key:2}])
	}, [])
	

 	return (
		<div className="Dashboard">{thumbnails.map((thumbnail) => <Thumbnail key={thumbnail.key} postId={thumbnail.key} />)}</div>
	)
}
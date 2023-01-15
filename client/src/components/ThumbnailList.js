

import Thumbnail from './Thumbnail'

export default function ThumbnailList(props) {
	return (
		<div className="ThumbnailList">
            {props.posts.map((post) =>
                <Thumbnail key={post._id} post={post} source={props.source}/>)
            }
        </div>
	)
}
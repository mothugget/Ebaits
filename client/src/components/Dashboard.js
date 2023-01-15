import { useState, useEffect } from "react";

import Thumbnail from './Thumbnail';
import ThumbnailList from "./ThumbnailList";
import apiService from '../apiService';

export default function Dashboard(props) {
	const [dashboardPosts, setDashboardPosts] = useState([])
	useEffect(() => {
		apiService.populateDashboard().then(
			(posts) => setDashboardPosts(posts)
		);
	}, [])

	return (
		<div className="Dashboard">
			<ThumbnailList posts={dashboardPosts}/>
		</div>
	)
	// return (
	// 	<div className="Dashboard">
	// 		{dashboardPosts.map((post) =>
	// 			<Thumbnail key={post._id} post={post} />)
	// 		}
	// 	</div>
	// )
}
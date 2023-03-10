import { useState, useEffect } from "react";


import ThumbnailList from "./ThumbnailList";
import apiService from '../apiService';

export default function Dashboard(props) {
	const [dashboardPosts, setDashboardPosts] = useState([])
	useEffect(() => {
		apiService.populateDashboard().then(
			(posts) => { setDashboardPosts(posts) }
		);
	}, [])

	return (
		<div className="Dashboard">
			<ThumbnailList source={'dash'} posts={dashboardPosts} />
		</div>
	)
}
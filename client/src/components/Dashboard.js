import { useState, useEffect } from "react";

import Thumbnail from './Thumbnail';
import ThumbnailList from "./ThumbnailList";
import apiService from '../apiService';

export default function Dashboard(props) {
	const [dashboardPosts, setDashboardPosts] = useState([])
	useEffect(() => {
		apiService.populateDashboard().then(
			(posts) => {setDashboardPosts(posts);
			console.log(posts)}
		);
	}, [])

	return (
		<div className="Dashboard">
			<ThumbnailList source={'dash'} posts={dashboardPosts}/>
		</div>
	)
}
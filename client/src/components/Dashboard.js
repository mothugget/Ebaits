import { useState, useEffect } from "react";

import Thumbnail from './Thumbnail'
import apiService from '../apiService'

export default function Dashboard(props) {
	const [dashboardPosts, setDashboardPosts] = useState([])
	useEffect(  () => {
		let dashboardPosts =  apiService.populateDashboard();
		console.log(dashboardPosts)
		setDashboardPosts(apiService.populateDashboard())
	}, [])


	return (
		<div className="Dashboard">
			{dashboardPosts.map((post) =>
				<Thumbnail key={post._id} post={post} />)
			}
		</div>
	)
}
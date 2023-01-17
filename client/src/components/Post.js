import { useContext, useState, useEffect } from 'react';


import apiService from '../apiService';
import defaultPostImg from '../images/default/altPostImg.jpg'
import { ContentContext } from '../contentProvider'
import { OverlayContext } from '../overlayProvider'



export default function Post(props) {

	const { setContent, post, setPost, setProfile } = useContext(ContentContext);
	const { setOverlay } = useContext(OverlayContext);

	const image = post.imgid[0] ||= defaultPostImg;
	function profileClick() {
		apiService.getProfileByUserId(post.user._id || post.user).then(
			(res) => {
				if (res.error) {
					console.log(res.error)
				} else {
					setOverlay('Navbar');
					setProfile(res);
					setContent('Profile')
				}
			}
		)
	}
	//This is ugly. Found bug last minute where you couldnt return to the profile from posts which
	//were accessed through profile thumbnails. Need this to get username. Annoying  to do an extra api call,
	//but thems the breaks.
	useEffect(() => {
		post.user.username || apiService.getProfileByUserId(post.user)
			.then(res => {
				setPost({...post,user:res})
			})
	}, [])


	return (
		<div className="Post">
			<button className='baitbuilder' onClick={profileClick}>{post.user.username}</button>
			<img className="post-image" src={image} alt="Post" />
			<div className='post-info'>
				<span className='title-text'>{post.name}</span> <br />
				<span className='category-text'>Type: </span> {post.type} <br />
				<span className='category-text'>Length: </span> {post.length} cm <br />
				<span className='category-text'>Weight: </span> {post.weight} g <br />
				<span className='category-text'>Country: </span> {post.user.country} <br />
			</div>
		</div>
	)
}
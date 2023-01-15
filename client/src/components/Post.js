import { useState, useEffect, useContext } from 'react';


import apiService from '../apiService';
import defaultThumbnailImg from '../images/default/altPostImgBlack.jpg'
import { ContentContext } from '../contentProvider'
import { OverlayContext } from '../overlayProvider'


export default function Post(props) {
	const { setContent, post, setProfile } = useContext(ContentContext);
	const { setOverlay } = useContext(OverlayContext);
	function profileClick(){
		apiService.getProfile(post.user.username).then(
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
 
	return (
		<div className="Post">
			<button className='baitbuilder' onClick={profileClick}>{post.user.username}</button>
			<img className="post-image" src={defaultThumbnailImg} alt="Post" />
			<div className='post-info'>
				<span className='title-text'>{post.name}</span> <br />
				<span className='category-text'>Type: </span> {post.type} <br />
				<span className='category-text'>Length: </span> {post.length} cm <br />
				<span className='category-text'>Weight: </span> {post.weight} g <br />
				<span className='category-text'>Type: </span> {post.type} <br />
				<span className='category-text'>Country: </span> {post.user.country} <br />
			</div>
		</div>
	)
}
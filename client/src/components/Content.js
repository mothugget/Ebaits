import { useState, useEffect, useContext } from 'react';

import { ContentContext } from '../contentProvider'
import { OverlayContext } from '../overlayProvider'
import Dashboard from './Dashboard';
import Profile from './Profile'
import Post from './Post';

export default function Content(props) {
    const { content, blur, setBlur } = useContext(ContentContext);
    const { overlay,  } = useContext(OverlayContext)

    if(overlay==='Navbar'){
        setBlur('Content')
    }


    switch (content) {
        case 'Dashboard':
            return (
                <div className={blur}>
                    <Dashboard />
                </div>
            )
        case 'Post':
            return (
                <div className={blur}>
                <Post />
            </div>
            )
        case 'Profile':
            return (
                <div className={blur}>
                    <Profile />
                </div>
            )
    }

}
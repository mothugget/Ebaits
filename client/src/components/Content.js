import { useState, useEffect, useContext } from 'react';

import { ContentContext } from '../contentProvider'
import { OverlayContext } from '../overlayProvider'
import Dashboard from './Dashboard';
import Profile from './Profile'
import Post from './Post';
import SignUp from './SignUp';

export default function Content(props) {
    const { content,  } = useContext(ContentContext);
    const { overlay,  } = useContext(OverlayContext)



    switch (content) {
        case 'Dashboard':
            return (
                <div className={'Content'}>
                    <SignUp/>
                    <Dashboard />
                </div>
            )
        case 'Post':
            return (
                <div className={'Content'}>
                <Post />
            </div>
            )
        case 'Profile':
            return (
                <div className={'Content'}>
                    <Profile />
                </div>
            )
    }

}
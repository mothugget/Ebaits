import { useContext } from 'react';

import { ContentContext } from '../contentProvider'
import Dashboard from './Dashboard';
import Profile from './Profile'
import Post from './Post';

export default function Content(props) {
    const { content } = useContext(ContentContext);



    switch (content) {
        case 'Dashboard':
            return (
                <div className={'Content'}>
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
        default:
            console.log('ERROR: component failed to load: ', content);
    }

}
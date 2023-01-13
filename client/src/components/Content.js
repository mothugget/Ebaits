import { useState, useEffect, useContext } from 'react';

import { ContentContext } from '../contentProvider'
import Dashboard from './Dashboard';
import Profile from './Profile'
import Post from './Post';

export default function Content(props) {
    const { content, setContent } = useContext(ContentContext);
    switch (content) {
        case 'Dashboard':
            return (
                <div className="Content">
                    <Dashboard />
                </div>
            )
        case 'Post':
            return (
            <div className="Content">
                <Post />
            </div>
            )
    }

}
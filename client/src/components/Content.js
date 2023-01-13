import { useState, useEffect, useContext } from 'react';

import Dashboard from './Dashboard';
import Profile from './Profile'
import Post from './Post';

export default function Content(props) {
    const [content, setContent] = useState('Dashboard');

switch(content){
    case 'Dashboard':
        return (
            <div className="Content">
                <Dashboard/>
                </div>
        )
}

}
import { createContext, useState } from 'react'

const ContentContext = createContext()

function ContentProvider({ children }) {
    const [content, setContent] = useState('Dashboard');
    const [profileId, setProfileId] = useState('');
    const [postId, setPostId] = useState('')

    return (
        <ContentContext.Provider value={{ content, setContent, profileId, setProfileId, postId, setPostId }}>
            {children}
        </ContentContext.Provider>
    )
}
export { ContentContext, ContentProvider }
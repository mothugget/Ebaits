import { createContext, useState } from 'react'

const ContentContext = createContext()

function ContentProvider({ children }) {
    const [content, setContent] = useState('Dashboard');
    const [profileId, setProfileId] = useState('');
    const [post, setPost] = useState('')

    return (
        <ContentContext.Provider value={{ content, setContent, profileId, setProfileId, post, setPost }}>
            {children}
        </ContentContext.Provider>
    )
}
export { ContentContext, ContentProvider }
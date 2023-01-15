import { createContext, useState } from 'react'

const ContentContext = createContext()

function ContentProvider({ children }) {
    const [blur, setBlur] = useState('Content');
    const [content, setContent] = useState('Dashboard');
    const [profile, setProfile] = useState('');
    const [post, setPost] = useState('')

    return (
        <ContentContext.Provider value={{
            content, setContent,
            profile, setProfile,
            post, setPost,
            blur, setBlur,
        }}>
            {children}
        </ContentContext.Provider>
    )
}
export { ContentContext, ContentProvider }
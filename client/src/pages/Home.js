import React from 'react'
import Nav from '../components/Nav'
import Book from '../components/Book'
import { GlowUploadButton } from '../components/GlowUploadButton'
import { useRef } from 'react'


function Home() {
    const fileInputRef = useRef(null);
    const handleClick = () => {
        fileInputRef.current.click(); // opens file dialog
    };


    return (
        <div>
            <Nav />
            <GlowUploadButton onClick={handleClick} fileInputRef={fileInputRef} />
            <Book />

        </div>
    )
}

export default Home
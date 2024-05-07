import React from 'react'
import Nav from '../components/Nav'
import Book from '../components/Book'
import { GlowUploadButton } from '../components/GlowUploadButton'


function Home() {
    return (
        <div>
            <Nav />
            <GlowUploadButton />
            <Book />

        </div>
    )
}

export default Home
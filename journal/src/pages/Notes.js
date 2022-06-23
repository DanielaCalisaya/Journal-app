import React from 'react'
import { Note } from '../components/Note'
import { Sidebar } from '../components/Sidebar'

export const Notes = () => {
    return (
        <div className='journal__main-content'>
            <Sidebar/>
            <main>
                 <Note/>
            </main>
        </div>
    )
}

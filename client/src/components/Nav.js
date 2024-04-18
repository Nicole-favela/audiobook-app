import React from 'react'
import './Nav.css'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';
export default function Nav() {
    return (
        <div className='navbar'>
            {/* <img src="" alt="" className='logo' /> */}
            <AutoStoriesIcon color='secondary' className='logo' fontSize='large' />
            <ul>
                <li>Library</li>
                <li>Profile</li>
                <li>Stats</li>
                <li>About</li>
            </ul>

            <div className='nav__search__box'>
                <input type='text' placeholder='Search' />
                <SearchRoundedIcon className='search_icon' color='white' />
            </div>
            <Avatar className='user_avatar' sx={{ size: 3, bgcolor: deepPurple[500] }}>N</Avatar>

        </div>
    )
}

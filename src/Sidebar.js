import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return <div className='sidebar'>
            {/* <h2>I am the sidebar!</h2> */}

            <div className="sidebar__header">
                <Avatar />
            </div>
            <div className="sidebar__input">
                <SearchIcon />
                <input placeholder='search' />
                
                <IconButton variant='outlined' className='sidebar__inputButton'>
                    <RateReviewOutlinedIcon />
                </IconButton>
            </div>


            <div className="sidebar__chats">

            </div>
        </div>
}

export default Sidebar

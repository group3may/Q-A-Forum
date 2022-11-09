import React from 'react'
import './Header.css'
import ReorderIcon from '@mui/icons-material/Reorder';

function Header() {
    return (
        <div className='header'>
            <div className='header__inner'>
                <div className='header__image'>
                    <img src="https://ik.imagekit.io/x67cvkx60/amazon-image/evangadi-logo-home_TJ0p0vTUP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667831360541" alt="" />
                    <ReorderIcon className='list' />
                </div>
                <div className='header__home'>
                    Home
                </div>
                <div className='header__home'>
                    How it works
                </div>
                <div className='header__signin'>
                    <button type="submit">SIGN IN</button>

                </div>
            </div>

        </div>
    )
}

export default Header
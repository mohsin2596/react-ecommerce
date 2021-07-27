import React from 'react';

import './homescreen.styles.scss';

const HomePage = () => (
    <div className = 'homepage'>
        <div className ='directory-menu'>
            <div className='menu-item'>
                <div className ='content'>
                    <h1 className='title'>Title One</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className ='content'>
                    <h1 className='title'>Title Two</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className ='content'>
                    <h1 className='title'>Title Three</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
            <div className ='content'>
                <h1 className='title'>Title Four</h1>
                <span className='subtitle'>Shop Now</span>
            </div>
        </div>
        <div className='menu-item'>
        <div className ='content'>
            <h1 className='title'>Title Five</h1>
            <span className='subtitle'>Shop Now</span>
        </div>
    </div>
        </div>
    </div>
);

export default HomePage;
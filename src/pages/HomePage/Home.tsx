import React from 'react';
import './Home.scss'

const HomePage = (props: any) => {
    return (
        <>
            <div className="banner">
                <div className="banner-image">
                    <img src="https://unsplash.com/photos/0o_GEzyargo/download?force=true&w=1640&q=100" alt="" />
                </div>
                <h1>Welcome to my first responsive css design</h1>
            </div>
            <div className="top-articles">
                <div className="top-article"></div>
                <div className="top-article"></div>
                <div className="top-article"></div>
                <div className="top-article"></div>
                <div className="top-article"></div>
                <div className="top-article"></div>
                <div className="top-article"></div>
            </div>
        </>
    )
}

export default HomePage;
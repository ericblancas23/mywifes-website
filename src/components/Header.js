import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Hello!, I'm Yoon Hee Kim</strong><br />
                    <br />
                    </h1>
                </div>
                <h2>A Professional Dog Walker and Sitter for all furry friends!</h2>
                <Footer />
            </header>
        )
    }
}

export default Header

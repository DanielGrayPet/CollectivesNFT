import * as React from 'react'
import { Link } from 'gatsby'
import { container, heading, navLinks, navLinkItem, navLinkText } from './Layout.module.css'

const Layout = ({pageTitle}) => {
    return (
        <div className={container}>
            <title>{pageTitle}</title>
            <h1 className={heading}>Collectives</h1>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/gallery" className={navLinkText}>Gallery</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Layout
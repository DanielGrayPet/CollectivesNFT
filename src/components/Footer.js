import * as React from 'react'
import {container, body} from './Footer.module.css'

const Footer = () => {
    return (
        <div className={container}>
            <body className={body}>Powered By <strong>Gatsby</strong><br></br>Created By <strong>Daniel Gray</strong></body>
        </div>
    )
}

export default Footer
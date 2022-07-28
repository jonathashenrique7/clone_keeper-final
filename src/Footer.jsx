import React from 'react'

import './index.css'

let currentDate = new Date().getFullYear()

export default function Footer() {
    return (
        <div className="mainFooter">
            <div className="footerStyle">
                <p>Copyright @{currentDate}</p>
            </div>
        </div>
    )
}


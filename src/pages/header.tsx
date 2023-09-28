import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../../css/mystyles.css"

const headerPage: React.FC<PageProps> = () => {
    return (
        <header className="header">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <img src={"https://bulma.io/images/bulma-logo.png"} alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28" />
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default headerPage
